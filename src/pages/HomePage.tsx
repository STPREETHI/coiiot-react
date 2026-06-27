import { featureHighlights, homeHighlights, showcaseImages } from "../lib/siteData";
import { SolutionsOverview, Stats, Testimonials } from "../components/SiteSections";

export function HomePage() {
  return (
    <>
      <section id="home" className="hero payoda-hero">
        <div className="payoda-hero-inner">
          <p className="payoda-eyebrow">AI-Powered IoT Solutions for Coir Industries</p>
          <h1 className="payoda-h1">
            <span className="payoda-h1-black">Real-Time Coir Factory Monitoring.</span>
            <span className="payoda-h1-orange">Smarter Production Decisions.</span>
          </h1>
          <p className="payoda-subline">
            CoiioT helps coir manufacturers track pith loads, fibre bales, machine health, EB, water, labour, and reports from one connected IoT dashboard.
          </p>
          <div className="hero-actions payoda-actions">
            <a className="button primary payoda-btn-primary" href="#contact">Talk to Us</a>
            <a className="button ghost payoda-btn-ghost" href="#products">See how it works</a>
          </div>
        </div>
      </section>
      <section className="home-service-strip" aria-label="CoiioT highlights">
        {homeHighlights.map(({ title, text, Icon }) => (
          <article key={title}>
            <Icon size={26} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="hero-product-visual" aria-label="CoiioT platform preview">
        <img src={showcaseImages.pithPlatform} alt="CoiioT real-time coir production insights" />
      </section>
      <Stats />
      <section className="section split app-showcase">
        <div>
          <p className="eyebrow">Mobile monitoring</p>
          <h2>Monitor every detail from your phone.</h2>
          <p>
            Track production, performance, expenses, and reports from a clean CoiioT mobile dashboard built for daily factory decisions.
          </p>
          <div className="app-points">
            <span>Live production alerts</span>
            <span>Expense and report view</span>
            <span>Daily owner dashboard</span>
          </div>
          <a className="button primary" href="#contact">Request app demo</a>
        </div>
        <img src={showcaseImages.mobileApp} alt="CoiioT mobile app dashboard" />
      </section>
      <section className="section replica-about compact-copy">
        <div>
          <p className="eyebrow">Passionate - Dedicated - Professional</p>
          <h2>Built for coir factories that need live clarity.</h2>
          <p>
            CoiioT tracks production, machines, EB, water, labour, and reports in one simple dashboard.
          </p>
          <p>
            Less manual counting. Faster decisions. Better control over every shift.
          </p>
          <a className="button primary" href="#contact">Call support: 89250 29649</a>
        </div>
      </section>
      <section className="section split navy-band">
        <div>
          <p className="eyebrow">Helping your business practically</p>
          <h2>why choose CoiioT</h2>
          <p>
            CoiioT is the leading solution provider for coir industry to monitor their production through
            software and supporting ERP solutions.
          </p>
        </div>
        <div className="feature-grid">
          {featureHighlights.map(({ label, Icon }) => (
            <article className="feature" key={label}>
              <Icon size={26} />
              <h3>{label}</h3>
            </article>
          ))}
        </div>
      </section>
      <SolutionsOverview />
      <Testimonials />
    </>
  );
}

