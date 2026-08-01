# Quranic Narrative and Evidence Atlas ? Product Roadmap

**Version:** 2.0 ? solo edition ? **Supersedes:** v1.0 (team-and-funding plan, obsolete)

**No dates, no durations, no hour counts appear in this roadmap.** There is no funder, no launch window, and no deadline, so any schedule would be invented ? and inventing is what this project forbids. What follows is a **sequence** and a **standard**. Each milestone completes when its gate passes.

**Companion documents:** [Strategy](./QURAN_PRODUCT_STRATEGY.md) ? [Design direction](./DESIGN.md) ? [Open resources catalog](./OPEN_RESOURCES_CATALOG.md) ? [Resource intake system](./RESOURCE_INTAKE_SYSTEM.md)

---

## 0. The prohibition

Stated first because everything else depends on it.

> **Nothing on this product is invented. Not a report, not a chain, not a grade, not a critic's verdict, not a page number, not a date, not an identification, not a scholarly position. The AI assistant may not invent, and is forbidden from inventing, any of these.**
>
> The product only **displays and discusses material that already exists** in a locatable source.

This is not a quality target. It is the definition of the product. A resource that invents even one citation is worse than no resource, because it poisons the true material sitting next to it ? the reader has no way to tell which is which, so all of it becomes unusable.

**The operational test, which is mechanical and checkable by a stranger:**

Every published statement of fact resolves to a **work, edition, and page or locator**. If a person with that edition in hand cannot turn to that page and find the thing, it does not publish. There is no category of "probably right," "commonly reported," or "widely known" that bypasses this.

**Where the AI's output enters:** as a *candidate*. The assistant proposes; the citation is then looked up in the actual edition; only then does it publish. Drafted prose is a draft. Located citation is content.

---

## 1. Founding decisions ? settled

Recorded because a solo project has no institutional memory. Anything not listed is still open.

| # | Decision | Settled as |
|---|---|---|
| 1 | Theological scope | **Sunni and Shia side by side**, both primary. Neither is "the other view." Academic and historical-critical work appears as a labelled third kind of source |
| 2 | Organisation and money | **None.** No entity, no funding, no grants, no donations, no revenue. One person and an AI assistant |
| 3 | Price | **Free permanently.** No paywall, no ads, no sponsorship |
| 4 | Urdu | **Parity from the first dossier.** Composed natively, never machine-translated |
| 5 | Launch corpus | **10 complete dossiers** |
| 6 | Authority | **No scholarly review board, stated plainly and permanently.** Replaced by claim-level source transparency ? ?3 |
| 7 | Illustration | **No human figures of any kind.** Not prophets, not angels, not crowds, not silhouettes. Maps, architecture, objects, landscape, diagram, calligraphy only |
| 8 | Depth vs. speed | **Nothing cut. Timeline open-ended.** Each dossier publishes when done |
| 9 | Invention | **Forbidden absolutely** ? ?0 above |
| 10 | Tone | **Academic with devotional respect.** Describes what sources say; issues no rulings |
| 11 | Text licensing | **Public domain first.** Non-commercial-only sources are usable but never treated as open, and never relicensed onward |
| 12 | Plain-language layer | **Yes, tightly fenced.** An AI-composed modern restatement of public-domain translations, always shown with its named source, never called a translation |
| 13 | Symbolic representation | **Footprint traces**, rendered at the confidence of the route argument. A print is an impression in ground, not a body |
| 14 | Repository and hosting | **GitHub, public; Vercel for hosting.** No domain until a name exists |
| 15 | Shia parity under licence pressure | **Kept.** Parity enforced per claim; a rights gap renders as a labelled empty column, never a silently Sunni-only edition |

Numbering matches [strategy ?25](./QURAN_PRODUCT_STRATEGY.md), which carries the reasoning behind each. Decisions 2 and 6 remove most of what a normal roadmap contains ? no funding gates, no hiring plan, no launch window, no runway. What remains: a **sequence**, a **standard**, and an honest cost per unit.

---

## 2. The governing metaphor: this is an atlas

The word is load-bearing, so it gets a definition.

A good historical atlas does not show only the places that turned out to be real. It shows the false island, the mythical strait, the kingdom never found ? and prints **who charted it, in what year, from what report, and when it was struck off.** The error is part of the map. Removing it would hide how knowledge was actually made.

That is the position on weak and fabricated material. A report classical critics ruled *mawdu'* belongs **in** the atlas, labelled, with the critic who ruled it and the page where he did. Suppressing it leaves the reader unable to understand why they heard the story elsewhere ? which is the actual question they arrived with.

But the atlas earns that freedom through one discipline, and it is ?0: **everything on it was charted by someone real.** The false island is on the map because a named navigator reported it in a named year. An atlas that invented islands would not be a brave atlas. It would be worthless ? and the true coastlines on it would become unusable too, since nothing on the sheet could be trusted.

So the two rules are one rule:

- **Include the false material.** Labelled, attributed, sourced.
- **Invent nothing.** Including the labels. "Fabricated" is a named critic's verdict on a real text; without that critic's name and page, the label is itself an invented attribution.

A report that cannot be located in a real book is not weak. It does not exist. It does not go in.

---

## 3. What replaces scholarly review

No reviewer signs off. That capability is gone and no process invents it. Pretending otherwise would be the project's first dishonesty.

The replacement is not weaker ? it is **different in kind**, and in one respect stronger. A scholar's signature asks the reader to trust a person. This asks the reader to trust nothing, and check.

### The transparency contract ? on every dossier, permanently

1. **This resource has not been reviewed by a scholarly board.** Plain language, both editions, not buried in a footer.
2. **Every claim shows its source at claim level** ? work, edition, page or locator. Attached to the sentence, not a bibliography at the bottom.
3. **Every grade is attributed** ? which critic, in which work, on which page, using which word. Never a bare `sahih` or `da'if`.
4. **Where sources disagree, both appear.** Sunni and Shia positions, and critics who differ, are shown differing. Nothing resolved silently.
5. **Author and date on everything,** including the AI-assistance disclosure.
6. **A correction channel on every page,** and a public correction log recording what changed, why, and when.

### The verification ledger

The artifact that stands in for a signature, and the strongest thing available to a solo project.

For every claim, record and **publish**:

`claim ? source cited ? edition consulted ? located? yes/no ? checked by ? date checked ? notes`

The ledger is public. It makes the project's own limits inspectable: a reader sees exactly which claims were verified against an actual edition and which still rest on a secondary citation. No competitor publishes anything like this ? not because it is hard to build, but because it is uncomfortable to show.

**Nothing publishes with an unlocated citation.** The only hard gate surviving from the team-based plan, and it survives precisely because one person can actually enforce it.

#### Shape ? settled: per-dossier files, one global view derived from them

Each dossier owns a ledger file, versioned beside its content. The site-wide ledger is **built** from those files, never maintained by hand.

Why this way rather than one global table:

- **A dossier stays self-contained.** Content, sources, and the record of what was checked move together ? a dossier can be corrected, reverted, or shown to someone as a single object. A global table makes every dossier depend on one file that belongs to none of them.
- **The single file becomes the bottleneck.** Every edit touches it, every revert risks unrelated rows, and its history stops being readable at exactly the point the corpus gets interesting. Ten dossiers of claim-level rows is not a table anyone opens twice.
- **The global view is free either way.** Derived from the parts, it can be regenerated, sorted, filtered, and totalled ? and the reverse is not true. Splitting a hand-maintained global table later is a migration; concatenating files is a build step.
- **It matches the failure mode being defended against.** Rot happens at the claim level inside one story. Keeping the record next to the claim is what makes an unchecked row visible while working on it, rather than in a spreadsheet nobody opens.

Rules that keep the derived view honest:

- **One row per claim, and the claim ID is stable.** Reworded prose does not silently inherit an old verification.
- **`located` is the gate, and the build enforces it.** A row with `located: no` blocks publication of the claim it belongs to ? a check that runs, not a habit.
- **Rows are never deleted, only superseded**, with the superseding row carrying the reason. The correction log in rule 6 above is generated from this, so a reader can see what a page said before it was fixed.
- **The global view publishes the gaps too** ? including counts of Secondary and Unlocated. The number that matters is not how many claims were verified but how many were not, and it stays visible.

Settled now because the shape is cheap to adopt and expensive to change after M1, and because it needs no external answer.

---

## 4. Where the work actually goes

No hour counts ? see the note at the top. What matters is not how long a dossier takes but **which parts of it dominate**, because that determines what to protect when effort is short.

Effort is shown as a share of one complete dossier. The right-hand column is the point of the table: AI assistance shrinks most lines, leaves one nearly untouched, and makes one *larger*.

| Activity | Share | Effect of AI assistance |
|---|---|---|
| **Verification and correction** | **?22%** | **Grows.** The only line that gets bigger |
| Hadith work ? chains, narrators, grades | ?13% | **Barely shrinks.** Every grade must be looked up in the cited edition regardless of who drafted the text |
| Urdu edition | ?12% | Shrinks in drafting, not in reading. Every line still read, never skimmed |
| Claim extraction and structuring | ?9% | Shrinks; drafted then restructured by hand |
| Sunni + Shia parity layer | ?8% | New cost from decision 1. Shrinks in retrieval, not in checking |
| History, archaeology, geography | ?6% | Shrinks; each identification still checked individually |
| Long prose (Research view) | ?6% | Shrinks sharply; drafted, then rewritten in your voice |
| Diagrams and maps | ?6% | **Collapses.** Decision 7 removes figurative illustration, the most expensive visual work |
| Source assembly | ?5% | **Collapses.** Retrieval is what AI is genuinely good at |
| Short graphical (Learn view) | ?5% | Shrinks |
| Science comparison | ?4% | Shrinks; often ends in "no responsible comparison available," which is a valid result |
| Teacher materials | ?4% | Shrinks |

### The one thing this table is for

**Verification is the largest single share, and the only one AI made bigger.**

Not a paradox. Generated text arrives faster than it can be checked, and it arrives *fluent*, which makes a wrong citation harder to notice rather than easier. The checking itself ? open the edition, find the page, confirm the wording ? cannot be delegated to the thing that produced the text.

**So this is a verification discipline, not a writing discipline.** A stretch of drafting with no checking moves the project *backwards*: it now holds more unverified material than it did before. **Track the verified claim count. Never the drafted one.**

---

## 5. Sequence

Milestones by completion, not by date. No clock and no funder, so dates would be fiction.

### Before M0 ? the rights gate

Cheap, and M0 cannot honestly finish without it. Three questions were open here. All three have been checked; one is closed, one is narrowed, one turned out to be a different question than it looked.

1. **Which editions are actually in reach** for page-level verification ? **closed for M0.** Under decision 9 this constrains story selection harder than anything else, so it needed answering before Ashab al-Kahf was committed to, not after. Both tafsirs that carry the story's weight exist as page images of named printed editions: al-Tabari's *Jami' al-Bayan* in the Bulaq/Amiriyya edition, and al-Tabarsi's *Majma' al-Bayan* in nine parts. Details and identifiers in [the catalogue ?3b](./OPEN_RESOURCES_CATALOG.md). This also fixes the parity layer more cheaply than expected ? the Shia tafsir is classical and out of copyright, so decision 15 is met on this axis by a book rather than by a licence negotiation.
2. **Thaqalayn's rights position** ? **narrowed, not settled.** The website carries no licence, but the data repository behind it declares CC0-1.0 while stating no source, attribution, or copyright for what appear to be modern English translations. That is a stronger-looking claim resting on nothing checkable, which is the licence-laundering pattern in its most persuasive form. Discovery tier only. Ask both the site and the repository owner, and ask *which translations these are and who holds them* ? the licence question follows from that answer, not the other way round.
3. **Jalandhry** ? **it is not a date question.** The accounts in circulation give birth years decades apart with no citations, and enough surrounding detail differs that they may describe two different people. A licence test run on a conflated identity returns a confident answer about the wrong man. Needs printed bibliographic sources, not a better web page. Nothing waits on it: Ashab al-Kahf ships its Urdu edition on Ahmed Raza Khan or Junagarhi regardless.

The gate is therefore open for M0. The two unresolved items sit outside the critical path by construction ? neither touches a claim Ashab al-Kahf needs to publish.

The repository exists from here on. Non-commercial-only text is never committed to it ? see [strategy ?18](./QURAN_PRODUCT_STRATEGY.md).

### M0 ? One complete dossier

**Ashab al-Kahf.** Chosen deliberately: two competing site identifications (Ephesus, al-Rajib), substantial Sunni?Shia interpretive difference, a heavy Isra'iliyyat problem, and a text that itself declines to settle the number of sleepers at 18:22 ? which makes disclosed uncertainty a *religious* stance rather than an editorial hedge. Method that survives this story survives most.

Complete means: both languages, both traditions, all three reading depths, verification ledger filled, published.

**M0's purpose is measurement.** The effort shares in ?4 are a guess until one dossier exists. Everything downstream depends on what the first one actually costs ? especially whether verification really is the largest share.

**Exit:** one dossier live. Real effort split recorded against ?4. Table corrected to match.

### M1 ? The spine (3 dossiers)

Add **Thamud / al-Hijr** (material evidence versus textual attestation ? the distinction popular treatments most reliably get wrong) and **Yusuf** (long continuous narrative; tests whether the episode model holds across a full surah).

By end of M1 the schemas, the house voice in both languages, the diagram vocabulary, and the ledger format are settled and stop changing. Reusable person, place, and qawm records begin paying back.

**Implementation checkpoint:** the current product has the reusable story route and bilingual Quran-anchor-only shells for Thamud / al-Hijr and Yusuf. The M1 exit is not met yet: neither shell has reported claims, tafsir source records, or a completed verification ledger.

**Exit:** three dossiers live. Second and third measurably cheaper than the first.

### M2 ? Launch corpus (10 dossiers)

Seven more. Publish each as it completes ? no held launch, since there is no press cycle or fundraise to time against. Search visibility accrues from the first page published either way.

Suggested remainder: Nuh ? Ibrahim ? Musa and Fir'awn ? 'Ad and Iram ? Saba' and the dam ? Maryam and 'Isa ? Sulayman.

**Exit:** ten dossiers, both languages, all with published ledgers.

### M3 ? After

Deepening beats broadening, permanently. Rough value order:

1. More dossiers.
2. Cross-story layers ? map, timeline, narrator graph ? which only become interesting once enough dossiers exist to connect.
3. Text-reuse tracing (KITAB / OpenITI): showing that a widely repeated detail first appears in a late source. The Isra'iliyyat problem made *visible*, and nobody in this space does it.
4. Audio, offline packs, everything else.

---

## 6. Constraints that follow from having no money

Not hardships. Design inputs ? several are advantages.

| Constraint | Consequence |
|---|---|
| Hosting must be ~free | Static generated pages, no production database. Already the right architecture for indexability and citability ? this decision costs nothing |
| No paid licences | Only public-domain, openly licensed, or clearly permitted sources. Rules out several convenient translations; forces the rights discipline the docs already demand |
| No takedown budget | Rights compliance is existential, not procedural. One infringement claim ends the project. **Never publish a source whose licence you cannot point to** |
| No one to hand over to | Everything in plain text and version control. Must be forkable by a stranger if you stop |
| No marketing | Distribution is search and citation. Server-rendered pages, stable URLs, clean metadata ? that is the entire growth strategy |
| No deadline pressure | The main protection against what actually kills quality here: shipping unverified material to hit a date. There is no date |

**The permanence commitment.** Quran Companion ? the most visually ambitious product in this space ? was serving `Site unavailable due to unpaid billing` when audited. A static site on cheap hosting costs almost nothing to keep alive and can be handed to anyone. Publish that fact. A project asking readers to trust its sourcing should be transparent about its own survival.

---

## 7. The AI's boundary

Decision 2 makes the assistant the primary producer. That raises the stakes on the boundary rather than relaxing it, because there is no second reader.

**The assistant may:** find candidate passages, reports, and literature; assemble evidence; propose structure; draft prose in both languages; draft diagrams and maps; propose alignments and narrator matches; flag contradictions and gaps; summarise and discuss existing positions.

**The assistant may not ? per ?0, absolutely:** state a grade not quoted from a named critic in a locatable work ? produce a citation not confirmed to exist ? assert a chain of transmission ? finalise a narrator identity ? supply a page number, date, or edition detail from memory ? resolve a Sunni?Shia difference in the product's own voice ? publish anything unread.

**The failure to expect** is not obvious nonsense. It is fluent, mostly-correct text carrying a citation that *looks* checkable and is subtly wrong ? wrong page, wrong collection, right words attributed to the wrong critic. This is the documented dominant failure mode in this exact domain, and the text "reading well" detects none of it.

Which yields the working rule:

> **Fluency is not evidence. The only check that counts is opening the cited edition and finding the page.**

Every claim. No exceptions. Recorded in the ledger.

---

## 8. What this project refuses

- To invent anything ? report, chain, grade, verdict, page, date, or position.
- To publish a report that cannot be located in a real book, of any grade, including fabricated.
- To display a grade without the critic who gave it and the page he gave it on.
- To imply scholarly review it does not have.
- To silently resolve a Sunni?Shia difference.
- To depict any human figure.
- To take money that comes with an opinion attached.
- To let drafted material outrun verified material.
- To grow beyond what one person can keep online and keep honest.

---

## 9. Still open

| Question | Blocks |
|---|---|
| **Who Thaqalayn's translations belong to** ? its data repository declares CC0 while naming no source or rights holder. Not "may we use it"; "whose are these" | Nothing in M0. Blocks promoting Thaqalayn above discovery tier |
| **Who Fateh Muhammad Jalandhry was** ? accounts in circulation may describe two different people, so the licence test has no fixed subject | Nothing. Decides only whether the best-known Urdu translation joins the pool |
| Which editions are in reach for stories **after** Ashab al-Kahf ? answered for M0, and the same check has to run per story | M1 story selection |
| The name | The domain, and nothing else ? decision 14 took it off the critical path |

**Closed since the last revision:** editions in reach for M0 ? al-Tabari (Bulaq/Amiriyya) and al-Tabarsi's *Majma' al-Bayan*, both as page images of printed editions ([catalogue ?3b](./OPEN_RESOURCES_CATALOG.md)), which also supplies the parity layer a public-domain classical Shia tafsir; verification ledger shape (per-dossier files, global view derived ? ?3); English and Urdu translation licensing (decision 11 ? public-domain pool identified: Ahmed Raza Khan, Junagarhi, Shah Abdul Qadir Dehlvi); Shia source availability (decision 15 ? reachable in Arabic and English, the gap is Urdu rights only); symbolic representation (decision 13 ? footprint traces, which answers the old "does decision 7 extend to a marked position on a map" question); repository and hosting (decision 14).

**Both remaining rights questions changed shape when checked, in the same way:** each looked like a lookup and turned out to be a question about identity ? whose translation, which man. That is the pattern ?0 predicts. A lookup returns an answer; an identity question returns an answer *about something*, and the something is what needs establishing first.
