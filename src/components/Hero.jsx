import { motion } from 'framer-motion';
import ShaderAnimation from './ShaderAnimation';
import { ArrowDown } from './Icons';
import { HERO_META } from '../content';
import { EASE_OUT, revealChild, revealParent } from '../motion';

const Hero = () => {
  return (
    <section id="top" className="hero">
      <ShaderAnimation />
      <div className="hero-fade" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div className="hero-copy" variants={revealParent} initial="hidden" animate="show">
          {/* An eyebrow label, not a heading: the page outline starts at the h1 */}
          <motion.p variants={revealChild} className="eyebrow">Software Engineer</motion.p>

          <motion.h1 variants={revealChild} className="hero-title">
            Kelvin <br />
            Anshary<span className="accent">.</span>
          </motion.h1>

          <motion.p variants={revealChild} className="hero-tagline">
            Creating a solution for every problem, even if it's small and personal.
          </motion.p>

          <motion.div variants={revealChild} className="hero-actions">
            <a href="#work" className="btn btn-primary hover-target">
              View my work <ArrowDown size={15} />
            </a>
            <a href="#contact" className="btn btn-ghost hover-target">Get in touch</a>
          </motion.div>
        </motion.div>

        <motion.dl
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
        >
          {HERO_META.map((item) => (
            <div key={item.label} className="hero-meta-item">
              <dt>{item.label}</dt>
              <dd>
                {item.status && <span className="status-dot" aria-hidden="true" />}
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
