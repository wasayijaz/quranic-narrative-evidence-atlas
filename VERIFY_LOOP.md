# Quran product verification loop

This is the release loop for the Quran product. It is intentionally explicit while the workflow is being proven.

## Every change

1. Run `npm run verify` from the project root.
2. Stop if it fails. Fix the first failing boundary and restart at step 1.
3. Publish the source to the Quran GitHub repository and create a Vercel preview.
4. Open the new preview in the Codex in-app browser. Do not treat the deployment as usable until it loads as the product rather than a Vercel error or login page.
5. In the in-app browser, visit every route in the route matrix below. For each route confirm:
   - the page title and primary content render;
   - the language direction and navigation are correct;
   - there is no browser error log;
   - there is no failed page request.
6. Exercise the product surfaces that have interaction:
   - Explore links to Quran, Learn, Teach, Research, and Verification;
   - Learn opens the Ashab story canvas;
   - Teach allows block selection and updates the local outline;
   - Research filters claims and preserves evidence disclosures;
   - story pages expose Quran anchors without inventing unpublished claims.
7. Append a dated pass or failure entry to `verification-log.md`, including the preview URL and the first failing boundary when there is one.

## Route matrix

The local verifier checks all 21 static outputs. The in-app browser must check the same matrix after each preview:

`/`, `/en/`, `/ur/`, `/en/quran/`, `/ur/quran/`, `/en/learn/`, `/ur/learn/`, `/en/teach/`, `/ur/teach/`, `/en/research/`, `/ur/research/`, `/en/verification/`, `/ur/verification/`, `/en/ashab-al-kahf/`, `/ur/ashab-al-kahf/`, `/en/stories/ashab-al-kahf/`, `/ur/stories/ashab-al-kahf/`, `/en/stories/thamud-al-hijr/`, `/ur/stories/thamud-al-hijr/`, `/en/stories/yusuf/`, `/ur/stories/yusuf/`

## Done means

The loop is complete only when the local verifier passes, the Vercel preview is reachable, all routes render in the in-app browser, the interaction checks pass, and the result is recorded. A green local build alone is not a release.
