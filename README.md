# RWA Offering Profiles

Demo offering profiles for five fictional tokenized real-world assets. Static HTML/CSS/JS, hosted on GitHub Pages.

- `src/tokens/*.js` — per-token content; `src/build.js` renders `<slug>/index.html`
- `src/art/*.svg` — card artwork; rasterised to `<slug>/<sym>.png` with headless Chrome
- `assets/` — shared CSS/JS

Build: `node src/build.js`
