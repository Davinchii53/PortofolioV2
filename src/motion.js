// Shared motion tokens, so every animation on the page has the same rhythm.
export const EASE_OUT = [0.16, 1, 0.3, 1];

export const revealParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const revealChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};
