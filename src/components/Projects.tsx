import React from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects" ref={ref} aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Work</p>
          <h2 className="section-title" id="projects-heading">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built to explore distributed systems, real-time collaboration, compilers, and machine learning — each one tackling a different layer of engineering.
          </p>
        </motion.div>

        {/* Featured projects — 3 col */}
        <div className="projects__featured-grid" role="list" aria-label="Featured projects">
          {featured.map((project, i) => (
            <div role="listitem" key={project.id}>
              <ProjectCard project={project} index={i} inView={inView} featured />
            </div>
          ))}
        </div>

        {/* Other projects — 2 col */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h3 className="projects__other-heading">More Projects</h3>
        </motion.div>
        <div className="projects__grid" role="list" aria-label="Other projects">
          {rest.map((project, i) => (
            <div role="listitem" key={project.id}>
              <ProjectCard project={project} index={i + featured.length} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
