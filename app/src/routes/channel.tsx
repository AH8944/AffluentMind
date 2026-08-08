import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/channel")({
  component: Channel,
});

function BigStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="chan__stat">
      <p className="chan__stat-n">{n}</p>
      <p className="chan__stat-label">{label}</p>
    </div>
  );
}

function Episode({
  index,
  hook,
  line,
}: {
  index: string;
  hook: string;
  line: string;
}) {
  return (
    <article className="chan__episode">
      <p className="chan__episode-index">{index}</p>
      <div className="chan__episode-body">
        <p className="chan__episode-hook">{hook}</p>
        <p className="chan__episode-line">{line}</p>
      </div>
    </article>
  );
}

function Why({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <article className="chan__why-row">
      <p className="chan__why-idx">{index}</p>
      <div>
        <h3 className="chan__why-title">{title}</h3>
        <p className="chan__why-body">{body}</p>
      </div>
    </article>
  );
}

function Channel() {
  return (
    <main className="aff chan">
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
          <a href="/">Home</a>
          <a href="https://www.youtube.com/@TheAffluentMind101" rel="noreferrer" target="_blank">
            YouTube
          </a>
        </nav>
      </header>

      <section className="chan__hero">
        <div>
          <p className="aff__eyebrow">AI-produced YouTube channel · Behavioral finance</p>
          <h1 className="chan__hero-title">
            The Affluent
            <br />
            Mind.
          </h1>
          <p className="chan__hero-lede">
            A premium documentary-style channel built entirely by an AI
            pipeline. Twelve long-form episodes shipped on a weekly cadence
            in the first eight weeks. Every frame generated, every fact
            checked against the academic record.
          </p>
        </div>
        <figure className="chan__hero-media">
          <img
            alt="The Affluent Mind channel art"
            decoding="async"
            fetchPriority="high"
            src="/assets/content/affluentmind101-poster.jpg"
          />
        </figure>
      </section>

      <section className="chan__stats" aria-label="Channel performance">
        <BigStat n="2.2M" label="Views, total" />
        <BigStat n="24K" label="Subscribers" />
        <BigStat n="1.7M" label="Views, single episode" />
        <BigStat n="96" label="Short-form cuts derived" />
        <BigStat n="12" label="Long-form episodes, first 8 weeks" />
      </section>

      <section className="chan__topics">
        <p className="aff__eyebrow">Where psychology meets money</p>
        <h2 className="chan__topics-heading">
          Why the brain treats debt as free.
        </h2>
        <div className="chan__episodes">
          <Episode
            hook="Why budgets break on the 20th of the month."
            index="Ep. 04"
            line="Willpower is a depreciating asset — by the third week, the prefrontal cortex is running on the same chemical that makes time feel slower."
          />
          <Episode
            hook="Why intelligence doesn't protect wealth."
            index="Ep. 07"
            line="High-IQ people don't out-earn the bias they intellectually understand. Knowing the sunk-cost fallacy doesn't stop it from working."
          />
          <Episode
            hook="Why nobody is ruined by a bad decade — only a bad Tuesday."
            index="Ep. 10"
            line="Catastrophe is a clear day. Real financial damage is slow, psychological, and always voluntary."
          />
          <Episode
            hook="Why the brain treats debt as free."
            index="Ep. 01"
            line="The dopamine system prices the future like a raincheck it never intends to cash."
          />
        </div>
      </section>

      <section className="chan__why" aria-label="Why the channel proves the pipeline">
        <p className="aff__eyebrow">The system underneath</p>
        <h2 className="chan__why-heading">
          One weekly episode is a retail product. Twelve in eight weeks is a factory.
        </h2>
        <div className="chan__why-rows">
          <Why
            body="~65 generated 4K visuals per episode. Custom animated data-visualisations. A consistent synthetic narrator. Assembled by an automated build system with its own quality gates. No shooting. No stock. No editor."
            index="01"
            title="Every frame generated, zero shoots"
          />
          <Why
            body="96 short-form cuts derived from the same assets. Scripts, thumbnails, narration, montage — one source, many channels. Shorts pull audience; long-form compounds retention."
            index="02"
            title="The derivatives are free"
          />
          <Why
            body="1.7M views on a single episode, 24K subscribers, and an audience that arrived for a story and stayed for the method. The channel is the proof that the pipeline works at pace."
            index="03"
            title="Proof at speed"
          />
        </div>
      </section>

      <section className="chan__cta">
        <p className="chan__cta-eyebrow">The flagship</p>
        <a
          className="chan__cta-line"
          href="https://www.youtube.com/@TheAffluentMind101"
          rel="noreferrer"
          target="_blank"
        >
          Watch The Affluent Mind on YouTube
        </a>
        <p className="chan__cta-sub">
          New long-form episode every week.
        </p>
      </section>

      <footer className="chan__foot">
        <p>The Affluent Mind · hello@affluentmind.ai</p>
      </footer>
    </main>
  );
}
