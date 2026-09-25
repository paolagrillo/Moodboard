# Moodboard App

Un'app per creare moodboard personali: aggiungere immagini, organizzarle visivamente, eliminarle. Pensata come progetto per esercitarmi ed esprimere il mio lato UI/UX insieme allo sviluppo frontend.

## Idea generale

Una board dove l'utente può raccogliere immagini per creare una moodboard (es. per un progetto creativo, un mood, un'ispirazione grafica). L'utente può aggiungere immagini, disporle liberamente, ed eliminarle se non servono più.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Nessun backend per ora (dati in memoria / eventualmente localStorage)

---

## Fasi di sviluppo

### V1 — Base funzionante (fattibile da sola, con supporto mirato)

- [ ] Layout a griglia per mostrare le immagini nella board
- [ ] Aggiungere un'immagine incollando un URL (input + bottone "Aggiungi")
- [ ] Eliminare un'immagine dalla board (bottone "X" su ogni immagine)
- [ ] Persistenza con localStorage (la board resta salvata al refresh)
- [ ] Cura estetica: spaziatura, hover, piccola animazione all'aggiunta/rimozione

**Concetti usati:** `useState`, `.map()`, `.filter()`, form semplice, localStorage — tutte cose già note dal progetto e-commerce.

---

### V2 — Ricerca immagini da internet (da imparare: chiamate a API esterne)

- [ ] Collegare un'API di immagini (es. Unsplash o Pexels)
- [ ] Barra di ricerca: l'utente digita una parola chiave, l'app mostra immagini suggerite
- [ ] Click su un'immagine suggerita per aggiungerla alla board

**Concetti nuovi da imparare:** chiamate `fetch` asincrone, gestione chiavi API, gestione stati di caricamento/errore.

---

### V3 — Interazione avanzata (da imparare: drag & drop, trasformazioni)

- [ ] Drag & drop per spostare liberamente le immagini nella board (libreria tipo `dnd-kit`)
- [ ] Ruotare le immagini trascinando un controllo (CSS `transform: rotate()` + stato)
- [ ] Ridimensionare le immagini nella board

**Concetti nuovi da imparare:** librerie di drag & drop, trasformazioni CSS dinamiche collegate a eventi mouse.

---

## Note personali

*(spazio libero per appunti, decisioni prese durante lo sviluppo, cose da ricordare)*

-
-
-