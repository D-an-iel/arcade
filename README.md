# arcade. — Digital Agency & Product Studio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"We build brands that dominate."**  
> High-impact frontend web application crafted based on the [Arcade Figma Design](https://www.figma.com/design/7u3SUAU9g26nAeJfOJgP1P/Arcade).

---

## ⚡ Overview

**Arcade** is a production-grade digital agency and product studio web application. The design language features a bold contrast between atmospheric deep dark canvases with cyan/teal ambient light pillars and high-contrast electric yellow statement sections.

### Key Sections & Features
1. **Atmospheric Header & Hero**:
   - Floating glassmorphic navbar with active section scroll-spy.
   - Dual action CTAs (*Start a Project* / *Explore Our Work*).
   - Real-time telemetry badges (140+ Projects Launched, 99.4% Client Retention, $120M+ Value Created, 0.3s Edge Speeds).
2. **What We Do Best (`#FACC15` Electric Yellow)**:
   - High-contrast section featuring 4 core capability cards: Strategy & Branding, Custom Web Dev, UI/UX & Product Design, and E-Commerce & Performance.
   - Interactive hover lift states and deliverables checklist.
3. **Portfolio & Work Showcase (`Relevant. Iconic. Unstoppable.`)**:
   - Deep dark section with vertical teal light pillars.
   - 6 featured showcase apps: HealRight Nutrition, Forma Lifestyle Survey, OmniBrand Smartphone, Pulse Clinical Tele-Health Dashboard (*Hello, Pavithra*), SecureSignal Cybersecurity, and Aura Luxury E-Commerce.
   - Filterable category pills and interactive case study modal preview.
4. **Multi-Device Responsive Showcase**:
   - 3D CSS morphing device simulator toggling seamlessly between MacBook Pro, iPad Tablet, and Mobile Smartphone viewports.
5. **Meet The Team (`#FACC15` Yellow)**:
   - 4-column responsive team cards featuring high-resolution photography, roles, bios, and direct social links (Twitter/X, LinkedIn, GitHub).
6. **Conversion Contact Hub**:
   - Direct agency channels (email, phone, studio locations) alongside an interactive project inquiry form with validation, service & budget selectors, and submission feedback.
7. **Production Footer**:
   - Clean wordmark, sitemap navigation, social channels, and smooth scroll-to-top button.

---

## 🎨 Design System & Tokens

| Token | Hex Code | Purpose |
|-------|----------|---------|
| `brand-yellow` | `#FACC15` | Primary Electric Accent & Full-bleed banners |
| `brand-yellow-hover` | `#EAB308` | Interactive button states & hover accents |
| `dark-bg` | `#0A0A0A` | Deep canvas & body background |
| `dark-surface` | `#121214` / `#161618` | Card backgrounds & input surfaces |
| `teal-glow` | `#0D3B3E` | Ambient light pillar gradients |
| `cyan-bright` | `#00F2FE` | Ambient hero accents & highlights |
| `emerald-accent` | `#22C55E` | Health & active status badges |

---

## 🛠️ Tech Stack

- **Framework**: React 19 (ESModules)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS 3.4 with custom design extensions
- **Icons**: Lucide React + custom inline SVG brand icons
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Outfit*)
- **Tooling**: PostCSS, Autoprefixer, ESLint / Oxlint

---

## 📁 Project Structure

```
arcade/
├── index.html                  # HTML entry point with Google Fonts & SEO
├── package.json                # Dependencies & build scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Design system color tokens & animations
├── postcss.config.js           # PostCSS configuration
├── public/
│   ├── favicon.svg             # Custom brand vector favicon
│   └── images/                 # High-resolution production mockups
│       ├── showcase-health.png
│       ├── showcase-lifestyle.png
│       ├── showcase-brand.png
│       ├── showcase-pulse.png
│       ├── showcase-security.png
│       ├── showcase-ecommerce.png
│       ├── team-daniel.png
│       ├── team-elena.png
│       ├── team-marcus.png
│       └── team-aria.png
└── src/
    ├── main.jsx                # Application root mount
    ├── App.jsx                 # Master layout assembly
    ├── index.css               # Tailwind directives & utility classes
    ├── data/
    │   ├── servicesData.js     # Services content & deliverables
    │   ├── projectsData.js     # Portfolio projects & telemetry
    │   └── teamData.js         # Team profiles & bios
    └── components/
        ├── common/
        │   ├── Icons.jsx       # Custom SVG social brand vectors
        │   └── ProjectModal.jsx# Interactive case study modal
        ├── layout/
        │   ├── Navbar.jsx      # Sticky blur header with mobile drawer
        │   └── Footer.jsx      # Comprehensive studio footer
        └── sections/
            ├── Hero.jsx        # Atmospheric hero with light pillars
            ├── ServicesValues.jsx # Electric yellow capabilities section
            ├── WorkShowcase.jsx   # Filterable portfolio & preview modal
            ├── ResponsiveShowcase.jsx # Multi-device morphing simulator
            ├── TeamSection.jsx    # Yellow team portrait grid
            └── ContactSection.jsx # Inquiry form & agency contact info
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/D-an-iel/arcade.git
cd arcade
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will launch at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

The compiled, minified bundle will be in `dist/`.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
