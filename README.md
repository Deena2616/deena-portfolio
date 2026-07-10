# Deena P — Portfolio (React + Glassmorphism Design System)

Two-column dashboard-style portfolio matching your reference UI:
left column = Hero / Stats / About / Skills / Projects,
right sidebar = Experience / Education / Certifications / Technical Skills /
Timeline / Contact form.

## Structure
```
deena-portfolio/
├── public/index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── StatsBar.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css        (category tabs + progress bars)
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css    (sidebar)
│   │   ├── Education.jsx / .css     (sidebar)
│   │   ├── Certifications.jsx / .css (sidebar)
│   │   ├── TechnicalSkills.jsx / .css (sidebar)
│   │   ├── Timeline.jsx / .css      (sidebar)
│   │   ├── Connect.jsx / .css       (sidebar contact form)
│   │   └── Footer.jsx / .css
│   ├── App.jsx / App.css   (two-column grid layout + shared .glass/.btn/.panel-title classes)
│   └── index.js / index.css (full design-token system: colors, gradients, radii, shadows, fonts)
├── package.json
└── README.md
```

## Run it
```bash
npm install
npm start
```
Opens at http://localhost:3000

## Design tokens (src/index.css)
All colors, gradients, glass values, radii, shadows and fonts from your
design system are defined as CSS variables at the top of `index.css`.
Change a value there and it updates everywhere.

## Add your photo
Replace the placeholder block in `Hero.jsx`:
```jsx
<div className="hero__photo-placeholder">
  <span>Your Photo Here</span>
</div>
```
with:
```jsx
<img src={require("../assets/your-photo.jpeg")} alt="Deena P" />
```
Drop your photo file into `src/assets/` first.

## Real content to fill in
- Replace social links (`#`) in Hero/Footer/Connect with your real
  LinkedIn/GitHub URLs.
- Wire up `Connect.jsx`'s `handleSubmit` to your email service (e.g.
  EmailJS, Formspree, or your own API endpoint) — it currently just logs
  to console.
- Swap project banner gradients for real screenshots by replacing the
  `.project-card__banner` div with an `<img>`.

## Notes
- Animations use `framer-motion` (hero fade-up, floating photo, project
  card hover) per your design system.
- Icons via `react-icons` (Feather, Simple Icons, Font Awesome, Game Icons,
  Heroicons sets already used).
- Fully responsive: breakpoints at 1100px, 950px, 900px, 600px, 500px,
  480px across component CSS files.
- This build is a single-page layout matching your reference image. If
  you want the additional multi-page structure from your design system
  (separate About/Skills/Projects/Experience/Certificates/Contact routes),
  I can add `react-router-dom` and split these into routed pages next.
