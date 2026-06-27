import { ChevronRight } from "lucide-react";
import { img, solutions, stats, testimonials } from "../lib/siteData";

export function Stats() {
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


export function SolutionsOverview() {
  return (
    <section className="section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Applicable areas</p>
        <h2>Coir production monitoring for every part of the factory.</h2>
        <p>Track production, machine health, labour, EB, water, BI reports, and IoT alerts in one practical system.</p>
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


export function PageHero({ title, eyebrow, image, text }: { title: string; eyebrow: string; image: string; text?: string }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text || "Use real-time IoT insights, monitoring, and automation to improve daily coir factory operations."}</p>
      </div>
      <img src={image} alt={title} />
    </section>
  );
}


export function Testimonials() {
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


export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={img("2026/06/coiiot-logo-real.png")} alt="CoiioT Real-Time Insights" />
          <p>AI-powered IoT monitoring, ERP records, and production intelligence for coir industries.</p>
          <a className="footer-demo" href="#contact">Request callback</a>
        </div>
        <div className="footer-col">
          <h3>Products</h3>
          <a href="#coiiot-pulse">CoiioT Pulse</a>
          <a href="#pith-coiiot">Pith CoiioT</a>
          <a href="#fibre-coiiot">Fibre CoiioT</a>
          <a href="#growbag-coiiot">Growbag CoiioT</a>
          <a href="#coiiot-books">CoiioT Books</a>
        </div>
        <div className="footer-col">
          <h3>Expertise</h3>
          <a href="#production-tracking">Production Tracking</a>
          <a href="#machine-tracker">Machine Monitoring</a>
          <a href="#resource-management">Resource Management</a>
          <a href="#reports">BI Reports</a>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#pricing">Pricing & Features</a>
          <a href="#contact">Contact</a>
          <a href="#privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright 2026 CoiioT. Real-Time Insights for coir industries.</span>
        <div>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}


