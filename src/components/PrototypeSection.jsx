import React, { useState } from 'react';
import { 
  Rocket, 
  Play, 
  ExternalLink, 
  ShieldCheck, 
  Terminal, 
  Info, 
  Copy, 
  Check, 
  Clock
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { PROJECT_LINKS, isPlaceholderUrl } from '../config/links';

export default function PrototypeSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState('');
  const [copied, setCopied] = useState(false);

  const handleLaunchClick = (e, urlType, fallbackUrl) => {
    const rawUrl = PROJECT_LINKS[urlType];
    if (isPlaceholderUrl(rawUrl)) {
      e.preventDefault();
      setModalTarget(urlType === 'prototype' ? 'Live Interactive Prototype' : 'Demonstration Video');
      setModalOpen(true);
    }
  };

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(`// In src/config/links.js:\nPROJECT_LINKS.prototype = "https://your-deployed-prototype.app";`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="prototype" className="section-spacing prototype-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Rocket size={13} />
            EVALUATION PORTAL
          </span>
          <h2 className="section-title">See IBVAP in Action</h2>
          <p className="section-subtitle">
            Experience our AI border intelligence platform firsthand through the interactive prototype, 
            technical demonstration, and open-source codebase.
          </p>
        </div>

        {/* Large Prominent Showcase Card */}
        <div className="prototype-hero-card">
          <div className="card-ambient-glow"></div>
          
          <div className="prototype-card-content">
            <div className="prototype-badge-row">
              <span className="prototype-status-pill">
                <span className="pulse-dot"></span>
                LIVE PROTOTYPE ONLINE // HOSTED ON RENDER
              </span>
              <span className="prototype-version-tag">VER: SIH-2026-LIVE</span>
            </div>

            <h3 className="prototype-card-heading">
              Operator Console & Tactical Spatial Reasoning Hub
            </h3>

            <p className="prototype-card-desc">
              Test real-time RTSP video ingest simulation, multi-object bounding and Kalman trajectory vectors, 
              interactive polygonal geofence configuration, false-alarm rejection scoring, and the complete explainable evidence dispatch manifest.
            </p>

            {/* Action Buttons Matrix */}
            <div className="prototype-actions-cluster">
              <a
                href={PROJECT_LINKS.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg launch-btn"
              >
                <Rocket size={19} />
                <span>Launch Prototype Console →</span>
              </a>

              <a
                href={PROJECT_LINKS.demo}
                onClick={(e) => handleLaunchClick(e, 'demo')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <Play size={18} className="demo-play-icon" />
                <span>Watch Demonstration →</span>
              </a>

              <a
                href={PROJECT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg github-btn"
              >
                <GithubIcon size={18} />
                <span>View Source Code →</span>
              </a>
            </div>

            {/* Permanent Entry Point Note */}
            <div className="permanent-hub-notice">
              <Info size={16} className="notice-icon" />
              <div className="notice-text">
                <strong>Notice for Evaluators:</strong> Prototype and demonstration links may evolve during development. 
                <strong> IBVAP HUB remains the permanent project entry point</strong> and single source of truth throughout Smart India Hackathon 2026.
              </div>
            </div>

            {/* Configuration Transparency Bar */}
            <div className="config-telemetry-bar">
              <div className="config-var-item">
                <span className="var-label">PROTOTYPE_URL:</span>
                <a href={PROJECT_LINKS.prototype} target="_blank" rel="noopener noreferrer" className="var-link">
                  {PROJECT_LINKS.prototype}
                  <ExternalLink size={12} />
                </a>
              </div>
              <div className="config-var-item">
                <span className="var-label">DEMO_VIDEO_URL:</span>
                <code className="var-code">{PROJECT_LINKS.demo}</code>
              </div>
              <div className="config-var-item">
                <span className="var-label">GITHUB_URL:</span>
                <a href={PROJECT_LINKS.github} target="_blank" rel="noopener noreferrer" className="var-link">
                  akashkumar-1808/IBVAP_SIH_2026
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Placeholder Status */}
        {modalOpen && (
          <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-icon-box">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="modal-title">{modalTarget} Status</h4>
                  <span className="modal-subtitle">Demonstration Deployment Underway</span>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-message">
                  The {modalTarget.toLowerCase()} URL is currently configured as a placeholder constant in <code>src/config/links.js</code> while our deployment and screen capture pipeline is undergoing live hackathon packaging.
                </p>

                <div className="modal-code-box">
                  <div className="code-box-header">
                    <span>EDITING CONFIGURATION</span>
                    <button type="button" onClick={copyConfigSnippet} className="copy-btn">
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre><code>{`// In src/config/links.js
export const PROJECT_LINKS = {
  prototype: "PROTOTYPE_URL", // replace with live URL
  demo: "DEMO_VIDEO_URL",      // replace with live URL
  ...
};`}</code></pre>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={PROJECT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setModalOpen(false)}
                >
                  <GithubIcon size={15} />
                  <span>Inspect Code on GitHub</span>
                </a>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .prototype-section {
          background-color: #ffffff;
        }

        .prototype-hero-card {
          position: relative;
          background: linear-gradient(135deg, #180933 0%, #2e1065 60%, #3b0764 100%);
          border-radius: var(--radius-xl);
          padding: 56px 60px;
          color: #ffffff;
          box-shadow: 0 25px 60px -15px rgba(46, 16, 101, 0.35);
          border: 1px solid rgba(167, 139, 250, 0.3);
          overflow: hidden;
        }

        .card-ambient-glow {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
          pointer-events: none;
        }

        .prototype-card-content {
          position: relative;
          z-index: 1;
        }

        .prototype-badge-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .prototype-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .prototype-version-tag {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: #c4b5fd;
          letter-spacing: 0.05em;
        }

        .prototype-card-heading {
          font-size: clamp(1.75rem, 3.2vw, 2.5rem);
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .prototype-card-desc {
          font-size: 1.0625rem;
          color: #e2d9fc;
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 840px;
        }

        .prototype-actions-cluster {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .launch-btn {
          background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.5);
        }

        .launch-btn:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%);
        }

        .demo-play-icon {
          color: var(--violet-primary);
        }

        .permanent-hub-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          margin-bottom: 28px;
        }

        .notice-icon {
          color: #facc15;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .notice-text {
          font-size: 0.84375rem;
          color: #ddd6fe;
          line-height: 1.5;
        }

        .notice-text strong {
          color: #ffffff;
        }

        .config-telemetry-bar {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .config-var-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .var-label {
          color: #a78bfa;
          font-weight: 600;
        }

        .var-code {
          background: rgba(0, 0, 0, 0.35);
          padding: 2px 8px;
          border-radius: 4px;
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .var-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #c4b5fd;
          text-decoration: underline;
        }

        .var-link:hover {
          color: #ffffff;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 8, 29, 0.7);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-dialog {
          background: #ffffff;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 540px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-violet-strong);
          overflow: hidden;
          animation: floatSlow 0.3s ease-out;
        }

        .modal-header {
          padding: 24px;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--violet-whisper);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          flex-shrink: 0;
        }

        .modal-title {
          font-size: 1.25rem;
          color: var(--violet-deep);
        }

        .modal-subtitle {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .modal-body {
          padding: 24px;
        }

        .modal-message {
          font-size: 0.90625rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        .modal-code-box {
          background: #0f081d;
          border-radius: var(--radius-md);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #c4b5fd;
        }

        .code-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #1c0f38;
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          font-size: 0.6875rem;
          color: #a78bfa;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        .modal-code-box pre {
          padding: 12px;
          margin: 0;
          overflow-x: auto;
        }

        .modal-footer {
          padding: 16px 24px;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .prototype-hero-card {
            padding: 32px 20px;
          }
          .prototype-actions-cluster {
            flex-direction: column;
            align-items: stretch;
          }
          .prototype-actions-cluster .btn {
            width: 100%;
            justify-content: center;
          }
          .config-telemetry-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .config-var-item {
            flex-wrap: wrap;
            word-break: break-all;
          }
          .var-code, .var-link {
            word-break: break-all;
          }
        }

        @media (max-width: 480px) {
          .prototype-hero-card {
            padding: 22px 14px;
          }
          .prototype-card-heading {
            font-size: 1.3rem;
          }
          .prototype-card-desc {
            font-size: 0.9375rem;
            margin-bottom: 24px;
          }
          .modal-dialog {
            margin: 10px;
            max-height: 90vh;
            overflow-y: auto;
          }
          .modal-header {
            padding: 16px;
          }
          .modal-body {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
