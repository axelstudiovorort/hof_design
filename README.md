# Hof Prädikow — Design Library

Design-Brandbook und Tokens für **Hof Prädikow e.V.** (Projekt „Regionale Digitale“).

Kopiert aus [`philipphentschel/digitale-regionale-website`](https://github.com/philipphentschel/digitale-regionale-website).

## Inhalt

| Pfad | Beschreibung |
|------|--------------|
| `design/` | Figma-Make/React-Prototyp mit **Design Library** (`design/src/app/components/DesignLibrary.tsx`) |
| `tokens/style.css` | Zentrale Farb- und Typografie-Tokens (`:root`) für die ausgelieferte Website |
| `fonts/` | Webfonts (GT Sectra Fine, Europa) |

## Design Library lokal starten

```bash
cd design
pnpm install
pnpm dev
```

## Tokens nutzen

Die Markenfarben (Vollfarben + Mid-Varianten) stehen in `tokens/style.css` unter `:root`, z. B.:

- `--brand-orange`, `--brand-orange-mid`, `--brand-orange-light`
- `--brand-blue`, `--brand-blue-mid`, `--brand-blue-light`
- `--brand-green`, `--brand-green-mid`, `--brand-green-light`
- `--brand-gold`, `--brand-gold-mid`, `--brand-gold-light`

## Quelle

Ursprünglich Teil von [digitale-regionale-website](https://github.com/philipphentschel/digitale-regionale-website) — `design/` und `deploy/public/css/style.css`.
