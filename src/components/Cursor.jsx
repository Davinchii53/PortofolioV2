import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Only devices with a precise, hovering pointer (mouse/trackpad) get the custom cursor.
// Width-based checks miss touch laptops and tablets in landscape.
const FINE_POINTER = '(hover: hover) and (pointer: fine)';

const Cursor = () => {
  const [enabled] = useState(() => window.matchMedia(FINE_POINTER).matches);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      setIsHovering(Boolean(e.target.closest?.('a, button, .hover-target')));
    };

    // Hide when the pointer leaves the window instead of leaving a dot frozen on the page
    const handleMouseOut = (e) => {
      if (!e.relatedTarget) setVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{ opacity: visible ? 1 : 0 }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

export default Cursor;
