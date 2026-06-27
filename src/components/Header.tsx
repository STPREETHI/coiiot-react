import React from "react";
import { ChevronRight, Cpu, Menu, NotebookText, X } from "lucide-react";
import { expertiseDropdown, img, productsDropdown } from "../lib/siteData";

export function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  const [expertiseOpen, setExpertiseOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);

  const closeAll = () => { setExpertiseOpen(false); setProductsOpen(false); };

  return (
    <header className="site-header" onMouseLeave={closeAll}>
      <a className="brand" href="#home" aria-label="CoiioT home">
        <img src={img("2026/06/coiiot-logo-real.png")} alt="CoiioT Real-Time Insights" />
      </a>
      <button className="icon-button mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        {/* Expertise dropdown */}
        <div className="nav-dropdown-wrap" onMouseEnter={() => { setExpertiseOpen(true); setProductsOpen(false); }}>
          <button className="nav-dropdown-trigger" onClick={() => { setExpertiseOpen(!expertiseOpen); setProductsOpen(false); }}>
            Expertise <ChevronRight size={14} className="nav-chevron" />
          </button>
          {expertiseOpen && (
            <div className="dropdown expertise-dropdown" style={{left: 0, transform: 'none'}}>
              <p className="dd-section-head">Our Expertise</p>
              <div className="expertise-col">
                {expertiseDropdown.filter((_, index) => index % 2 === 0).map((item) => (
                  <a key={item.label} href={item.href} className="dd-item" onClick={closeAll}>
                    <span className="dd-icon"><item.Icon size={17} /></span>
                    <span className="dd-text">
                      <span className="dd-label">{item.label}</span>
                      <span className="dd-sub">{item.sub}</span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="expertise-col">
                {expertiseDropdown.filter((_, index) => index % 2 === 1).map((item) => (
                  <a key={item.label} href={item.href} className="dd-item" onClick={closeAll}>
                    <span className="dd-icon"><item.Icon size={17} /></span>
                    <span className="dd-text">
                      <span className="dd-label">{item.label}</span>
                      <span className="dd-sub">{item.sub}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Products mega dropdown */}
        <div className="nav-dropdown-wrap" onMouseEnter={() => { setProductsOpen(true); setExpertiseOpen(false); }}>
          <button className="nav-dropdown-trigger" onClick={() => { setProductsOpen(!productsOpen); setExpertiseOpen(false); }}>
            Products <ChevronRight size={14} className="nav-chevron" />
          </button>
          {productsOpen && (
            <div className="dropdown products-mega">
              <div className="mega-col mega-col-main">
                <p className="mega-heading">Our Products</p>
                <div className="mega-product-nested">
                  <a href="#coiiot-pulse" className="mega-product-item" onClick={closeAll}>
                    <span className="mega-product-icon"><Cpu size={16} /></span>
                    <div>
                      <span className="dd-label">CoiioT Pulse</span>
                      <span className="dd-sub">Coir industry monitoring system</span>
                    </div>
                    <ChevronRight size={13} className="mega-arrow" />
                  </a>
                  <div className="mega-submenu" aria-label="CoiioT Pulse products">
                    <p className="mega-heading">Pulse modules</p>
                    {productsDropdown.pulse.map((p) => (
                      <a key={p.label} href={p.href} className="mega-pulse-item" onClick={closeAll}>
                        <span className="mega-pulse-dot" />
                        <span className="dd-text">
                          <span className="dd-label">{p.label}</span>
                          <span className="dd-sub">{p.sub}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#coiiot-books" className="mega-product-item" onClick={closeAll}>
                  <span className="mega-product-icon"><NotebookText size={16} /></span>
                  <div>
                    <span className="dd-label">CoiioT Books</span>
                    <span className="dd-sub">ERP records and factory management</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        <a href="#about" onClick={closeAll}>About Us</a>
        <a href="#pricing" onClick={closeAll}>Pricing & Features</a>
        <a href="#contact" onClick={closeAll}>Contact</a>
        <a className="nav-cta" href="#contact" onClick={closeAll}>Request callback</a>
      </nav>
    </header>
  );
}

