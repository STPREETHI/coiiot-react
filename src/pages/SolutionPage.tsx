import { Check, Zap } from "lucide-react";
import { solutionNarrative, type Solution } from "../lib/siteData";
import { PageHero, Testimonials } from "../components/SiteSections";

export function SolutionPage({ solution }: { solution: Solution }) {
  const narrative = solutionNarrative[solution.slug];
  return (
    <>
      <PageHero title={solution.title} eyebrow={solution.eyebrow} image={solution.heroImage} text={solution.summary} />
      <section className="section split">
        <div>
          <p className="eyebrow">Cutting edge technology</p>
          <h2>What this module tracks</h2>
          <div className="mini-list">
            {solution.bullets.map((bullet) => (
              <span key={bullet}><Check size={18} /> {bullet}</span>
            ))}
          </div>
        </div>
        <div className="metric-panel">
          <Zap />
          <h3>Real-time factory visibility</h3>
          <p>Data reaches dashboards and mobile views quickly, helping teams act before small issues become production losses.</p>
        </div>
      </section>
      {narrative && (
        <section className="section solution-deep-dive">
          <article>
            <p className="eyebrow">Problem solved</p>
            <h3>Why factories need this</h3>
            {narrative.problem.map((item) => <p key={item}><Check size={16} /> {item}</p>)}
          </article>
          <article>
            <p className="eyebrow">How it works</p>
            <h3>Sensor to dashboard flow</h3>
            {narrative.workflow.map((item) => <p key={item}><Check size={16} /> {item}</p>)}
          </article>
          <article>
            <p className="eyebrow">Business benefit</p>
            <h3>What improves</h3>
            {narrative.benefits.map((item) => <p key={item}><Check size={16} /> {item}</p>)}
          </article>
        </section>
      )}
      <section className="section">
        <div className="card-row">
          {solution.cards.map((card) => (
            <article className="media-card" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section cta-band compact-cta">
        <div>
          <p className="eyebrow">Request a demo</p>
          <h2>See how {solution.title} fits your factory workflow.</h2>
        </div>
        <a className="button primary" href="#contact">Book module demo</a>
      </section>
      <Testimonials />
    </>
  );
}

