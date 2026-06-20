import { motion } from 'framer-motion';

const About = () => {
  return (
    <section style={{ padding: '10% 5%', backgroundColor: '#050505', color: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ 
            fontFamily: 'Syne, sans-serif', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 700,
            marginBottom: '4rem'
          }}>
            Crafting code <span style={{ color: '#555' }}>with purpose.</span>
          </h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* About Text Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '3rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              gridColumn: '1 / -1'
            }}
            className="hover-target"
          >
            <p style={{ 
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
              lineHeight: 1.5,
              color: '#D4D4D8'
            }}>
              I am an 18-year-old Computer Science student at Bina Nusantara Bandung. I specialize in building sophisticated web architectures from the ground up—merging robust backend logic with highly polished, interactive user interfaces.
            </p>
          </motion.div>

          {/* Bento Box: Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '3rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            className="hover-target"
          >
            <h3 style={{ fontSize: '1.2rem', color: '#A1A1AA', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Stack</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['React', 'TypeScript', 'Node.js', 'Supabase', 'Framer Motion', 'MySQL'].map(skill => (
                <li key={skill} style={{
                  padding: '0.8rem 1.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  color: '#fff'
                }}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bento Box: Approach */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '3rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px'
            }}
            className="hover-target"
          >
             <h3 style={{ fontSize: '1.2rem', color: '#A1A1AA', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Approach</h3>
             <p style={{ color: '#A1A1AA', lineHeight: 1.6, fontSize: '1.1rem' }}>
               I don't just write code; I architect solutions. Whether it's a sleek static interface or a complex lounge management system with real-time database syncing, my focus is always on performance, scalability, and an impeccable user experience.
             </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
