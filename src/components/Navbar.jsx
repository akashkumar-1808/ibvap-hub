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

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true" 
          />
          <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
            <div className="mobile-menu-inner">
              <div className="mobile-ps-header">
                <span className="navbar-ps-pill">
                  <span className="ps-tag-label">SIH26187</span>
                  <span className="ps-mha-tag">MHA</span>
                </span>
                <span className="mobile-menu-hint">Border Surveillance Intelligence</span>
              </div>
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="mobile-link-arrow" />
                  </a>
                ))}
              </div>
              <div className="mobile-drawer-footer">
                <a
                  href="#prototype"
                  className="btn btn-primary mobile-menu-cta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Launch Prototype</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </>
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
          transition: all 0.2s ease;
        }

        .mobile-toggle-btn:hover {
          background: var(--violet-whisper);
          border-color: var(--border-violet-strong);
        }

        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          top: var(--header-height);
          background: rgba(15, 8, 29, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 998;
          animation: fadeInBackdrop 0.2s ease-out;
        }

        .mobile-menu-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 2px solid var(--violet-royal);
          box-shadow: 0 20px 30px rgba(46, 16, 101, 0.15);
          max-height: calc(100vh - var(--header-height));
          overflow-y: auto;
          overflow-x: hidden;
          z-index: 999;
          animation: slideDownMenu 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDownMenu {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-inner {
          padding: 20px 24px;
        }

        .mobile-ps-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-menu-hint {
          font-size: 0.71875rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.96875rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 10px 12px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link:active {
          background: var(--violet-whisper);
          color: var(--violet-royal);
          transform: translateX(3px);
        }

        .mobile-link-arrow {
          color: var(--violet-soft);
          transition: transform 0.2s ease;
        }

        .mobile-nav-link:hover .mobile-link-arrow {
          color: var(--violet-royal);
          transform: translateX(2px);
        }

        .mobile-drawer-footer {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-menu-cta {
          width: 100%;
          justify-content: center;
          padding: 12px 20px;
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

        @media (max-width: 640px) {
          .navbar-actions .nav-cta {
            display: none;
          }
          .mobile-menu-inner {
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .navbar-ps-pill {
            display: none;
          }
          .brand-title {
            font-size: 1rem;
          }
          .brand-icon-box {
            width: 34px;
            height: 34px;
          }
          .brand-group-wrapper {
            gap: 10px;
          }
        }
      `}</style>
    </header>
  );
}
