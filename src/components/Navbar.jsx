import React, { useState, useEffect } from 'react';
import { Shield, ExternalLink, Menu, X, ChevronRight, Activity } from 'lucide-react';
import { PROJECT_LINKS, isPlaceholderUrl } from '../config/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'PS: SIH26187', href: '#problem-statement' },
    { name: 'Intelligence Layer', href: '#intelligence-layer' },
    { name: 'Research', href: '#research' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Resources', href: '#resources' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Team Label */}
        <div className="brand-group-wrapper">
          <a href="#overview" className="navbar-brand">
            <div className="brand-icon-box">
              <Shield className="brand-shield" size={22} />
              <span className="brand-pulse-pip"></span>
            </div>
            <div className="brand-text-group">
              <span className="brand-title">IBVAP <span className="brand-title-light">HUB</span></span>
              <span className="brand-subtext">TEAM TATVA</span>
            </div>
          </a>

          <a href="#problem-statement" className="navbar-ps-pill" title="SIH 2026 Problem Statement SIH26187 (MHA)">
            <span className="ps-tag-label">SIH26187</span>
            <span className="ps-mha-tag">MHA</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="navbar-actions">
          <a
            href="#prototype"
            className="btn btn-primary btn-sm nav-cta"
          >
            <span>View Prototype</span>
            <ChevronRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#prototype"
              className="btn btn-primary mobile-menu-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Prototype →
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(226, 219, 240, 0.5);
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.15);
          box-shadow: 0 4px 20px -2px rgba(46, 16, 101, 0.08);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .brand-group-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar-ps-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .navbar-ps-pill:hover {
          background: var(--violet-subtle);
          transform: translateY(-1px);
        }

        .ps-tag-label {
          color: var(--violet-primary);
        }

        .ps-mha-tag {
          color: #dc2626;
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 0.59375rem;
        }

        .brand-icon-box {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(109, 40, 217, 0.25);
        }

        .brand-pulse-pip {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
        }

        .brand-text-group {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--violet-deep);
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .brand-title-light {
          font-weight: 500;
          color: var(--violet-royal);
        }

        .brand-subtext {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item {
          font-size: 0.90625rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: var(--violet-primary);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--violet-royal);
          transition: width 0.2s ease;
          border-radius: 2px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border-light);
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          color: var(--violet-deep);
        }

        .mobile-menu-drawer {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 1px solid var(--border-violet);
          box-shadow: var(--shadow-xl);
          padding: 24px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-menu-cta {
          margin-top: 8px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
