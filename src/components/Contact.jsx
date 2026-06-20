import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section style={{ padding: '15% 5% 5%', background: '#050505', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontFamily: 'Syne, sans-serif', 
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
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['GitHub', 'LinkedIn', 'Twitter'].map(link => (
              <a 
                key={link} 
                href={link === 'GitHub' ? 'https://github.com/Davinchii53' : '#'} 
                target="_blank"
                rel="noreferrer"
                className="hover-target"
                style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
