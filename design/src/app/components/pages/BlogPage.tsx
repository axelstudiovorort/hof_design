import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const IMG1 =
  "https://images.unsplash.com/photo-1762291453908-f760289a7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG2 =
  "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG3 =
  "https://images.unsplash.com/photo-1761839257870-06874bda71b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG4 =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const categories = ["Alle", "Infrastruktur", "Praxisbeispiel", "Tools", "Verwaltung", "Interview", "Förderung"];

const posts = [
  {
    slug: "5g-im-dorf",
    title: "5G im Dorf: Was bringt das wirklich?",
    excerpt:
      "Der Ausbau des Mobilfunknetzes schreitet voran — aber was bedeutet 5G konkret für Landwirte, Gemeinden und Gewerbetreibende? Ein nüchterner Blick auf Potenziale und Grenzen.",
    date: "20. Mai 2026",
    readTime: "6 Min.",
    category: "Infrastruktur",
    categoryColor: "var(--brand-purple)",
    author: "Tobias Wolff",
    image: IMG1,
    featured: true,
  },
  {
    slug: "templin-modellgemeinde",
    title: "Wie Templin zur digitalen Modellgemeinde wurde",
    excerpt:
      "Die Kleinstadt in der Uckermark zeigt, wie digitale Verwaltung und smarte Infrastruktur Hand in Hand gehen können — ein Besuch vor Ort.",
    date: "14. April 2026",
    readTime: "8 Min.",
    category: "Praxisbeispiel",
    categoryColor: "var(--brand-green)",
    author: "Jana Fischer",
    image: IMG2,
  },
  {
    slug: "apps-fuer-landwirte",
    title: "Apps, die Landwirte wirklich brauchen",
    excerpt:
      "Unser Test von zehn Landwirtschafts-Apps: Welche überzeugen im Alltag, welche sind Zeitverschwendung? Ein ehrlicher Vergleich aus der Praxis.",
    date: "3. März 2026",
    readTime: "5 Min.",
    category: "Tools",
    categoryColor: "var(--brand-gold)",
    author: "Klaus Bergmann",
    image: IMG3,
  },
  {
    slug: "digitale-verwaltung-buergeramt",
    title: "Digitale Verwaltung: Bürgeramt ohne Wartezeit",
    excerpt:
      "Mehrere Gemeinden in Brandenburg haben ihre Verwaltung erfolgreich digitalisiert. Was haben sie richtig gemacht — und was können andere davon lernen?",
    date: "18. Februar 2026",
    readTime: "7 Min.",
    category: "Verwaltung",
    categoryColor: "var(--brand-purple-dark)",
    author: "Petra Kohl",
    image: IMG4,
  },
  {
    slug: "breitband-brandenburg",
    title: "Breitband für alle: Der Stand in Brandenburg",
    excerpt:
      "Das Breitband-Förderprogramm des Bundes läuft — doch welche Gemeinden profitieren wirklich? Wir haben die aktuellen Zahlen ausgewertet.",
    date: "5. März 2026",
    readTime: "4 Min.",
    category: "Infrastruktur",
    categoryColor: "var(--brand-purple)",
    author: "Tobias Wolff",
    image: IMG1,
  },
  {
    slug: "interview-landgasthof",
    title: "Interview: Wie ein Landgasthof seinen Online-Auftritt verbesserte",
    excerpt:
      "Familie Schreiber aus Lychen erzählt, wie sie mit einer einfachen Website und Social Media ihren Gästestamm in zwei Jahren verdoppelt haben.",
    date: "22. Januar 2026",
    readTime: "5 Min.",
    category: "Interview",
    categoryColor: "var(--brand-gold)",
    author: "Lea Hartmann",
    image: IMG2,
  },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered =
    activeCategory === "Alle"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const others = filtered.filter((p) => !p.featured || activeCategory !== "Alle");

  return (
    <div style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span
            className="text-sm tracking-widest uppercase mb-5 block"
            style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
          >
            Wissen & Berichte
          </span>
          <h1
            className="text-white max-w-xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Blog &{" "}
            <span style={{ fontStyle: "italic" }}>Reportagen</span>
          </h1>
          <p
            className="mt-5 max-w-lg text-base leading-relaxed"
            style={{ color: "rgba(249,245,241,0.7)", fontFamily: "var(--font-body)" }}
          >
            Hintergründe, Praxisberichte und Anleitungen rund um die
            digitale Transformation im ländlichen Deutschland.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "Alle" && featured && (
        <section className="pt-16 pb-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <article
                className="overflow-hidden flex flex-col lg:flex-row"
                style={{ backgroundColor: "white", border: "1px solid rgba(26,25,25,0.08)" }}
              >
                <div className="lg:w-1/2 relative overflow-hidden" style={{ minHeight: "340px" }}>
                  <ImageWithFallback
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs px-3 py-1"
                      style={{
                        backgroundColor: `${featured.categoryColor}18`,
                        color: featured.categoryColor,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      className="text-xs px-2 py-1"
                      style={{
                        backgroundColor: "var(--brand-orange)",
                        color: "white",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Neuester Artikel
                    </span>
                  </div>
                  <h2
                    className="mb-4 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      fontWeight: 500,
                      color: "var(--brand-dark)",
                      lineHeight: 1.2,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div style={{ color: "var(--muted-foreground)" }}>
                      {featured.author} · {featured.date}
                    </div>
                    <div
                      className="flex items-center gap-1"
                      style={{ color: "var(--brand-orange)", fontWeight: 500 }}
                    >
                      <Clock size={14} /> {featured.readTime}
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-2 mt-6 text-sm font-medium"
                    style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
                  >
                    Artikel lesen <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section
        className="py-8 sticky top-20 z-10"
        style={{
          backgroundColor: "var(--brand-cream)",
          borderBottom: "1px solid rgba(26,25,25,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-sm transition-all"
                style={{
                  fontFamily: "var(--font-body)",
                  backgroundColor: activeCategory === cat ? "var(--brand-dark)" : "white",
                  color: activeCategory === cat ? "white" : "var(--brand-dark)",
                  border: "1px solid rgba(26,25,25,0.15)",
                  borderRadius: "2px",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post) => (
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
                    className="flex items-center gap-2 mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span
                      className="text-xs px-2 py-0.5"
                      style={{
                        backgroundColor: `${post.categoryColor}18`,
                        color: post.categoryColor,
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-xs flex items-center gap-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="mb-2 group-hover:opacity-70 transition-opacity"
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
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {post.author} · {post.date}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
