import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--brand-dark)",
        color: "var(--brand-cream)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--brand-orange)" }}
              >
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <span
                className="text-2xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                DigiLand
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70 mt-3 max-w-xs">
              Digitale Kompetenzen für ländliche Räume. Gemeinsam gestalten wir
              die digitale Zukunft von Dörfern und Gemeinden in Deutschland.
            </p>
          </div>

          <div>
            <h4
              className="text-base mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Startseite" },
                { to: "/workshops", label: "Workshops" },
                { to: "/events", label: "Events" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4
              className="text-base mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Themen
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                "Digitale Verwaltung",
                "Smarte Landwirtschaft",
                "Online-Vermarktung",
                "Breitband & Infrastruktur",
                "Fördermittel",
                "Dorfvereine & Ehrenamt",
              ].map((topic) => (
                <span key={topic} className="text-sm opacity-70">
                  {topic}
                </span>
              ))}
            </nav>
          </div>

          <div>
            <h4
              className="text-base mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              Kontakt
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Musterstraße 12
                  <br />
                  16303 Prenzlau, Brandenburg
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-70">
                <Mail size={16} className="shrink-0" />
                <span>info@digiland.de</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-70">
                <Phone size={16} className="shrink-0" />
                <span>+49 (0) 3984 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50"
          style={{ borderTop: "1px solid rgba(249,245,241,0.12)" }}
        >
          <span>© {new Date().getFullYear()} DigiLand e.V. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Impressum</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Datenschutz</span>
            <span className="cursor-pointer hover:opacity-100 transition-opacity">Barrierefreiheit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
