import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Users, Cpu, Database, Code2, Brain } from 'lucide-react';
import { ENGINEERING_FOCUSES } from '../data/projects';
import './EngineeringFocus.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  Network: <Network size={20} />,
  Users: <Users size={20} />,
  Cpu: <Cpu size={20} />,
  Database: <Database size={20} />,
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
};

const EngineeringFocus: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section eng-focus" ref={ref} aria-labelledby="focus-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Engineering Interests</p>
          <h2 className="section-title" id="focus-heading">
            What I focus on
          </h2>
          <p className="section-subtitle">
            These are the engineering areas I care most about — each one connected to something I've built or am actively studying.
          </p>
        </motion.div>

        <div className="eng-focus__grid">
          {ENGINEERING_FOCUSES.map((focus, i) => (
            <motion.div
              key={focus.title}
              className="eng-focus__card card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="eng-focus__icon">
                {ICON_MAP[focus.icon]}
              </div>
              <div>
                <h3 className="eng-focus__title">{focus.title}</h3>
                <p className="eng-focus__desc">{focus.description}</p>
                {focus.relatedProject && (
                  <p className="eng-focus__related">
                    <span>↗</span> {focus.relatedProject}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
