import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the immersive feel
    // TEMPORARY: Set to 0 for Claude consultation (was 2000)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#050505',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '3rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                color: '#fff'
              }}
            >
              KELVIN.
            </motion.div>
            <motion.div 
              style={{
                width: '200px',
                height: '2px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fff'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Hero />
          <About />
          <Projects />
          <Contact />
        </motion.main>
      )}
    </>
  );
}

export default App;
