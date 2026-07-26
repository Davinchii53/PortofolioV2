import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Davinchii Lounge',
    description: 'An internet cafe management system featuring dual dashboards. Real-time data syncing allowing admins to oversee the entire lounge network while customers view their specific profiles.',
    stack: 'Node.js, TypeScript, Supabase',
    image: '/images/lounge.webp',
    link: 'https://github.com/Davinchii53/Davinchii-lounge'
  },
  {
    id: 2,
    title: 'Kawa Workspace',
    description: 'A comprehensive workspace booking system tailored for remote workers and programmers. Features an interactive pod reservation map and seamless admin management.',
    stack: 'Node.js, TypeScript, Supabase',
    image: '/images/kawa.webp',
    link: 'https://github.com/Davinchii53/kawa-workspace'
  },
  {
    id: 3,
    title: 'Cafe Aesthetic',
    description: 'A beautifully crafted static website simulating a modern cafe. Built to showcase pixel-perfect responsive layouts and smooth vanilla interactions.',
    stack: 'HTML, CSS, JavaScript',
    image: '/images/cafe.webp',
    link: 'https://github.com/Davinchii53/project_website'
  },
  {
    id: 4,
    title: 'Kawa Noodles',
    description: 'Standard POS interface for high-throughput ordering. Custom spice modifier levels (1-8) and add on configurations. Transactions validated against closed loop balance.',
    stack: 'React, TypeScript, Supabase',
    image: '/images/kawas-cafe.webp',
    link: 'https://github.com/Davinchii53/kawas-cafe'
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ 
        scale, 
        opacity,
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
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            // Fallback for missing images
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000' }}
          />
        </div>

        {/* Project Info */}
        <div className="project-info" style={{ flex: '1 1 400px' }}>
          <h2 style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1rem',
            color: '#fff'
          }}>
            {project.title}
          </h2>
          <p style={{ 
            color: '#A1A1AA', 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            marginBottom: '2rem' 
          }}>
            {project.description}
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              fontSize: '0.9rem', 
              color: '#fff', 
              padding: '0.5rem 1rem', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '50px' 
            }}>
              {project.stack}
            </span>
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="hover-target"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#fff',
              borderBottom: '1px solid #fff',
              paddingBottom: '0.2rem',
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            View Repository
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" style={{ padding: '8rem 5%', background: '#050505' }}>
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
