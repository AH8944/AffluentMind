/**
 * Scene data for the scroll-scrub journey — THE file you fill in per build.
 * Single-shot: all entries share ONE film clip and its exact-frame posters.
 * Each entry is one chapter read over the same continuous film; the engine
 * crossfades them in scroll order while the same clip scrubs underneath.
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

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    body:
      "A single pinprick of gold in a warm void. Then a second — and the geometry begins to resolve. This is the system waking.",
    clip: CLIP,
    id: "scene-awakening",
    kicker: "Ch. 0 — The silence",
    label: "Awakening",
    linger: 0.15,
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: [],
    title: "Every project here is AI.",
  },
  {
    align: "right",
    body:
      "The filaments wake in sequence and resolve into the mark itself — not drawn, but assembled living. What is true of the logo is true of the channels.",
    clip: CLIP,
    id: "scene-ignition",
    kicker: "Ch. 1 — Ignition",
    label: "Ignition",
    linger: 0.1,
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: [],
    title: "Thought, running at scale.",
  },
  {
    align: "left",
    body:
      "The first and densest node: a documentary channel about psychology and money, shipped as cinema. Twelve episodes in the first eight weeks, every frame generated. This is what happens when the system is asked to teach.",
    clip: CLIP,
    id: "scene-affluentmind",
    kicker: "Ch. 2 — The flagship",
    label: "The Affluent Mind",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["2.2M views · 24K subscribers"],
    title: "The Affluent Mind",
  },
  {
    align: "right",
    body:
      "A second node, brighter: an LA gym girl with a dry humor and a sign-off, her AI disclosure at the top of her bio. Followers choose her anyway — the transparency was the pitch. For a brand, she is production infrastructure at a creator's cadence.",
    clip: CLIP,
    id: "scene-niki",
    kicker: "Ch. 3 — Sister network I",
    label: "Niki",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["120K followers · AI-disclosed"],
    title: "Niki",
  },
  {
    align: "left",
    body:
      "A third node warming: an Indian-American mother in her forties and her eleven-year-old daughter, talking over a cup of chai about whatever went wrong today. The system here is warmer in voice, lower in cadence, and not live yet.",
    clip: CLIP,
    id: "scene-spillthechai",
    kicker: "Ch. 4 — Sister network II",
    label: "SpillTheChai",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: [],
    title: "SpillTheChai",
  },
  {
    align: "right",
    body:
      "The camera settles. All three channels lit around the same mark — one pipeline producing a documentary, a creator persona, and a mother-daughter conversation. The system is awake. Work with it, or build against it.",
    clip: CLIP,
    id: "scene-access",
    kicker: "Ch. 5 — Access",
    label: "Access",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.1,
    tags: [],
    title: "Access.",
  },
];
