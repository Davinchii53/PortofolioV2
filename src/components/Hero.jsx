import { motion } from 'framer-motion';
import ShaderAnimation from './ShaderAnimation';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <ShaderAnimation />
      
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0 5%',
        position: 'relative',
        zIndex: 10
      }}>
      <div style={{ zIndex: 10 }}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: 400, 
            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
            color: '#A1A1AA',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Software Engineer
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 'clamp(3rem, 8vw, 8rem)', 
            lineHeight: 1, 
            fontWeight: 800,
            letterSpacing: '-0.02em',
            margin: '0 0 1.5rem 0'
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
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#A1A1AA',
            maxWidth: '500px',
            lineHeight: 1.6
          }}>
            I build fast, scalable web applications with a strong focus on clean architecture and highly polished user interfaces.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
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
        <span style={{ fontSize: '0.9rem', color: '#A1A1AA', letterSpacing: '0.1em' }}>SCROLL</span>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
