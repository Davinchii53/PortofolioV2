// All site copy and links live here, so text changes never require touching layout code.

export const PROFILE = {
  name: 'Kelvin Nabil Anshary',
  email: 'kelvinanshary@gmail.com',
  github: 'https://github.com/Davinchii53',
  githubLabel: 'github.com/Davinchii53',
  linkedin: 'https://www.linkedin.com/in/kelvin-anshary-062b84329/',
  linkedinLabel: 'in/kelvin-anshary-062b84329',
};

// Quick-scan facts along the bottom of the hero
export const HERO_META = [
  { label: 'Based in', value: 'Bandung, Indonesia' },
  { label: 'Building', value: 'Full-stack web apps' },
  { label: 'Status', value: 'Open to new opportunities', status: true },
];

export const ABOUT_FACTS = [
  { label: 'Studying', value: 'Computer Science, IoT major' },
  { label: 'Campus', value: 'Binus University, Bandung' },
  { label: 'Shipped', value: '3 live projects' },
];

export const STACK = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { group: 'Backend & data', items: ['Node.js', 'Supabase', 'MySQL', 'Cloudflare Workers'] },
];

// Highlights and stacks come from each project's own README and repository.
export const PROJECTS = [
  {
    id: 'davinchii-lounge',
    title: 'Davinchii Lounge',
    kind: 'Full-stack web app',
    description:
      'My attempts to make a full internet cafe interface, with an FnB feature. This project is using real-time data syncing, with an immersive internet cafe experience and its security.',
    highlights: [
      'Balances and order status sync live across screens through Supabase Realtime',
      'Admin dashboard for pods, customers, kitchen orders, the menu and staff access',
      'Optimistic UI hides the roughly 2-second server round-trip when a session starts',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: '/images/lounge.webp',
    imageWidth: 960,
    imageHeight: 540,
    imageAlt: 'Davinchii Lounge admin dashboard with active-pod and pending-order counters',
    url: 'davinchii-lounge.vercel.app',
    live: 'https://davinchii-lounge.vercel.app',
    repo: 'https://github.com/Davinchii53/Davinchii-lounge',
  },
  {
    id: 'cafe-aesthetic',
    title: 'Cafe Aesthetic',
    kind: 'Front-end website',
    description: 'My attempt at recreating a commercial cafe website for front-end capability.',
    highlights: [
      'Menu filtering by category, written in plain JavaScript',
      'Order-ahead cart that checks out through a pre-filled WhatsApp message',
      'Venue booking form with a generated time-slot grid and validation',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/cafe.webp',
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: 'Cafe Aesthetic landing page with the headline "Brewed for the Night."',
    url: 'davinchii53.github.io/project_website',
    live: 'https://davinchii53.github.io/project_website/',
    repo: 'https://github.com/Davinchii53/project_website',
  },
  {
    id: 'kawa-noodles',
    title: 'Kawa Noodles',
    kind: 'Full-stack web app',
    description:
      'Standard POS interface for high-throughput ordering. Custom spice modifier levels (1-8) and add on configurations. Transactions validated against closed loop balance.',
    highlights: [
      'One login for customers and staff, routed by role to the menu or the kitchen display',
      'Staff can create and delete accounts, with a confirmation step before each delete',
      'API built with Hono on Cloudflare Workers, backed by a D1 (SQLite) database',
    ],
    stack: ['Preact', 'TypeScript', 'Hono', 'Cloudflare Workers', 'D1'],
    image: '/images/kawas-cafe.webp',
    imageWidth: 960,
    imageHeight: 540,
    imageAlt: 'Kawa Noodles point-of-sale login screen',
    url: 'davinchii53.github.io/kawas-cafe',
    live: 'https://davinchii53.github.io/kawas-cafe/',
    repo: 'https://github.com/Davinchii53/kawas-cafe',
  },
];
