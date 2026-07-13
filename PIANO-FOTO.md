# Piano fotografico — Sito Studio Legale Associato Abbiati

Documento di riferimento per organizzare, nominare e posizionare le foto sul sito.
Aggiornato al: 12 luglio 2026

---

## 1. Organizzazione delle cartelle

```
Abbiati booza claude - Copia\
├── foto\                  ← SOLO foto ottimizzate per il web (quelle usate dal sito)
├── foto abbiati gemini\   ← originali ad alta risoluzione (archivio sorgente, mai linkate dal sito)
│   └── il team\           ← originali foto di gruppo
├── restyling\             ← video e logo usati dal sito
└── _archivio\             ← materiale vecchio, eliminabile quando sicuri
```

**Regola d'oro:** il sito usa solo la cartella `foto/`. Gli originali (4-6 MB l'uno)
restano nell'archivio sorgente e vengono convertiti in versioni web (100-300 KB)
prima dell'inserimento. Mai linkare un originale direttamente.

## 2. Convenzione dei nomi

Formato: `soggetto-descrizione.jpg`, tutto minuscolo, senza spazi né accenti.

| Prefisso   | Uso                                    | Esempi già presenti                       |
|------------|----------------------------------------|-------------------------------------------|
| `luca-`    | foto individuali Avv. Luca Abbiati     | `luca-volto.jpg`, `luca-mondrian.jpg`     |
| `matteo-`  | foto individuali Avv. Matteo Abbiati   | `matteo-volto.jpg`, `matteo-ritratto.jpg` |
| `team-`    | foto di gruppo                         | `team-panoramica.jpg`, `team-toga.jpg`    |
| `studio-`  | ambienti/interni senza persone (futuro)| `studio-ingresso.jpg`, `studio-sala.jpg`  |
| `monica-`, `elisa-`, `chiara-` | collaboratrici (futuro)| `monica-volto.jpg`                        |

Suffissi ricorrenti: `-volto` (ritaglio quadrato per foto profilo), `-ritratto`
(figura intera verticale), `-panoramica` (larga per banner).

## 3. Specifiche tecniche per l'ottimizzazione

| Uso                        | Lato lungo | Formato | Peso target |
|----------------------------|-----------|---------|-------------|
| Banner a tutta larghezza   | 2400 px   | JPG q82 | < 600 KB    |
| Foto sezioni/gallerie      | 1600 px   | JPG q82 | < 250 KB    |
| Ritagli volto (cerchio)    | 700×700   | JPG q82 | < 80 KB     |

Sempre: `loading="lazy"` (tranne il banner in cima alla pagina), attributo `alt`
descrittivo in italiano, `object-fit: cover` per i ritagli via CSS.

## 4. Mappa attuale delle foto sul sito (agg. 13/07/2026)

### Homepage (index.html)
1. **Hero** → video villa (`restyling/header homepage.mp4`)
2. **Fascia team a tutta larghezza** → `team-panoramica.jpg` (subito dopo il hero)
3. **I Soci Fondatori**: foto di apertura `soci-insieme.jpg` (DSC_5345, quadro oro —
   la 5330 è stata scartata dal cliente perché sfuocata) +
   blocchi alternati → `luca-libreria.jpg` (DSC_5318) + `matteo-ritratto.jpg` +
   coppia "al lavoro" → `matteo-lettura.jpg` (DSC_5446) + `luca-telefono.jpg` (DSC_5448)
   ← foto preferite dal cliente, molto visibili
4. **Fascia parallax** → `matteo-lampada.jpg` (separatore prima delle Aree di Competenza)

### Lo Studio (lo-studio.html)
- 4 video esistenti (invariati)
- **Coppia foto team** tra la sezione 2 e 3 → `team-abbracciato.jpg` + `team-sorriso.jpg`
- **Coppia dettagli** prima del footer → `luca-tavolo.jpg` (DSC_5423, preferita dal
  cliente) + `studio-toga.jpg` (DSC_5422)
  (le macchine da scrivere DSC_5382 sono state scartate dal cliente)

### I Professionisti (i-professionisti.html)
- Schede soci: volti circolari → `luca-volto.jpg` (DSC_5362, frontale) e `matteo-volto.jpg`
- Galleria 4 foto sotto ogni scheda socio (con lightbox al clic)
- **Fascia collaboratrici insieme** → `collaboratrici-insieme.jpg` (DSC_5416)
- Schede collaboratrici: volti circolari da ritratti dedicati (`volto-malorgio` da DSC_5404,
  `volto-colombo` da DSC_5402, `volto-castiglioni` da DSC_5394) + ritratto verticale in card
  (`monica-ritratto` DSC_5411, `elisa-ritratto` DSC_5397, `chiara-ritratto` DSC_5388)
- **Fascia team di chiusura** prima del footer → `team-tavolo.jpg` (DSC_5437, col tavolo e la toga)

### Contatti (contatti.html)
- **Fascia di benvenuto** dopo il titolo → `team-toga.jpg`
- **Coppia sede** → `studio-targa.jpg` (DSC_5495) + `studio-vetrata.jpg` (DSC_5497)

### Attività (attivita.html)
- **Foto di apertura verticale** → `luca-fascicolo.jpg` (DSC_5424, preferita dal cliente)
- **Fascia di chiusura** → `studio-quadro.jpg` (DSC_5341)

## 5. Criteri di scelta (come decidiamo quali foto usare)

1. **Volti nitidi e occhi aperti** — scartare foto con espressioni a metà o mosso
2. **Una foto = un ruolo**: mai ripetere la stessa foto in due punti del sito
3. **Orizzontali** per banner e gallerie; **verticali** per ritratti e blocchi editoriali
4. **Coerenza cromatica** col tema del sito (scuro + oro): preferire foto con luce
   calda e ambienti eleganti; il quadro oro/azzurro della sala riunioni è perfetto
5. Nei **ritagli volto**: inquadratura testa + spalle, viso centrato leggermente
   in alto rispetto al centro del cerchio

## 6. Foto che mancano (lista della spesa per il prossimo servizio)

**Priorità alta**
- [x] ~~Ritratto frontale di Luca~~ → trovato nell'archivio completo (DSC_5357-5362)
- [x] ~~Ritratti delle tre collaboratrici~~ → trovati nell'archivio completo
      (Chiara 5388-5396, Elisa 5397-5403, Monica 5404-5414)

**Nota:** l'archivio completo del servizio (205 foto) è in
`C:\Users\erges\Desktop\foto studio abbiati\` — catalogato foto per foto in
`CATALOGO-FOTO.md`.

**Priorità media**
- [ ] Ambienti dello studio **senza persone**: ingresso, sala riunioni, dettagli
      (codici, toga, scrivanie) → per la pagina Attività e nuove fasce parallax.
      Già disponibili in `foto abbiati gemini\recuperate-da-github\`: targa in
      ottone (DSC_5494/5495) e vetrata d'ingresso (DSC_5500) → candidate per Contatti
- [ ] Esterno della villa di giorno → alternativa statica al video hero

**Priorità bassa**
- [ ] Foto "candid" durante una riunione di lavoro → per eventuale sezione blog/news

## 7. Procedura quando arrivano foto nuove

1. Copiare gli originali in `foto abbiati gemini\` (o sottocartella dedicata)
2. Claude le visiona tutte e propone selezione + posizionamento
3. Conversione in versione web secondo le specifiche del punto 3, nome secondo il punto 2
4. Inserimento nel sito + verifica nel browser (desktop e mobile)
5. Aggiornamento di questo documento (mappa al punto 4 e checklist al punto 6)
