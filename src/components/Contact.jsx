import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact-section" style={{ padding: '10rem 5% 5rem', background: '#050505', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: 800,
            marginBottom: '2rem',
            lineHeight: 1
          }}>
            Let's build <br/> together.
          </h2>
          
          <p style={{ color: '#A1A1AA', fontSize: '1.2rem', marginBottom: '4rem' }}>
            Currently available for new opportunities. Let's create something extraordinary.
          </p>
          
          <a 
            href="mailto:kelvinanshary@gmail.com"
            className="hover-target"
            style={{
              display: 'inline-block',
              padding: '1.2rem 3rem',
              backgroundColor: '#fff',
              color: '#050505',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ 
            marginTop: '10rem', 
            paddingTop: '3rem', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <p style={{ color: '#A1A1AA', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Kelvin Nabil Anshary.
          </p>
          
          <a 
            href="https://github.com/Davinchii53" 
            target="_blank"
            rel="noreferrer"
            className="hover-target"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              color: '#fff', 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              opacity: 0.7,
              transition: 'opacity 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
