import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowUpRight, Lock } from './Icons';
import { PROJECTS } from '../content';

// The screenshot sits in a browser window, with the real address in the bar, so it reads as a
// working product rather than a picture
const BrowserFrame = ({ project }) => (
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="browser hover-target"
    // The "Live demo" button below is the keyboard path to the same page
    tabIndex={-1}
  >
    <div className="browser-bar" aria-hidden="true">
      <span className="browser-dots"><i /><i /><i /></span>
      <span className="browser-url">
        <Lock size={11} />
        <span className="browser-url-text">{project.url}</span>
      </span>
    </div>
    <div className="browser-view">
      <img
        src={project.image}
        alt={project.imageAlt}
        width={project.imageWidth}
        height={project.imageHeight}
        loading="lazy"
        decoding="async"
      />
    </div>
  </a>
);

const ProjectCase = ({ project, index }) => {
  const mediaRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'center center'] });
  // The screenshot settles from 94% to full size as it scrolls into place. Text never scales.
  const scale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.94, 1]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={`case${index % 2 === 1 ? ' case-reverse' : ''}`} aria-labelledby={`${project.id}-title`}>
      <motion.div ref={mediaRef} className="case-media" style={{ scale }}>
        <BrowserFrame project={project} />
      </motion.div>

      <Reveal className="case-info">
        <p className="case-meta">
          <span className="case-index">{number}</span>
          <span className="case-sep" aria-hidden="true" />
          {project.kind}
        </p>

        <h3 id={`${project.id}-title`} className="case-title">{project.title}</h3>
        <p className="case-desc">{project.description}</p>

        <ul className="case-highlights">
          {project.highlights.map((point) => <li key={point}>{point}</li>)}
        </ul>

        <ul className="tags" aria-label="Tech stack">
          {project.stack.map((tech) => <li key={tech} className="tag">{tech}</li>)}
        </ul>

        <div className="case-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hover-target"
            aria-label={`Live demo of ${project.title} (opens in a new tab)`}
          >
            Live demo <ArrowUpRight size={15} />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost hover-target"
            aria-label={`Source code of ${project.title} on GitHub (opens in a new tab)`}
          >
            Source code <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    </article>
  );
};

const Projects = () => (
  <section id="work" className="section section-deep">
    <div className="container">
      <SectionHeader
        index="01"
        label="Selected work"
        title="Selected Works"
        aside="Three projects, each one live, with the source code on GitHub."
      />
      <div className="cases">
        {PROJECTS.map((project, i) => (
          <ProjectCase key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
