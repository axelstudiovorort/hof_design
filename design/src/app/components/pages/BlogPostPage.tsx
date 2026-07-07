import { Link, useParams } from "react-router";
import { ArrowLeft, Clock, Calendar, User, Share2, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const IMG1 =
  "https://images.unsplash.com/photo-1762291453908-f760289a7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
const IMG2 =
  "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
const IMG3 =
  "https://images.unsplash.com/photo-1761839257870-06874bda71b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

const postsData: Record<string, {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string }[];
  relatedSlugs: string[];
}> = {
  "5g-im-dorf": {
    title: "5G im Dorf: Was bringt das wirklich?",
    date: "20. Mai 2026",
    author: "Tobias Wolff",
    readTime: "6 Min.",
    category: "Infrastruktur",
    categoryColor: "var(--brand-purple)",
    image: IMG1,
    intro:
      "Der Ausbau des Mobilfunknetzes schreitet voran — doch was bedeutet 5G konkret für Landwirte, Gemeinden und Gewerbetreibende im ländlichen Raum? Wir haben uns die Fakten angeschaut.",
    sections: [
      {
        heading: "Was ist 5G und wie unterscheidet es sich von 4G?",
        body:
          "5G ist die fünfte Generation des Mobilfunkstandards. Im Vergleich zu 4G bietet es deutlich höhere Übertragungsraten (bis zu 10 Gbit/s), niedrigere Latenzzeiten (unter 1 ms) und die Fähigkeit, sehr viele Geräte gleichzeitig zu vernetzen. Im ländlichen Raum ist das vor allem für Smart-Farming-Anwendungen relevant: Sensornetzwerke auf dem Feld, Drohnensteuerung in Echtzeit und automatisierte Maschinen profitieren besonders von diesen Eigenschaften.",
      },
      {
        heading: "Ausbaustand in Brandenburg",
        body:
          "Laut aktuellem Bundesnetzagentur-Bericht sind in Brandenburg rund 60 % der Fläche mit 5G versorgt — allerdings konzentriert sich das auf die Ballungszentren. Im ländlichen Raum liegt die Abdeckung je nach Landkreis zwischen 10 und 35 %. Das ist ein Problem, das politisch und wirtschaftlich gelöst werden muss. Das Bundesprogramm 'Mobilfunk für Deutschland' fördert den Bau neuer Mobilfunkmasten, aber die Umsetzung dauert.",
      },
      {
        heading: "Praxisbeispiel: Präzisionslandwirtschaft in der Uckermark",
        body:
          "Ein Betrieb in Boitzenburg hat als einer der ersten in Brandenburg ein 5G-Privatnetz auf seinem Gelände aufgebaut. Mit eigenen Antennen versorgt er eine Fläche von 500 Hektar und steuert damit vollautomatisch seine Erntemaschinen. Der Einstieg war nicht günstig — aber die Ersparnisse durch präzisere Düngung und geringeren Kraftstoffverbrauch haben sich nach drei Jahren ausgezahlt.",
      },
      {
        heading: "Fazit: Potenzial vorhanden, Umsetzung braucht Zeit",
        body:
          "5G bietet echte Chancen für den ländlichen Raum — aber nur wenn der Ausbau konsequent vorangetrieben wird. Wer jetzt plant, sollte Förderprogramme im Blick behalten und sich mit der Gemeindeverwaltung abstimmen. In unseren Workshops gehen wir konkret auf die Möglichkeiten und Förderwege ein.",
      },
    ],
    relatedSlugs: ["breitband-brandenburg", "apps-fuer-landwirte"],
  },
  "templin-modellgemeinde": {
    title: "Wie Templin zur digitalen Modellgemeinde wurde",
    date: "14. April 2026",
    author: "Jana Fischer",
    readTime: "8 Min.",
    category: "Praxisbeispiel",
    categoryColor: "var(--brand-green)",
    image: IMG2,
    intro:
      "Die Kleinstadt Templin in der Uckermark hat innerhalb von drei Jahren ihre Verwaltung digitalisiert und ist zur Modellgemeinde geworden. Wie ist das gelungen?",
    sections: [
      {
        heading: "Der Ausgangspunkt: Frustration über lange Wartezeiten",
        body:
          "2022 hatte Templin ein Problem: Das Bürgeramt war chronisch überlastet, Wartezeiten von zwei Stunden waren keine Seltenheit. Gleichzeitig waren viele Verwaltungsprozesse noch papierbasiert. Bürgermeisterin Karin Schreiber entschied sich, das Problem grundlegend anzugehen — nicht mit mehr Personal, sondern mit digitalen Lösungen.",
      },
      {
        heading: "Schritt 1: Die Infrastruktur",
        body:
          "Zunächst wurde das interne Netzwerk modernisiert und alle Sachbearbeiter mit modernen Arbeitsgeräten ausgestattet. Ein lokales Glasfasernetz verbindet heute alle städtischen Gebäude. Der Aufwand: rund 400.000 Euro, zu 80 % durch LEADER-Fördermittel gedeckt.",
      },
      {
        heading: "Schritt 2: Das Online-Bürgerportal",
        body:
          "Mit dem Bund-Länder-Programm Onlinezugangsgesetz (OZG) wurde ein gemeinsames Portal mit dem Landkreis aufgebaut. Heute können Bürgerinnen und Bürger über 60 Verwaltungsleistungen digital beantragen — von der Ummeldung bis zum Bauantrag. Die Wartezeiten am Schalter sind auf unter 20 Minuten gesunken.",
      },
    ],
    relatedSlugs: ["5g-im-dorf", "digitale-verwaltung-buergeramt"],
  },
  "apps-fuer-landwirte": {
    title: "Apps, die Landwirte wirklich brauchen",
    date: "3. März 2026",
    author: "Klaus Bergmann",
    readTime: "5 Min.",
    category: "Tools",
    categoryColor: "var(--brand-gold)",
    image: IMG3,
    intro:
      "Der Markt für Landwirtschafts-Apps wächst rasant. Wir haben zehn populäre Tools getestet und verraten, welche den Alltag auf dem Betrieb wirklich erleichtern.",
    sections: [
      {
        heading: "Schlagkartei & Ackermanagement",
        body:
          "Die App 'agroField' überzeugt durch eine intuitive Bedienung und zuverlässige Offline-Funktion — wichtig auf dem Land, wo der Empfang oft schlecht ist. Konkurrent 'FarmApp Pro' bietet mehr Funktionen, aber die Bedienoberfläche überfordert Einsteiger.",
      },
      {
        heading: "Wettervorhersage für Landwirte",
        body:
          "Für präzise Wettervorhersagen empfehlen wir 'Meteoblue Agriculture': Die App zeigt nicht nur Regen und Temperatur, sondern auch Taubildung, Bodenfeuchte und Ernteindex — und das für jede einzelne Parzelle. Das Abo kostet 9,90 € monatlich, ist aber jeden Cent wert.",
      },
      {
        heading: "Preisvergleich & Marktinformationen",
        body:
          "'AMAnet' der Agrarmarkt Austria bietet gute Preisdaten für Getreide, Milch und Vieh — auch für den deutschen Markt. Kostenlos und zuverlässig. Wer tiefer einsteigen will, nutzt zusätzlich die AMI-Datenbank des ZMP.",
      },
    ],
    relatedSlugs: ["templin-modellgemeinde", "5g-im-dorf"],
  },
};

const allPostsMeta: Record<string, { title: string; category: string; date: string; image: string }> = {
  "5g-im-dorf": { title: "5G im Dorf: Was bringt das wirklich?", category: "Infrastruktur", date: "20. Mai 2026", image: IMG1 },
  "templin-modellgemeinde": { title: "Wie Templin zur digitalen Modellgemeinde wurde", category: "Praxisbeispiel", date: "14. April 2026", image: IMG2 },
  "apps-fuer-landwirte": { title: "Apps, die Landwirte wirklich brauchen", category: "Tools", date: "3. März 2026", image: IMG3 },
  "digitale-verwaltung-buergeramt": { title: "Digitale Verwaltung: Bürgeramt ohne Wartezeit", category: "Verwaltung", date: "18. Feb 2026", image: IMG2 },
  "breitband-brandenburg": { title: "Breitband für alle: Der Stand in Brandenburg", category: "Infrastruktur", date: "5. März 2026", image: IMG1 },
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20" style={{ backgroundColor: "var(--brand-cream)" }}>
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--brand-dark)" }}
        >
          Artikel nicht gefunden
        </h1>
        <p className="mb-8" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
          Dieser Artikel existiert leider nicht oder wurde verschoben.
        </p>
        <Button
          asChild
          style={{ backgroundColor: "var(--brand-orange)", color: "white", borderRadius: "2px", fontFamily: "var(--font-body)" }}
        >
          <Link to="/blog">Zum Blog</Link>
        </Button>
      </div>
    );
  }

  const related = post.relatedSlugs
    .map((s) => allPostsMeta[s])
    .filter(Boolean);

  return (
    <div style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* Hero Image */}
      <div className="relative" style={{ height: "clamp(300px, 50vw, 520px)" }}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,25,25,0.7) 0%, transparent 60%)" }}
        />
      </div>

      {/* Article content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <article className="lg:col-span-2">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
              style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
            >
              <ArrowLeft size={14} /> Zurück zum Blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs px-3 py-1"
                style={{
                  backgroundColor: `${post.categoryColor}18`,
                  color: post.categoryColor,
                  fontFamily: "var(--font-body)",
                }}
              >
                {post.category}
              </span>
            </div>

            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--brand-dark)",
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </h1>

            <div
              className="flex flex-wrap items-center gap-5 pb-6 mb-8 text-sm"
              style={{
                borderBottom: "1px solid rgba(26,25,25,0.1)",
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="flex items-center gap-1.5">
                <User size={14} style={{ color: "var(--brand-orange)" }} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} style={{ color: "var(--brand-orange)" }} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} style={{ color: "var(--brand-orange)" }} />
                {post.readTime} Lesezeit
              </span>
              <button
                className="ml-auto flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              >
                <Share2 size={14} /> Teilen
              </button>
            </div>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{
                color: "var(--brand-dark)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                borderLeft: "3px solid var(--brand-orange)",
                paddingLeft: "1.25rem",
              }}
            >
              {post.intro}
            </p>

            <div className="space-y-8">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: "var(--brand-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {section.heading}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-12 p-8"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(26,25,25,0.08)",
              }}
            >
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: "var(--brand-dark)",
                  fontWeight: 500,
                }}
              >
                Dieses Thema live erleben?
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
              >
                In unseren Workshops gehen wir auf genau solche Themen ein —
                praxisnah und ohne Fachchinesisch. Jetzt einen Platz sichern.
              </p>
              <Button
                asChild
                className="flex items-center gap-2"
                style={{
                  backgroundColor: "var(--brand-orange)",
                  color: "white",
                  borderRadius: "2px",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Link to="/workshops">
                  Zu den Workshops <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div
                className="p-6"
                style={{ backgroundColor: "white", border: "1px solid rgba(26,25,25,0.08)" }}
              >
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: "var(--brand-dark)",
                    fontWeight: 500,
                  }}
                >
                  Ähnliche Artikel
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((r, i) => (
                    <Link
                      key={i}
                      to={`/blog/${post.relatedSlugs[i]}`}
                      className="flex gap-3 group"
                    >
                      <div
                        className="shrink-0 overflow-hidden"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <ImageWithFallback
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <div
                          className="text-xs mb-1"
                          style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
                        >
                          {r.category}
                        </div>
                        <p
                          className="text-sm leading-snug group-hover:opacity-70 transition-opacity"
                          style={{ color: "var(--brand-dark)", fontFamily: "var(--font-body)", fontWeight: 500 }}
                        >
                          {r.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className="p-6"
                style={{ backgroundColor: "var(--brand-dark)" }}
              >
                <h3
                  className="mb-3 text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                  }}
                >
                  Newsletter
                </h3>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: "rgba(249,245,241,0.7)", fontFamily: "var(--font-body)" }}
                >
                  Neue Artikel direkt ins Postfach
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="px-3 py-2 text-sm outline-none"
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
                    }}
                  >
                    Anmelden
                  </Button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
