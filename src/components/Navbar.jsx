import { useState, useEffect } from "react";

const SunIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
const MoonIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const MenuIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: "var(--space-4)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            aria-label="Go to top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              aria-label="MS logo"
              role="img"
            >
              <rect width="30" height="30" rx="4" fill="var(--color-primary)" />
              <text
                x="15"
                y="21"
                textAnchor="middle"
                fill="var(--color-primary-text)"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "12px",
                }}
              >
                MS
              </text>
            </svg>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "var(--text-base)",
                color: "var(--color-text)",
                letterSpacing: "-0.01em",
              }}
            >
              Mohammed Salem
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "none",
              alignItems: "center",
              gap: "var(--space-6)",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
            }}
          >
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="btn btn-primary btn-sm desktop-cta"
              onClick={() => scrollTo("contact")}
              style={{ display: "none" }}
            >
              Contact Me
            </button>
            <button
              className="theme-toggle mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-faint)",
              marginBottom: "var(--space-4)",
            }}
          >
            Navigation
          </span>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label} <ArrowRight />
            </button>
          ))}
          <div style={{ marginTop: "auto", paddingTop: "var(--space-8)" }}>
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contact")}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
