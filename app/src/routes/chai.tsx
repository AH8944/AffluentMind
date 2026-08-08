import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chai")({
  component: Chai,
});

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
    <article className="chai__why-item">
      <p className="chai__why-index">{index}</p>
      <div>
        <h3 className="chai__why-title">{title}</h3>
        <p className="chai__why-body">{body}</p>
      </div>
    </article>
  );
}

function Chai() {
  return (
    <main className="aff chai">
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

      <section className="chai__hero">
        <div>
          <p className="aff__eyebrow">AI-native conversation channel · Mother &amp; daughter</p>
          <h1 className="chai__hero-title">
            SpillTheChai
            <br />
            WithMama.
          </h1>
          <p className="chai__hero-lede">
            An Indian-American mother and daughter, a cup of chai, and whatever
            went wrong today. Short, warm, filmed over tea. Built entirely with
            AI.
          </p>
          <p className="chai__hero-coming">Coming soon</p>
        </div>
        <figure className="chai__hero-media">
          <img
            alt="SpillTheChai — an AI-rendered still of two cups at a small table"
            decoding="async"
            fetchPriority="high"
            src="/assets/content/spillthechai-poster.jpg"
          />
        </figure>
      </section>

      <section className="chai__personae">
        <div className="chai__persona">
          <p className="chai__persona-name">Priya</p>
          <p className="chai__persona-role">The mother</p>
          <p className="chai__persona-line">
            In her forties, speaks in small metaphors. The slow voice of scale —
            the one who knows a bad week is not a bad life.
          </p>
        </div>
        <div className="chai__persona">
          <p className="chai__persona-name">Arya</p>
          <p className="chai__persona-role">The daughter</p>
          <p className="chai__persona-line">
            Eleven. Asks the question everyone else is avoiding. The fast voice
            that surfaces what the room has been stepping around.
          </p>
        </div>
      </section>

      <section className="chai__topics">
        <p className="aff__eyebrow">The episodes</p>
        <h2 className="chai__topics-heading">
          The moment's reason, not the moment's fix.
        </h2>
        <div className="chai__topics-list">
          <Why
            body="The weight a mother carries into her own career, home, and family — felt one quiet moment, not the whole identity, but real enough to name."
            index="01"
            title="Mom guilt"
          />
          <Why
            body="The version of rejection that arrives secondhand through stories about other people, and the fear it plants in the child who overhears it."
            index="02"
            title="Friend drama"
          />
          <Why
            body="The first earned dollar doesn't buy a thing. It teaches a 10-year-old what work is. Handled wrong, it can teach the opposite lesson instead."
            index="03"
            title="First money"
          />
          <Why
            body="The little engine that measures a life against an aunt's house, a cousin's shoes, a friend's lunch. It's not about the comparison — it's what the comparison is protecting."
            index="04"
            title="The quiet weight of comparison"
          />
        </div>
      </section>

      <section className="chai__system" aria-label="The production system">
        <p className="aff__eyebrow">Under the hood</p>
        <p className="chai__system-body">
          A full production system: character identity is locked to trained
          reference models so Priya and Arya stay recognizable across hundreds
          of renders. A codified brand system — warm cream, rani pink, and
          marigold over chai, Baloo 2 and Nunito Sans — drives a template
          library that composites the copy programmatically, with automated
          layout QC catching collisions and legibility failures before anything
          ships. Ideas, assets, credits, and analytics all route through a
          single operational database.
        </p>
      </section>

      <footer className="chai__foot">
        <p>The Affluent Mind · hello@affluentmind.ai</p>
      </footer>
    </main>
  );
}
