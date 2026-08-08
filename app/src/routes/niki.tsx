import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/niki")({
  component: Niki,
});

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="niki__stat">
      <p className="niki__stat-n">{n}</p>
      <p className="niki__stat-label">{label}</p>
    </div>
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
    <article className="niki__why-item">
      <p className="niki__why-index">{index}</p>
      <div>
        <h3 className="niki__why-title">{title}</h3>
        <p className="niki__why-body">{body}</p>
      </div>
    </article>
  );
}

function Niki() {
  return (
    <main className="aff niki">
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
      </header>

      <section className="niki__hero">
        <div className="niki__hero-copy">
          <p className="aff__eyebrow">Creator persona · Brand partnerships</p>
          <h1 className="niki__hero-title">
            An it girl who
            <br />
            happens to be AI.
          </h1>
          <p className="niki__hero-sub">
            @heyitsniki2026 · 120K followers · Launched July 2026 · Los Angeles
          </p>
          <p className="niki__hero-lede">
            Niki is a fully AI-generated fitness and lifestyle creator. She went
            from zero to 120,000 followers in her first month with the AI
            disclosure sitting in the first line of her bio.
          </p>
        </div>
        <figure className="niki__hero-media">
          <img
            alt="Niki — AI-generated fitness and lifestyle creator persona"
            decoding="async"
            fetchPriority="high"
            src="/assets/content/niki-poster.jpg"
          />
        </figure>
      </section>

      <section className="niki__disclosure">
        <p className="niki__disclosure-line">
          The disclosure was the strategy. Niki is not a synthetic influencer
          passing as human. Her audience knows exactly what she is and follows
          anyway. Transparency earned the account credibility instead of
          costing it reach.
        </p>
      </section>

      <section className="niki__stats" aria-label="Performance">
        <Stat n="120K" label="Followers in month one" />
        <Stat n="900K+" label="Views, rolling 30 days" />
        <Stat n="Daily" label="Posting cadence, sustained" />
        <Stat n="3" label="Pillars: fitness, fashion, lifestyle" />
      </section>

      <section className="niki__persona">
        <p className="aff__eyebrow">Who she is</p>
        <h2 className="niki__persona-title">
          The friend who texts you from the squat rack.
        </h2>
        <p className="niki__persona-body">
          A 24-year-old LA gym girl with a dry sense of humor and a signature
          sign-off. Protein counts, PRs, rest-day fits, cold plunges, coffee
          runs. Confident and funny rather than aspirational-perfect — closer
          to a real training partner than the wellness account that makes you
          feel behind.
        </p>
      </section>

      <section className="niki__why" aria-label="Why brands work with Niki">
        <p className="aff__eyebrow">Why brands work with her</p>
        <h2 className="niki__why-heading">
          Production infrastructure, not a person with a calendar.
        </h2>
        <div className="niki__why-list">
          <Why
            body="Every image is generated. A brand's product can be shot in any colorway, any setting, any number of variations — including looks the brand has never photographed on a human."
            index="01"
            title="Any look, in volume"
          />
          <Why
            body="Same-day turnaround. There is no travel, no scheduling, and no reshoot cost. Campaign concepts can be tested in volume before anything goes live."
            index="02"
            title="No calendar"
          />
          <Why
            body="She sits naturally in the ALO, Lululemon, Vuori tier: athleisure, recovery, wellness, and the everyday-luxury products that live between the gym and the coffee shop."
            index="03"
            title="The right shelf"
          />
        </div>
      </section>

      <section className="niki__formats" aria-label="Formats">
        <p className="aff__eyebrow">Formats</p>
        <ul className="niki__formats-list">
          <li>Feed posts</li>
          <li>Reels with native audio</li>
          <li>Carousels</li>
          <li>Full brand-collab mockups — product placed in-scene, in-brand, ready to review</li>
        </ul>
      </section>

      <section className="niki__cta">
        <p className="niki__cta-eyebrow">UGC · Affiliate · Ambassador</p>
        <a className="niki__cta-line" href="mailto:hello@affluentmind.ai?subject=Working%20with%20Niki">
          Put Niki to work.
        </a>
        <p className="niki__cta-sub">
          Or see her live on{" "}
          <a
            className="niki__cta-inline"
            href="https://instagram.com/heyitsniki2026"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          .
        </p>
      </section>

      <footer className="niki__foot">
        <p>The Affluent Mind · hello@affluentmind.ai</p>
      </footer>
    </main>
  );
}
