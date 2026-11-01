import { useEffect, useState } from 'react';

// Returns the id of the section crossing the middle of the viewport, for the nav's active state.
// Pass a stable (module-level) array of ids.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A thin band across the middle of the screen: whichever section covers it is "current"
      { rootMargin: '-45% 0px -54% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
