# Cat Scroll

Cinematic scroll portfolio assets for Bahaa Eddine Bouzid's developer portfolio.

## Asset map

| Section | Desktop | Mobile | Visual direction |
|---|---|---|---|
| Hero | `generated/01-hero-desktop.jpg` | `generated/01-hero-mobile.jpg` | Photorealistic extreme close-up, low camera |
| About | `generated/02-about-desktop.jpg` | `generated/02-about-mobile.jpg` | Modern flat vector illustration |
| Skills | `generated/03-skills-desktop.jpg` | `generated/03-skills-mobile.jpg` | Top-down watercolor studio scene |
| Projects | `generated/04-projects-desktop.jpg` | `generated/04-projects-mobile.jpg` | Ink line-art developer scene |
| Experience | `generated/05-experience-desktop.jpg` | `generated/05-experience-mobile.jpg` | Isometric cell-shaded developer room |
| Contact | `generated/06-contact-desktop.jpg` | `generated/06-contact-mobile.jpg` | Charcoal and colored-pencil portrait |

## Intended scroll behavior

Keep the cat visually centered while the camera treatment evolves between sections. Place CV content in HTML components over the negative space in each frame so the copy remains selectable, responsive, and accessible. Use `picture` or responsive image sources to load desktop or mobile assets by viewport width, and lazy-load all sections after the hero.

## CV content anchors

- Hero: Full-stack engineer; React/TypeScript + Spring Boot; AI-driven trading system.
- About: End-to-end product ownership, REST APIs, AWS deployment, CI/CD.
- Skills: Java, JavaScript, TypeScript, Python, React, Angular, Spring Boot, Node.js, FastAPI, AWS, Docker, GitHub Actions, MongoDB/SQL, Jest/JUnit, AI tooling.
- Projects: Lilac-AiTrader, B2B Hub Platform Revamp, DevOps Automation Project, Tektai, ZeroWaste, Artfulio.
- Experience: Xtendplex, IPACT Consult, Denim Authority, ESPRIT admissions committee, freelance development.
- Contact: Bahaa Eddine Bouzid — Tunis, Tunisia — bahaaeddine-dev.vercel.app — GitHub and LinkedIn.

Generated assets are intentionally free of embedded copy; overlay the CV content in the website layer.
