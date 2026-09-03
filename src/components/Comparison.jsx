import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

export default function Comparison() {
  const conventionalFlow = [
    { title: "Isolated Detection", desc: "Single-frame box detected without temporal continuity" },
    { title: "Raw Alert Generation", desc: "Immediate trigger without checking if movement is benign" },
    { title: "Operator Verification", desc: "Manual inspection required for every single motion trip" }
  ];

  const ibvapFlow = [
    { title: "Detection", desc: "Robust neural vision locates candidate entities" },
    { title: "Tracking", desc: "Persistent trajectory vectors across sequential frames" },
    { title: "Spatial Reasoning", desc: "Correlates position against border perimeter & zone rules" },
    { title: "Temporal Context", desc: "Evaluates dwell time, velocity consistency, & past motion" },
    { title: "Evidence Fusion", desc: "Filters out environmental noise (trees, wildlife, shadows)" },
    { title: "Explainable Alert", desc: "Actionable alert dispatched with transparent audit proof" }
  ];

  return (
    <section id="comparison" className="section-spacing comparison-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <ShieldCheck size={13} />
            PARADIGM SHIFT
          </span>
          <h2 className="section-title">Detection is only the beginning.</h2>
          <p className="section-subtitle">
            Why legacy CCTV analytics overwhelm control rooms, and how IBVAP transforms 
            unrefined detection triggers into structured situational intelligence.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="comparison-cards-grid">
          {/* Card 1: Conventional Analytics */}
          <div className="comparison-card conventional-card">
            <div className="card-badge conventional-badge">
              <XCircle size={15} />
              <span>CONVENTIONAL VIDEO ANALYTICS</span>
            </div>

            <div className="flow-vertical-list">
              {conventionalFlow.map((item, index) => (
                <div key={item.title} className="flow-item">
                  <div className="flow-step-marker danger-marker">
                    <span>{index + 1}</span>
                  </div>
                  <div className="flow-text-group">
                    <h4 className="flow-title">{item.title}</h4>
                    <p className="flow-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-outcome danger-outcome">
              <AlertCircle size={18} className="outcome-icon" />
              <div>
                <span className="outcome-label">SYSTEM OUTCOME:</span>
                <p className="outcome-text">
                  High false alarm volume, operator desensitization, blind spots during surge events.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: IBVAP Pipeline */}
          <div className="comparison-card ibvap-card">
            <div className="card-badge ibvap-badge">
              <Zap size={15} />
              <span>THE IBVAP INTELLIGENCE PIPELINE</span>
            </div>

            <div className="flow-vertical-list">
              {ibvapFlow.map((item, index) => (
                <div key={item.title} className="flow-item">
                  <div className="flow-step-marker success-marker">
                    <span>{index + 1}</span>
                  </div>
                  <div className="flow-text-group">
                    <h4 className="flow-title ibvap-title">{item.title}</h4>
                    <p className="flow-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-outcome success-outcome">
              <CheckCircle2 size={18} className="outcome-icon" />
              <div>
                <span className="outcome-label">SYSTEM OUTCOME:</span>
                <p className="outcome-text">
                  Less noise. More context. Better operator awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighting Banner */}
        <div className="comparison-highlight-banner">
          <div className="highlight-pill">OPERATOR ADVANTAGE</div>
          <p className="highlight-text">
            <strong>Less noise. More context. Better operator awareness.</strong>
          </p>
          <span className="highlight-caption">
            Designed to support human decision-makers at the border outpost, not replace their command judgment.
          </span>
        </div>
      </div>

      <style>{`
        .comparison-section {
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
        }

        .comparison-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 28px;
          margin-bottom: 36px;
        }

        .comparison-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 36px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
        }

        .conventional-card {
          border-top: 4px solid #ef4444;
          background: #fafbfc;
        }

        .ibvap-card {
          border-top: 4px solid var(--violet-royal);
          border-color: var(--border-violet-strong);
          background: #ffffff;
          box-shadow: var(--shadow-lg), 0 0 25px rgba(124, 58, 237, 0.08);
          position: relative;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 28px;
          width: fit-content;
        }

        .conventional-badge {
          color: #b91c1c;
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .ibvap-badge {
          color: var(--violet-dark);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
        }

        .flow-vertical-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex-grow: 1;
          margin-bottom: 28px;
        }

        .flow-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .flow-step-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .danger-marker {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fca5a5;
        }

        .success-marker {
          background: var(--violet-whisper);
          color: var(--violet-primary);
          border: 1px solid var(--border-violet-strong);
        }

        .flow-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .flow-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ibvap-title {
          color: var(--violet-deep);
        }

        .flow-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .comparison-outcome {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: var(--radius-md);
        }

        .danger-outcome {
          background: #fff5f5;
          border: 1px solid #fed7d7;
          color: #991b1b;
        }

        .success-outcome {
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          color: var(--violet-dark);
        }

        .outcome-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .outcome-text {
          font-size: 0.875rem;
          line-height: 1.45;
          font-weight: 500;
        }

        /* Highlight banner */
        .comparison-highlight-banner {
          text-align: center;
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px 32px;
          box-shadow: var(--shadow-sm);
        }

        .highlight-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-royal);
          background: var(--violet-subtle);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .highlight-text {
          font-size: 1.25rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .highlight-caption {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .comparison-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
