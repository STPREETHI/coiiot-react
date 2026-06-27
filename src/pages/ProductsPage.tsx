import { img, productFamilies, showcaseImages } from "../lib/siteData";
import { PageHero, SolutionsOverview } from "../components/SiteSections";

export function ProductsPage() {
  return (
    <>
      <PageHero title="CoiioT products for smarter coir production." eyebrow="Products" image={img("2026/04/Screenshot-2026-04-13-164642.png")} />
      <section className="section product-catalog">
        <div className="section-heading">
          <p className="eyebrow">CoiioT product family</p>
          <h2>IoT production tracking, ERP support, and resource monitoring in one ecosystem.</h2>
          <p>Start with CoiioT Pulse, then add modules for pith, fibre, EB, water, labour, expenses, and reports.</p>
        </div>
        <div className="product-family-grid">
          {productFamilies.map((product) => (
            <a className="product-family-card" href={product.href} key={product.name}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>
                <div className="chip-row">
                  {product.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="section product-proof">
        <img src={showcaseImages.pithPlatform} alt="CoiioT real-time pith production platform" />
        <div>
          <p className="eyebrow">Real-time insights</p>
          <h2>One platform for pith loads, blocks, fibre bales, water, energy, and reports.</h2>
          <p>
            Use CoiioT Pulse to see every key production signal from the factory floor in one place.
          </p>
        </div>
      </section>
      <SolutionsOverview />
      <section className="section cta-band">
        <div>
          <p className="eyebrow">Need a setup recommendation?</p>
          <h2>Tell us your machines and production flow. We will map the right CoiioT modules.</h2>
        </div>
        <a className="button primary" href="#contact">Request product guidance</a>
      </section>
    </>
  );
}

