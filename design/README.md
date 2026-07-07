# design/ — Design-Quelle (nicht ausgeliefert)

Kurz fürs Team: Hier liegt der **Figma-Make/React-Export** (React + Vite + Tailwind +
shadcn/ui). Das ist die **Design-Quelle** und zugleich der **Sync-Kanal
Figma ↔ GitHub ↔ Cursor** — nicht die ausgelieferte Website.

## Warum dieser Ordner existiert
Am **2026-06-09** ist alles Design-Bezogene aus dem Repo-Wurzelverzeichnis hierher
gewandert (Issue #18). Vorher lag der `src/`-Baum samt Build-Toolchain
(`package.json`, `vite.config.ts`, …) direkt im Root und vermischte sich mit der
eigentlichen Website. Jetzt sind die beiden Anliegen sauber getrennt:

- **`design/`** (dieser Ordner) — Design-Quelle/Prototyp, **nicht** ausgeliefert.
- **`deploy/`** (Repo-Root) — die echte, statische Website (HTML/CSS/PHP), die
  deployt wird.

## Was das fürs Arbeiten bedeutet
- **Pfade haben sich geändert:** Was früher unter `src/…` lag, liegt jetzt unter
  `design/src/…`; die Toolchain-Dateien liegen unter `design/`. Figma/Cursor-Zugriffe
  ggf. auf die neuen Pfade anpassen.
- **Wird nicht deployt:** Das Deploy kopiert ausschließlich `deploy/`
  (`rsync -a --delete deploy/ …`) — dieser Ordner erreicht den Server nie.
- **Build (falls genutzt):** läuft jetzt aus `design/` (alle Pfade sind relativ und
  ziehen unverändert mit).

Die Website selbst wird **nicht** aus diesem Ordner gebaut; sie ist handgeschriebenes
HTML/CSS/PHP unter `deploy/`.
