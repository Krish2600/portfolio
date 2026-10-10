import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Server, Zap, Database, GitBranch, Bot, Layers } from 'lucide-react';
import './About.css';

const INTERESTS = [
  {
    icon: <Server size={18} />,
    title: 'Backend Engineering & APIs',
    desc: 'Designing clean RESTful interfaces, handling authentication, rate limiting, and building APIs that are a pleasure to use.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Distributed Systems',
    desc: 'Worker coordination, message passing, consensus, and fault tolerance — the foundations of systems that work at scale.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Real-Time Collaboration',
    desc: 'WebSockets, CRDTs, and event-driven architectures for applications where multiple users interact with shared state in real time.',
  },
  {
    icon: <Database size={18} />,
    title: 'Databases & Caching',
    desc: 'SQL and NoSQL schema design, indexing strategies, Redis caching patterns, and choosing the right datastore for the job.',
  },
  {
    icon: <GitBranch size={18} />,
    title: 'Containerization & Deployment',
    desc: 'Docker, Kubernetes, and CI/CD pipelines — packaging software so it runs reliably from development to production.',
  },
  {
    icon: <Bot size={18} />,
    title: 'AI/ML Applications',
    desc: 'Building practical, intelligent applications using LLM APIs, ML model pipelines, and natural language interfaces.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const About: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section about" ref={ref} aria-labelledby="about-heading">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title" id="about-heading">
            Engineering at the system level
          </h2>
          <p className="section-subtitle">
            I'm a Computer Science student who gravitates toward solving complex problems — whether that means engineering robust distributed systems, crafting elegant software architectures, or developing intelligent AI/ML models that learn from data.
          </p>
        </motion.div>

        <div className="about__grid">
          {INTERESTS.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__card card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="about__card-icon">{item.icon}</div>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
