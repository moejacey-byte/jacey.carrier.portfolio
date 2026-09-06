# Jacey.Portfolio

A polished, static GitHub Pages portfolio for **Jacey Shalé Carrier** — global educator, education innovator, mentor, Fulbright Korea alumna, and founder of **MÔË Academy for Leaders**.

## Included

- `index.html` — main portfolio
- `academy.html` — dedicated MÔË Academy for Leaders page
- `styles.css` — responsive editorial design
- `script.js` — mobile navigation, review filters, review lightbox, dynamic year
- `thank-you.html` — contact-form redirect page
- `assets/` — optimized portfolio images extracted from the supplied PDF
- `backend/` — optional Node/Express contact API for users who want a true server backend outside GitHub Pages
- `Jacey_Portfolio_Source.pdf` — private source copy of the uploaded portfolio PDF; **not linked from the public site**

## GitHub Pages — easiest setup

1. Create a new **public** GitHub repository named:
   `YOUR-GITHUB-USERNAME.github.io`
2. Upload everything in this folder, keeping the same structure.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`.
6. Save.
7. Your site will publish at:
   `https://YOUR-GITHUB-USERNAME.github.io/`

### Contact form

The home-page form uses FormSubmit as a static form endpoint so GitHub Pages can receive submissions without server-side code.

Before publishing, edit the hidden `_next` field in `index.html` so it points to your real GitHub Pages URL:

`https://YOUR-USERNAME.github.io/thank-you.html`

The first FormSubmit submission can require email activation/confirmation.

## Branding

The site intentionally uses:
- warm paper tones
- editorial serif headlines
- restrained typography
- large photography
- generous whitespace
- a leadership/education voice rather than a generic teacher-site aesthetic

## Source basis

The copy and portfolio structure are based on the supplied CV/portfolio PDF and the Hampshire College profile:
“Hampshire Graduate Jacey Shal’e Carrier 17F Awarded Fulbright to Study in South Korea” (May 18, 2021).

The Hampshire article describes the Fulbright award and the early concept for MÔË Academy for Leaders as a holistic learning environment focused on purpose, values, passions, independent and critical thinking, and entrepreneurial problem solving.

## Publishing note

The public site intentionally does not link to the complete source PDF because it contains review screenshots and other personal/work materials. Publish only materials you are comfortable making public.
