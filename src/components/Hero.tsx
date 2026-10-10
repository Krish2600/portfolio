import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const TYPING_LINES = [
  'Building fault-tolerant distributed systems',
  'Training and deploying AI/ML models',
  'Engineering scalable backend infrastructure',
  'Designing intelligent real-time applications',
];

const TerminalAnimation: React.FC = () => {
  const lines = [
    { prompt: '$', command: 'git clone distributed-job-orchestrator', delay: 0 },
    { prompt: '>', output: 'Connecting workers to Redis...', delay: 0.8, isOutput: true },
    { prompt: '>', output: '✓ 8 workers online, job queue active', delay: 1.4, isOutput: true, isSuccess: true },
    { prompt: '$', command: 'yarn dev codecraft-studio', delay: 2.2 },
    { prompt: '>', output: 'CRDT sync layer initialized', delay: 3.0, isOutput: true, isSuccess: true },
    { prompt: '$', command: 'nexus compile main.nxs --emit ir', delay: 3.8 },
    { prompt: '>', output: '4 stages complete → pseudo-x86 emitted', delay: 4.6, isOutput: true, isSuccess: true },
  ];

  return (
    <div className="terminal" role="img" aria-label="Terminal showing engineering projects">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">krish@dev ~ zsh</span>
      </div>
      <div className="terminal__body">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`terminal__line${line.isOutput ? ' terminal__line--output' : ''}${line.isSuccess ? ' terminal__line--success' : ''}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay + 0.5, duration: 0.3 }}
          >
            {!line.isOutput && (
              <span className="terminal__prompt">{line.prompt}</span>
            )}
            {line.isOutput && (
              <span className="terminal__arrow">{line.prompt}</span>
            )}
            <span className={line.isOutput ? 'terminal__output' : 'terminal__command'}>
              {line.isOutput ? line.output : line.command}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="terminal__cursor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 5.5, duration: 1, repeat: Infinity }}
        >
          _
        </motion.div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [lineIndex, setLineIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [typing, setTyping] = React.useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentLine = TYPING_LINES[lineIndex];

    if (typing) {
      if (displayed.length < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentLine.slice(0, displayed.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 20);
      } else {
        setLineIndex((i) => (i + 1) % TYPING_LINES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, lineIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status pill */}
          <motion.div className="hero__status" variants={itemVariants}>
            <span className="hero__status-dot" />
            Open to opportunities
          </motion.div>

          {/* Profile Picture */}
          <motion.div className="hero__profile" variants={itemVariants}>
            <img src="/profile.jpeg" alt="Krish Sharma" className="hero__profile-img" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">Krish Sharma.</h1>
          </motion.div>

          {/* Tagline */}
          <motion.div className="hero__tagline" variants={itemVariants}>
            <span className="hero__tagline-static">Backend &amp; Software Engineer — </span>
            <span className="hero__tagline-typed" aria-live="polite" aria-atomic="true">
              {displayed}
              <span className="hero__cursor" aria-hidden="true">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p className="hero__description" variants={itemVariants}>
            I'm a Computer Science student passionate about software engineering, scalable backend systems, and artificial intelligence. I enjoy understanding how systems work under the hood — from distributed architectures and databases to training and deploying machine learning models.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              id="hero-explore-projects"
            >
              Explore Projects
              <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              id="hero-get-in-touch"
            >
              <MessageSquare size={15} />
              Get in Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div className="hero__social" variants={itemVariants}>
            <a
              href="https://github.com/Krish2600"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
              id="hero-github-link"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/krish-sharma-7301a9320/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
              id="hero-linkedin-link"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <TerminalAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
