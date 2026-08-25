# Sito Valeria Ferraz — Fisioterapista (versione statica)

Questa cartella contiene il sito pronto da testare sul tuo computer e da caricare sul tuo dominio.

## Contenuto

- `index.html` — la pagina del sito
- `404.html` — pagina di errore
- `assets/` — immagini, stili (CSS) e script (JS)
- `favicon.ico` — icona del sito
- `robots.txt` — indicazioni per i motori di ricerca

## Provarlo sul tuo PC

**Modo veloce:** fai doppio clic su `index.html`: si apre nel browser.

**Modo consigliato** (identico al sito online). Apri il Terminale / Prompt dei comandi nella cartella e lancia uno di questi:

```bash
# se hai Python installato
python3 -m http.server 8000
```

```bash
# se hai Node.js installato
npx serve .
```

Poi apri `http://localhost:8000` nel browser.

## Fare correzioni

Testi, titoli e contatti si trovano dentro `index.html`: aprilo con un editor di testo (VS Code, Blocco note+), cerca la frase da cambiare, salva e ricarica la pagina nel browser.
Le immagini si sostituiscono dentro `assets/` mantenendo lo stesso nome del file.

## Pubblicarlo sul dominio

Carica via FTP tutto il contenuto di questa cartella (non la cartella stessa) dentro `public_html` o la root del tuo hosting.

## Nota sul modulo contatti

Il modulo è visibile ma non invia ancora email: verrà attivato in un secondo momento.
