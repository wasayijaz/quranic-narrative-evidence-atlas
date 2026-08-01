import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const nonEmptyString = z.string().trim().min(1, "must not be empty");

const tradition = z.enum(["sunni", "shia", "academic", "shared"]);
const sourceClass = z.enum(["quran", "hadith", "tafsir", "history", "academic"]);

const sourceSchema = z
  .object({
    id: nonEmptyString,
    work_title_ar: nonEmptyString.nullable(),
    work_title_en: nonEmptyString,
    author: nonEmptyString,
    author_died_hijri: z.number().int().nullable(),
    author_died_ce: z.number().int().nullable(),
    tradition,
    source_class: sourceClass,
    edition: z
      .object({
        id: nonEmptyString,
        publisher: nonEmptyString,
        place: nonEmptyString.nullable(),
        language: z.enum(["ar", "en", "ur"]),
        volumes: z.number().int().positive().nullable(),
      })
      .strict(),
    rights: z
      .object({
        status: z.enum(["public-domain", "non-commercial", "permission-required", "unknown"]),
        basis: nonEmptyString,
        redistributable: z.boolean(),
      })
      .strict(),
    access: z
      .object({
        kind: z.enum(["page-images", "printed", "paginated-text", "text-no-pagination"]),
        locator: nonEmptyString,
        scanned_by: nonEmptyString,
        collection: nonEmptyString,
        notes: z.string().optional(),
      })
      .strict(),
  })
  .strict();

const attributionSchema = z
  .object({
    source: nonEmptyString,
    edition: nonEmptyString,
    volume: z.number().int().positive().optional(),
    part: z.number().int().positive().optional(),
    page: z.number().int().positive().optional(),
    tradition,
    quote_ar: z.string().optional(),
    quote_en: z.string().optional(),
    quote_ur: z.string().optional(),
  })
  .strict();

const evaluationSchema = z
  .object({
    grade: nonEmptyString,
    critic: nonEmptyString,
    stated_in: z
      .object({
        source: nonEmptyString,
        edition: nonEmptyString,
        page: z.number().int().positive().optional(),
      })
      .strict(),
  })
  .strict();

const claimSchema = z
  .object({
    id: nonEmptyString,
    statement: z
      .object({
        en: nonEmptyString,
        ur: nonEmptyString,
      })
      .strict(),
    status: z.enum(["attested", "disputed", "reported-only", "rejected"]),
    source_class: sourceClass,
    independence_group: nonEmptyString.nullable().optional(),
    attributions: z.array(attributionSchema).min(1, "needs at least one attribution"),
    evaluation: z.array(evaluationSchema).optional().default([]),
    supersedes: nonEmptyString.nullable().optional(),
    superseded_by: nonEmptyString.nullable().optional(),
  })
  .strict();

const ledgerRowSchema = z
  .object({
    claim: nonEmptyString,
    source: nonEmptyString,
    edition: nonEmptyString,
    located: z.enum(["yes", "no", "secondary"]),
    checked_by: z.string(),
    date_checked: z.string(),
    notes: z.string(),
    superseded_by: nonEmptyString.nullable(),
  })
  .strict()
  .superRefine((row, context) => {
    if (row.located === "yes" && row.checked_by.trim() === "") {
      context.addIssue({
        code: "custom",
        path: ["checked_by"],
        message: "located: yes requires checked_by",
      });
    }

    if (row.located === "yes" && row.date_checked.trim() === "") {
      context.addIssue({
        code: "custom",
        path: ["date_checked"],
        message: "located: yes requires date_checked",
      });
    }
  });

const sourceCollection = defineCollection({
  loader: glob({ base: "./content", pattern: "sources/*.yml" }),
  schema: sourceSchema,
});

const dossierCollection = defineCollection({
  loader: glob({ base: "./content", pattern: "dossiers/*/dossier.yml" }),
  // The dossier shape is intentionally open until its fields are specified.
  schema: z.object({}).passthrough(),
});

const claimCollection = defineCollection({
  loader: glob({ base: "./content", pattern: "dossiers/*/claims/*.yml" }),
  schema: claimSchema,
});

const ledgerCollection = defineCollection({
  loader: glob({ base: "./content", pattern: "dossiers/*/ledger.yml" }),
  schema: z.array(ledgerRowSchema),
});

export const collections = {
  sources: sourceCollection,
  dossiers: dossierCollection,
  claims: claimCollection,
  ledgers: ledgerCollection,
};
