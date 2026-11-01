import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Only devices with a precise, hovering pointer (mouse/trackpad) get the custom cursor.
// Width-based checks miss touch laptops and tablets in landscape.
const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const SPRING = { stiffness: 500, damping: 28, mass: 0.5 };

const Cursor = () => {
  const [enabled] = useState(() => window.matchMedia(FINE_POINTER).matches);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values move the dot without re-rendering React on every mouse move
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  useEffect(() => {
    if (!enabled) return undefined;

    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const handleMouseOver = (e) => {
      setIsHovering(Boolean(e.target.closest?.('a, button, .hover-target')));
    };

    // Hide when the pointer leaves the window instead of leaving a dot frozen on the page
    const handleMouseOut = (e) => {
      if (!e.relatedTarget) setVisible(false);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`custom-cursor${isHovering ? ' hovering' : ''}`}
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      {/* The inner dot is centred on the pointer and grows from its centre */}
      <span className="custom-cursor-dot" />
    </motion.div>
  );
};

export default Cursor;
