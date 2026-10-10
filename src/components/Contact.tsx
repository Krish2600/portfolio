import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Copy, CheckCheck, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

const EMAIL = 'krish.s1107@gmail.com';

const Contact: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="section contact" ref={ref} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">
          <motion.div
            className="contact__content"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title" id="contact-heading">
              Let's talk engineering
            </h2>
            <p className="contact__description">
              I'm open to internships, full-time roles, and conversations about backend engineering, distributed systems, or interesting technical problems. If you're building something challenging or hiring engineers who care about how systems work at the fundamental level — I'd love to connect.
            </p>

            <div className="contact__links">
              <a
                href={`mailto:${EMAIL}`}
                className="contact__link-card"
                id="contact-email-link"
                aria-label="Send email to Krish Sharma"
              >
                <div className="contact__link-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact__link-label">Email</p>
                  <p className="contact__link-value">{EMAIL}</p>
                </div>
                <ExternalLink size={14} className="contact__link-arrow" />
              </a>

              <a
                href="https://github.com/Krish2600"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-card"
                id="contact-github-link"
                aria-label="GitHub profile"
              >
                <div className="contact__link-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <p className="contact__link-label">GitHub</p>
                  <p className="contact__link-value">github.com/Krish2600</p>
                </div>
                <ExternalLink size={14} className="contact__link-arrow" />
              </a>

              <a
                href="https://www.linkedin.com/in/krish-sharma-7301a9320/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-card"
                id="contact-linkedin-link"
                aria-label="LinkedIn profile"
              >
                <div className="contact__link-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p className="contact__link-label">LinkedIn</p>
                  <p className="contact__link-value">linkedin.com/in/krish-sharma-7301a9320</p>
                </div>
                <ExternalLink size={14} className="contact__link-arrow" />
              </a>
            </div>

            <button
              className="btn btn-secondary contact__copy-btn"
              onClick={handleCopyEmail}
              id="contact-copy-email"
              aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
            >
              {copied ? <CheckCheck size={15} /> : <Copy size={15} />}
              {copied ? 'Copied!' : 'Copy email address'}
            </button>
          </motion.div>

          <motion.div
            className="contact__decoration"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-hidden="true"
          >
            <div className="contact__orb" />
            <div className="contact__quote">
              <p className="contact__quote-text">
                "The best systems are not those that never fail — they're those that handle failure gracefully."
              </p>
              <span className="contact__quote-attr">— A distributed systems principle</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
