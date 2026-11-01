import { motion } from 'framer-motion';
import { EASE_OUT } from '../motion';

// Fades content up once as it enters the viewport. MotionConfig reducedMotion="user" in App
// turns the movement off for people who ask their OS for reduced motion.
const Reveal = ({ delay = 0, className, children }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

export default Reveal;
