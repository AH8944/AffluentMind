/**
 * Scene data for the scroll-scrub journey.
 *
 * Single-shot: ONE entry in `scenes`, ONE continuous clip scrubbed end-to-end
 * across the whole page. All chapter copy lives inside that scene's body.
 * The rail's six chapter links navigate to scroll positions within the single
 * scene; the engine never restarts or crossfades between clips.
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
 * Chapter markers — labels + scroll positions for the journey rail.
 * Each label is a plain-text label for the rail buttons; `position` is a
 * 0..1 fraction of the page's scrollable height where that chapter reads.
 * (positions chosen so the six paragraphs sit at thirds of the scroll range)
 */
export const journeyChapters = [
  { label: "Awakening", position: 0.0 },
  { label: "Ignition", position: 0.18 },
  { label: "Wealth", position: 0.36 },
  { label: "AI Influencer", position: 0.52 },
  { label: "Motivation", position: 0.68 },
  { label: "Access", position: 0.86 },
] as const;

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    body:
      "A single pinprick of gold in a warm void, then a second. The geometry resolves into the mark itself — not drawn, but assembled living. The first and densest node is a documentary channel about psychology and money, twelve long-form episodes shipped in the first eight weeks. A second node is brighter: an LA gym girl with a dry humor and a sign-off, her AI disclosure at the top of her bio, growing anyway. A third node is warming: an Indian-American mother and her daughter talking over a cup of chai. The camera settles. All three channels lit around the same mark — one pipeline producing a documentary, a creator persona, and a mother-daughter conversation. The system is awake.",
    clip: CLIP,
    id: "scene-main",
    kicker: "The Affluent Mind — the journey",
    label: "Awakening",
    mobileClip: MOBILE_CLIP,
    mobilePoster: MOBILE_POSTER,
    poster: POSTER,
    scroll: 5.5,
    tags: ["One film", "One scroll", "Every project is AI"],
    title: "Every project here is AI.",
  },
];
