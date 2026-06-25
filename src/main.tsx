import React from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3,
  Check,
  ChevronRight,
  Cpu,
  Droplets,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import "./style.css";

const img = (path: string) => `/uploads/${path}`;

type Solution = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  heroImage: string;
  icon: React.ComponentType<{ size?: number }>;
  bullets: string[];
  cards: { title: string; text: string; image: string }[];
};

const nav = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Pricing & Features", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  ["300+", "Business days"],
  ["1GB+", "Production data"],
  ["20+", "Successful clients"],
  ["24/7", "Support rhythm"],
];

const solutions: Solution[] = [
  {
    slug: "production-tracking",
    title: "Production Tracking",
    eyebrow: "Optimize - boost - improve",
    summary:
      "Track pith loads, pith blocks, and fibre bale production live from raw material intake to finished goods.",
    heroImage: img("2026/04/2b087d46-682f-43d9-b644-1fb058bfd5ac.png"),
    icon: PackageCheck,
    bullets: [
      "Accurate live pith load counts",
      "Instant block production updates in the app",
      "Shift-wise fibre bale tracking with weight visibility",
    ],
    cards: [
      {
        title: "Pith loads",
        text: "Get cubic-foot load production counts with EB tracking and production summary reports.",
        image: img("2026/04/Screenshot-2026-03-17-111524.png"),
      },
      {
        title: "Pith blocks",
        text: "Monitor pith block output instantly and track shift-wise production without manual dependency.",
        image: img("2026/04/Screenshot-2026-04-14-105408.png"),
      },
      {
        title: "Fibre bales",
        text: "Track bales produced and weighed simultaneously for better production control.",
        image: img("2026/04/Screenshot-2026-04-14-115728.png"),
      },
    ],
  },
  {
    slug: "machine-tracker",
    title: "Machine Monitoring",
    eyebrow: "Prevention - protection - production",
    summary:
      "Protect machines from overload, monitor run-time, identify idle time, and improve equipment efficiency.",
    heroImage: img("2026/04/a83fa0e2-ce65-432d-a576-afb863b929e7-1.png"),
    icon: Gauge,
    bullets: [
      "Machine on, off, idle, and overload state tracking",
      "Runtime analytics for utilization improvements",
      "Early signals that prevent machine damage",
    ],
    cards: [
      {
        title: "Overload protection",
        text: "Detect stress and overloaded conditions instantly to keep equipment safe.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_13_25-PM.png"),
      },
      {
        title: "Idle time",
        text: "Understand inactive equipment gaps and reduce production losses.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_08_59-PM.png"),
      },
      {
        title: "Efficiency",
        text: "Measure machine performance and output with accurate real-time data.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_22_08-PM.png"),
      },
    ],
  },
  {
    slug: "resource-management",
    title: "Resource Management",
    eyebrow: "Monitor - limit - grow",
    summary:
      "Track EB units, water level, and water consumption so factories reduce wastage and operate sustainably.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-20-2026-05_22_05-PM.png"),
    icon: Droplets,
    bullets: [
      "Real-time EB usage insights",
      "Live sump and overhead tank level monitoring",
      "Accurate water consumption control",
    ],
    cards: [
      {
        title: "EB consumption",
        text: "Identify high energy usage areas and reduce unnecessary power costs.",
        image: img("2026/04/Screenshot-2026-04-14-125214.png"),
      },
      {
        title: "Water levels",
        text: "Avoid shortages and overflow issues with continuous level tracking.",
        image: img("2026/04/Screenshot-2026-04-13-171629.png"),
      },
      {
        title: "Water usage",
        text: "Measure water use across processes and support sustainable operations.",
        image: img("2026/04/5112bb28-d6ca-47a7-b945-1ce6c8ef75ef.png"),
      },
    ],
  },
  {
    slug: "labours-management",
    title: "Labours Management",
    eyebrow: "Workforce clarity",
    summary:
      "Manage task allocation, shift attendance, productivity, and payroll from a clean operations dashboard.",
    heroImage: img("2026/04/Screenshot-2026-04-21-095103.png"),
    icon: Users,
    bullets: [
      "Worker-wise task allocation",
      "Shift and overtime tracking",
      "Automated wage and salary calculation",
    ],
    cards: [
      {
        title: "Task allocation",
        text: "Assign workers by shift and track productivity across daily operations.",
        image: img("2026/04/Screenshot-2026-04-21-094652-1.png"),
      },
      {
        title: "Attendance",
        text: "Generate daily and monthly attendance reports with instant updates.",
        image: img("2026/04/Screenshot-2026-04-21-094624.png"),
      },
      {
        title: "Payroll",
        text: "Reduce manual errors with wage calculation connected to real work data.",
        image: img("2026/04/Screenshot-2026-04-21-094535.png"),
      },
    ],
  },
  {
    slug: "reports",
    title: "Data-driven BI Reports",
    eyebrow: "Insight engine",
    summary:
      "Visualize production, compare shifts, generate summaries, and make decisions with reliable factory data.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-21-2026-09_21_02-AM.png"),
    icon: BarChart3,
    bullets: [
      "Live production dashboards",
      "Auto-generated shift and resource reports",
      "Profit, loss, and operational insights",
    ],
    cards: [
      {
        title: "Visualization",
        text: "See production trends and performance comparisons at a glance.",
        image: img("2022/09/business-task-completion.jpg"),
      },
      {
        title: "Reports",
        text: "Create shift-wise production data and expense summaries automatically.",
        image: img("2026/04/ChatGPT-Image-Apr-21-2026-09_30_11-AM.png"),
      },
      {
        title: "Decisions",
        text: "Turn resource patterns into smart operational decisions.",
        image: img("2026/04/ChatGPT-Image-Apr-21-2026-09_32_05-AM.png"),
      },
    ],
  },
  {
    slug: "iot-monitoring",
    title: "IoT Based Monitoring",
    eyebrow: "Connected factory",
    summary:
      "Connect production, machines, EB, water, and reports in one scalable IoT monitoring platform.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-20-2026-09_57_03-PM.png"),
    icon: Cpu,
    bullets: [
      "Track all production lines",
      "Maintain machine health and active states",
      "Use EB and water resources effectively",
    ],
    cards: [
      {
        title: "Machine states",
        text: "Monitor idle, off, efficient, and overloaded machine conditions.",
        image: img("2026/04/a83fa0e2-ce65-432d-a576-afb863b929e7-1.png"),
      },
      {
        title: "Production",
        text: "Increase production with live pith loads, block, and bale monitoring.",
        image: img("2026/04/Screenshot-2026-04-13-164642.png"),
      },
      {
        title: "Resources",
        text: "Minimize EB consumption and manage live sump and OHT water levels.",
        image: img("2022/09/ChatGPT-Image-Apr-20-2026-09_38_56-PM.png"),
      },
    ],
  },
];

const pricing = [
  { name: "Basic", device: "₹25,000", support: "₹5,000 / year", items: ["Pith production", "Power consumption"] },
  {
    name: "Standard",
    device: "₹55,000",
    support: "₹10,000 / year",
    items: ["Pith production", "Bale counter", "Pith counter", "Power consumption"],
  },
  {
    name: "Advanced",
    device: "₹75,000",
    support: "₹15,000 / month",
    items: ["Pith production", "Bale and pith counter", "Power consumption", "Water meter", "Tank level"],
  },
  {
    name: "Premium",
    device: "₹1,50,000",
    support: "₹20,000 / month",
    items: ["Pith production", "Bale and pith counter", "Power consumption", "Water meter", "Tank level", "Pith measurement"],
  },
];

const testimonials = [
  {
    name: "Hariprasath",
    company: "HP Cocos",
    text: "CoiioT brings complete visibility to fibre, pith, and block production with accurate resource usage data.",
  },
  {
    name: "Ramesh",
    company: "Ramesh Coirs",
    text: "The system minimizes manual errors and improves production planning with real-time tracking.",
  },
  {
    name: "Jagadeewaran",
    company: "Alam Cocos",
    text: "Pith blocks, fibre bales, loads, and resource usage are now monitored in one connected system.",
  },
];

const featureHighlights: { label: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { label: "Experienced IoT team", Icon: Factory },
  { label: "Data-driven reports", Icon: BarChart3 },
  { label: "Digital solutions", Icon: Cpu },
  { label: "Customer support", Icon: ShieldCheck },
];

const homeHighlights: { title: string; text: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { title: "experienced team", text: "IoT developers", Icon: Users },
  { title: "digital solutions", text: "Data-driven reports", Icon: BarChart3 },
  { title: "24/7 support", text: "Call support to customers", Icon: Phone },
  { title: "applicable areas", text: "Coir Industry", Icon: Factory },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [page, setPage] = React.useState(location.hash.replace("#", "") || "home");

  React.useEffect(() => {
    const onHash = () => {
      setPage(location.hash.replace("#", "") || "home");
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);

  const solution = solutions.find((item) => item.slug === page);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {solution ? (
          <SolutionPage solution={solution} />
        ) : page === "about" ? (
          <AboutPage />
        ) : page === "expertise" ? (
          <ExpertisePage />
        ) : page === "products" ? (
          <ProductsPage />
        ) : page === "pricing" ? (
          <PricingPage />
        ) : page === "contact" ? (
          <ContactPage />
        ) : page === "privacy-policy" ? (
          <PrivacyPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CoiioT home">
        <img src={img("2026/04/coiiot_transparent.png")} alt="CoiioT" />
      </a>
      <button className="icon-button mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a className="nav-cta" href="#contact">Request callback</a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="hero original-home">
        <div className="hero-copy">
          <h1>making your business profitable for today & tomorrow</h1>
          <p>
            Inspiring customers & supporting through experience
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">our products <ChevronRight size={18} /></a>
            <a className="button ghost" href="#expertise">learn more</a>
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
      <Stats />
      <section className="section split replica-about">
        <div>
          <p className="eyebrow">Passionate - Dedicated - Professional</p>
          <h2>its' not about business, it's about YOU!</h2>
          <p>
            To deliver precise IoT-powered solutions that monitor, count, and optimize every pith block
            in real time, driving consistent production efficiency and meeting the demands of a global marketplace.
          </p>
          <p>
            To transform pith block production by integrating technology with traditional practices, creating
            scalable, transparent operations through intelligent monitoring and decision-making for future industries.
          </p>
          <p>
            Our foundation is built on Accuracy, Innovation, and Transparency. We empower coir businesses to uphold
            quality, improve operations, and achieve efficiency through monitoring and performance insights.
          </p>
          <a className="button primary" href="#contact">Call support: 89250 29649</a>
        </div>
        <div className="replica-images">
          <img src={img("2026/04/IMIK-Technologies414-A-Tex-park-RoadNehru-Nagar-WestCoimbatore-641014-10.png")} alt="CoiioT dashboard view" />
          <img src={img("2026/04/IMIK-Technologies414-A-Tex-park-RoadNehru-Nagar-WestCoimbatore-641014-9.png")} alt="CoiioT mobile dashboard view" />
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

function Stats() {
  return (
    <section className="stats">
      {stats.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function SolutionsOverview() {
  return (
    <section className="section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Applicable areas</p>
        <h2>Smart monitoring for every part of the factory.</h2>
        <p>Production, machine health, labour, resources, BI reporting, and IoT monitoring work together as one practical system.</p>
      </div>
      <div className="solution-grid">
        {solutions.map((item) => (
          <a className="solution-card" href={`#${item.slug}`} key={item.slug}>
            <item.icon size={28} />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span>View details <ChevronRight size={16} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero title="We drive success in everyday business." eyebrow="Who we are" image={img("2022/09/about-us-2.jpg")} />
      <Stats />
      <section className="section split">
        <img className="rounded-image" src={img("2022/09/hero-image-1.jpg")} alt="CoiioT team working with data" />
        <div>
          <p className="eyebrow">Customer-centric approach</p>
          <h2>Smart, reliable, and transparent operations.</h2>
          <p>
            We put customers at the heart of every operation with data-driven solutions. CoiioT improves service
            quality with faster responses, accurate information, and long-term operational value.
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

function ExpertisePage() {
  return (
    <>
      <PageHero title="It is not about business, it is about you." eyebrow="What we do" image={img("2026/04/Coiiot-add.png")} />
      <section className="section process">
        {[
          ["Brainstorming", "We study your workflow, production challenges, and monitoring points before installation."],
          ["Execution", "Sensors and dashboards are installed with minimal disruption and tested for accurate data flow."],
          ["Delivery", "Your team receives training, support, and a scalable system for ongoing operations."],
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

function ProductsPage() {
  return (
    <>
      <PageHero title="Products built for coir productivity." eyebrow="Products" image={img("2026/04/Screenshot-2026-04-13-164642.png")} />
      <SolutionsOverview />
    </>
  );
}

function PricingPage({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section muted" : "section pricing-page"}>
      <div className="section-heading">
        <p className="eyebrow">Reliable - Scalable - Cost-effective</p>
        <h2>Simple pricing for smart monitoring.</h2>
        <p>Choose a package based on your operational needs. Pricing can vary according to installation scope.</p>
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
    </section>
  );
}

function SolutionPage({ solution }: { solution: Solution }) {
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
      <Testimonials />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero title="Let us talk about your next project." eyebrow="Contact us" image={img("2022/10/send-email.jpg")} />
      <section className="section contact-grid">
        <article><MapPin /><h3>Office location</h3><p>Nehru Nagar West, Coimbatore</p></article>
        <article><Phone /><h3>Contact our team</h3><p>89250 29649</p></article>
        <article><Mail /><h3>Working hours</h3><p>Monday to Saturday, 9 am - 6 pm</p></article>
      </section>
      <section className="section form-section">
        <div>
          <p className="eyebrow">Request a callback</p>
          <h2>Get started quickly with expert installation support.</h2>
          <p>Contact the team for setup, guidance, and complete system integration at your facility.</p>
        </div>
        <form>
          <input placeholder="Name" />
          <input placeholder="Phone" />
          <input placeholder="Company" />
          <textarea placeholder="Tell us what you want to monitor" />
          <button className="button primary" type="button">Send query</button>
        </form>
      </section>
    </>
  );
}

function PrivacyPage() {
  return (
    <section className="section legal">
      <p className="eyebrow">Last updated: May 29, 2025</p>
      <h1>Privacy Policy</h1>
      <p>
        CoiioT uses smart automation and IoT to track and manage coir production in real time. This notice explains
        how personal information may be collected, processed, stored, and protected when using the website, portal,
        or mobile application.
      </p>
      {[
        ["Information we collect", "Phone numbers, email addresses, passwords, application data, device identifiers, operating system details, IP address, browser information, and usage data."],
        ["How we process information", "Information is used to provide services, improve products, communicate with users, prevent fraud, maintain security, and comply with legal obligations."],
        ["Sharing and retention", "Information is shared only when required for service delivery, operations, compliance, or security. Records are retained for the period necessary to provide the services."],
        ["Your rights", "Depending on applicable law, users may request access, correction, deletion, or other actions regarding their personal information."],
      ].map(([title, text]) => (
        <article key={title}><h2>{title}</h2><p>{text}</p></article>
      ))}
      <p>Contact: <a href="mailto:support@coiiot.in">support@coiiot.in</a></p>
    </section>
  );
}

function PageHero({ title, eyebrow, image, text }: { title: string; eyebrow: string; image: string; text?: string }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text || "Drive smarter decisions with real-time insights, monitoring, and automation built for coir industry operations."}</p>
      </div>
      <img src={image} alt={title} />
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section muted">
      <div className="section-heading">
        <p className="eyebrow">What people are saying</p>
        <h2>Trusted by coir businesses.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.company}>
            <p>{item.text}</p>
            <strong>{item.name}</strong>
            <span>{item.company}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={img("2026/04/coiiot_transparent.png")} alt="CoiioT" />
        <p>IoT monitoring, ERP records, and production intelligence for coir industries.</p>
      </div>
      <div>
        <a href="#privacy-policy">Privacy policy</a>
        <a href="#contact">Contact</a>
        <a href="#pricing">Pricing</a>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
