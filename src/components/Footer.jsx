import React from 'react';
import { Shield, ExternalLink, ArrowUp } from 'lucide-react';
import SihLogo from './logos/SihLogo';
import MhaLogo from './logos/MhaLogo';
import SupportingOrganizersLogo from './logos/SupportingOrganizersLogo';
import { PROJECT_LINKS } from '../config/links';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Official Organizing Bodies Logos Row */}
        <div className="footer-logos-row">
          <SihLogo size={36} showYear={true} darkTheme={true} />
          <div className="footer-logo-divider"></div>
          <SupportingOrganizersLogo size={32} darkTheme={true} />
          <div className="footer-logo-divider"></div>
          <MhaLogo size={42} showText={true} darkTheme={true} />
        </div>

        {/* Main Footer Row */}
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="footer-icon-box">
                <Shield size={20} />
              </div>
              <div>
                <span className="footer-title">IBVAP <span className="title-highlight">HUB</span></span>
                <span className="footer-team-sub">TEAM TATVA – IBVAP</span>
              </div>
            </div>
            <p className="footer-mission">
              AI-Powered Border Intelligence and Video Analytics Platform. Built for Smart India Hackathon 2026.
            </p>
            <div className="footer-sih-badges-group">
              <span className="footer-sih-badge">SIH 2026 // PS ID: SIH26187</span>
              <span className="footer-mha-badge">MINISTRY OF HOME AFFAIRS</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">System Navigation</h4>
            <ul className="footer-link-list">
              <li><a href="#overview">System Overview</a></li>
              <li><a href="#problem-statement">PS Details (SIH26187)</a></li>
              <li><a href="#intelligence-layer">The Intelligence Layer</a></li>
              <li><a href="#why-ibvap">Why IBVAP Matters</a></li>
              <li><a href="#comparison">Conventional vs IBVAP</a></li>
              <li><a href="#status">Project Status</a></li>
              <li><a href="#team">Team TATVA</a></li>
            </ul>
          </div>

          {/* Evaluator Resources Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Evaluation Portals</h4>
            <ul className="footer-link-list">
              <li><a href="#prototype">Launch Prototype</a></li>
              <li><a href="#prototype">Watch Demo Video</a></li>
              <li><a href="#architecture">Technical Architecture</a></li>
              <li><a href="#research">Research & Government Sources</a></li>
              <li><a href="#resources">All Project Resources</a></li>
              <li>
                <a
                  href={PROJECT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-github-link"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Institutional Notice */}
        <div className="footer-disclaimer-box">
          <p className="disclaimer-statement">
            <strong>Disclaimer:</strong> This website presents a prototype and research-backed technical concept developed for the Smart India Hackathon 2026. It is not a production border-security deployment and does not replace statutory border operations protocols.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 <strong>TEAM TATVA – IBVAP</strong>. Smart India Hackathon 2026 Project Hub.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: #0d061a;
          color: #ffffff;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding-top: 64px;
          padding-bottom: 32px;
          position: relative;
        }

        .footer-logos-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-bottom: 32px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
        }

        .footer-logo-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
        }

        .footer-sih-badges-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .footer-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          display: block;
        }

        .title-highlight {
          color: var(--violet-light);
          font-weight: 500;
        }

        .footer-team-sub {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: #a78bfa;
          letter-spacing: 0.08em;
          display: block;
        }

        .footer-mission {
          font-size: 0.875rem;
          color: #c4b5fd;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .footer-sih-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .footer-mha-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #fecaca;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .footer-col-heading {
          font-size: 0.9375rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link-list a {
          font-size: 0.84375rem;
          color: #c4b5fd;
          transition: color 0.2s ease;
        }

        .footer-link-list a:hover {
          color: #ffffff;
        }

        .inline-github-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-disclaimer-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 32px;
        }

        .disclaimer-statement {
          font-size: 0.78125rem;
          color: #a78bfa;
          line-height: 1.5;
        }

        .disclaimer-statement strong {
          color: #e2d9fc;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          font-size: 0.78125rem;
          color: #8b5cf6;
        }

        .footer-copyright strong {
          color: #c4b5fd;
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          background: rgba(139, 92, 246, 0.2);
          color: #ffffff;
          border-color: #a78bfa;
        }

        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .footer-wrapper {
            padding-top: 48px;
            padding-bottom: 24px;
          }
          .footer-logos-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-logo-divider {
            display: none;
          }
          .footer-bottom-bar {
            align-items: stretch;
          }
          .scroll-top-btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
