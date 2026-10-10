import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'projects', 'stack', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container">
          <a href="#" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="navbar__brand-name">Krish Sharma</span>
            <span className="navbar__brand-dot" />
          </a>

          <div className="navbar__links" role="list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar__link${activeSection === sectionId ? ' navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  role="listitem"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="navbar__actions">
            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary navbar__resume-btn"
              aria-label="Download resume PDF"
            >
              <Download size={14} />
              Resume
            </a>

            <button
              className="navbar__menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              onClick={(e) => handleNavClick(e, link.href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary mobile-menu__resume"
            tabIndex={menuOpen ? 0 : -1}
          >
            <Download size={14} />
            Download Resume
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
