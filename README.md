# Kelvin Nabil Anshary | Portfolio

Personal portfolio website: [kelvinanshary.my.id](https://www.kelvinanshary.my.id/)

## Tech Stack
- React + Vite
- Framer Motion
- WebGL (hand-written fragment shader for the hero background, no 3D library)

## Features
- Project case studies with live demos and source links (Davinchii Lounge, Cafe Aesthetic, Kawa Noodles)
- Sticky navigation that highlights the current section
- Scroll-based reveals that respect the "reduce motion" setting
- Custom cursor on mouse and trackpad devices only
- Static fallback background when WebGL is unavailable
- Link-preview (Open Graph) image and structured data for search engines

## Editing content
All text, project details and links live in `src/content.js`. Text sizes and colors are set once at the top of `src/index.css`.

## Local Development
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Deployment
Deployed on Vercel. Pushing to `main` publishes the site; every other branch gets a preview build.
