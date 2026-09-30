import { motion } from 'framer-motion';
import ShaderAnimation from './ShaderAnimation';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      height: '100svh',
      minHeight: '560px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 5%'
    }}>
      <ShaderAnimation />

      {/* Same 1400px grid as the sections below, so every section shares one left edge */}
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* An eyebrow label, not a heading: the page outline starts at the h1 */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1.3rem, 1.5vw, 1.6rem)',
            color: '#A1A1AA',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(4.4rem, 8vw, 8rem)',
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            margin: '0 0 2rem 0'
          }}>
            Kelvin <br/>
            Anshary.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 1.4vw, 2rem)',
            color: '#A1A1AA',
            maxWidth: '60ch',
            lineHeight: 1.6
          }}>
            Creating a solution for every problem, even if it's small and personal.
          </p>
        </motion.div>

        {/* Give visitors something to do above the fold instead of only "scroll" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '3.2rem' }}
        >
          <a href="#work" className="btn btn-primary hover-target">View my work</a>
          <a href="#contact" className="btn btn-ghost hover-target">Get in touch</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: 'max(5%, calc((100% - 1400px) / 2))',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div style={{
          width: '1px',
          height: '60px',
          background: 'rgba(255,255,255,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: '#fff'
            }}
          />
        </div>
        <span style={{ fontSize: '1.1rem', color: '#A1A1AA', letterSpacing: '0.1em' }}>SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
