import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" style={{ padding: '8rem 5%', backgroundColor: 'var(--bg-primary)', color: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="about-heading" style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 700,
            marginBottom: '4rem'
          }}>
            Currently learning <span style={{ color: '#888' }}>software engineering and IoT.</span>
          </h2>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '4rem',
          maxWidth: '800px'
        }}>
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ 
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
              lineHeight: 1.6,
              color: '#D4D4D8'
            }}>
              Currently studying computer science at Binus Bandung (B28), majoring in IoT. I'm learning to be a good software engineer by making solutions for the small problems I can find.
            </p>
          </motion.div>

          {/* Core Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Stack</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['React', 'TypeScript', 'Node.js', 'Supabase', 'Framer Motion', 'MySQL'].map(skill => (
                <li key={skill} style={{
                  padding: '0.6rem 1.2rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  color: '#D4D4D8'
                }}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Approach Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
             <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Approach</h3>
             <p style={{ color: '#D4D4D8', lineHeight: 1.6, fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}>
               I make websites that are scalable and easy to use. I focus on performance, security, and scalability. Every small problem I see is an opportunity for a new solution.
             </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
