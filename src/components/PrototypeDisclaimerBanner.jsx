import React from 'react';
import { 
  Rocket,
  Clock, 
  Terminal, 
  Layers, 
  ExternalLink, 
  Radio, 
  CheckCircle,
  FileCode,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { PROJECT_LINKS } from '../config/links';

export default function PrototypeDisclaimerBanner() {
  return (
    <section className="disclaimer-banner-section">
      <div className="container banner-container">
        {/* Big Prominent Live Prototype Announcement Card */}
        <div className="big-disclaimer-card">
          <div className="disclaimer-ambient-glow"></div>
          
          <div className="disclaimer-header">
            <div className="disclaimer-badge-row">
              <span className="status-live-pulse-badge">
                <span className="pulse-green-dot"></span>
                LIVE PROTOTYPE DEPLOYED
              </span>
              <span className="telemetry-badge">
                HOSTED ON RENDER CLOUD // CONSOLE ACTIVE
              </span>
            </div>
            <span className="sih-id-tag">SMART INDIA HACKATHON 2026 // LIVE CANDIDATE</span>
          </div>

          <div className="disclaimer-body">
            <div className="disclaimer-icon-column">
              <div className="warning-shield-box">
                <Rocket size={32} className="warning-shield-icon" />
              </div>
            </div>

            <div className="disclaimer-main-text">
              <h3 className="disclaimer-card-heading">
                IBVAP Interactive Prototype is Live on Render
              </h3>
              
              <p className="disclaimer-desc">
                The official interactive operator console and real-time border intelligence prototype is 
                published and accessible live on Render cloud. Control-room operators and evaluators can 
                launch the live environment to experience simulated RTSP stream ingestion, dynamic Kalman trajectory vectors, 
                interactive polygonal geofences, and explainable alert dispatch.
              </p>

              {/* Status Points Checklist */}
              <div className="status-points-grid">
                <div className="status-point-item">
                  <div className="point-icon-wrap ok">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="point-label">ALGORITHMIC LOGIC & FUSION</span>
                    <span className="point-desc">6-Stage pipeline and spatial reasoning fully validated</span>
                  </div>
                </div>

                <div className="status-point-item">
                  <div className="point-icon-wrap ok">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="point-label">LIVE CLOUD OPERATOR CONSOLE</span>
                    <span className="point-desc">Web console running live on Render cloud infrastructure</span>
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
                  href={PROJECT_LINKS.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary disclaimer-btn-primary"
                >
                  <Rocket size={17} />
                  <span>Launch Live Prototype Console →</span>
                  <ExternalLink size={14} />
                </a>

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
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .disclaimer-banner-section {
          position: relative;
          background: #ffffff;
          padding-top: 24px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Banner Container & Card */
        .banner-container {
          position: relative;
          z-index: 1;
        }

        .big-disclaimer-card {
          position: relative;
          background: linear-gradient(135deg, #100726 0%, #1e0e38 50%, #12072b 100%);
          border: 2px solid rgba(16, 185, 129, 0.45);
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          color: #ffffff;
          box-shadow: 0 16px 40px -10px rgba(16, 185, 129, 0.15), 0 0 30px rgba(124, 58, 237, 0.15);
          overflow: hidden;
        }

        .disclaimer-ambient-glow {
          position: absolute;
          top: -100px;
          right: -80px;
          width: 480px;
          height: 380px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(124, 58, 237, 0.2) 40%, transparent 70%);
          pointer-events: none;
        }

        .disclaimer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
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
          color: #a7f3d0;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.5);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .pulse-green-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.8);
          animation: pulseGreen 1.8s infinite;
        }

        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .telemetry-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #c4b5fd;
          letter-spacing: 0.05em;
        }

        .sih-id-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: #a78bfa;
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
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(124, 58, 237, 0.25) 100%);
          border: 1px solid rgba(16, 185, 129, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #34d399;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.2);
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
          color: #e2d9fc;
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 900px;
        }

        /* Status Points Grid */
        .status-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        .status-point-item {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
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
          color: #c4b5fd;
          line-height: 1.4;
        }

        .disclaimer-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .disclaimer-btn-primary {
          background: linear-gradient(135deg, #059669 0%, #10b981 50%, #2563eb 100%);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
          color: #ffffff;
          font-weight: 700;
          padding: 12px 24px;
        }

        .disclaimer-btn-primary:hover {
          background: linear-gradient(135deg, #047857 0%, #059669 50%, #1d4ed8 100%);
          box-shadow: 0 6px 24px rgba(16, 185, 129, 0.5);
          transform: translateY(-2px);
          color: #ffffff;
        }

        .disclaimer-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-weight: 600;
          padding: 11px 20px;
          font-size: 0.875rem;
        }

        .disclaimer-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.35);
          color: #ffffff;
          transform: translateY(-1px);
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
