import { Check, Mail, MapPin, Phone } from "lucide-react";
import { img, showcaseImages } from "../lib/siteData";
import { PageHero } from "../components/SiteSections";

export function ContactPage() {
  return (
    <>
      <PageHero title="Start monitoring your coir factory with CoiioT." eyebrow="Contact us" image={img("2022/10/send-email.jpg")} />
      <section className="section contact-grid">
        <article><MapPin /><h3>Office location</h3><p>Nehru Nagar West, Coimbatore</p></article>
        <article><Phone /><h3>Call CoiioT</h3><p><a href="tel:+918925029649">89250 29649</a></p></article>
        <article><Mail /><h3>Working hours</h3><p>Monday to Saturday, 9 am - 6 pm</p></article>
      </section>
      <section className="section contact-actions">
        <a className="contact-action" href="tel:+918925029649"><Phone /><span>Call now</span><strong>89250 29649</strong></a>
        <a className="contact-action" href="https://wa.me/918925029649?text=Hi%20CoiioT%2C%20I%20want%20to%20know%20about%20factory%20monitoring" target="_blank" rel="noreferrer"><Phone /><span>WhatsApp</span><strong>Quick enquiry</strong></a>
        <a className="contact-action" href="mailto:support@coiiot.in"><Mail /><span>Email</span><strong>support@coiiot.in</strong></a>
      </section>
      <section className="section form-section">
        <div>
          <p className="eyebrow">Request a callback</p>
          <h2>Get the right IoT setup for your production unit.</h2>
          <p>Share your location, machine count, and monitoring needs. We will suggest the right CoiioT modules.</p>
          <div className="mini-list">
            <span><Check size={18} /> Production, EB, water, labour, and report modules</span>
            <span><Check size={18} /> Site analysis and sensor planning</span>
            <span><Check size={18} /> Dashboard setup and training support</span>
          </div>
          <img className="contact-app-preview" src={showcaseImages.mobileApp} alt="CoiioT mobile app monitoring" />
        </div>
        <form>
          <input placeholder="Name" />
          <input placeholder="Phone" />
          <input placeholder="Factory / Company" />
          <input placeholder="Location" />
          <input placeholder="Modules needed: Production, EB, Water, Labour..." />
          <textarea placeholder="Tell us your machine count and what you want to monitor" />
          <button className="button primary" type="button">Send query</button>
        </form>
      </section>
    </>
  );
}

