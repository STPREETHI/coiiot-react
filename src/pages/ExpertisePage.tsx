import { img } from "../lib/siteData";
import { PageHero } from "../components/SiteSections";
import { PricingPage } from "./PricingPage";

export function ExpertisePage() {
  return (
    <>
      <PageHero title="IoT implementation built around your coir factory workflow." eyebrow="What we do" image={img("2026/04/Coiiot-add.png")} />
      <section className="section process">
        {[
          ["Site study", "We map your machines, production stages, EB usage, water flow, and reporting needs."],
          ["IoT setup", "Sensors and dashboards are installed with minimal disruption to daily production."],
          ["Training", "Your team gets mobile dashboard access, reports, and support for smooth adoption."],
        ].map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <PricingPage compact />
    </>
  );
}

