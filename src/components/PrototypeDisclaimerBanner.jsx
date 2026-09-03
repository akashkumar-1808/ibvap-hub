import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  Terminal, 
  Layers, 
  ExternalLink, 
  Radio, 
  CheckCircle,
  FileCode,
  Sparkles
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { PROJECT_LINKS } from '../config/links';

export default function PrototypeDisclaimerBanner() {
  const tickerText = "⚠️ NOTICE TO EVALUATORS: THE IBVAP INTERACTIVE WEB PROTOTYPE IS CURRENTLY UNDER ACTIVE DEVELOPMENT & COMPONENT INTEGRATION • UPON FINAL PIPELINE PACKAGING, IT WILL BE DEPLOYED LIVE DIRECTLY ON THIS HUB • FULL TECHNICAL ARCHITECTURE SPECIFICATIONS & OPEN SOURCE CODEBASE ARE AVAILABLE FOR AUDIT BELOW • TEAM TATVA — SIH 2026 • ";

  return (
    <section className="disclaimer-banner-section">
      {/* Dynamic Red Scrolling Ticker Bar */}
      <div className="ticker-bar-wrap" role="marquee" aria-label="Prototype Development Status Ticker">
        <div className="ticker-content">
          <span className="ticker-item">{tickerText}</span>
          <span className="ticker-item">{tickerText}</span>
          <span className="ticker-item">{tickerText}</span>
        </div>
      </div>

      <div className="container banner-container">
        {/* Big Prominent Prototype Disclaimer Card */}
        <div className="big-disclaimer-card">
          <div className="disclaimer-ambient-red"></div>
          
          <div className="disclaimer-header">
            <div className="disclaimer-badge-row">
              <span className="status-live-pulse-badge">
                <span className="pulse-red-dot"></span>
                ACTIVE DEVELOPMENT NOTICE
              </span>
              <span className="telemetry-badge">
                DEPLOYMENT PIPELINE: PACKAGING IN PROGRESS
              </span>
            </div>
            <span className="sih-id-tag">SMART INDIA HACKATHON 2026 // ADVISORY</span>
          </div>

          <div className="disclaimer-body">
            <div className="disclaimer-icon-column">
              <div className="warning-shield-box">
                <AlertTriangle size={34} className="warning-shield-icon" />
              </div>
            </div>

            <div className="disclaimer-main-text">
              <h3 className="disclaimer-card-heading">
                IBVAP Interactive Prototype is Currently in Development
              </h3>
              
              <p className="disclaimer-desc">
                The full interactive web console and real-time border analytics prototype is actively 
                undergoing final model quantization, stream synchronization, and edge cloud deployment. 
                <strong> Once completed, the live demonstration will be directly accessible right on this website </strong> 
                without any change to the permanent <span className="highlight-url">IBVAP HUB</span> domain.
              </p>

              {/* Status Points Checklist */}
              <div className="status-points-grid">
                <div className="status-point-item">
                  <div className="point-icon-wrap ok">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="point-label">ALGORITHMIC LOGIC & FUSION</span>
                    <span className="point-desc">6-Stage pipeline and spatial reasoning validated</span>
                  </div>
                </div>

                <div className="status-point-item">
                  <div className="point-icon-wrap in-progress">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="point-label">LIVE WEB INTERFACE & STREAMING</span>
                    <span className="point-desc">Web client & RTSP stream deployment in progress</span>
                  </div>
                </div>

                <div className="status-point-item">
                  <div className="point-icon-wrap ok">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="point-label">EVALUATION TRANSPARENCY</span>
                    <span className="point-desc">GitHub source code & tech docs open for inspection</span>
                  </div>
                </div>
              </div>

              {/* Immediate Evaluation CTAs */}
              <div className="disclaimer-actions">
                <a
                  href={PROJECT_LINKS.techDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary disclaimer-btn"
                >
                  <Layers size={16} />
                  <span>Inspect Architecture Blueprint</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href={PROJECT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary disclaimer-btn"
                >
                  <GithubIcon size={16} />
                  <span>Review Code on GitHub</span>
                  <ExternalLink size={13} />
                </a>

                <a href="#prototype" className="btn btn-ghost-amber disclaimer-btn">
                  <span>Prototype Hub Details ↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .disclaimer-banner-section {
          position: relative;
          background: #ffffff;
          padding-top: 0;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Continuous Red Scrolling Ticker */
        .ticker-bar-wrap {
          background: linear-gradient(90deg, #991b1b 0%, #b91c1c 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%);
          color: #ffffff;
          padding: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(185, 28, 28, 0.25);
          border-top: 1px solid rgba(254, 202, 202, 0.3);
          border-bottom: 1px solid rgba(254, 202, 202, 0.3);
          margin-bottom: 40px;
          display: flex;
        }

        .ticker-content {
          display: inline-flex;
          animation: tickerSlide 35s linear infinite;
        }

        .ticker-item {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-right: 48px;
          color: #fff1f2;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        @keyframes tickerSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .ticker-bar-wrap:hover .ticker-content {
          animation-play-state: paused;
        }

        /* Big Disclaimer Card */
        .banner-container {
          position: relative;
          z-index: 1;
        }

        .big-disclaimer-card {
          position: relative;
          background: linear-gradient(135deg, #1c0b24 0%, #290f33 50%, #1a0826 100%);
          border: 2px solid #ef4444;
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          color: #ffffff;
          box-shadow: 0 16px 40px -10px rgba(220, 38, 38, 0.25), 0 0 25px rgba(239, 68, 68, 0.15);
          overflow: hidden;
        }

        .disclaimer-ambient-red {
          position: absolute;
          top: -100px;
          right: -80px;
          width: 450px;
          height: 350px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .disclaimer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(239, 68, 68, 0.3);
          padding-bottom: 18px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .disclaimer-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .status-live-pulse-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #fecaca;
          background: rgba(220, 38, 38, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.6);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .pulse-red-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.8);
          animation: pulseRed 1.8s infinite;
        }

        @keyframes pulseRed {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }

        .telemetry-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #fca5a5;
          letter-spacing: 0.05em;
        }

        .sih-id-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: #f87171;
          letter-spacing: 0.08em;
        }

        .disclaimer-body {
          display: flex;
          align-items: flex-start;
          gap: 28px;
        }

        .disclaimer-icon-column {
          flex-shrink: 0;
        }

        .warning-shield-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f87171;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.25);
        }

        .disclaimer-main-text {
          flex-grow: 1;
        }

        .disclaimer-card-heading {
          font-size: clamp(1.45rem, 2.8vw, 1.95rem);
          color: #ffffff;
          margin-bottom: 12px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .disclaimer-desc {
          font-size: 1.05rem;
          color: #fecdd3;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 900px;
        }

        .disclaimer-desc strong {
          color: #ffffff;
          text-decoration: underline decoration-red-400;
        }

        .highlight-url {
          font-family: var(--font-mono);
          color: #fb7185;
          background: rgba(244, 63, 94, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Status Points Grid */
        .status-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        .status-point-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(254, 202, 202, 0.15);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .point-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-icon-wrap.ok {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.4);
        }

        .point-icon-wrap.in-progress {
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.4);
        }

        .point-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: 0.05em;
        }

        .point-desc {
          font-size: 0.78125rem;
          color: #fda4af;
          line-height: 1.4;
        }

        .disclaimer-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .disclaimer-btn {
          background: #ffffff;
          color: #1c0b24;
          border: 1px solid #ffffff;
          font-weight: 600;
          padding: 10px 18px;
          font-size: 0.875rem;
        }

        .disclaimer-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #991b1b;
        }

        .btn-ghost-amber {
          background: rgba(239, 68, 68, 0.15);
          color: #fecaca;
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 10px 18px;
          font-size: 0.875rem;
          border-radius: var(--radius-md);
        }

        .btn-ghost-amber:hover {
          background: rgba(239, 68, 68, 0.3);
          color: #ffffff;
          border-color: #ef4444;
        }

        @media (max-width: 900px) {
          .disclaimer-body {
            flex-direction: column;
            gap: 20px;
          }
          .status-points-grid {
            grid-template-columns: 1fr;
          }
          .big-disclaimer-card {
            padding: 24px 20px;
          }
        }

        @media (max-width: 640px) {
          .disclaimer-actions {
            flex-direction: column;
            width: 100%;
          }
          .disclaimer-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .big-disclaimer-card {
            padding: 18px 14px;
          }
          .warning-shield-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
          }
          .disclaimer-card-heading {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
