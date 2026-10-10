import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__divider" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Krish Sharma</span>
          <span className="footer__tagline">Backend &amp; Software Engineer</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer__nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com/Krish2600"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/krish-sharma-7301a9320/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:krish.s1107@gmail.com"
            className="footer__social-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          © {year} Krish Sharma. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
