import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Section wrapper ───────────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--brand-dark-muted)", fontFamily: "var(--font-body)" }}>
          {id}
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--brand-dark)", fontWeight: 500 }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

// ─── Token pill ────────────────────────────────────────────────────────────────
function Token({ name }: { name: string }) {
  return (
    <code
      className="inline-block px-2 py-0.5 rounded text-xs"
      style={{ backgroundColor: "var(--brand-cream-dark)", color: "var(--brand-dark-muted)", fontFamily: "monospace" }}
    >
      {name}
    </code>
  );
}

// ─── Color swatch ──────────────────────────────────────────────────────────────
function Swatch({ token, value, label }: { token: string; value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-16 rounded-sm border"
        style={{ backgroundColor: value, borderColor: "var(--border)" }}
      />
      <div>
        <p className="text-sm" style={{ color: "var(--brand-dark)", fontWeight: 500 }}>{label}</p>
        <code className="text-xs" style={{ color: "var(--brand-dark-muted)" }}>{value}</code>
        <br />
        <Token name={token} />
      </div>
    </div>
  );
}

// ─── THE OFFSET FRAME ─────────────────────────────────────────────────────────
// The signature brand element of Hof Prädikow.
// Usage: wrap any content + image pair with <OffsetFrame>.
// Tokens: --frame-color, --frame-width, --frame-offset
function OffsetFrame({
  imageUrl,
  imageAlt,
  children,
  variant = "default",
}: {
  imageUrl?: string;
  imageAlt?: string;
  children: React.ReactNode;
  variant?: "default" | "image-left" | "text-only";
}) {
  if (variant === "text-only") {
    return (
      <div className="relative inline-block" style={{ padding: "var(--frame-offset)" }}>
        <div
          className="absolute inset-0"
          style={{
            border: "var(--frame-width) solid var(--frame-color)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  }

  // Default: text left, image right, frame overlapping both
  return (
    <div className="relative" style={{ minHeight: "280px" }}>
      {/* The frame rectangle — offset behind/over both elements */}
      <div
        className="absolute"
        style={{
          border: "var(--frame-width) solid var(--frame-color)",
          top: "var(--frame-offset)",
          left: "var(--frame-offset)",
          right: variant === "image-left" ? "auto" : "calc(20% + var(--frame-offset))",
          bottom: "var(--frame-offset)",
          width: variant === "image-left" ? "calc(75% - var(--frame-offset) * 2)" : undefined,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div className="relative grid grid-cols-2 gap-0" style={{ zIndex: 1 }}>
        {/* Text content */}
        <div
          className="relative flex flex-col justify-center px-10 py-10"
          style={{
            backgroundColor: "var(--brand-cream)",
            zIndex: 3,
            marginTop: "var(--frame-offset)",
            marginBottom: "var(--frame-offset)",
            marginLeft: "var(--frame-offset)",
          }}
        >
          {children}
        </div>
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
          {imageUrl && (
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt ?? ""}
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Button components ─────────────────────────────────────────────────────────
function Btn({
  variant = "primary",
  size = "md",
  children,
  disabled,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "opacity 0.15s",
    borderRadius: "2px",
    letterSpacing: "0.01em",
  };
  const sizes: Record<string, React.CSSProperties> = {
    sm: { padding: "0.375rem 0.875rem", fontSize: "0.875rem" },
    md: { padding: "0.625rem 1.25rem", fontSize: "1rem" },
    lg: { padding: "0.875rem 1.75rem", fontSize: "1.0625rem" },
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "var(--brand-orange)", color: "#fff" },
    secondary: { backgroundColor: "var(--brand-cream-dark)", color: "var(--brand-dark)" },
    outline: {
      backgroundColor: "transparent",
      color: "var(--brand-dark)",
      border: "1.5px solid var(--brand-dark)",
    },
    ghost: { backgroundColor: "transparent", color: "var(--brand-dark)" },
    destructive: { backgroundColor: "#d4183d", color: "#fff" },
  };
  return (
    <button style={{ ...base, ...sizes[size], ...variants[variant] }} disabled={disabled}>
      {children}
    </button>
  );
}

// ─── Input ─────────────────────────────────────────────────────────────────────
function Input({
  label,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "var(--brand-dark)" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          fontFamily: "var(--font-body)",
          backgroundColor: "var(--input-background)",
          border: error ? "1.5px solid #d4183d" : "1.5px solid transparent",
          borderRadius: "2px",
          padding: "0.625rem 0.875rem",
          color: "var(--brand-dark)",
          outline: "none",
          width: "100%",
        }}
      />
      {error && (
        <span style={{ fontSize: "0.8125rem", color: "#d4183d", fontFamily: "var(--font-body)" }}>{error}</span>
      )}
    </div>
  );
}

// ─── Badge ─────────────────────────────────────────────────────────────────────
function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.125rem 0.625rem",
        fontSize: "0.75rem",
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        letterSpacing: "0.04em",
        backgroundColor: `${color}20`,
        color: color,
        borderRadius: "2px",
        border: `1px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}

// ─── Content card ──────────────────────────────────────────────────────────────
function ContentCard({
  imageUrl,
  category,
  categoryColor,
  title,
  excerpt,
}: {
  imageUrl?: string;
  category?: string;
  categoryColor?: string;
  title: string;
  excerpt: string;
}) {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
    >
      {imageUrl && (
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {category && categoryColor && (
          <Badge label={category} color={categoryColor} />
        )}
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--brand-dark)", fontWeight: 500 }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
          {excerpt}
        </p>
        <div className="mt-auto pt-3">
          <Btn variant="outline" size="sm">Mehr erfahren</Btn>
        </div>
      </div>
    </div>
  );
}

// ─── Nav link ──────────────────────────────────────────────────────────────────
// Font: GT Sectra Fine (matching hof-praedikow.de navigationMain__link)
// Active indicator: 2px bar below via pseudo-element, not inline underline
function NavLink({ label, active, activeColor = "#00aad6" }: { label: string; active?: boolean; activeColor?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "23px",
          color: active ? activeColor : "#1a1919",
          fontWeight: 400,
          textDecoration: "none",
          padding: "20px 16px 7px",
          transition: "color 0.15s",
          display: "block",
        }}
      >
        {label}
      </a>
      <div
        style={{
          height: "2px",
          width: "80%",
          backgroundColor: activeColor,
          opacity: active ? 1 : 0,
          marginTop: "12px",
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

// ─── Divider ───────────────────────────────────────────────────────────────────
function FramedDivider() {
  return (
    <div className="flex items-center gap-4 my-4">
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--frame-color)", opacity: 0.3 }} />
      <div
        className="w-3 h-3 rotate-45"
        style={{ border: "var(--frame-width) solid var(--frame-color)" }}
      />
      <div className="flex-1 h-px" style={{ backgroundColor: "var(--frame-color)", opacity: 0.3 }} />
    </div>
  );
}

// ─── SIDEBAR NAV ──────────────────────────────────────────────────────────────
const sections = [
  { id: "00-tokens", label: "Farbtokens" },
  { id: "01-typography", label: "Typografie" },
  { id: "02-rahmen", label: "Der Rahmen" },
  { id: "03-buttons", label: "Buttons" },
  { id: "04-forms", label: "Formularelemente" },
  { id: "05-badges", label: "Badges & Tags" },
  { id: "06-cards", label: "Karten" },
  { id: "07-navigation", label: "Navigation" },
  { id: "08-dividers", label: "Trennelemente" },
];

// ─── MAIN LIBRARY ─────────────────────────────────────────────────────────────
export function DesignLibrary() {
  const [activeSection, setActiveSection] = useState("00-tokens");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const FARM_IMG = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80";
  const BARN_IMG = "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=80";
  const WORKSHOP_IMG = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";

  return (
    <div style={{ backgroundColor: "var(--brand-cream)", minHeight: "100vh" }}>
      {/* ── Top bar ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 border-b"
        style={{
          backgroundColor: "rgba(249,245,241,0.97)",
          backdropFilter: "blur(8px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 flex items-center justify-center"
            style={{ border: "var(--frame-width) solid var(--brand-blue)" }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", color: "var(--brand-blue)", fontWeight: 500 }}>
              H
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--brand-dark)", fontWeight: 500 }}>
            Hof Prädikow
          </span>
          <span
            className="ml-2 px-2 py-0.5 text-xs"
            style={{
              backgroundColor: "var(--brand-blue-light)",
              color: "var(--brand-blue)",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.06em",
              borderRadius: "2px",
            }}
          >
            DESIGN LIBRARY
          </span>
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--brand-dark-muted)" }}>
          v1.0 — Stand Juni 2026
        </span>
      </header>

      <div className="flex">
        {/* ── Sidebar ── */}
        <aside
          className="hidden lg:flex flex-col gap-1 w-56 shrink-0 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto px-6 pt-10 pb-10"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--brand-dark-muted)", fontFamily: "var(--font-body)" }}
          >
            Inhalt
          </p>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-left py-1.5 px-3 rounded-sm text-sm transition-colors"
              style={{
                fontFamily: "var(--font-body)",
                color: activeSection === s.id ? "var(--brand-blue)" : "var(--brand-dark-muted)",
                backgroundColor: activeSection === s.id ? "var(--brand-blue-light)" : "transparent",
                fontWeight: activeSection === s.id ? 500 : 400,
                borderLeft: activeSection === s.id ? "2px solid var(--brand-blue)" : "2px solid transparent",
              }}
            >
              {s.label}
            </button>
          ))}
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 px-10 lg:px-16 max-w-5xl">

          {/* ── 00 FARBTOKENS ── */}
          <Section id="00-tokens" title="Farbtokens">
            <p className="mb-8 text-sm" style={{ color: "var(--brand-dark-muted)", fontFamily: "var(--font-body)" }}>
              Alle Farbwerte als CSS Custom Properties. In Code immer{" "}
              <Token name="var(--token-name)" /> verwenden — niemals Hex-Werte hardcoden.
            </p>
            {/* Neutral */}
            <p className="text-xs mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>Neutral</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Swatch token="--brand-dark" value="#1a1919" label="Dark" />
              <Swatch token="--brand-dark-muted" value="#6b6560" label="Muted" />
              <Swatch token="--brand-cream" value="#f9f5f1" label="Cream" />
              <Swatch token="--brand-cream-dark" value="#ede8e2" label="Cream Dark" />
            </div>

            {/* Bereichsfarben mit Abstufungen */}
            <p className="text-xs mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>Bereichsfarben — je 3 Stufen (Base · Mid · Light)</p>
            {[
              { name: "Orange",  base: "#f05e29", mid: "#eda797", light: "#f6d3cb", token: "--brand-orange",  nav: "Der Hof" },
              { name: "Blue",    base: "#00aad6", mid: "#bbdee8", light: "#e5ecf0", token: "--brand-blue",    nav: "Die Scheune" },
              { name: "Green",   base: "#01ae75", mid: "#b7e0d1", light: "#d5e7e0", token: "--brand-green",   nav: "Veranstaltungen" },
              { name: "Yellow",  base: "#dc9f00", mid: "#f5ce66", light: "#ffe8aa", token: "--brand-gold",    nav: "Übernachten" },
            ].map(({ name, base, mid, light, token, nav }) => (
              <div key={name} className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: base }} />
                  <span className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    <strong>{name}</strong> — Nav: {nav}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Swatch token={token} value={base} label={`${name} Base`} />
                  <Swatch token={`${token}-mid`} value={mid} label={`${name} Mid`} />
                  <Swatch token={`${token}-light`} value={light} label={`${name} Light`} />
                </div>
              </div>
            ))}

            {/* Primary Colors */}
            <p className="text-xs mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>Primary Colors</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <Swatch token="--primary-orange" value="#f05e29" label="Primary Orange" />
              <Swatch token="--primary-blue" value="#00aad6" label="Primary Blue" />
              <Swatch token="--border" value="rgba(26,25,25,0.12)" label="Border" />
            </div>

            <div className="mt-10 p-6 rounded-sm" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
              <p className="text-sm mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--brand-dark)" }}>
                Rahmen-spezifische Tokens
              </p>
              <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                <div className="flex gap-4 items-center">
                  <Token name="--frame-color" /> <span>= <code>var(--brand-blue)</code> = #00aad6</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Token name="--frame-width" /> <span>= 3px — Strichstärke des Rahmens</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Token name="--frame-offset" /> <span>= 1.25rem — Versatz des Inhalts gegenüber dem Rahmen</span>
                </div>
              </div>
            </div>
          </Section>

          {/* ── 01 TYPOGRAFIE ── */}
          <Section id="01-typography" title="Typografie">
            <div className="flex flex-col gap-6">
              <div className="p-6 border-l-2" style={{ borderColor: "var(--brand-blue)" }}>
                <p className="text-xs mb-2" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <Token name="--font-display" /> — GT Sectra Fine (Serif)
                </p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "var(--brand-dark)", fontWeight: 500, lineHeight: 1.1 }}>
                  Scheune Prädikow
                </h1>
                <p className="mt-1 text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>H1 — 3.5rem / Medium (500)</p>
              </div>

              {[
                { tag: "H2", size: "2.25rem", weight: 500, text: "Die Scheune als Begegnungsort" },
                { tag: "H3", size: "1.5rem", weight: 500, text: "Workshops und Veranstaltungen" },
                { tag: "H4", size: "1.125rem", weight: 500, text: "Naechste Termine im Überblick" },
              ].map(({ tag, size, weight, text }) => (
                <div key={tag} className="p-5 border-l-2" style={{ borderColor: "var(--border)" }}>
                  <p className="text-xs mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    {tag} — {size} / {weight}
                  </p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: size, color: "var(--brand-dark)", fontWeight: weight, lineHeight: 1.2 }}>
                    {text}
                  </p>
                </div>
              ))}

              <div className="p-5 border-l-2" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <Token name="--font-body" /> — Europa (Sans), Fliestext, 1rem / Regular (400)
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--brand-dark)", lineHeight: 1.65, maxWidth: "60ch" }}>
                  Die Scheune ist das Brennglas unserer Vision. Hier realisieren wir unsere Idee von
                  Arbeiten, Leben und Gemeinschaft an einem Ort. Du kannst Teil davon sein, wenn Du
                  einen Ort suchst für Deinen Workshop, Team-Retreat oder Geburtstag.
                </p>
              </div>

              <div className="p-5 border-l-2" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  Caption / Label — 0.8125rem / 500, Tracking +0.04em
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500, color: "var(--brand-dark-muted)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Veranstaltungen &bull; 15. Juni 2026
                </p>
              </div>
            </div>
          </Section>

          {/* ── 02 DER RAHMEN ── */}
          <Section id="02-rahmen" title="Der Rahmen">
            <p className="mb-4 text-sm" style={{ color: "var(--brand-dark-muted)", fontFamily: "var(--font-body)" }}>
              Das zentrale Markenelement. Ein Rechteck-Rahmen in{" "}
              <Token name="--brand-blue" />, der leicht versetzt vor/über Inhalt und Bild gelegt
              wird. Erzeugt Tiefe und ein redaktionelles, editoriales Gefuehl.
            </p>

            {/* Variant A: Text + Bild */}
            <div className="mb-6 p-1" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
              <p className="text-xs px-3 pt-3 pb-3" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                <strong>Variante A</strong> — Text links, Bild rechts, Rahmen überlagert beide{" "}
                <Token name="<OffsetFrame>" />
              </p>
              <div className="p-4">
                <OffsetFrame imageUrl={BARN_IMG} imageAlt="Scheune Prädikow">
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-blue)", fontWeight: 500 }}
                  >
                    Die Scheune
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "var(--brand-dark)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginBottom: "1rem",
                    }}
                  >
                    Scheune Prädikow
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--brand-dark-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Die Scheune ist das Brennglas unserer Vision.
                    Hier realisieren wir unsere Idee von Arbeiten,
                    Leben und Gemeinschaft an einem Ort.
                  </p>
                </OffsetFrame>
              </div>
            </div>

            {/* Variant B: nur Text mit Rahmen */}
            <div className="mb-6 grid grid-cols-2 gap-6">
              <div className="p-1" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                <p className="text-xs px-3 pt-3 pb-3" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Variante B</strong> — Nur Text, einfacher Rahmen <Token name="text-only" />
                </p>
                <div className="p-4">
                  <OffsetFrame variant="text-only">
                    <div className="px-8 py-6">
                      <p
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ color: "var(--brand-blue)", fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        Zitat
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          color: "var(--brand-dark)",
                          fontWeight: 400,
                          fontStyle: "italic",
                          lineHeight: 1.4,
                        }}
                      >
                        Wir glauben daran, dass das Land die Zukunft hat.
                      </p>
                    </div>
                  </OffsetFrame>
                </div>
              </div>

              {/* Variant C: Rahmen als dekorativer Akzent in Karte */}
              <div className="p-1" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                <p className="text-xs px-3 pt-3 pb-3" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Variante C</strong> — Rahmen als Bild-Overlay <Token name="frame-image" />
                </p>
                <div className="p-4">
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <ImageWithFallback
                      src={FARM_IMG}
                      alt="Landschaft"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute"
                      style={{
                        border: "var(--frame-width) solid var(--frame-color)",
                        top: "var(--frame-offset)",
                        left: "var(--frame-offset)",
                        right: "var(--frame-offset)",
                        bottom: "var(--frame-offset)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Farbvarianten */}
            <div className="mb-6">
              <p className="text-xs mb-3" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                <strong>Farbvarianten</strong> — Der Rahmen kann auch in{" "}
                <Token name="--brand-orange" /> eingesetzt werden, z. B. für Akzent-Sektionen oder
                saisonale Kampagnen. Die Strichstärke und der Versatz bleiben identisch.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {/* Blue (default) */}
                <div className="p-1" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                  <p className="text-xs px-3 pt-3 pb-2" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    <Token name="--brand-blue" /> — Standard
                  </p>
                  <div className="p-4">
                    <div className="relative overflow-hidden" style={{ height: "160px" }}>
                      <ImageWithFallback
                        src={BARN_IMG}
                        alt="Scheune Prädikow"
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute"
                        style={{
                          border: "var(--frame-width) solid var(--brand-blue)",
                          top: "var(--frame-offset)",
                          left: "var(--frame-offset)",
                          right: "var(--frame-offset)",
                          bottom: "var(--frame-offset)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Orange */}
                <div className="p-1" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                  <p className="text-xs px-3 pt-3 pb-2" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    <Token name="--brand-orange" /> — Akzentvariante
                  </p>
                  <div className="p-4">
                    <div className="relative overflow-hidden" style={{ height: "160px" }}>
                      <ImageWithFallback
                        src={BARN_IMG}
                        alt="Scheune Prädikow"
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute"
                        style={{
                          border: "var(--frame-width) solid var(--brand-orange)",
                          top: "var(--frame-offset)",
                          left: "var(--frame-offset)",
                          right: "var(--frame-offset)",
                          bottom: "var(--frame-offset)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Variant D: Standalone frame as CSS reference */}
            <div className="p-6 rounded-sm mt-4" style={{ backgroundColor: "#1a1919", color: "#f9f5f1" }}>
              <p className="text-xs mb-3" style={{ fontFamily: "var(--font-body)", color: "#a09890", letterSpacing: "0.04em" }}>
                CSS REFERENZ — Rahmen-Klasse
              </p>
              <pre
                className="text-sm leading-relaxed overflow-x-auto"
                style={{ fontFamily: "monospace", color: "#d4c9bc" }}
              >{`.prädikow-rahmen {
  border: var(--frame-width) solid var(--frame-color);
  /* frame-color = --brand-blue = #00aad6 (Standard) */
}

/* Akzentvariante in Orange */
.prädikow-rahmen--orange {
  border-color: var(--brand-orange); /* #f05e29 */
}

/* Offset-Variante (Text + Bild) */
.prädikow-rahmen-offset .content {
  margin: var(--frame-offset);
  background: var(--brand-cream);
}

/* Bild-Inset-Variante */
.prädikow-rahmen-inset {
  position: absolute;
  inset: var(--frame-offset);
  pointer-events: none;
}`}</pre>
            </div>
          </Section>

          {/* ── 03 BUTTONS ── */}
          <Section id="03-buttons" title="Buttons">
            <div className="flex flex-col gap-8">
              {/* Primary */}
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Primary</strong> — <Token name="--brand-orange" /> Hintergrund, weisse Schrift
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Btn variant="primary" size="sm">Klein</Btn>
                  <Btn variant="primary" size="md">Jetzt anmelden</Btn>
                  <Btn variant="primary" disabled>Deaktiviert</Btn>
                </div>
              </div>

              {/* Secondary */}
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Secondary</strong> — <Token name="--brand-cream-dark" /> Hintergrund
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Btn variant="secondary" size="sm">Klein</Btn>
                  <Btn variant="secondary" size="md">Mehr erfahren</Btn>
                </div>
              </div>

              {/* Outline */}
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Outline</strong> — Transparenter Hintergrund, <Token name="--brand-dark" /> Rand
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Btn variant="outline" size="sm">Klein</Btn>
                  <Btn variant="outline" size="md">Programm ansehen</Btn>
                </div>
              </div>

              {/* Ghost */}
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Ghost</strong> — Kein Rand, kein Hintergrund. Fuer inline-Aktionen.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Btn variant="ghost" size="sm">Abbrechen</Btn>
                  <Btn variant="ghost" size="md">Alle ansehen &rarr;</Btn>
                </div>
              </div>

              {/* Destructive */}
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Destructive</strong> — Löschen / Fehlerfall
                </p>
                <div className="flex flex-wrap gap-3">
                  <Btn variant="destructive" size="md">Eintrag löschen</Btn>
                </div>
              </div>
            </div>
          </Section>

          {/* ── 04 FORMULARE ── */}
          <Section id="04-forms" title="Formularelemente">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" placeholder="Max Mustermann" />
              <Input label="E-Mail" placeholder="max@beispiel.de" type="email" />
              <Input label="Mit Fehlermeldung" placeholder="Ungültige Eingabe" error="Bitte gib eine gültige E-Mail-Adresse ein." />
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "var(--brand-dark)" }}>
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  placeholder="Deine Nachricht..."
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "var(--input-background)",
                    border: "1.5px solid transparent",
                    borderRadius: "2px",
                    padding: "0.625rem 0.875rem",
                    color: "var(--brand-dark)",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "var(--brand-dark)" }}>
                  Kategorie
                </label>
                <select
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "var(--input-background)",
                    border: "1.5px solid transparent",
                    borderRadius: "2px",
                    padding: "0.625rem 0.875rem",
                    color: "var(--brand-dark)",
                    outline: "none",
                  }}
                >
                  <option>Workshop</option>
                  <option>Event</option>
                  <option>Übernachten</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500, color: "var(--brand-dark)" }}>
                  Optionen
                </label>
                {["Datenschutz akzeptiert", "Newsletter abonnieren"].map((item) => (
                  <label key={item} className="flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--brand-dark)" }}>
                    <input type="checkbox" style={{ accentColor: "var(--brand-orange)", width: "16px", height: "16px" }} />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </Section>

          {/* ── 05 BADGES ── */}
          <Section id="05-badges" title="Badges & Tags">
            <p className="mb-6 text-sm" style={{ color: "var(--brand-dark-muted)", fontFamily: "var(--font-body)" }}>
              Fuer Kategorien, Status-Labels und Tags. Immer mit <Token name="--brand-*" /> Farbe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge label="Landwirtschaft" color="var(--brand-green)" />
              <Badge label="Tech-Basics" color="var(--brand-purple)" />
              <Badge label="Vermarktung" color="var(--brand-gold)" />
              <Badge label="Konferenz" color="var(--brand-blue)" />
              <Badge label="Kostenlos" color="var(--brand-green)" />
              <Badge label="Neu" color="var(--brand-orange)" />
              <Badge label="Ausgebucht" color="#d4183d" />
            </div>
          </Section>

          {/* ── 06 KARTEN ── */}
          <Section id="06-cards" title="Karten">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ContentCard
                imageUrl={WORKSHOP_IMG}
                category="Workshop"
                categoryColor="var(--brand-purple)"
                title="Digitale Tools für Landwirte"
                excerpt="Praktischer Einstieg in Apps und Software für die moderne Landwirtschaft — von Schlagkartei bis Wetterapp."
              />
              <ContentCard
                imageUrl={FARM_IMG}
                category="Konferenz"
                categoryColor="var(--brand-blue)"
                title="LandDigital Konferenz 2026"
                excerpt="Die Jahreskonferenz zur Digitalisierung im ländlichen Raum mit 30+ Speakern und Workshops."
              />
              <ContentCard
                category="Praxisbeispiel"
                categoryColor="var(--brand-green)"
                title="Wie Templin zur Modellgemeinde wurde"
                excerpt="Innerhalb von drei Jahren hat die Stadt ihre Verwaltung digitalisiert. Eine Erfolgsgeschichte."
              />
            </div>

            {/* Highlighted / Feature card */}
            <div className="mt-6">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                <strong>Feature-Karte</strong> — mit Rahmen-Akzent
              </p>
              <div
                className="relative p-8 md:p-12"
                style={{ backgroundColor: "var(--brand-dark)", overflow: "hidden" }}
              >
                <div
                  className="absolute"
                  style={{
                    border: "var(--frame-width) solid var(--frame-color)",
                    top: "var(--frame-offset)",
                    left: "var(--frame-offset)",
                    right: "var(--frame-offset)",
                    bottom: "var(--frame-offset)",
                    opacity: 0.4,
                    pointerEvents: "none",
                  }}
                />
                <div className="relative z-10">
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: "var(--font-body)", color: "var(--brand-blue)", fontWeight: 500 }}
                  >
                    Newsletter
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.25rem",
                      color: "#f9f5f1",
                      fontWeight: 400,
                      marginBottom: "0.75rem",
                    }}
                  >
                    Bleib auf dem Laufenden
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", color: "#a09890", maxWidth: "40ch", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Workshops, Events und Neuigkeiten direkt in Dein Postfach.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <input
                      placeholder="Deine E-Mail"
                      style={{
                        fontFamily: "var(--font-body)",
                        backgroundColor: "rgba(249,245,241,0.08)",
                        border: "1.5px solid rgba(249,245,241,0.2)",
                        borderRadius: "2px",
                        padding: "0.625rem 1rem",
                        color: "#f9f5f1",
                        outline: "none",
                        minWidth: "220px",
                      }}
                    />
                    <Btn variant="primary">Anmelden</Btn>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* ── 07 NAVIGATION ── */}
          <Section id="07-navigation" title="Navigation">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs mb-2" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Nav-Links</strong> — GT Sectra Fine, 23px. Jeder Bereich hat eine eigene Aktivfarbe.
                  Indikator: 2px-Balken unterhalb (80% Breite).
                </p>
                {/* Vollständige Nav mit allen originalen Farben */}
                <div className="p-1 mb-4" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                  <p className="text-xs px-3 pt-3 pb-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    Aktiv: <strong>Der Hof</strong> — <code style={{ fontSize: "0.75rem" }}>#f05e29</code>
                  </p>
                  <div className="flex items-start px-4 pb-2" style={{ backgroundColor: "var(--brand-cream)" }}>
                    <NavLink label="Der Hof"        active activeColor="#f05e29" />
                    <NavLink label="Die Scheune"           activeColor="#00aad6" />
                    <NavLink label="Veranstaltungen"       activeColor="#01ae75" />
                    <NavLink label="Übernachten"           activeColor="#dc9f00" />
                    <NavLink label="Kontakt" />
                  </div>
                </div>
                <div className="p-1 mb-4" style={{ backgroundColor: "var(--brand-cream-dark)" }}>
                  <p className="text-xs px-3 pt-3 pb-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    Aktiv: <strong>Die Scheune</strong> — <code style={{ fontSize: "0.75rem" }}>#00aad6</code>
                  </p>
                  <div className="flex items-start px-4 pb-2" style={{ backgroundColor: "var(--brand-cream)" }}>
                    <NavLink label="Der Hof"               activeColor="#f05e29" />
                    <NavLink label="Die Scheune"    active  activeColor="#00aad6" />
                    <NavLink label="Veranstaltungen"       activeColor="#01ae75" />
                    <NavLink label="Übernachten"           activeColor="#dc9f00" />
                    <NavLink label="Kontakt" />
                  </div>
                </div>
                {/* Farbübersicht mit Abstufungen */}
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {[
                    { label: "Der Hof",        base: "#f05e29", mid: "#eda797", light: "#f6d3cb" },
                    { label: "Die Scheune",    base: "#00aad6", mid: "#bbdee8", light: "#e5ecf0" },
                    { label: "Veranstaltungen",base: "#01ae75", mid: "#b7e0d1", light: "#d5e7e0" },
                    { label: "Übernachten",    base: "#dc9f00", mid: "#f5ce66", light: "#ffe8aa" },
                  ].map(({ label, base, mid, light }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <div className="flex gap-1 mb-1">
                        <div className="h-4 flex-1 rounded-sm" style={{ backgroundColor: base }} />
                        <div className="h-4 flex-1 rounded-sm" style={{ backgroundColor: mid }} />
                        <div className="h-4 flex-1 rounded-sm" style={{ backgroundColor: light }} />
                      </div>
                      <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>{label}</p>
                      <code className="text-xs" style={{ color: "var(--brand-dark-muted)" }}>{base}</code>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Breadcrumb</strong>
                </p>
                <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {["Startseite", "Workshops", "Digitale Tools"].map((item, i, arr) => (
                    <span key={item} className="flex items-center gap-2">
                      <span style={{ color: i === arr.length - 1 ? "var(--brand-dark)" : "var(--brand-dark-muted)" }}>
                        {item}
                      </span>
                      {i < arr.length - 1 && (
                        <span style={{ color: "var(--border)" }}>/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* ── 08 TRENNELEMENTE ── */}
          <Section id="08-dividers" title="Trennelemente">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Einfache Linie</strong> — <Token name="--border" />
                </p>
                <hr style={{ borderColor: "var(--border)", borderTopWidth: "1px" }} />
              </div>

              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Rahmen-Divider</strong> — mit Rauten-Ornament in <Token name="--brand-blue" />
                </p>
                <FramedDivider />
              </div>

              <div>
                <p className="text-xs mb-4" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                  <strong>Section-Akzent</strong> — Vertikale Linie links
                </p>
                <div className="pl-5 border-l-2" style={{ borderColor: "var(--brand-blue)" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--brand-dark)" }}>
                    Zitat oder Hervorhebung
                  </p>
                  <p className="text-sm mt-1" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
                    Begleittext oder Quellenangabe
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <div className="py-16 text-center">
            <FramedDivider />
            <p className="mt-6 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--brand-dark-muted)" }}>
              Hof Prädikow Design Library &mdash; Alle Token in{" "}
              <code style={{ fontFamily: "monospace" }}>src/styles/theme.css</code>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
