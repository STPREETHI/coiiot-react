import { Check } from "lucide-react";
import { comparisonRows, faqs, pricing } from "../lib/siteData";

export function PricingPage({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section muted" : "section pricing-page"}>
      <div className="section-heading">
        <p className="eyebrow">Reliable - Scalable - Cost-effective</p>
        <h2>Transparent pricing for coir factory IoT monitoring.</h2>
        <p>Hardware and support are shown separately. Final pricing depends on machine count, sensors, wiring distance, and selected modules.</p>
      </div>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article className="price-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <strong>{plan.device}</strong>
            <span>{plan.support}</span>
            {plan.items.map((item) => (
              <p key={item}><Check size={16} /> {item}</p>
            ))}
            <a className="button primary" href="#contact">Get started</a>
          </article>
        ))}
      </div>
      <div className="comparison-wrap">
        <h3>Feature comparison</h3>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr><th>Feature</th><th>Basic</th><th>Standard</th><th>Advanced</th><th>Premium</th></tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell === "Yes" ? <Check size={16} /> : cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="faq-grid">
        {faqs.map(([question, answer]) => (
          <article key={question}><h3>{question}</h3><p>{answer}</p></article>
        ))}
      </div>
    </section>
  );
}

