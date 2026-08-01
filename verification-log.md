# Verification log

Append-only release evidence for the Quran product.

## 2026-08-01 ? failed preview ? `dpl_EzaGwYTwFnTWobgMxFKmD5tB1zzg`

- Local build and product checks passed.
- Vercel build failed during CSS finalization with `[lightningcss minify] Unexpected token CloseParenthesis`.
- In-app browser verification could not reach the product; the preview redirected to the Vercel login page and the share-link helper could not create an access URL.
- First fix applied: removed the two parent `:has(...)` rules from the lesson-card stylesheet while retaining focus and selected-state behavior on the control.

## 2026-08-01 ? preview access blocked ? `dpl_5yJ51FyVnBWYKmaSc2fJxELC8CjM`

- Local `npm run verify` passed: 21 rendered routes, CSS minification, rendered checks, product checks, gate checks, ledger checks, integrity checks, and scope checks.
- Published source tree contains 63 files, including the explicit `cssMinify: 'esbuild'` Vite setting.
- In-app browser opened the new preview URL but was redirected to the Vercel login page.
- Vercel share-link and protected URL helpers both returned that they could not create an access URL.
- Result: no browser pass claimed; Vercel preview access remains the first unverified boundary.

## 2026-08-01 ? local browser pass ? checked build

- In-app browser checked the full 21-route matrix against the exact local production build; all routes rendered with the expected language direction and localized disclosure.
- Teacher Studio interaction passed: selecting the first Quran anchor changed the outline from 0 to 1 selected block.
- Evidence Desk interaction passed: filtering by `tabari` narrowed the claim register to matching source records.
- No browser errors or warnings were emitted for the local preview.
- This is supplemental evidence only; it does not replace the blocked Vercel preview check.
