# Open Resources and Reuse Catalog

## Quranic Narrative and Evidence Atlas

**Status:** two review passes complete; second pass added narrator entity resolution, Urdu infrastructure, ancient-world geography, and the manuscript layer  
**Purpose:** identify reusable foundations for a bilingual Quran research and teaching product without confusing free access, open-source code, and licensed content.

> This is a product and engineering inventory, not legal advice. Every resource must pass a rights review before publication.

**The process that governs this catalog lives in [RESOURCE_INTAKE_SYSTEM.md](RESOURCE_INTAKE_SYSTEM.md).** This document lists candidates and their rights status; the intake system defines the nine gates each one must pass, the three storage tiers, the manifest format, and the error thresholds. A resource appearing in a table below is a candidate, not an approval.

---

## 1. The decision rule

A repository being public does not make its contents reusable. A free API does not create a permanent right to store or redistribute its responses. A permissive software licence does not automatically cover translations, books, recordings, fonts, photographs, or other assets bundled with the software.

Every imported resource should have one of four states:

| State | Meaning | Product action |
|---|---|---|
| **Open** | A clear licence permits the intended use | Pin the version, preserve notices, and ingest |
| **Conditional** | Reuse is allowed with material restrictions | Encode the restrictions and test compliance before ingesting |
| **Permission required** | Useful, but the intended storage or display right is unclear | Seek a written agreement before production use |
| **Reference only** | It may be consulted or linked, but not copied into the product | Keep it outside the publishable corpus |

The source registry should record:

- work, author, editor, translator, publisher, and edition;
- canonical URL, repository, release tag, file hash, and import date;
- licence for code, database, text, translation, images, audio, and fonts separately;
- permitted use, attribution wording, modification rules, commercial restrictions, and update obligations;
- whether quotation, paraphrase, search indexing, offline storage, export, and API redistribution are permitted;
- reviewer, legal status, expiry or recheck date, and takedown contact.

---

## 2. Recommended foundation stack

This is the safest practical starting sequence, not a claim that every resource is ready to publish unchanged.

1. Use [Tanzil](https://tanzil.ca/docs/text_license) as an immutable, checksummed Arabic Quran layer, subject to its verbatim-copy and attribution conditions.
2. Evaluate [QuranEnc](https://quranenc.com/en/home/api) for an initial English and Urdu translation pair under its version, attribution, and verbatim-republication terms.
3. Use [Quranic Universal Library](https://github.com/TarteelAI/quranic-universal-library) as an ingestion and editorial-system reference; approve its datasets one resource at a time.
4. Pilot [MASAQ](https://data.mendeley.com/datasets/9yvrzxktmr/4) for morphology and syntax, then compare it with the [Quranic Arabic Corpus](https://corpus.quran.com/).
5. Treat hadith as a dedicated editorial programme. Use open datasets for discovery and alignment, but verify every publishable record against named editions and attributed scholarship.
6. Use [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/), [Pleiades](https://pleiades.stoa.org/downloads), [GeoNames](https://www.geonames.org/export/), and [Wikidata](https://www.wikidata.org/wiki/Wikidata:Licensing) for map infrastructure and entity reconciliation?not as proof of a Quranic identification.
7. Use [OpenAlex](https://developers.openalex.org/), [Crossref](https://www.crossref.org/documentation/retrieve-metadata/rest-api/), [DOAJ](https://doaj.org/terms/), and the [PMC Open Access subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/) to discover scientific literature while respecting item-level full-text rights.
8. Build the original interface with permissively licensed libraries such as MapLibre, D3, Cytoscape.js, and React Flow.

---

## 3. Quran text, translations, tafsir, and Quran software

| Resource | What it can contribute | Rights status | Recommendation and caution |
|---|---|---|---|
| [Tanzil Quran Text](https://tanzil.net/docs/download) and [text licence](https://tanzil.ca/docs/text_license) | Verified UTF-8 Arabic text variants | **Conditional**: attribution, update tracking, and verbatim/no-change conditions | **Adopt as a candidate source of record.** Store display text immutably; keep normalization, stemming, and search forms in separate derived fields |
| [Quranic Universal Library](https://github.com/TarteelAI/quranic-universal-library), [datasets](https://qul.tarteel.ai/docs/datasets), and [FAQ](https://qul.tarteel.ai/docs/faq) | An actively maintained CMS and catalogue for scripts, translations, tafsir, morphology, topics, audio, fonts, and mushaf layouts | CMS code is **MIT**; each dataset has separate rights | **Adopt its metadata and workflow ideas; pilot its exports.** Never infer that the MIT code licence covers the content |
| [QuranEnc API](https://quranenc.com/en/home/api) and [about/republication terms](https://quranenc.com/en/home/about) | Versioned translation and footnote JSON, including English and Urdu resources | **Conditional custom terms** | **Evaluate for the first EN/UR pair.** Preserve publisher, version, source, attribution, and update metadata; do not rewrite the translation |
| [Quran Foundation APIs](https://api-docs.quran.com/docs/api-reference/) and [developer terms](https://api-docs.quran.foundation/legal/developer-terms/) | Quran text, translations, tafsir, audio, search, and structural data | **Conditional, revocable API licence**; raw redistribution is restricted and caching is generally limited | **Use as a live service or prototype aid, not the permanent corpus**, unless a separate written agreement permits durable storage and the intended business model |
| [Quranic Arabic Corpus](https://corpus.quran.com/download/default.jsp), [ontology](https://corpus.quran.com/ontology.jsp), and [licence](https://corpus.quran.com/license.jsp) | Morphology, partial syntax, named entities, pronoun links, and an ontology of roughly 300 concepts and 350 relations | GPL language plus project-specific text conditions that need legal interpretation | **Pilot as an ontology and linguistic cross-check.** Clarify data/database obligations before integrating it into a differently licensed corpus |
| [MASAQ v4](https://data.mendeley.com/datasets/9yvrzxktmr/4) | Expert-reviewed full-Quran morphology and syntax in several formats | **CC BY 4.0** | **Pilot as the preferred open linguistic layer.** Pin its DOI/version and validate token alignment against the chosen Quran encoding |
| [Corpus Coranicum TEI](https://github.com/telota/corpus-coranicum-tei) | TEI exports covering text, translations, chronology, commentary, intertexts, variants, and manuscript metadata | **CC BY-SA 4.0** for the export; external images retain separate rights | **Pilot for research-only textual history and manuscript links.** Keep its scholarly framing distinct from the devotional reader |
| [quran/quran-tajweed](https://github.com/quran/quran-tajweed) | Character-indexed Hafs tajwid annotations | Data marked **CC BY 4.0** | **Pilot after scholarly QA.** Indices depend on the exact source-text variant |
| [cpfair/quran-align](https://github.com/cpfair/quran-align) | Word-level audio timestamps for several reciters | Code **MIT**; released data **CC BY 4.0** | **Prototype synchronized highlighting.** The author notes that timings lack comprehensive human ground truth |
| [OpenITI](https://openiti.org/documentation/) and [releases](https://github.com/OpenITI/RELEASE) | Machine-actionable premodern Arabic and Persian tafsir, hadith, seerah, history, and geography | Corpus releases **CC BY-NC-SA 4.0**; tools have separate licences | **Use for noncommercial internal discovery and research prototypes.** Verify against cited editions; account for OCR and transcription variation |
| [spa5k/tafsir_api](https://github.com/spa5k/tafsir_api) | Ayah-addressable JSON adapters for many tafsirs, including Urdu works | Repository code marked **MIT**; upstream text rights vary | **Discovery only until every work is cleared.** The repository licence cannot clear third-party book rights |
| [fawazahmed0/quran-api](https://github.com/fawazahmed0/quran-api) | Many languages and editions in convenient JSON/CDN formats | Repository is **Unlicense**; upstream resources have mixed rights | **Prototype and edition discovery only.** Some editions are OCR-derived; verify text, provenance, and rights independently |
| [Quran.com frontend](https://github.com/quran/quran.com-frontend-next) | Mature reader and localization patterns | No reusable licence was identified; its README asks developers not to copy the project | **Reference only.** Study interaction patterns but do not reuse the code or visual identity |
| [Open Mushaf Native](https://github.com/adelpro/open-mushaf-native) | Offline Expo/React Native interaction patterns | Code **MIT** | **Reference or reuse code selectively.** Audit every embedded Quran, tafsir, font, and image asset separately |
| [AlTafsir.com](https://www.altafsir.com/Index.asp) | Extensive online tafsir and translation reference library | No general open republication licence established | **Reference and partnership target**, not an ingest source |
| [malekverse/quran-dataset](https://github.com/malekverse/quran-dataset) | Structured full-Quran JSON and CSV with surah/juz/verse metadata | Repository states **CC BY 4.0** | **Discovery tier only.** The licence covers this packaging; it does not establish the upstream text's provenance. Diff against Tanzil before trusting any character |
| [hardknockdays/alquran-tafsir-json-dataset](https://github.com/hardknockdays/alquran-tafsir-json-dataset) | Ayah-addressable JSON bundling Arabic, transliteration, Indonesian translation, and four tafsirs (Kemenag, Ibn Kathir, Jalalayn, Quraish Shihab) | Packaging licence does not clear the bundled tafsir and translation texts | **Discovery tier only.** Useful as a shape reference for ayah-addressable tafsir; the Indonesian focus limits direct EN/UR value |
| Aggregator JSON repositories ? [semarketir/quranjson](https://github.com/semarketir/quranjson), [risan/quran-json](https://github.com/risan/quran-json), [iniakunhuda/quran-dataset-mongodb](https://github.com/iniakunhuda/quran-dataset-mongodb), [islamAndAi/QURAN-NLP](https://github.com/islamAndAi/QURAN-NLP) | Convenient prototype-ready JSON, Mongo dumps, and NLP-oriented bundles | Mixed and often undeclared for the bundled content | **Prototype only; never a source of record.** These largely share a small number of upstreams. Assign them one `independence_group` and do not treat agreement between them as corroboration |

### Aggregator caution

The single most common trap in this space is the aggregator repository: a permissively licensed wrapper around content it never had the right to relicense, whose upstream is another aggregator. Before any of the four repositories above is used for anything beyond a throwaway prototype, run gate G4 in [RESOURCE_INTAKE_SYSTEM.md](RESOURCE_INTAKE_SYSTEM.md) and record the shared upstream explicitly.

### Translation acquisition rule

Translations of the meanings are separate copyrighted works. For every English and Urdu edition, obtain and store:

- translator and review committee;
- publisher, edition, year, and revision;
- interpretive notes and footnote policy;
- exact reuse and offline-storage permission;
- canonical verse segmentation;
- correction and update channel.

Never splice multiple translations into an unattributed composite, and never publish a machine-generated Quran translation. The plain-language layer settled in [strategy ?6](./QURAN_PRODUCT_STRATEGY.md) is not an exception to this ? it is a labelled restatement of a named public-domain translation, shown beside it, never in place of it.

### Public-domain translation candidates ? checked

Under founder decision 11, public-domain sources are preferred over conditional ones. What the licence check established:

| Translation | Language | Status | Use |
|---|---|---|---|
| Ahmed Raza Khan, *Kanzul Iman* (d. 1921) | Urdu | **Public domain** on the author's-life test ? Pakistan's term is life plus fifty years | **Adopt as a candidate.** Verify the specific digital file's provenance separately |
| Muhammad Junagarhi (d. 1941) | Urdu | **Public domain** on the same test | **Adopt as a candidate.** Same file-provenance caveat |
| Shah Abdul Qadir Dehlvi, *Moozeh Quran* | Urdu | Old enough that the author's-life test is not in question | **Pilot.** Archaic register; a plain-language layer would be doing real work here |
| Fateh Muhammad Jalandhry | Urdu | **Unresolved, and worse than a date disagreement ? see below** | **Blocked.** Under [strategy ?0](./QURAN_PRODUCT_STRATEGY.md), an unresolved date is an unresolved licence. The most widely read Urdu translation, so resolve it ? but do not ship it first |
| The eight Urdu translations on [Tanzil](https://tanzil.net/trans/) | Urdu | **Conditional ? non-commercial only.** Blanket site condition: non-commercial use, or permission from translator or publisher. Linkback required above three translations | **Usable, never treated as open.** Fits decision 3 but depends on it, and cannot be relicensed onward or committed to the public repository |

#### The Jalandhry problem ? checked, and it got harder

The check was meant to settle a death date. It found three mutually incompatible accounts, none of them carrying a citation to anything:

| Source consulted | Birth | Death | Citation offered |
|---|---|---|---|
| Wikitia | 1864 | none given | none |
| Urdu Wikipedia | 1916, Tanda, Hoshiarpur | 18 December 1982 | no external references |
| Secondary web sources, earlier check | c. 1900 | 12 July 1982 | none |

A 1864 birth and a 1916 birth are not a rounding disagreement between sources. They are **two different people**, and the surrounding detail points the same way: the Urdu Wikipedia subject's translation *Fateh al-Hameed* is described as first published in 1960 from Amritsar, which does not sit comfortably with the translator of the standard Pakistani mushaf. English-language searching returned scans of the translation on archive.org and no biography at all.

So the finding to record is not *the death date is disputed*. It is **the identification itself may be conflated**, and a licence test run on a conflated identity produces a confident answer about the wrong person. Under [strategy ?0](./QURAN_PRODUCT_STRATEGY.md) this cannot be resolved by picking the better-looking web page. It needs a printed biographical or bibliographic source ? a *tazkira*, a catalogue entry, or the publisher's own front matter ? that names the translator and the dates together, and it needs enough of them to show the two accounts are one person or two.

Nothing depends on this. The Urdu edition ships on Ahmed Raza Khan or Junagarhi regardless; this decides only whether the best-known option is also available.

**The distinction that matters and is constantly collapsed: non-commercial-only is not public domain.** A permission granted to a project with no revenue evaporates if the revenue decision changes, and it cannot be passed to readers. Record which of the two any given file is, in the manifest, every time.

**Verify the file, not the work.** A public-domain translation does not make a particular scan, typesetting, or hosted JSON public domain. The publisher's edition, the OCR layer, and the host's terms are separate attachments ? the same trap as the Ibn Kathir case above, arriving from the other direction.

**The same rule applies to tafsir, and it catches people out.** Ibn Kathir's Arabic *Tafsir al-Qur'an al-'Azim* is out of copyright. The widely circulated English text of it is not: the standard 10-volume Dar-us-Salam abridgement (2000, ed. al-Mubarakpuri) is a modern, in-copyright work, and the many free "Ibn Kathir English" datasets in circulation are overwhelmingly copies of it. A source being medieval says nothing about the rights status of the translation you are actually about to publish. Record the *edition and translator*, never just the author, in every manifest.

---

## 3b. Editions in reach for page-level verification

[Strategy ?0](./QURAN_PRODUCT_STRATEGY.md) sets a mechanical test: a published statement must resolve to a work, an edition, and a page or locator, such that a person holding that edition can turn to that page and find it. That test decides which stories can be written at all, so it is worth knowing what is actually reachable before choosing one ? not after.

A searchable text file does not satisfy it. Text with no pagination cannot yield a page number, and a page number transcribed from a website is a claim about a book nobody opened. **What satisfies it is page images of a named printed edition.** Those exist, free, for both of the tafsirs the parity layer needs:

| Work | Edition and provenance | Where | Form |
|---|---|---|---|
| al-Tabari, *Jami' al-Bayan fi Tafsir al-Qur'an* | **Al-Matba'a al-Kubra al-Amiriyya, Bulaq, Egypt.** Scanned by C-DAC Noida from the Maulana Azad Library, Aligarh Muslim University, under the Digital Library of India project; accessioned 15 September 2015 | archive.org, `dli.ernet.431838` | PDF and single-page-processed JP2 ZIP (68.0M). Further copies at `tafseer-al-tabari` and a multi-volume Juz 1?26 set |
| al-Tabarsi, *Majma' al-Bayan li-'Ulum al-Qur'an* | Ministry of Culture (India) issue, Arabic, **9 parts**, sourced from the National Library of India, Kolkata, in the Public Library of India collection | archive.org, `dli.ministry.26324` | PDF and single-page-processed JP2 ZIP, ~1.3GB total |

Two consequences.

**The open item closes in principle.** For Ashab al-Kahf, the two tafsirs that carry the interpretive weight are both openable to a page. The gate in [roadmap ?5](./ROADMAP.md) can be checked against a specific list rather than a worry.

**The Shia parity layer is in better shape than the *al-Mizan* copyright problem suggested.** *Al-Mizan* is modern and in copyright, which made the parity layer look expensive. *Majma' al-Bayan* is classical, out of copyright, and available as page images ? a citable Shia tafsir on the same footing as al-Tabari, for nothing. Decision 15's parity requirement is met on this axis by a printed edition, not by an aggregator's JSON.

**The caution that goes with both rows:** these are library scans, and the scanning institution's terms are a separate attachment from the underlying work's status ? the same distinction as *verify the file, not the work* above. Page images may be consulted and cited freely; before any image is redistributed, check the holding institution's terms, not just the age of the text. Citation needs neither.

---

## 4. Hadith and isnad resources

No reviewed open dataset located in this survey is, by itself, a production-ready replacement for hadith editions, takhrij, and specialist review. This is a genuine market and infrastructure gap.

| Resource | What it can contribute | Rights status | Recommendation and caution |
|---|---|---|---|
| [Open-Hadith-Data](https://github.com/mhashim6/Open-Hadith-Data) and [licence](https://github.com/mhashim6/Open-Hadith-Data/blob/master/LICENSE) | Arabic text for nine collections in searchable CSV forms | Database **ODbL 1.0** and contents **DbCL 1.0** | **Pilot as an Arabic alignment base.** Activity is limited and grading metadata is sparse; derived-database obligations need review |
| [Sanadset 650K](https://pmc.ncbi.nlm.nih.gov/articles/PMC9440281/) | A large Arabic research dataset with tagged sanad, matn, and narrators | Dataset reported **CC BY 4.0** | **Use for isnad and narrator research, not authenticity labels.** Records span many books, many lack full sanad, and identities are not fully resolved |
| [Semantic Hadith RDF](https://figshare.com/articles/journal_contribution/Semantic_Hadith_RDF/7964558) and [ontology](https://a-kamran.github.io/SemanticHadith-V2/) | RDF graph structures for collections, narrators, chains, and topics | Dataset **CC BY 4.0** | **Pilot as a graph-schema seed.** Verify texts, narrator reconciliation, and grades against named editions |
| [Sunnah.com developer API](https://sunnah.com/developers) and [API repository](https://github.com/sunnah-com/api) | A manually checked subset, references, numbering, and some grades | API-key access; no general open-data licence established | **Authoritative cross-check and partnership target.** Do not scrape; obtain written storage and republication rights |
| [HadeethEnc](https://hadeethenc.com/en/home/about) and [developer API](https://hadeethenc.com/en/home/developers) | Selected hadith with grade, explanation, benefits, references, English, and Urdu | No explicit general open licence established in this review | **Permission required.** Valuable bilingual explanatory layer, but it is a curated selection rather than complete weak/disputed coverage |
| [fawazahmed0/hadith-api](https://github.com/fawazahmed0/hadith-api) and [source list](https://github.com/fawazahmed0/hadith-api/blob/1/References.md) | Convenient multilingual JSON and some grader-attributed fields | Repository is **Unlicense**; upstream text and translation rights vary | **Prototype mappings only.** Verify every text, number, translation, grade, and right |
| [Itqan](https://github.com/R3GENESI5/Itqan) | The largest open narrator database located in this survey: 115,735 narrator profiles with name variants and jarh wa ta'dil, plus a Quran?hadith root concordance (~1.59M root links across 1,590 roots), a Wensinck concordance recreation, and 39 thematic hadith families | Code **MIT**; hadith text sourced from sunnah.com API and public-domain collections, so the **content rights are inherited, not granted**; Lane's Lexicon and Mufradat are public domain | **Discovery tier, high value.** The strongest available seed for narrator reconciliation and for Quran?hadith linking. Its own stated figures set the limits: 52% of hadiths graded, 72.6% of narrators graded, grading engine ~77% accurate. **None of its grades are publishable.** Treat every grade as a pointer to a named work that must be verified, and re-derive the sunnah.com-derived text under our own rights conversation |
| [muhaddithat/isnad-datasets](https://github.com/muhaddithat/isnad-datasets) | Hadiths with narrator-ID isnad chains and a narrator table (name forms, Arabic name, gender, short bio), with a notebook producing network graphs | **No licence file identified** in this review | **Permission required.** Deliberately over-samples hadiths narrated by women, which makes it a valuable corrective for a corpus that otherwise under-represents them, and simultaneously means it is a curated sample, never a coverage baseline. Contact the maintainer before any use |
| [Narrator entity-resolution links over Sanadset 650K](https://arxiv.org/html/2607.05424v1), released on [Zenodo](https://doi.org/10.5281/zenodo.21019693) (July 2026) | Machine-generated links between Sanadset's 185,216 narrator name variants and two biographical databases (Hawramani, ~100,915 records; Muslimscholars, ~25,247), scored on name similarity, death-year proximity, reliability-grade polarity, and citation count. Published graph: 185,216 nodes, 814,093 edges | Dataset **CC BY 4.0** | **Discovery tier, and read the numbers carefully.** Name-matching alone linked 51.1% of variants; adding the other signals reaches 94.7% coverage but only **18.1% at HIGH confidence**, with 70.9% MEDIUM. The authors state plainly that **no formally annotated ground-truth set exists**, so there is no precision, recall, or F1 for any of it ? coverage is not accuracy. Against our 1% false-merge threshold this is unusable as an import and excellent as a **work queue**: it tells a human which two records to compare next. Every merge stays human-accepted, one narrator at a time |
| [KHASHAF (OmarShafie/hadith)](https://github.com/OmarShafie/hadith) | Isnad-tree visualization with narrator grades surfaced on the chain | Licence to be verified per file | **Reference for interaction design.** The isnad-as-tree view is the right primitive and almost nobody ships it; study it, then build our own against our own narrator identities |

### Shia collections ? reachable, and the rights position on each

Every resource in the table above is a Sunni corpus. Founder decision 1 puts Shia material on the same footing, and decision 15 keeps it there under licence pressure, so the parallel list has to exist or parity is a claim with nothing behind it. What the check found:

| Resource | What it can contribute | Rights status | Recommendation and caution |
|---|---|---|---|
| [Thaqalayn](https://thaqalayn.net/) | The core Shia corpus in Arabic with English translation ? *al-K?fi*, *Man L? Ya??uruh al-Faq?h*, *Nahj al-Bal?gha*, *Kam?l al-D?n*, *Kit?b al-Ghayba*, and around twenty other collections | **Website carries no licence. The code and data do** ? see the finding below. `narmafraz/ThaqalaynData` is **CC0-1.0**; `narmafraz/Thaqalayn` (frontend) is AGPL-3.0 | **Rights-declared but unverified ? and the declaration is the problem.** Discovery tier only. Still ask, now with a named party as well as `info@thaqalayn.net` |
| [al-Islam.org](https://www.al-islam.org/) (Ahlul Bayt Digital Islamic Library Project / DILP) | Large translated Shia corpus ? hadith, tafsir, history, biography | **Non-commercial**, and explicitly **hosted by permission of copyright holders it does not itself own** | **Usable in the same conditional way Tanzil is, and with the same trap.** Permission held by a host does not transfer to us. Never committed to the public repository; never relicensed onward |
| Rezwan corpus (Najm Institute) | Machine-processed hadith corpus spanning Shia and Sunni collections; JSON and CSV samples published | Full access behind a **request form** | **Discovery tier, after asking.** Same rule as every machine-processed corpus above: it supplies pointers, never publishable grades |
| [OpenITI](https://openiti.org/) and the [KITAB](https://kitab-project.org/) project | Already treat Shia hadith collections as first-class corpora for text-reuse analysis | Corpus-level open licensing, per-text provenance varies | **Adopt for text-reuse and transmission analysis.** Strongest existing basis for showing a report moving between Shia and Sunni collections |
| *Tafsir al-Mizan* (Tabataba'i, d. 1981), 27 vols | The natural parallel to Ibn Kathir on the tafsir axis; English translation exists | **Under copyright.** Author's death places it far inside Iran's and Pakistan's terms | **Cite and quote at claim level; do not host.** The verification ledger needs the edition and page, not a copy of the text |

#### The Thaqalayn finding ? a CC0 declaration is not a chain of title

Thaqalayn's website publishes no licence, but the project is on GitHub, and there the position is stated:

- **`narmafraz/ThaqalaynData`** ? licence **CC0-1.0** (SPDX `CC0-1.0`, "Creative Commons Zero v1.0 Universal"), described as "Data that drives the thaqalayn website", not archived. Confirmed through the GitHub API rather than read off a badge.
- **`narmafraz/Thaqalayn`** ? the frontend, **AGPL-3.0**.
- **`MohammedArab1/ThaqalaynAPI`** ? a third party's REST and GraphQL wrapper that re-fetches from thaqalayn.net weekly. Not the publisher.

CC0 is a dedication to the public domain, so on its face this closes the question. It does not, for one reason: **the data repository's README carries no source attribution, no copyright statement, and no note on which translations were used.** The corpus consists largely of modern English translations of Shia hadith works, and modern translations are somebody's copyright. A CC0 waiver can only be applied by the rights holder. An aggregator applying CC0 to material it does not appear to own is exactly the **licence laundering** failure mode named in [the intake system](./RESOURCE_INTAKE_SYSTEM.md), arriving in its most convincing form ? a real, machine-readable, correctly-formed licence file sitting on top of nothing.

So the status improves from *rights-unknown* to *rights-declared-but-unverified*, which is a smaller improvement than it sounds. Handling:

- **Discovery tier.** Use it to find where a report lives ? which collection, which book, which chapter. Never as the published text and never as the cited edition.
- **Ask both parties.** `info@thaqalayn.net`, and the repository owner, who is the one who actually applied the waiver. The question is not "may we use it" but **"which translations are these, and who holds them"** ? the second question is the one whose answer decides anything.
- **A `located` row still needs the printed edition.** Whatever the licence turns out to be, an aggregator's JSON is not an edition and a page number cannot come from it.

Two things this list does not contain, and their absence is the finding:

1. **No public-domain Shia Urdu translation.** The Shia Urdu translations in circulation ? Jawadi, Najafi ? are twentieth-century and under copyright. There is no counterpart to Ahmed Raza Khan or Junagarhi. The collision is precisely *Shia ? Urdu ? public domain*: any two are fine, all three are not. Handling is settled in [strategy ?11](./QURAN_PRODUCT_STRATEGY.md) ? parity is enforced per claim, and a rights gap renders as a labelled empty column rather than a silently Sunni-only edition.
2. **No open Shia narrator database** at the scale of Itqan or Sanadset. *Rijal* work on the Shia side has no equivalent open dataset in this survey. Narrator identities there start from named biographical works, one entry at a time.

### What no hadith dataset supplies

Across every dataset reviewed in both passes, the same four fields are missing or unreliable, and they are exactly the fields this product's promise depends on:

1. **Grade as an attributed assertion.** Datasets store `sahih` as a string. We need grader, exact original-language wording, work, edition, page, and date. This is a manual editorial programme, not an import.
2. **Segmented isnad tied to resolved identities.** Most datasets store the isnad as an undivided Arabic string, or as narrator IDs with unresolved duplicates.
3. **Wording and chain variants linked to each other.** Parallel transmissions of one report exist as unrelated rows.
4. **Disagreement.** Where two critics differ, datasets record one grade or none. Recording both, with both citations, is the differentiator.

Everything above therefore enters at the **discovery** tier. The publishable hadith layer is built by our own reviewers on top of it.

### Minimum publishable hadith record

Each record needs:

- stable internal report and variant IDs;
- Arabic matn, exact translation, and separate isnad segments;
- collection, work, book, chapter, publisher, edition, volume, page, and all common numbering systems;
- narrator identities, aliases, uncertainty, and chain order;
- links to wording variants and parallel transmissions;
- every displayed grade as an attributed assertion: grader, exact terminology, cited work, edition, page, date or period;
- takhrij notes and disagreements;
- what the report contributes to the relevant claim or episode;
- translation and reproduction rights;
- religious reviewer, hadith specialist, review date, and revision history.

An authenticity evaluation, the interpretation of a report, its relevance to a story, and its suitability for a child lesson are four different decisions. Never collapse them into one ?trust score.?

---

## 5. History, geography, archaeology, and manuscripts

| Resource | Rights status | Recommended role | Main caution |
|---|---|---|---|
| [Natural Earth](https://www.naturalearthdata.com/downloads/) and [terms](https://www.naturalearthdata.com/about/terms-of-use/) | **Public domain** | Coastlines, terrain, and small-scale basemaps | Modern generalized geography is not evidence for ancient borders |
| [Pleiades downloads](https://pleiades.stoa.org/downloads) | **CC BY 3.0** | Ancient-place identifiers, names, dates, JSON, GIS, and RDF | Strongest in Mediterranean/classical coverage; Quranic identifications still require separate claims |
| [GeoNames export](https://www.geonames.org/export/) | **CC BY 4.0** | Modern gazetteer, aliases, coordinates, and name reconciliation | It is a modern reference, not historical authority; public API limits apply |
| [Wikidata](https://www.wikidata.org/wiki/Wikidata:Licensing) and [query service](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service) | Structured data **CC0** | Alias discovery and links to external authority identifiers | Crowd-edited and never sufficient as theological or historical proof |
| [OpenHistoricalMap](https://www.openhistoricalmap.org/export) | Mostly **CC0**, with feature-level exceptions | Time-aware historical geometries and experimental layers | Contributor quality and individual-feature rights vary |
| [World Historical Gazetteer](https://whgazetteer.org/public_data/) | Public datasets may be **CC BY 4.0**; other platform material has different terms | Historical names, temporal spans, and linked-place modelling | Check the licence on each dataset rather than applying one platform-wide assumption |
| [ORACC](https://build-oracc.museum.upenn.edu/) | Generally **CC BY-SA 3.0** project data | Ancient Near Eastern texts, transliterations, and lemmata | Comparative context is not proof of a Quranic identification |
| [IIIF](https://iiif.io/api/presentation/3.0/) | Open technical standard; item rights vary | Interoperable manuscript canvases, annotations, and comparison | A IIIF manifest does not make its images open |
| [Mirador](https://github.com/ProjectMirador/mirador) | **Apache 2.0** | Side-by-side IIIF manuscript and page comparison | Maintain item-level rights and attribution |
| [OpenSeadragon](https://github.com/openseadragon/openseadragon) | **BSD 3-Clause** | Lightweight deep-zoom manuscript or map viewer | Same item-level image restrictions apply |
| [isawnyu/pleiades.datasets](https://github.com/isawnyu/pleiades.datasets) | **CC BY 3.0**, numbered releases | Platform-independent Pleiades snapshots in JSON, CSV/GIS, and RDF/Turtle | Prefer a **numbered release** over the live gazetteer for reproducibility; the packaged data lags the live site. Notify the Pleiades community of reuse as their terms request |
| [ryanfb/pleiades-plus](https://github.com/ryanfb/pleiades-plus) | Derived alignment; follows Pleiades and GeoNames terms | Machine-proposed Pleiades?GeoNames URI pairs | **Proposals, not identifications.** Ingest as candidate alignments with confidence and a review state, exactly as gate G7 requires. Same `independence_group` as Pleiades |
| [KITAB text-reuse data](https://kitab-project.org/corpus/about) over the OpenITI Arabic subcorpus (10,200+ texts) | Corpus releases **CC BY-NC-SA 4.0**; check each derived dataset | Detecting where a later work quotes an earlier one ? the mechanism behind tracing a story detail back to its earliest attestation | The **highest-leverage research asset located in this survey** for the Isra'iliyyat problem: it can show that a widely repeated detail first appears in a late source. Non-commercial terms confine it to internal research; its output is evidence for editors, never a published verdict |
| [lamharrison/NER-and-Linking-of-Ancient-and-Historic-Places](https://github.com/lamharrison/NER-and-Linking-of-Ancient-and-Historic-Places) | Tool; verify licence per file | spaCy-based NER for ancient place names linked to Pleiades | Tooling for editorial triage of historical prose. Every proposed link is a G7 candidate needing human acceptance |

| [AWMC Antiquity ?-la-carte](https://awmc.unc.edu/awmc/applications/alacarte/) | Academic use, attribution expected; verify per layer | Historically accurate ancient-world basemap derived from the Barrington Atlas plus Pleiades and DARMC, with roads, aqueducts, and **reconstructed ancient coastlines** | Classical-Mediterranean weighted, so coverage thins toward Arabia and the Hijaz. Ancient coastline layers are themselves reconstructions ? label them as such, never as basemap fact |
| [Digital Atlas of the Roman Empire (DARE)](https://dh.gu.se/dare/) | Open academic dataset; verify current terms | Point-level ancient places with period attributes, usable as a cross-check against Pleiades | Same geographic bias, and same `independence_group` risk ? DARE and Pleiades share upstreams and their agreement is not corroboration |
| [Pelagios / linked-places format](https://github.com/LinkedPasts/linked-places-format) | Open specification | The interchange model for saying "this place record and that place record may be the same," with attestation and confidence carried in the data | **Adopt the model, not just the data.** It already encodes the hypothesis-with-confidence shape ?12 of the strategy requires, which saves inventing a private one |
| [OpenITI MAKHZAN](https://doi.org/10.5334/johd.465) | Published open dataset; verify per component | Annotated Arabic, Persian, Ottoman, and **Urdu** print and manuscript page data, structured for eScriptorium/HTR training | Training and layout-analysis data, not content. Its value here is enabling *our own* transcription of sources nobody else has digitized |
| [Corpus Coranicum ? Manuscripta Coranica](https://corpuscoranicum.org/en/manuscripts) | Platform data CC BY-SA 4.0 in parts; **manuscript images retain holding-institution rights** | Over 50,000 page entries across 1,500+ fragments from 95+ collections, with variant-reading documentation | The rights split is the trap: the descriptive metadata may be reusable while the images are not. Never mirror an image on the strength of the platform's licence. Scope this layer explicitly before it ships ? it is where a research asset most easily becomes a controversy |

Every proposed place should be stored as a hypothesis with:

`place ? geometry type ? proposed geometry ? date range ? proposed by ? evidence ? counter-evidence ? status ? alternatives ? reviewers`

Use polygons, corridors, and uncertainty halos where the evidence does not justify a point.

---

## 5b. Urdu language infrastructure

Urdu is treated in the strategy as a sibling edition, not a translation target. That makes Urdu *linguistic* infrastructure ? spelling variance, Roman Urdu mapping, normalization, tokenization ? a direct product dependency, distinct from Urdu *content*.

| Resource | What it can contribute | Rights status | Recommendation and caution |
|---|---|---|---|
| [zeerakahmed/makhzan](https://github.com/zeerakahmed/makhzan) | A curated, annotated Urdu text corpus of roughly 6.26M words in structured XML with document-level metadata | Stated on the repository; verify per document | **Adopt as the Urdu NLP baseline.** Use for normalization, tokenization, and search-form derivation. Not a content source |
| [urduhack/awesome-urdu](https://github.com/urduhack/awesome-urdu) and [traversaal-ai/urdu-llm-resources](https://github.com/traversaal-ai/urdu-llm-resources) | Maintained indexes of Urdu corpora, tooling, and models | Index only; each listed resource has its own terms | **Discovery aid.** Every item still enters through G1?G9 individually |
| [Rekhta](https://rekhta.org/) | The largest Urdu literary collection online ? on the order of 48,000 ghazals from 4,700+ poets, ~688,000 verses | **No open licence.** Proprietary platform | **Reference and terminology study only; never ingest.** Valuable for register, orthographic variance, and how Urdu literary text is presented well on the web |

**The binding constraint on all Urdu acquisition is recognition accuracy, not availability.** Best-case printed-Urdu OCR sits near 0.133 WER, every evaluated model degrades markedly on Nastaliq relative to Naskh, and handwritten Urdu runs 55?70%. Set against the 0.1%?0.5% error thresholds in [RESOURCE_INTAKE_SYSTEM.md](RESOURCE_INTAKE_SYSTEM.md), **scanned Urdu cannot be corrected into publishable state at acceptable cost.** Prefer born-digital and licensed Urdu text in every case, and revisit this annually as the Islamicate OCR programmes extend into Urdu.

---

## 6. Scientific and academic literature

| Resource | Rights status | Recommended role | Main caution |
|---|---|---|---|
| [OpenAlex](https://developers.openalex.org/) | Core scholarly metadata **CC0** | Literature discovery, authors, institutions, concepts, citation graph | Metadata is not permission to republish article text or figures |
| [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/) | Deposited bibliographic metadata is broadly reusable | DOI, reference, funder, retraction, and licence metadata | Some deposited abstracts remain copyrighted |
| [DOAJ](https://doaj.org/terms/) | Journal/article metadata **CC0** | Discover reputable open-access literature | The article and its media retain their stated licences |
| [PMC Open Access subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/) | Per-article Creative Commons or other licences | Licensed XML/full text for evidence review | Commercial/NC status and third-party figure exclusions vary by article |
| [Unpaywall](https://unpaywall.org/products/api) | Open-access location metadata under its stated data terms | Find lawful open copies | It does not change the rights of the linked work |

The product should normally store citations, structured evidence notes, short lawful quotations, and an editor-authored synthesis?not mirror entire papers.

---

## 7. Original interface and visualization stack

| Need | Candidate | Licence | Recommended use |
|---|---|---|---|
| Story and research maps | [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js) | BSD 3-Clause | Layered uncertainty maps and synchronized story maps |
| Lightweight maps | [Leaflet](https://github.com/Leaflet/Leaflet) | BSD 2-Clause | Simple mobile or static-ish map experiences |
| Custom timelines and evidence graphics | [D3](https://github.com/d3/d3) | ISC | Uncertainty bands, parallel chronologies, and bespoke diagrams |
| Knowledge and isnad graphs | [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) | MIT | Small explainable entity neighborhoods and chain views |
| Very large graph exploration | [Sigma.js](https://github.com/jacomyal/sigma.js) | MIT | Research-only overview of large networks |
| Curated node diagrams | [React Flow](https://github.com/xyflow/xyflow) | MIT | Editorial claim maps and teacher-arranged lesson paths |
| General charts | [Apache ECharts](https://github.com/apache/echarts) | Apache 2.0 | Accessible comparison charts where a standard chart is appropriate |
| Timeline interaction | [vis-timeline](https://github.com/visjs/vis-timeline) | Apache 2.0 / MIT components | Range-based, zoomable research timelines |
| Diagrams in documentation | [Mermaid](https://github.com/mermaid-js/mermaid) | MIT | Internal model and public methodology diagrams |
| Interactive teaching blocks | [H5P](https://h5p.org/licensing) | Mixed by component | Evaluate for teacher-authored activities; isolate GPL components and audit exported content rights |

Do not adopt a graph merely because the data is graph-shaped. A table, ordered list, or compact relationship neighborhood will often teach better than a large network.

---

## 8. Typography

| Script/use | Candidate | Licence | Notes |
|---|---|---|---|
| Arabic editorial prose | [Scheherazade New](https://github.com/silnrsi/font-scheherazade) | SIL OFL 1.1 | Broad Arabic-script and Quranic-mark support; actively maintained |
| Arabic and Quran companion styles | [Amiri](https://github.com/aliftype/amiri) | SIL OFL 1.1 | Strong literary Naskh family with Quran-oriented companions |
| Urdu Nastaliq | [Noto Nastaliq Urdu](https://github.com/notofonts/nastaliq) | SIL OFL 1.1 | Open, web-usable baseline for Urdu; test size, line height, and performance |
| KFGQPC and other mushaf fonts | Official provider terms | **Conditional** | Free-of-cost does not necessarily permit modification or redistribution; confirm the exact font licence |

The chosen Quran font must be tested against the exact encoded text. Test every ayah for combining marks, waqf signs, glyph fallbacks, verse markers, copying, search highlighting, browser differences, and mobile performance.

---

## 9. Interoperability standards worth adopting

| Standard | Role |
|---|---|
| [CIDOC CRM](https://cidoc-crm.org/) | Event-centric modelling of people, places, objects, sources, and time |
| [W3C PROV-O](https://www.w3.org/TR/prov-o/) | Who created, imported, derived, reviewed, or revised a claim |
| [SKOS](https://www.w3.org/TR/skos-reference/) | Multilingual concepts, preferred names, aliases, hierarchies, and related terms |
| [W3C Web Annotation](https://www.w3.org/TR/annotation-model/) | Annotations tied to an ayah, phrase, manuscript region, map feature, or media timecode |
| [TEI](https://tei-c.org/release/doc/tei-p5-doc/en/html/TC.html) | Textual variants and critical apparatus |
| [IIIF Presentation 3](https://iiif.io/api/presentation/3.0/) | Manuscript canvases and interoperable annotation layers |
| [EDTF](https://www.loc.gov/standards/datetime/) | Approximate, uncertain, and interval dates |
| [GeoJSON](https://www.rfc-editor.org/rfc/rfc7946) | Geographic interchange |
| [JSON-LD](https://www.w3.org/TR/json-ld11/) | Linked-data exports |
| [CSL JSON](https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html) | Citation export and bibliography rendering |
| [FAIR principles](https://doi.org/10.1038/sdata.2016.18) | Findable, accessible, interoperable, and reusable research objects |

Adopt only the useful profile of each standard. The public product should not expose standards jargon unless it helps the reader.

---

## 9b. Adjacent-tradition precedent worth copying

Two non-Islamic projects have already solved problems this product will hit, and both publish their solutions.

| Project | What it solved | What to take |
|---|---|---|
| [Sefaria](https://developers.sefaria.org/) and [Sefaria-Export](https://github.com/Sefaria/Sefaria-Export) | A canonical text with thousands of years of layered commentary, made addressable and linkable at segment level, with **per-text licence metadata** rather than one blanket licence, and every intertextual connection exported as its own CSV | The **link-as-first-class-object** model: connections between a base text and its commentary are stored, versioned, and exported separately from either text. Also the practice of carrying licence and digitization credit *per work*, which is exactly what a corpus mixing public-domain classical tafsir with in-copyright modern translation requires |
| [Scaife Viewer](https://scaife.perseus.org/) / Perseus | Reading interface for a primary text with apparatus, translations, and morphology aligned to the same token identifiers | Token-level addressing as the join key across morphology, translation alignment, and annotation ? the same decision this product makes at G7 |

Neither is a source of content here. Both are architectural evidence that the hard part is the **link layer and the per-work rights metadata**, not the text.

---

## 10. First rights and data actions

### Do these before anything else, in this order

1. Create the source registry and rights gate before importing content.
2. Pin and checksum one candidate Arabic Quran distribution.
3. Request written clarification or agreements from QuranEnc, Quran Foundation, Sunnah.com, HadeethEnc, and the publishers of the first English and Urdu translations.
3b. **Ask Thaqalayn ? both the site (`info@thaqalayn.net`) and the repository owner who applied the CC0 waiver.** The data repo declares CC0-1.0 over what appear to be modern English translations, with no attribution or copyright statement. The question is *which translations are these and who holds them*, not *may we use it*. Until answered, discovery tier only.
3c. **Establish who Fateh Muhammad Jalandhry was, from printed bibliographic sources.** Not a date lookup ? the accounts in circulation may describe two different people, and a licence test run on a conflated identity gives a confident answer about the wrong man. Needs a *tazkira*, catalogue entry, or publisher front matter naming translator and dates together.
3d. **List, per candidate story, which editions can actually be opened to a page** before committing to it. For Ashab al-Kahf this is done: al-Tabari (Bulaq/Amiriyya) and al-Tabarsi's *Majma' al-Bayan* are both available as page images ? see ?3b.
4. Import only metadata from QUL until resource-level permissions are confirmed.
5. Test MASAQ, Quranic Arabic Corpus, and Corpus Coranicum against the same ten ayat to compare identifiers and tokenization.
6. Build a 50-report hadith alignment sample across two collections and at least two numbering systems.
7. Build a five-place geography sample with one certain place, one broad region, and three competing identifications.
8. Select the map, graph, typography, and citation libraries and record their licence notices.

### Do not ingest yet

- scraped Sunnah.com or AlTafsir content;
- a repository whose only licence applies to its code;
- modern translations or tafsirs without publisher permission;
- OCR text without page-level provenance and accuracy sampling;
- stock or museum images without item-level rights;
- a hadith grade that cannot be attributed to a named critic and source;
- an archaeological or scientific assertion without its exact evidence record;
- any aggregator JSON repository as a source of record, however convenient its packaging;
- text carrying a public-domain dedication (CC0 or equivalent) applied by a party that does not appear to hold the rights ? a correctly formed licence file is evidence of intent, not of title;
- a machine-proposed place alignment, narrator merge, or text-reuse match that no human has accepted.

The strategic opportunity is not to gather the largest pile of text. It is to create the cleanest, most transparent chain from source to claim to visual explanation.
