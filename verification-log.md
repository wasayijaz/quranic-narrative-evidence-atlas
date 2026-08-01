# Verification log

Append-only release evidence for the Quran product.

## 2026-08-01 ? failed preview ? `dpl_EzaGwYTwFnTWobgMxFKmD5tB1zzg`

- Local build and product checks passed.
- Vercel build failed during CSS finalization with `[lightningcss minify] Unexpected token CloseParenthesis`.
- In-app browser verification could not reach the product; the preview redirected to the Vercel login page and the share-link helper could not create an access URL.
- First fix applied: removed the two parent `:has(...)` rules from the lesson-card stylesheet while retaining focus and selected-state behavior on the control.
