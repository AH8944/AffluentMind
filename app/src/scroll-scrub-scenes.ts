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
      "A single warm current in a void. Then a second. Then the geometry resolves into a thought-network — a head waking from a point of light.",
    clip: CLIP,
    id: "scene-awakening",
    kicker: "Ch. 0 — The Silence",
    label: "Awakening",
    linger: 0.15,
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["This is AI", "The thesis is the interface"],
    title: "Every project here is AI.",
  },
  {
    align: "right",
    body:
      "The threads wake. The brand mark is not drawn — it is a system of living threads that ignite and stay lit. The palette is the filament.",
    clip: CLIP,
    id: "scene-ignition",
    kicker: "Ch. 1 — Ignition",
    label: "Ignition",
    linger: 0.1,
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["Brushed gold filaments", "Threads not decoration"],
    title: "The network wakes.",
  },
  {
    align: "left",
    body:
      "The camera drifts toward a denser node. A faceless-instruction channel about how AI-content systems actually work — no talking head, the content is the argument.",
    clip: CLIP,
    id: "scene-affluentmind101",
    kicker: "Ch. 2 — Sister network I",
    label: "AffluentMind101",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["Faceless YouTube", "Instructional"],
    title: "AffluentMind101",
  },
  {
    align: "right",
    body:
      "The brightest node is a persona — a creator who scripts, voices and ships every beat of her own content. UGC-rate output at brand-partner fidelity.",
    clip: CLIP,
    id: "scene-niki",
    kicker: "Ch. 3 — Sister network II",
    label: "Niki",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["AI persona", "UGC + ambassador"],
    title: "Niki",
  },
  {
    align: "left",
    body:
      "A third node still coalescing — a mother-and-daughter channel filmed over chai. Life lessons, short. Not yet live.",
    clip: CLIP,
    id: "scene-spillthechai",
    kicker: "Ch. 4 — Sister network III",
    label: "SpillTheChai",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.0,
    tags: ["Coming soon", "Mother & daughter"],
    title: "SpillTheChai",
  },
  {
    align: "right",
    body:
      "Camera settles. The three sister networks are all lit around the central mark. This is what the journey was building to — the system fully awake.",
    clip: CLIP,
    id: "scene-access",
    kicker: "Ch. 5 — Access",
    label: "Work together",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 1.1,
    tags: ["The constellation, lit"],
    title: "Access.",
  },
];
