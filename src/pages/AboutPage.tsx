import { Check } from "lucide-react";
import { img } from "../lib/siteData";
import { PageHero, Stats } from "../components/SiteSections";

export function AboutPage() {
  return (
    <>
      <PageHero title="We help coir businesses run with real-time clarity." eyebrow="Who we are" image={img("2022/09/about-us-2.jpg")} />
      <Stats />
      <section className="section split">
        <img className="rounded-image" src={img("2022/09/hero-image-1.jpg")} alt="CoiioT team working with data" />
        <div>
          <p className="eyebrow">Customer-centric approach</p>
          <h2>Smart, reliable, and transparent coir operations.</h2>
          <p>
            CoiioT gives owners and production teams accurate factory data, faster reports, and better control
            over output, resources, and daily operations.
          </p>
          <div className="mini-list">
            <span><Check size={18} /> 19 years of experience</span>
            <span><Check size={18} /> Strong client relationships</span>
            <span><Check size={18} /> Proven customer satisfaction</span>
          </div>
        </div>
      </section>
    </>
  );
}

