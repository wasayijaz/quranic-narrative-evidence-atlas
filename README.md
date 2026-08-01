# Quranic Narrative and Evidence Atlas

This repository contains the M0 vertical slice described in `BUILD_SPEC.md`.

The build is intentionally content-first:

- human-editable YAML lives under `content/`;
- the source registry, claims, and verification ledger are validated at build time;
- claims without a ledger row fail the build;
- claims marked `located: no` remain visible in verification counts but are withheld from publication;
- no source text under a non-commercial-only licence is committed here.

## Local checks

```text
npm install
npm run build
npm run test:gate
```

The build check is written for a non-programmer: if a reference, ledger row, or source record is missing, it reports the file and the next safe action.

The M0 slice renders bilingual reading and verification routes at `/en/ashab-al-kahf`, `/ur/ashab-al-kahf`, `/en/verification`, and `/ur/verification`. An unlocated claim remains in the public ledger counts but is withheld from the reading.

## Editing boundary

The project owner edits files under `content/`. Code under `src/` enforces the rules and should not be edited as part of normal content work.
