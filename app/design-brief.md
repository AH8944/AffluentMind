# The Affluent Mind — Design Brief

Animation mode: animated-website — scroll-scrub journey, single-shot, picked at intake (recommended default).

## Design read
For brand managers, agencies, and curious visitors who arrive having heard "this is all AI". The register is quiet luxury crossed with future-lab: dark, warm, precise, and cinematic. The site must *be the proof* — the interface itself demonstrates what the portfolio claims.

## Concept spine
**Narrative spine: living system / garden** — one golden neural network igniting into three fully-realized sister minds. The site behaves like a specimen being brought online; every section is a node waking up.

Single-shot scroll journey: camera drifts through the constellation mind (the logo geometry, alive) toward three orbitals, each one a project. The visitor's scroll is the current that wakes the system.

## Combinatorial pick
- Theme paradigm: **Deep Dark** with a warm-gold material twist — NOT the cliché neon-cyan AI dark. The gold is the brand's literal mark, which flips "AI dark" into "our logo, rendered real".
- Background character: full-bleed cinematic imagery — a continuous generated film plane, sections floating over it as dark glass panels.
- Typography character: **refined grotesk** (Space Grotesk) headlines + **workhorse grotesk** (Inter) body. Cinematic, geometric, engineered — mirrors the network mark.
- Hero architecture: **cinematic centered minimalist** — one floating constellation max 4 text elements on the opening beat.
- Section system: **poster-stacked storytelling** — every section is a seeded poster/frame crescendo, staggered horizontal drift.
- Signature components (4): off-grid editorial · oversized metrics strip (the 1.7M / 120K numbers are the design) · vertical rhythm lines · brand marquee (channel handles as ticker between chapters).
- Second-read moment: **one oversized numeral as structure** — the "1.7M" counter IS a layer of the composition in the YouTube chapter, not a badge on it.

## Locked palette (the ban override — this is the user's own brand)
Justification for the dark+gold pairing: the palette bans target the DEFAULT orange-amber "technical premium" look and the neon-cyan AI-SaaS default. This one is the literal existing brand mark, not a default reach — overriding is correct.

- Ground (void): `#0A0A08` — near-black warm void, not blue-black
- Ink (primary text): `#F5EFE3` — warm cream, not paper white
- Accent (the brand): `#E0B469` — muted brand gold (from the logo), used at 60% so it stays antique, not neon
- Accent deep: `#9C7B44` — the same gold at shadow depth, for gradients and strokes
- Muted (secondary): `#7A7163` — warm grey for captions and eyebrow text
- Surface: `#14120E` — dark glass-panel fill for content cards
- Line: `rgba(224,180,105,0.16)` — hairline gold at 16% for rules, frames and rails

## Locked type
- Display: **Space Grotesk 600** — geometric, cinematic, editorial. Loaded on `<head>`.
- Body / chrome: **Inter 400/500** — measured, faithful to the numbers and summaries.
- The amperstand `&` in "THE AFFLUENT MIND" will always be set in the display face.

## Animation mode
**`animated-website`** — the user picked Animated at intake. Journey shape: **`single-shot`** (ONE ~15s continuous film, scrubbed end-to-end; this IS the Tier-1 mechanic, no other hero layer sits on top of it).

## Journey — the scroll film, chapter by chapter
_ONE continuous camera move through the living constellation. No cuts. The chapters are HTML reading over it in turn._

- **Ch. 0 — The Silence** — Pure void. A single pinprick of gold ignites. Wordmark fades in: THE AFFLUENT MIND & the subline "Every project here is AI." (Focal: center, void 100% around it.)
- **Ch. 1 — Ignition** — The pinprick becomes the network silhouette — the logo geometry wired in golden thread, nodes pulsing gently. Copy reads the investing/finance thesis. Focal: the constellation, centered.
- **Ch. 2 — The Sister Network (AffluentMind101)** — Camera begins its drift toward the first glowing orbital node in the constellation. Intro of the YouTube arm. Focal: left orbital warming as camera approaches.
- **Ch. 3 — The Living Influencer (Niki)** — Camera continues to the second orbital, a denser, warmer-burning node — the persona. Focal: right orbital.
- **Ch. 4 — The Resonance (SpillTheChai)** — Third orbital, softer, still coalescing — the family channel, not yet live. Copy hints at coming soon. Focal: center-back orbital, dimmer.
- **Ch. 5 — Access (Contact / collab CTA)** — Camera settles into facing the whole constellation, all three orbitals and the central mark lit. End state: the system fully awake. CTA reads over it.
The journey enacts the spine: scroll literally wakes the system, chapter by chapter, and the payoff is the whole network alive at once.

## World grammar
Warm near-black void `#0A0A08`, soft volumetric atmosphere, subjects emerge from darkness. A golden constellation of thin luminous threads and node-dots — material: brushed/antique gold (named hexes `#E0B469` + `#9C7B44`), never neon, never emissive hot. Light direction: from the nodes themselves outward, subtle. Camera: slow, smooth, continuous forward drift + gentle orbital micro-motion, constant speed, no cuts, no shake. Locked exposure, no flicker, no on-screen text, no watermark, aspect 16:9.

## Mobile framing
All focal points inside a center-safe core: constellation and each orbital kept in the central 55% of frame. Mobile encode caps height at 720px.

## Delivery budget
Desktop clips: ≤32 MiB total. Mobile clips: ≤16 MiB total. One film, one 15s source, encoded once per layer.

## Section plan (page after the journey; one layout family each, no repeat)
1. **Hero scroll journey** (the film + 6 chapters above) — cinematic centered minimalist
2. **Proof statement block** — the "AI is indistinguishable" statement, oversized inline typography (off-grid editorial)
3. **The roster** — 3 project entry-point cards: AffluentMind101 · Niki · SpillTheChai. (asymmetric premium flow — cards are NOT a grid row, they are staggered with drift offsets, each with its own CTA garment)
4. **Thesis excerpt** — one short manifesto paragraph about why AI-native content, set as editorial with a narrow vertical side-rail note (horizontal rhythm + side-rail)
5. **Footer / contact band** — single oversized line "Let's build with AI" + one CTA, no icon row clutter

≥4 layout families across 5+ sections: cinematic-centered, off-grid editorial, asymmetric premium flow, editorial-with-side-rail, banner CTA. Eyebrow budget: ceil(5/3) = 2.

## CTA inventory (bespoke chrome — no shared site-wide button class)
- Hero chapter CTAs: text + arrow underline links, per-chapter ("Visit AffluentMind101 on YouTube") — garment: **inline link + arrow**
- Roster cards: each card gets its OWN garment — AffluentMind101: framed block · Niki: oversized headline with hint · SpillTheChai: disabled/dimmed inline link stamped "Coming soon" (this one intentionally inert)
- Footer CTA: **banner CTA** spanning full width — one single oversized line with the email address as the interactive anchor
- No pill buttons anywhere (reserved garment)

## Asset plan
- Hero film (single-shot, the whole journey) — Seedance 2.0, 16:9, 15s, style-locked to storyboard
- Storyboard (Phase 1, 16:9, 6 keyframes grid) → becomes the style reference for the film
- Logo: **user's own** files used as-is — the AM monogram cutout + the constellation-head mark (both supplied)
- Icon set: ONE generated grid sheet of 6 glyphs (link-arrow, play/signal, user/bust, stacking-papers, check/proof, mail) in the brand stroke + palette
- Section plates: 2 background atmosphere fields (one warm-gold dust field, one deep matte texture) so content panels aren't flat CSS
- Head kit: favicon 32 + favicon-16 + apple-touch 180 + icon-192 + icon-512 + maskable 512 + theme-color meta — derived from the AM monogram
- Branding (submitted once, alongside film — cover / OG / favicon via generate_app_branding + finalize_app_branding, text-free scene, the constellation subject breaking out of the capsule)

## References the user already owns
- AM monogram (black bg): black-square with thin gold ring/am monogram bottom-right
- Constellation-head mark (dark bg): golden neural head with THE AFFLUENT MIND sous-titre
Both used as-is per the user's-own-assets-first rule. The film, icons, plates and texture are generated to harmonize with the palette they lock.
