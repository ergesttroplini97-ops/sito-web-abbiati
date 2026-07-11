# Sito Web — Studio Legale Associato Abbiati

Sito vetrina per lo **Studio Legale Associato Abbiati** di Busto Arsizio (VA):
assistenza legale in diritto penale e civile.

Tema **Dark Luxury** (nero e oro) con font Cinzel / EB Garamond / Outfit,
video di sfondo, gallerie fotografiche a scorrimento e schede dei professionisti.

## Struttura

```
bozza 3/               Versione corrente del sito
├── index.html         Homepage
├── lo-studio.html     Presentazione dello studio
├── attivita.html      Aree di competenza (penale e civile)
├── i-professionisti.html  Schede dei 5 avvocati
├── contatti.html      Recapiti, orari e dati legali
├── style.css          Stili (tema Dark Luxury)
├── script.js          Navbar, menu mobile, animazioni
├── foto/              Fotografie ottimizzate per il web
└── restyling/         Video di sfondo e logo
note-testi-sito.md     Note e testi di riferimento
```

## Sviluppo in locale

Non servono build né dipendenze: è un sito statico.

```bash
# con Python
python -m http.server 8080 --directory "bozza 3"

# oppure con Node
npx serve "bozza 3"
```

Poi apri `http://localhost:8080`.

## Deploy

Il sito viene pubblicato automaticamente su **GitHub Pages** ad ogni push
su `main` tramite GitHub Actions (`.github/workflows/deploy.yml`).

## Tecnologie

HTML5 · CSS3 (custom properties, grid, animazioni) · JavaScript vanilla ·
Google Fonts (Cinzel, EB Garamond, Outfit)
