import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Calendar, MapPin, Users, X, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const WORKSHOP_IMG1 =
  "https://images.unsplash.com/photo-1761839257870-06874bda71b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const WORKSHOP_IMG2 =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const WORKSHOP_IMG3 =
  "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const WORKSHOP_IMG4 =
  "https://images.unsplash.com/photo-1762291453908-f760289a7a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const categories = ["Alle", "Tech-Basics", "Landwirtschaft", "Vermarktung", "Verwaltung", "Vernetzung"];

const allWorkshops = [
  {
    id: 1,
    title: "Digitale Tools für Landwirte",
    date: "15. Juli 2026",
    time: "09:00–17:00 Uhr",
    location: "Prenzlau, Kulturzentrum",
    category: "Landwirtschaft",
    categoryColor: "var(--brand-green)",
    description:
      "Praktischer Einstieg in Apps und Software für die moderne Landwirtschaft — von der digitalen Schlagkartei über Wetter-Apps bis zu Preisvergleich-Tools.",
    image: WORKSHOP_IMG1,
    spots: 12,
    totalSpots: 16,
    price: "Kostenlos",
    level: "Einsteiger",
    trainer: "Dr. Sabine Müller",
  },
  {
    id: 2,
    title: "Website erstellen ohne Vorkenntnisse",
    date: "22. Juli 2026",
    time: "09:00–17:00 Uhr",
    location: "Eberswalde, Stadtbibliothek",
    category: "Tech-Basics",
    categoryColor: "var(--brand-purple)",
    description:
      "In einem Tag zur eigenen Website: kostenlose Tools wie WordPress und Wix verständlich erklärt — ideal für Vereine, Hofläden und kleine Handwerksbetriebe.",
    image: WORKSHOP_IMG2,
    spots: 8,
    totalSpots: 12,
    price: "25 €",
    level: "Einsteiger",
    trainer: "Jonas Berg",
  },
  {
    id: 3,
    title: "Social Media für Dorfvereine",
    date: "5. August 2026",
    time: "14:00–18:00 Uhr",
    location: "Neuruppin, Gemeindehaus",
    category: "Vermarktung",
    categoryColor: "var(--brand-gold)",
    description:
      "Wie Vereine und Initiativen Instagram, Facebook und Co. einsetzen, um mehr Menschen zu erreichen, Mitglieder zu gewinnen und Events zu bewerben.",
    image: WORKSHOP_IMG3,
    spots: 15,
    totalSpots: 20,
    price: "Kostenlos",
    level: "Einsteiger",
    trainer: "Lea Hartmann",
  },
  {
    id: 4,
    title: "Online-Verkauf von Regionalprodukten",
    date: "19. August 2026",
    time: "09:00–17:00 Uhr",
    location: "Templin, Stadthaus",
    category: "Vermarktung",
    categoryColor: "var(--brand-gold)",
    description:
      "Vom Hofladen zum Online-Shop: Welche Plattformen eignen sich für regionale Produkte? Praxisübungen mit echtem Feedback und rechtlichen Grundlagen.",
    image: WORKSHOP_IMG1,
    spots: 10,
    totalSpots: 14,
    price: "45 €",
    level: "Fortgeschritten",
    trainer: "Markus Wendel",
  },
  {
    id: 5,
    title: "Fördermittel digital beantragen",
    date: "3. September 2026",
    time: "10:00–15:00 Uhr",
    location: "Prenzlau, Kreishaus",
    category: "Verwaltung",
    categoryColor: "var(--brand-purple-dark)",
    description:
      "Schritt-für-Schritt durch den Dschungel der digitalen Förderanträge: ELER, LEADER und kommunale Programme verständlich erklärt.",
    image: WORKSHOP_IMG4,
    spots: 3,
    totalSpots: 16,
    price: "Kostenlos",
    level: "Alle Niveaus",
    trainer: "Petra Kohl",
  },
  {
    id: 6,
    title: "Drohnen in der Landwirtschaft",
    date: "17. September 2026",
    time: "09:00–17:00 Uhr",
    location: "Bad Freienwalde, Agrarzentrum",
    category: "Landwirtschaft",
    categoryColor: "var(--brand-green)",
    description:
      "Praxisworkshop zu Drohnen in der Landwirtschaft: Rechtliche Grundlagen, Einsatzmöglichkeiten, Handhabung und Live-Demo auf dem Feld.",
    image: WORKSHOP_IMG4,
    spots: 8,
    totalSpots: 10,
    price: "35 €",
    level: "Fortgeschritten",
    trainer: "Felix Bauer",
  },
];

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  privacy: boolean;
};

type Workshop = (typeof allWorkshops)[0];

export function WorkshopsPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormValues>();

  const filtered =
    activeCategory === "Alle"
      ? allWorkshops
      : allWorkshops.filter((w) => w.category === activeCategory);

  const onSubmit = (data: FormValues) => {
    console.log("Anmeldung:", data, "für Workshop:", selectedWorkshop?.title);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSelectedWorkshop(null);
    setSubmitted(false);
    reset();
  };

  return (
    <div style={{ backgroundColor: "var(--brand-cream)" }}>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--brand-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span
            className="text-sm tracking-widest uppercase mb-5 block"
            style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
          >
            Weiterbildung
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
            Workshops &{" "}
            <span style={{ fontStyle: "italic" }}>Anmeldung</span>
          </h1>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(249,245,241,0.7)", fontFamily: "var(--font-body)" }}
          >
            Praxisnahe Workshops zu digitalen Themen — speziell für Menschen
            im ländlichen Raum. Alle Niveaus willkommen, die meisten Angebote
            sind kostenlos oder stark gefördert.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 sticky top-20 z-10" style={{ backgroundColor: "var(--brand-cream)", borderBottom: "1px solid rgba(26,25,25,0.08)" }}>
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

      {/* Workshop Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((w) => (
              <article
                key={w.id}
                className="group flex flex-col bg-white"
                style={{ border: "1px solid rgba(26,25,25,0.08)" }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <ImageWithFallback
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs text-white"
                    style={{ backgroundColor: w.categoryColor, fontFamily: "var(--font-body)" }}
                  >
                    {w.category}
                  </div>
                  {w.spots <= 3 && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs text-white"
                      style={{ backgroundColor: "var(--brand-orange)", fontFamily: "var(--font-body)" }}
                    >
                      Nur noch {w.spots} Plätze!
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="flex flex-wrap gap-3 text-xs mb-4"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {w.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {w.location.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {w.spots}/{w.totalSpots} Plätze
                    </span>
                  </div>

                  <h3
                    className="mb-2"
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
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    {w.description}
                  </p>

                  <div
                    className="flex flex-wrap gap-2 text-xs mb-5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span
                      className="px-2 py-1"
                      style={{
                        backgroundColor: "var(--brand-cream)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {w.level}
                    </span>
                    <span
                      className="px-2 py-1"
                      style={{
                        backgroundColor: "var(--brand-cream)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {w.time}
                    </span>
                    <span
                      className="px-2 py-1 font-medium"
                      style={{
                        backgroundColor: w.price === "Kostenlos" ? "#e8f8f2" : "var(--accent)",
                        color: w.price === "Kostenlos" ? "var(--brand-green)" : "var(--brand-orange)",
                      }}
                    >
                      {w.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                    >
                      Trainer: {w.trainer}
                    </span>
                    <Button
                      onClick={() => setSelectedWorkshop(w)}
                      size="sm"
                      style={{
                        backgroundColor: "var(--brand-orange)",
                        color: "white",
                        borderRadius: "2px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Jetzt anmelden
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedWorkshop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(26,25,25,0.7)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex items-start justify-between p-6 pb-4" style={{ borderBottom: "1px solid rgba(26,25,25,0.08)" }}>
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: "var(--brand-orange)", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                >
                  ANMELDUNG
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--brand-dark)",
                    lineHeight: 1.2,
                  }}
                >
                  {selectedWorkshop.title}
                </h2>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  {selectedWorkshop.date} · {selectedWorkshop.location}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Schließen"
              >
                <X size={20} style={{ color: "var(--brand-dark)" }} />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#e8f8f2" }}
                >
                  <Check size={28} style={{ color: "var(--brand-green)" }} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--brand-dark)",
                  }}
                >
                  Anmeldung erfolgreich!
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  Vielen Dank für Ihre Anmeldung. Sie erhalten in Kürze eine
                  Bestätigungs-E-Mail mit allen weiteren Informationen.
                </p>
                <Button
                  onClick={handleClose}
                  style={{
                    backgroundColor: "var(--brand-dark)",
                    color: "white",
                    borderRadius: "2px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Schließen
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Vorname *
                    </Label>
                    <Input
                      {...register("firstName", { required: true })}
                      placeholder="Maria"
                      style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                      className={errors.firstName ? "border-red-400" : ""}
                    />
                  </div>
                  <div>
                    <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Nachname *
                    </Label>
                    <Input
                      {...register("lastName", { required: true })}
                      placeholder="Müller"
                      style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                      className={errors.lastName ? "border-red-400" : ""}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    E-Mail-Adresse *
                  </Label>
                  <Input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    type="email"
                    placeholder="maria@beispiel.de"
                    style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                    className={errors.email ? "border-red-400" : ""}
                  />
                </div>

                <div className="mb-4">
                  <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Telefon (optional)
                  </Label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="+49 ..."
                    style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="mb-4">
                  <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Organisation / Gemeinde (optional)
                  </Label>
                  <Input
                    {...register("organization")}
                    placeholder="Mein Dorfverein e.V."
                    style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="mb-6">
                  <Label className="mb-1.5 block text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Fragen oder Anmerkungen
                  </Label>
                  <Textarea
                    {...register("message")}
                    placeholder="Was erwarten Sie vom Workshop? Haben Sie besondere Anforderungen?"
                    rows={3}
                    style={{ borderRadius: "2px", fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Controller
                    name="privacy"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Checkbox
                        id="privacy"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        style={{ marginTop: "2px" }}
                      />
                    )}
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm leading-relaxed cursor-pointer"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                  >
                    Ich habe die{" "}
                    <span style={{ color: "var(--brand-orange)", textDecoration: "underline" }}>
                      Datenschutzerklärung
                    </span>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-xs text-red-500 -mt-4 mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    Bitte stimmen Sie der Datenschutzerklärung zu.
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full py-3"
                  style={{
                    backgroundColor: "var(--brand-orange)",
                    color: "white",
                    borderRadius: "2px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Verbindlich anmelden
                </Button>
                <p
                  className="text-center text-xs mt-3"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  * Pflichtfelder. Nach der Anmeldung erhalten Sie eine Bestätigungs-E-Mail.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
