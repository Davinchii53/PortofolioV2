import { motion } from 'framer-motion';

const EMAIL = 'kelvinanshary@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/kelvin-anshary-062b84329/';

const Contact = () => {
  return (
    <section id="contact" className="contact-section" style={{ padding: '10rem 5% 5rem', background: '#050505', color: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(3.6rem, 8vw, 6rem)',
            fontWeight: 800,
            marginBottom: '2rem',
            lineHeight: 1
          }}>
            Let's build <br/> together.
          </h2>

          <p style={{ color: '#A1A1AA', fontSize: 'clamp(1.6rem, 1.4vw, 1.8rem)', marginBottom: '4rem' }}>
            Open for new opportunities.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center' }}>
            <a href={`mailto:${EMAIL}`} className="btn btn-primary btn-lg hover-target">
              Get in touch
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-lg hover-target"
              aria-label="Connect on LinkedIn (opens in a new tab)"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* mailto: does nothing on machines without a mail app, so the address stays visible and selectable */}
          <p style={{ color: '#A1A1AA', fontSize: '1.5rem', marginTop: '2rem' }}>
            or email <a href={`mailto:${EMAIL}`} className="text-link hover-target">{EMAIL}</a>
          </p>
        </motion.div>

        <motion.footer
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
          <p style={{ color: '#A1A1AA', fontSize: '1.4rem' }}>
            © {new Date().getFullYear()} Kelvin Nabil Anshary.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.4rem' }}>
            <a
              href="https://github.com/Davinchii53"
              target="_blank"
              rel="noreferrer"
              className="footer-link hover-target"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="footer-link hover-target"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.footer>

      </div>
    </section>
  );
};

export default Contact;
