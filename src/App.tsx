import React from "react";
import { productDetails, solutions } from "./lib/siteData";
import { Header } from "./components/Header";
import { Footer } from "./components/SiteSections";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { ProductsPage } from "./pages/ProductsPage";
import { PricingPage } from "./pages/PricingPage";
import { SolutionPage } from "./pages/SolutionPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [page, setPage] = React.useState(location.hash.replace("#", "") || "home");

  React.useLayoutEffect(() => {
    const onHash = () => {
      setPage(location.hash.replace("#", "") || "home");
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);

  React.useLayoutEffect(() => {
    const selectors = [
      ".section-heading",
      ".hero-product-visual",
      ".home-service-strip article",
      ".stats div",
      ".app-showcase > div",
      ".app-showcase img",
      ".feature",
      ".solution-card",
      ".product-family-card",
      ".product-shot-card",
      ".price-card",
      ".media-card",
      ".testimonial-grid article",
      ".contact-grid article",
      ".contact-action",
      ".process article",
      ".solution-deep-dive article",
      ".comparison-wrap",
      ".faq-grid article",
      ".cta-band > *",
      ".page-hero > div",
      ".page-hero img",
    ];

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      document.body.dataset.motionReady = "true";
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    document.body.dataset.motionReady = "true";

    return () => {
      observer.disconnect();
    };
  }, [page]);

  const solution = solutions.find((item) => item.slug === page);
  const product = productDetails.find((item) => item.slug === page);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {product ? (
          <ProductDetailPage product={product} />
        ) : solution ? (
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


