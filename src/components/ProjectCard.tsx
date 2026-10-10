import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView, featured }) => {
  return (
    <motion.article
      className={`project-card card${featured ? ' project-card--featured' : ''}`}
      style={{ '--accent-color': project.accentColor } as React.CSSProperties}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Accent line */}
      <div className="project-card__accent-line" />

      {/* Image */}
      {project.image && (
        <div className="project-card__image-container">
          <img src={project.image} alt={project.title} className="project-card__image" loading="lazy" />
        </div>
      )}

      {/* Header */}
      <div className="project-card__header">
        <div>
          <p className="project-card__category">{project.category}</p>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${project.title} GitHub repository`}
              id={`project-${project.id}-github`}
            >
                            <GithubIcon size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--demo"
              aria-label={`${project.title} live demo`}
              id={`project-${project.id}-demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="project-card__description">{project.description}</p>

      {/* Technical detail */}
      <div className="project-card__technical">
        <p className="project-card__technical-label">Implementation</p>
        <p className="project-card__technical-text">{project.technicalDetail}</p>
      </div>

      {/* Tech stack */}
      <div className="project-card__stack" role="list" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge" role="listitem">
            {tech}
          </span>
        ))}
      </div>

      {/* CTA row */}
      <div className="project-card__cta">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-card__cta-btn"
            id={`project-${project.id}-demo-cta`}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        ) : (
          <span className="project-card__no-demo">
            Demo not publicly available
          </span>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__cta-btn"
            id={`project-${project.id}-github-cta`}
          >
            <GithubIcon size={14} />
            View Code
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
