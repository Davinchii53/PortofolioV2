import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Davinchii Lounge',
    description: 'My attempts to make a full internet cafe interface, with an FnB feature. This project is using real-time data syncing, with an immersive internet cafe experience and its security.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: '/images/lounge.webp',
    imageAlt: 'Davinchii Lounge admin dashboard with active-pod and pending-order counters',
    live: 'https://davinchii-lounge.vercel.app',
    repo: 'https://github.com/Davinchii53/Davinchii-lounge'
  },
  {
    id: 3,
    title: 'Cafe Aesthetic',
    description: 'My attempt at recreating a commercial cafe website for front-end capability.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/cafe.webp',
    imageAlt: 'Cafe Aesthetic landing page with the headline "Brewed for the Night."',
    live: 'https://davinchii53.github.io/project_website/',
    repo: 'https://github.com/Davinchii53/project_website'
  },
  {
    id: 4,
    title: 'Kawa Noodles',
    description: 'Standard POS interface for high-throughput ordering. Custom spice modifier levels (1-8) and add on configurations. Transactions validated against closed loop balance.',
    stack: ['React', 'TypeScript', 'Supabase'],
    image: '/images/kawas-cafe.webp',
    imageAlt: 'Kawa Noodles point-of-sale login screen',
    live: 'https://davinchii53.github.io/kawas-cafe/',
    repo: 'https://github.com/Davinchii53/kawas-cafe'
  }
];

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  // Scale only. Tying opacity to scroll position kept on-screen text at 30-60% opacity,
  // which failed contrast checks while people were reading it.
  const scale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.92, 1]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      style={{
        scale,
        marginBottom: '15vh',
        position: 'relative'
      }}
      className="project-card"
    >
      <div className="project-card-layout" style={{
        display: 'flex',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap'
      }}>

        {/* Project Image */}
        <div style={{
          flex: '1 1 500px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111',
          border: '1px solid rgba(255,255,255,0.05)',
          aspectRatio: '16/9',
          position: 'relative'
        }} className="hover-target project-image">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Project Info */}
        <div className="project-info" style={{ flex: '1 1 400px' }}>
          <h3 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'var(--text-title)',
            marginBottom: '1.2rem',
            color: '#fff'
          }}>
            {project.title}
          </h3>
          <p style={{
            color: '#A1A1AA',
            fontSize: 'var(--text-body)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '60ch'
          }}>
            {project.description}
          </p>
          <ul aria-label="Tech stack" style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '2.4rem'
          }}>
            {project.stack.map((tech) => (
              <li key={tech} style={{
                fontSize: 'var(--text-label)',
                color: '#E4E4E7',
                padding: '0.5rem 1.1rem',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '999px'
              }}>
                {tech}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary hover-target"
              aria-label={`Live demo of ${project.title} (opens in a new tab)`}
            >
              Live demo <ArrowIcon />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost hover-target"
              aria-label={`Source code of ${project.title} on GitHub (opens in a new tab)`}
            >
              Source code <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="work" className="projects-section" style={{ padding: '8rem 5%', background: '#050505' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="projects-heading"
          style={{ marginBottom: '10rem', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Selected Works</h2>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
