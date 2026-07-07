import { Link } from "react-router";
import { ArrowRight, Wifi, Sprout, Users, Calendar, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const HERO_IMG =
  "https://images.unsplash.com/photo-1763633566638-64cb4b9f328f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";
const TABLET_FARM_IMG =
  "https://images.unsplash.com/photo-1761839257870-06874bda71b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const WORKSHOP_IMG =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const COMMUNITY_IMG =
  "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const HARVEST_IMG =
  "https://images.unsplash.com/photo-1762291453908-f760289a7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const workshops = [
  {
    id: 1,
    title: "Digitale Tools für Landwirte",
    date: "15. Juli 2026",
    location: "Prenzlau",
    category: "Landwirtschaft",
    categoryColor: "var(--brand-green)",
    description:
      "Praktischer Einstieg in Apps und Software für die moderne Landwirtschaft — von Schlagkartei bis Wetterapp.",
    image: TABLET_FARM_IMG,
    spots: 12,
  },
  {
    id: 2,
    title: "Website erstellen ohne Vorkenntnisse",
    date: "22. Juli 2026",
    location: "Eberswalde",
    category: "Tech-Basics",
    categoryColor: "var(--brand-purple)",
    description:
      "In einem Tag zur eigenen Website: kostenlose Tools, verständlich erklärt — für Vereine, Hofläden und Handwerksbetriebe.",
    image: WORKSHOP_IMG,
    spots: 8,
  },
  {
    id: 3,
    title: "Social Media für Dorfvereine",
    date: "5. August 2026",
    location: "Neuruppin",
    category: "Vermarktung",
    categoryColor: "var(--brand-gold)",
    description:
      "Wie Vereine und Initiativen Instagram, Facebook und Co. nutzen, um mehr Menschen zu erreichen und zu begeistern.",
    image: COMMUNITY_IMG,
    spots: 15,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Digitaler Dorfabend Potsdam",
    date: "30. Juli 2026",
    time: "18:30 Uhr",
    location: "Potsdam, Stadthaus",
    type: "Networking",
    typeColor: "var(--brand-purple)",
  },
  {
    id: 2,
    title: "Hackathon: Lösungen für ländliche Räume",
    date: "28.–29. August 2026",
    time: "9:00 Uhr",
    location: "Berlin, betahaus",
    type: "Hackathon",
    typeColor: "var(--brand-orange)",
  },
  {
    id: 3,
    title: "LandDigital Konferenz 2026",
    date: "10.–11. Oktober 2026",
    time: "10:00 Uhr",
    location: "Prenzlau, Kulturhaus",
    type: "Konferenz",
    typeColor: "var(--brand-green)",
  },
];

const blogPosts = [
  {
    slug: "5g-im-dorf",
    title: "5G im Dorf: Was bringt das wirklich?",
    excerpt:
      "Der Ausbau des Mobilfunknetzes schreitet voran — aber was bedeutet 5G konkret für Landwirte, Gemeinden und Gewerbetreibende im ländlichen Raum?",
    date: "Mai 2026",
    category: "Infrastruktur",
    image: HARVEST_IMG,
  },
  {
    slug: "templin-modellgemeinde",
    title: "Wie Templin zur digitalen Modellgemeinde wurde",
    excerpt:
      "Die Kleinstadt in der Uckermark zeigt, wie digitale Verwaltung und smarte Infrastruktur Hand in Hand gehen können.",
    date: "April 2026",
    category: "Praxisbeispiel",
    image: COMMUNITY_IMG,
  },
  {
    slug: "apps-fuer-landwirte",
    title: "Apps, die Landwirte wirklich brauchen",
    excerpt:
      "Unser Test von zehn Landwirtschafts-Apps: Welche überzeugen im Alltag, welche sind Zeitverschwendung?",
    date: "März 2026",
    category: "Tools",
    image: TABLET_FARM_IMG,
  },
];

const stats = [
  { value: "48+", label: "Workshops im Jahr 2026" },
  { value: "1.200+", label: "Teilnehmer bisher" },
  { value: "38", label: "Partnergemeinden" },
  { value: "12", label: "Bundesländer" },
];

const pillars = [
  {
    icon: <Wifi size={28} />,
    title: "Infrastruktur & Vernetzung",
    text: "Breitband, 5G, digitale Verwaltung — wir erklären, was vor Ort bereits möglich ist und welche Förderprogramme es gibt.",
    color: "var(--brand-purple)",
  },
  {
    icon: <Sprout size={28} />,
    title: "Smarte Landwirtschaft",
    text: "Von der Schlagkartei bis zur Drohne: wie digitale Tools die Landarbeit effizienter, transparenter und nachhaltiger machen.",
    color: "var(--brand-green)",
  },
  {
    icon: <Users size={28} />,
    title: "Gemeinschaft & Ehrenamt",
    text: "Dorfvereine, Initiativen und Kommunen: wie digitale Werkzeuge lokales Engagement stärken und vereinfachen.",
    color: "var(--brand-gold)",
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24" style={{ minHeight: "100svh" }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Windmühle in ländlicher Landschaft"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,25,25,0.85) 0%, rgba(26,25,25,0.4) 50%, rgba(26,25,25,0.15) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <span
              className="inline-block text-sm tracking-widest uppercase mb-6 px-3 py-1"
              style={{
                color: "var(--brand-orange)",
                border: "1px solid rgba(240,94,41,0.5)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.15em",
              }}
            >
              Digitalisierung im ländlichen Raum
            </span>
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Digitale Zukunft für den{" "}
              <span style={{ fontStyle: "italic" }}>ländlichen Raum</span>
            </h1>
            <p
              className="text-lg mb-10 max-w-xl"
              style={{
                color: "rgba(249,245,241,0.85)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Workshops, Vernetzung und praxisnahes Wissen für Gemeinden,
              Landwirte und Vereine in Brandenburg und darüber hinaus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="px-8 py-3 text-base"
                style={{
                  backgroundColor: "var(--brand-orange)",
                  color: "white",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Link to="/workshops">
                  Workshops entdecken <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-3 text-base"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Link to="/blog">Mehr erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--brand-orange)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div
                  className="text-4xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {stat.value}
                </div>
                <div className="text-sm opacity-85" style={{ fontFamily: "var(--font-body)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Pillars */}
      <section className="py-24" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span
              className="text-sm tracking-widest uppercase mb-4 block"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              Unsere Mission
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--brand-dark)",
                lineHeight: 1.2,
              }}
            >
              Digitalisierung als Chance —{" "}
              <span style={{ fontStyle: "italic" }}>nicht als Bedrohung</span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-body)",
              }}
            >
              Wir glauben, dass digitale Transformation im ländlichen Raum dann
              gelingt, wenn Menschen das Steuer selbst in der Hand halten. Unsere
              Workshops und Veranstaltungen vermitteln konkrete Kompetenzen —
              praxisnah, verständlich und auf Augenhöhe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-8"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,25,25,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded mb-6"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}
                >
                  {p.icon}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "var(--brand-dark)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Teaser */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span
                className="text-sm tracking-widest uppercase mb-4 block"
                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
              >
                Workshops
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-dark)",
                  lineHeight: 1.2,
                }}
              >
                Nächste Termine
              </h2>
            </div>
            <Link
              to="/workshops"
              className="flex items-center gap-2 text-sm hover:gap-3 transition-all"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              Alle Workshops <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((w) => (
              <article
                key={w.id}
                className="group flex flex-col"
                style={{ border: "1px solid rgba(26,25,25,0.08)" }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <ImageWithFallback
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs text-white tracking-wide"
                    style={{
                      backgroundColor: w.categoryColor,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {w.category}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div
                    className="flex items-center gap-4 text-xs mb-4"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {w.date}
                    </span>
                    <span>{w.location}</span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "var(--brand-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {w.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{
                        color: w.spots < 5 ? "var(--brand-orange)" : "var(--muted-foreground)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {w.spots} Plätze verfügbar
                    </span>
                    <Button
                      asChild
                      size="sm"
                      style={{
                        backgroundColor: "var(--brand-dark)",
                        color: "white",
                        borderRadius: "2px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <Link to="/workshops">Anmelden</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span
                className="text-sm tracking-widest uppercase mb-4 block"
                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
              >
                Veranstaltungen
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-dark)",
                }}
              >
                Nächste Events
              </h2>
            </div>
            <Link
              to="/events"
              className="flex items-center gap-2 text-sm hover:gap-3 transition-all"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              Alle Events <ChevronRight size={16} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 group hover:shadow-sm transition-shadow"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(26,25,25,0.08)",
                }}
              >
                <div className="flex items-start sm:items-center gap-5">
                  <div
                    className="shrink-0 px-3 py-2 text-center min-w-[70px]"
                    style={{ backgroundColor: "var(--brand-cream)" }}
                  >
                    <div
                      className="text-xs uppercase tracking-wide"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                    >
                      {ev.date.split(".").slice(-1)[0]?.trim().split("–")[0]}
                    </div>
                    <div
                      className="text-2xl leading-none mt-1"
                      style={{ fontFamily: "var(--font-display)", color: "var(--brand-dark)" }}
                    >
                      {ev.date.split(".")[0]}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5"
                        style={{
                          backgroundColor: `${ev.typeColor}20`,
                          color: ev.typeColor,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {ev.type}
                      </span>
                    </div>
                    <h3
                      className="text-base"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                        color: "var(--brand-dark)",
                        fontWeight: 500,
                      }}
                    >
                      {ev.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                    >
                      {ev.time} · {ev.location}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  style={{
                    borderColor: "rgba(26,25,25,0.2)",
                    color: "var(--brand-dark)",
                    borderRadius: "2px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Link to="/events">Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span
                className="text-sm tracking-widest uppercase mb-4 block"
                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
              >
                Wissen & Berichte
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 400,
                  color: "var(--brand-dark)",
                }}
              >
                Aktuelles aus dem Blog
              </h2>
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm hover:gap-3 transition-all"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              Alle Artikel <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="overflow-hidden mb-5" style={{ height: "240px" }}>
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="text-xs mb-3 flex items-center gap-3"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    <span
                      style={{
                        color: "var(--brand-orange)",
                        fontWeight: 500,
                      }}
                    >
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3
                    className="mb-3 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "var(--brand-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-24"
        style={{
          backgroundColor: "var(--brand-dark)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <span
              className="text-sm tracking-widest uppercase mb-4 block"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              Newsletter
            </span>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Keine Neuigkeiten verpassen
            </h2>
            <p
              className="mb-10 text-base leading-relaxed"
              style={{
                color: "rgba(249,245,241,0.7)",
                fontFamily: "var(--font-body)",
              }}
            >
              Neue Workshops, Events und Artikel direkt in Ihr Postfach. Kein
              Spam — nur was wirklich relevant ist.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 text-sm outline-none"
                style={{
                  backgroundColor: "rgba(249,245,241,0.1)",
                  border: "1px solid rgba(249,245,241,0.2)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "var(--brand-orange)",
                  color: "white",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                  whiteSpace: "nowrap",
                }}
                className="px-6"
              >
                Anmelden
              </Button>
            </form>
            <p
              className="mt-4 text-xs"
              style={{
                color: "rgba(249,245,241,0.4)",
                fontFamily: "var(--font-body)",
              }}
            >
              Mit der Anmeldung stimmen Sie unserer Datenschutzerklärung zu.
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
