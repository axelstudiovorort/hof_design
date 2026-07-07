import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/workshops", label: "Workshops" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(249,245,241,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(26,25,25,0.1)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="DigiLand Startseite"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--brand-orange)" }}
            >
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span
              className="text-2xl tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                color: scrolled ? "var(--brand-dark)" : "white",
              }}
            >
              DigiLand
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm tracking-wide transition-opacity hover:opacity-70 relative group"
                style={{
                  color: scrolled ? "var(--brand-dark)" : "white",
                  fontFamily: "var(--font-body)",
                  fontWeight: location.pathname === link.href ? 500 : 400,
                }}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: "var(--brand-orange)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              style={{
                backgroundColor: "var(--brand-orange)",
                color: "white",
                borderRadius: "2px",
              }}
              className="text-sm px-5"
            >
              <Link to="/workshops">Jetzt anmelden</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
            style={{ color: scrolled ? "var(--brand-dark)" : "white" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            backgroundColor: "var(--brand-cream)",
            borderTop: "1px solid rgba(26,25,25,0.08)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base py-1 border-b"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--brand-dark)",
                  borderColor: "rgba(26,25,25,0.08)",
                  fontWeight: location.pathname === link.href ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 w-full"
              style={{
                backgroundColor: "var(--brand-orange)",
                color: "white",
                borderRadius: "2px",
              }}
            >
              <Link to="/workshops">Jetzt anmelden</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
