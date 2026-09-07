/**
 * Scene data for the scroll-scrub journey.
 *
 * Single-shot: ONE entry in `scenes`, ONE continuous clip scrubbed end-to-end
 * across the whole page. The six chapter texts live in `journeyChapters` and
 * are rendered by the engine's single-scene story branch — one film, six
 * chapters, no restarts, no crossfades.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Brand tokens for the journey layer. Set these from the design brief. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#E0B469",
  background: "#0A0A08",
  ink: "#F5EFE3",
  muted: "#7A7163",
};

const CLIP = "/assets/world/scene-01.mp4";
const MOBILE_CLIP = "/assets/world/scene-01-mobile.mp4";
const POSTER = "/assets/world/scene-01-poster.png";
const MOBILE_POSTER = "/assets/world/scene-01-mobile-poster.png";

/**
 * The six chapters — label for the rail, position as a 0..1 fraction of the
 * journey's scrollable height, and the chapter's own copy. Rendered by the
 * engine's single-scene story branch; each chapter occupies one viewport.
 */
export const journeyChapters = [
  {
    body:
      "A single pinprick of gold in a warm void. Then a second — and the geometry begins to resolve. This is the system waking.",
    kicker: "Ch. 0 — The silence",
    label: "Awakening",
    position: 0,
    title: "Every project here is AI.",
  },
  {
    body:
      "The filaments wake in sequence and resolve into the mark itself — not drawn, but assembled living. What is true of the logo is true of the channels.",
    kicker: "Ch. 1 — Ignition",
    label: "Ignition",
    position: 0.2,
    title: "Thought, running at scale.",
  },
  {
    body:
      "The first and densest node: a documentary channel about psychology and money, shipped as cinema. Twelve episodes in the first eight weeks, every frame generated. This is what happens when the system is asked to teach.",
    kicker: "Ch. 2 — The flagship",
    label: "Wealth Mindset",
    position: 0.4,
    title: "Wealth Mindset",
  },
  {
    body:
      "A second node, brighter: an LA gym girl with a dry humor and a sign-off, her AI disclosure at the top of her bio. Followers choose her anyway — the transparency was the pitch. For a brand, she is production infrastructure at a creator's cadence.",
    kicker: "Ch. 3 — Sister network I",
    label: "AI Influencer",
    position: 0.6,
    title: "Niki",
  },
  {
    body:
      "A third node warming: an Indian-American mother in her forties and her eleven-year-old daughter, talking over a cup of chai about whatever went wrong today. Warmer in voice, lower in cadence, not live yet.",
    kicker: "Ch. 4 — Sister network II",
    label: "Motivation",
    position: 0.78,
    title: "SpillTheChai",
  },
  {
    body:
      "The camera settles. All three channels lit around the same mark — one pipeline producing a documentary, a creator persona, and a mother-daughter conversation. The system is awake. Work with it, or build against it.",
    kicker: "Ch. 5 — Access",
    label: "Access",
    position: 0.92,
    title: "Access.",
  },
] as const;

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "One film, one scroll, every project here is AI.",
    clip: CLIP,
    id: "scene-main",
    label: "Awakening",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 6,
    tags: [],
    title: "Every project here is AI.",
  },
];
