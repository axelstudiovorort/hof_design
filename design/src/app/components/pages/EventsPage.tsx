import { useState } from "react";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const HERO_IMG =
  "https://images.unsplash.com/photo-1503346359167-984a891788fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";
const EVENT_IMG1 =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const EVENT_IMG2 =
  "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const eventTypes = ["Alle", "Konferenz", "Networking", "Hackathon", "Workshop", "Messe"];

const upcomingEvents = [
  {
    id: 1,
    title: "Digitaler Dorfabend Potsdam",
    date: "30. Juli 2026",
    dayNum: "30",
    month: "Jul",
    time: "18:30–21:00 Uhr",
    location: "Potsdam, Stadthaus, Hegelallee 6",
    type: "Networking",
    typeColor: "var(--brand-purple)",
    description:
      "Monatliches Treffen für alle, die sich für digitale Themen im ländlichen Brandenburg interessieren. Austausch, kurze Impulsvorträge, nette Gespräche.",
    free: true,
    image: EVENT_IMG2,
    registration: true,
  },
  {
    id: 2,
    title: "Hackathon: Lösungen für ländliche Räume",
    date: "28.–29. August 2026",
    dayNum: "28",
    month: "Aug",
    time: "Fr 9:00 – Sa 20:00 Uhr",
    location: "Berlin, betahaus, Prinzessinnenstr. 19–20",
    type: "Hackathon",
    typeColor: "var(--brand-orange)",
    description:
      "48 Stunden Kreativität und Coding: Teams entwickeln digitale Lösungen für konkrete Herausforderungen in Dörfern und Kleinstädten. Preisgelder im Wert von 5.000 €.",
    free: true,
    image: EVENT_IMG1,
    registration: true,
  },
  {
    id: 3,
    title: "Messe: Digitale Landwirtschaft",
    date: "25. September 2026",
    dayNum: "25",
    month: "Sep",
    time: "10:00–18:00 Uhr",
    location: "Eberswalde, Messegelände",
    type: "Messe",
    typeColor: "var(--brand-green)",
    description:
      "Aussteller aus dem AgriTech-Bereich präsentieren ihre neuesten Lösungen. Kostenlose Fachvorträge, Produktdemos und Beratung für Landwirte und Betriebsleiter.",
    free: false,
    price: "10 € Tageskarte",
    image: EVENT_IMG2,
    registration: false,
  },
  {
    id: 4,
    title: "LandDigital Konferenz 2026",
    date: "10.–11. Oktober 2026",
    dayNum: "10",
    month: "Okt",
    time: "Sa–So, 9:00–18:00 Uhr",
    location: "Prenzlau, Kulturhaus am Markt",
    type: "Konferenz",
    typeColor: "var(--brand-purple-dark)",
    description:
      "Die Jahreskonferenz zur Digitalisierung im ländlichen Raum: 30+ Speaker, Workshops, Podiumsdiskussionen und Ausstellung. Das Leitthema 2026: 'Daten für die Dörfer'.",
    free: false,
    price: "ab 49 €",
    image: EVENT_IMG1,
    registration: true,
    highlight: true,
  },
];

const pastEvents = [
  {
    id: 10,
    title: "LandDigital Konferenz 2025",
    date: "Oktober 2025",
    location: "Neuruppin",
    type: "Konferenz",
    attendees: 380,
  },
  {
    id: 11,
    title: "Hackathon Uckermark 2025",
    date: "September 2025",
    location: "Prenzlau",
    type: "Hackathon",
    attendees: 94,
  },
  {
    id: 12,
    title: "Digitaler Dorfabend – Jahresrückblick",
    date: "Dezember 2025",
    location: "Potsdam",
    type: "Networking",
    attendees: 67,
  },
];

export function EventsPage() {
  const [activeType, setActiveType] = useState("Alle");

  const filtered =
    activeType === "Alle"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.type === activeType);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Luftaufnahme einer deutschen Stadt"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(26,25,25,0.85) 0%, rgba(26,25,25,0.4) 100%)" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <span
            className="text-sm tracking-widest uppercase mb-5 block"
            style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
          >
            Veranstaltungen
          </span>
          <h1
            className="text-white max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Events &{" "}
            <span style={{ fontStyle: "italic" }}>Vernetzung</span>
          </h1>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(249,245,241,0.75)", fontFamily: "var(--font-body)" }}
          >
            Konferenzen, Netzwerktreffen und Hackathons rund um die
            Digitalisierung im ländlichen Raum — lernen, diskutieren, vernetzen.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section
        className="py-8 sticky top-20 z-10"
        style={{
          backgroundColor: "var(--brand-cream)",
          borderBottom: "1px solid rgba(26,25,25,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {eventTypes.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className="px-4 py-2 text-sm transition-all"
                style={{
                  fontFamily: "var(--font-body)",
                  backgroundColor: activeType === t ? "var(--brand-dark)" : "white",
                  color: activeType === t ? "white" : "var(--brand-dark)",
                  border: "1px solid rgba(26,25,25,0.15)",
                  borderRadius: "2px",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16" style={{ backgroundColor: "var(--brand-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 400,
              color: "var(--brand-dark)",
            }}
          >
            Bevorstehende Veranstaltungen
          </h2>

          <div className="flex flex-col gap-6">
            {filtered.map((ev) => (
              <article
                key={ev.id}
                className="overflow-hidden"
                style={{
                  backgroundColor: "white",
                  border: ev.highlight
                    ? "2px solid var(--brand-orange)"
                    : "1px solid rgba(26,25,25,0.08)",
                }}
              >
                {ev.highlight && (
                  <div
                    className="px-6 py-2 text-xs text-white tracking-wide"
                    style={{ backgroundColor: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
                  >
                    ★ JAHRESHIGHLIGHT
                  </div>
                )}
                <div className="flex flex-col md:flex-row">
                  <div className="hidden md:block w-48 shrink-0 relative overflow-hidden">
                    <ImageWithFallback
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row flex-1">
                    <div
                      className="flex-1 p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs px-2 py-1"
                          style={{
                            backgroundColor: `${ev.typeColor}18`,
                            color: ev.typeColor,
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {ev.type}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            color: ev.free ? "var(--brand-green)" : "var(--muted-foreground)",
                            fontFamily: "var(--font-body)",
                            fontWeight: ev.free ? 500 : 400,
                          }}
                        >
                          {"price" in ev && ev.price ? ev.price : "Kostenlos"}
                        </span>
                      </div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          color: "var(--brand-dark)",
                          lineHeight: 1.2,
                        }}
                      >
                        {ev.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                      >
                        {ev.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-4 text-sm"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} style={{ color: "var(--brand-orange)" }} />
                          {ev.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} style={{ color: "var(--brand-orange)" }} />
                          {ev.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} style={{ color: "var(--brand-orange)" }} />
                          {ev.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex items-end md:items-center md:justify-center shrink-0">
                      {ev.registration ? (
                        <Button
                          style={{
                            backgroundColor: "var(--brand-orange)",
                            color: "white",
                            borderRadius: "2px",
                            fontFamily: "var(--font-body)",
                          }}
                          className="flex items-center gap-2"
                        >
                          Anmelden <ExternalLink size={14} />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          style={{
                            borderColor: "rgba(26,25,25,0.2)",
                            color: "var(--brand-dark)",
                            borderRadius: "2px",
                            fontFamily: "var(--font-body)",
                          }}
                          className="flex items-center gap-2"
                        >
                          Mehr Info <ExternalLink size={14} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 400,
              color: "var(--brand-dark)",
            }}
          >
            Vergangene Veranstaltungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastEvents.map((ev) => (
              <div
                key={ev.id}
                className="p-5"
                style={{
                  border: "1px solid rgba(26,25,25,0.08)",
                }}
              >
                <div
                  className="text-xs mb-2"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  {ev.type} · {ev.date}
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    color: "var(--brand-dark)",
                    fontWeight: 500,
                  }}
                >
                  {ev.title}
                </h4>
                <div
                  className="flex items-center justify-between text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span style={{ color: "var(--muted-foreground)" }}>
                    <MapPin size={12} className="inline mr-1" />
                    {ev.location}
                  </span>
                  <span style={{ color: "var(--brand-green)", fontWeight: 500 }}>
                    {ev.attendees} Teilnehmer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
