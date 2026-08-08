import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  id: "affluentmind" | "niki" | "spillthechai";
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
    alt: "The Affluent Mind — a flag-and-signal mark on dark ground.",
    art: "/assets/content/affluentmind101-poster.jpg",
    artPosition: "50% 40%",
    ctaGarment: "framed",
    ctaLabel: "Watch on YouTube",
    href: "https://www.youtube.com/@TheAffluentMind101",
    id: "affluentmind",
    kicker: "AI-produced documentary channel — Live",
    metric: "2.2M",
    metricLabel:
      "views, all AI-generated · 24K subscribers · 1.7M on a single episode",
    summary:
      "A premium documentary-style channel about behavioral finance: psychology meets money, twelve long-form episodes built on a strict weekly cadence in the first eight weeks. Each episode is roughly 8 minutes of generated 4K visuals, a consistent synthetic narrator, and custom animated data-visualisations — every frame AI, no shooting, no stock. 96 short-form cuts derive from the same assets at zero marginal cost.",
  },
  {
    alt: "Niki channel artwork — a warm lit portrait of the persona.",
    art: "/assets/content/niki-poster.jpg",
    artPosition: "50% 50%",
    ctaGarment: "oversized",
    ctaLabel: "The brand case for Niki",
    href: "/niki",
    id: "niki",
    kicker: "AI creator persona — Live",
    metric: "120K+",
    metricLabel: "followers in roughly a month — AI disclosed from day one",
    summary:
      "Niki is production infrastructure for brands: a 24-year-old LA fitness-and-lifestyle persona, fully AI-generated, whose bio leads with the disclosure. Audiences follow because the content reads native. Brands work with her for UGC, affiliate and ambassador deals because there is no calendar, no reshoot cost, and no limit on looks — any product, in any colorway, same-day.",
  },
  {
    alt: "SpillTheChai — two steaming cups over a small wooden table.",
    art: "/assets/content/spillthechai-poster.jpg",
    artPosition: "50% 50%",
    ctaGarment: "dimmed",
    ctaLabel: "SpillTheChai — coming soon",
    href: "/chai",
    id: "spillthechai",
    kicker: "AI-illustrated, heartfelt — coming soon",
    metric: "Priya + Arya",
    metricLabel: "Two voices, one cup of chai",
    summary:
      "Priya, a mother in her forties, speaks in small metaphors. Arya, her daughter, asks the question everyone else is avoiding. Between them sits a cup of chai and whatever went wrong today: mom guilt, friend drama, procrastination, first money decisions, the quiet weight of comparison. The show's rule: always show why the moment happened, not only how to fix it, and leave the viewer with something they can actually use.",
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
            {...(project.href.startsWith("/")
              ? {}
              : { rel: "noreferrer", target: "_blank" })}
          >
            <span className="aff__cta-oversized-line">
              {project.ctaLabel}
            </span>
            <span className="aff__cta-oversized-hint">
              Read the pitch — UGC, affiliate, ambassador
            </span>
          </a>
        ) : null}

        {project.ctaGarment === "dimmed" ? (
          project.href ? (
            <a className="aff__cta aff__cta--dimmed" href={project.href}>
              <span className="aff__cta-dimmed-stamp">Coming soon</span>
            </a>
          ) : (
            <p aria-hidden="true" className="aff__cta aff__cta--dimmed">
              <span className="aff__cta-dimmed-stamp">Coming soon</span>
            </p>
          )
        ) : null}
      </div>
    </article>
  );
}

function RosterSection() {
  return (
    <section className="aff__roster" id="projects">
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
            <span>@TheAffluentMind101</span>
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
      <nav aria-label="Sections" className="aff__nav-links">
        <a href="#projects">Projects</a>
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
