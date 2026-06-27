import { Check } from "lucide-react";
import type { ProductDetail } from "../lib/siteData";
import { PageHero } from "../components/SiteSections";

export function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <>
      <PageHero title={product.name} eyebrow={product.eyebrow} image={product.heroImage} text={product.summary} />
      <section className="section split product-detail-intro">
        <div>
          <p className="eyebrow">Product overview</p>
          <h2>Built around real coir factory workflows.</h2>
          <p>{product.overview}</p>
        </div>
        <div className="metric-panel">
          <h3>What it helps you control</h3>
          <div className="mini-list">
            {product.highlights.map((item) => (
              <span key={item}><Check size={18} /> {item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section product-screenshots">
        <div className="section-heading">
          <p className="eyebrow">Dashboard views</p>
          <h2>Live production screens designed for daily review.</h2>
        </div>
        <div className={product.screenshots.length === 1 ? "product-shot-grid single" : "product-shot-grid"}>
          {product.screenshots.map((shot) => (
            <article className="product-shot-card" key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </article>
          ))}
        </div>
      </section>
      <section className="section cta-band compact-cta">
        <div>
          <p className="eyebrow">See it in your factory flow</p>
          <h2>Request a guided demo for {product.name}.</h2>
        </div>
        <a className="button primary" href="#contact">Request demo</a>
      </section>
    </>
  );
}
