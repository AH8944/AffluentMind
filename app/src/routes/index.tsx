import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  id: "affluentmind101" | "niki" | "spillthechai";
  kicker: string;
  metric: string;
  metricLabel: string;
  summary: string;
  href: string | null;
  ctaGarment: "framed" | "oversized" | "dimmed";
  ctaLabel: string;
  alt: string;
  art: string;
  artPosition?: string;
};

const PROJECTS: Project[] = [
  {
    alt: "AffluentMind101 channel artwork — a minimal gold-on-black play signal.",
    art: "/assets/content/affluentmind101-poster.jpg",
    artPosition: "50% 40%",
    ctaGarment: "framed",
    ctaLabel: "Watch the channel on YouTube",
    href: "https://youtube.com/@AffluentMind101",
    id: "affluentmind101",
    kicker: "Faceless YouTube — Live",
    metric: "1.7M",
    metricLabel: "views on one video, channel under 30 days old",
    summary:
      "A faceless channel built on one premise: show how modern AI-content systems actually work, and let the argument be the content. No talking head. No personality cult. Just operational clarity from a channel where every render, script and edit is synthetic.",
  },
  {
    alt: "Niki channel artwork — a warm lit portrait of the persona.",
    art: "/assets/content/niki-poster.jpg",
    artPosition: "50% 45%",
    ctaGarment: "oversized",
    ctaLabel: "niki — UGC + ambassador",
    href: "https://instagram.com/heyitsniki2026",
    id: "niki",
    kicker: "AI creator persona — Live",
    metric: "120K+",
    metricLabel: "followers in roughly a month — all AI, every beat",
    summary:
      "Niki is a personality that does not exist as a person. She is a creator persona: scripted, voiced and shipped by the same model stack, every post. Built for UGC marketing and brand-ambassador collaborations, where the output reads native, not synthetic.",
  },
  {
    alt: "SpillTheChai artwork placeholder — a quiet warm tile with a single rising line.",
    art: "/assets/content/spillthechai-poster.jpg",
    artPosition: "50% 50%",
    ctaGarment: "dimmed",
    ctaLabel: "SpillTheChai — not live yet",
    href: null,
    id: "spillthechai",
    kicker: "Sister network — Not live",
    metric: "Soon",
    metricLabel: "a mother-and-daughter channel, filmed over chai",
    summary:
      "SpillTheChai is the next node on the constellation: a mother-and-daughter conversational channel where every scene and voice is generated. Life lessons, short scenes, chai. Warm, not corporate. The channel is not live yet.",
  },
];

function ArrowGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="aff__arrow"
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 13.5L13.5 4.5M13.5 4.5H6.1875M13.5 4.5V11.8125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`aff__card aff__card--${project.id}`}>
      <figure className="aff__card-media">
        <img
          alt={project.alt}
          className="aff__card-img"
          decoding="async"
          loading="lazy"
          src={project.art}
          style={
            project.artPosition
              ? { objectPosition: project.artPosition }
              : undefined
          }
        />
      </figure>

      <div className="aff__card-copy">
        <p className="aff__card-kicker">{project.kicker}</p>

        <div className="aff__card-metric">
          <p className="aff__card-number">{project.metric}</p>
          <p className="aff__card-number-caption">{project.metricLabel}</p>
        </div>

        <p className="aff__card-summary">{project.summary}</p>

        {project.ctaGarment === "framed" && project.href ? (
          <a
            className="aff__cta aff__cta--framed"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            <span className="aff__cta-framed-inner">
              <span>{project.ctaLabel}</span>
              <ArrowGlyph />
            </span>
          </a>
        ) : null}

        {project.ctaGarment === "oversized" && project.href ? (
          <a
            className="aff__cta aff__cta--oversized"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            <span className="aff__cta-oversized-line">
              {project.ctaLabel}
            </span>
            <span className="aff__cta-oversized-hint">
              Follow or pitch a collaboration on Instagram
            </span>
          </a>
        ) : null}

        {project.ctaGarment === "dimmed" ? (
          <p aria-hidden="true" className="aff__cta aff__cta--dimmed">
            <span className="aff__cta-dimmed-label">{project.ctaLabel}</span>
            <span className="aff__cta-dimmed-stamp">Coming soon</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

function RosterSection() {
  return (
    <section className="aff__roster" id="projects">
      <header className="aff__roster-header">
        <p className="aff__eyebrow">The network, rendered</p>
        <h2 className="aff__roster-title">
          Three channels. One system.{" "}
          <span className="aff__roster-title-accent">
            All of it AI.
          </span>
        </h2>
        <p className="aff__roster-lede">
          The constellation above was for show. Below is what it actually runs
          — the channels currently live and the one about to be.
        </p>
      </header>

      <div className="aff__roster-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="aff__proof" id="thesis">
      <p className="aff__proof-eyebrow">The thesis</p>
      <p className="aff__proof-line">
        If the line between generated and real has already dissolved — the only
        honest move left is to stop performing human labor and start running
        the systems. The Affluent Mind builds with that assumption on full
        display: every channel you scroll through was authored, voiced, and
        rendered without a camera.
      </p>
    </section>
  );
}

function ThesisSection() {
  return (
    <section className="aff__thesis" id="about">
      <div className="aff__thesis-rail">
        <span className="aff__thesis-rail-line" />
        <p className="aff__thesis-rail-note">Field note 01 — the system</p>
      </div>

      <div className="aff__thesis-body">
        <p className="aff__eyebrow">Field note</p>
        <h3 className="aff__thesis-heading">Systems over scripts</h3>
        <p className="aff__thesis-par">
          The channels above were not produced by a studio. They are running
          processes: once the system is defined, output compounds and the
          cost-per-ship drops to near zero. The work is in the taste, the
          parameters, and the pipeline — not in the rendering. If you are a
          brand looking for content at this fidelity, you are not buying ad
          space. You are buying into the system itself.
        </p>
      </div>
    </section>
  );
}

function FooterCta() {
  return (
    <footer className="aff__footer" id="contact">
      <p className="aff__footer-eyebrow">Say hello</p>
      <a className="aff__footer-cta" href="mailto:hello@affluentmind.ai">
        hello@affluentmind.ai
      </a>
      <p className="aff__footer-subline">
        Everything above was built with AI. So is this site.
      </p>
    </footer>
  );
}

function BrandMarquee() {
  return (
    <div aria-hidden="true" className="aff__marquee">
      <div className="aff__marquee-track">
        {Array.from({ length: 3 }).map((_, i) => (
          <p className="aff__marquee-run" key={i}>
            <span>@AffluentMind101</span>
            <span>@heyitsniki2026</span>
            <span>@SpillTheChai</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="aff__nav">
      <a className="aff__nav-brand" href="/">
        <img
          alt="The Affluent Mind"
          className="aff__nav-mark"
          height="34"
          src="/assets/brand/am-badge.png"
          width="34"
        />
        <span className="aff__nav-word">The Affluent Mind</span>
      </a>
      <nav aria-label="Channels" className="aff__nav-links">
        <a href="#projects">Projects</a>
        <a href="#thesis">Thesis</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Index() {
  return (
    <main className="aff">
      <Nav />
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <ProofSection />
      <BrandMarquee />
      <RosterSection />
      <ThesisSection />
      <FooterCta />
    </main>
  );
}
