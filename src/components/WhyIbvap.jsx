import React from 'react';
import { 
  Network, 
  Target, 
  BellOff, 
  FileCheck2, 
  Sparkles, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function WhyIbvap() {
  const problemCards = [
    {
      icon: Network,
      tag: "PILLAR 01 // OVERLOAD",
      title: "Fragmented Surveillance",
      desc: "Existing border infrastructure generates vast volumes of raw video and disparate sensor streams that rapidly overwhelm human control-room operators.",
      impact: "High cognitive burden, missed perimeter anomalies"
    },
    {
      icon: Target,
      tag: "PILLAR 02 // CONTEXT GAP",
      title: "Detection ≠ Intelligence",
      desc: "Simply detecting an object or bounding box does not establish whether an event is operationally meaningful without trajectory, direction, and spatial context.",
      impact: "Raw pixels lack tactical intent and threat relevance"
    },
    {
      icon: BellOff,
      tag: "PILLAR 03 // COGNITIVE FATIGUE",
      title: "False Alarm Fatigue",
      desc: "Constant unverified alerts from wildlife, foliage motion, and environmental shifts flood operations centers, eroding vigilance toward genuine intrusions.",
      impact: "Operator desensitization and prolonged response delays"
    },
    {
      icon: FileCheck2,
      tag: "PILLAR 04 // ACCOUNTABILITY",
      title: "Evidence Matters",
      desc: "Critical border command decisions require explainable, transparent alert chains supported by visual track history, spatial logs, and auditable reasoning.",
      impact: "Unexplainable black-box models cannot be legally defended"
    }
  ];

  return (
    <section id="why-ibvap" className="section-spacing why-ibvap-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={13} />
            OPERATIONAL CHALLENGES
          </span>
          <h2 className="section-title">From Video Feeds to Border Intelligence</h2>
          <p className="section-subtitle">
            Modern border security faces an information paradox: abundant surveillance video, 
            yet critical operational bottlenecks in manual interpretation and alert verification.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="problem-cards-grid">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="premium-card problem-card">
                <div className="card-top-row">
                  <div className="card-icon-box">
                    <Icon size={22} className="card-icon" />
                  </div>
                  <span className="card-pillar-tag">{card.tag}</span>
                </div>

                <h3 className="card-heading">{card.title}</h3>
                <p className="card-description">{card.desc}</p>

                <div className="card-impact-box">
                  <span className="impact-label">OPERATIONAL IMPACT:</span>
                  <p className="impact-text">{card.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Takeaway Banner */}
        <div className="core-thesis-banner">
          <div className="thesis-glow-orb"></div>
          <div className="thesis-content">
            <div className="thesis-badge">
              <Layers size={15} />
              <span>THE IBVAP ARCHITECTURAL APPROACH</span>
            </div>
            <p className="thesis-statement">
              "IBVAP adds an intelligent software layer over existing surveillance infrastructure — rather than replacing it."
            </p>
            <span className="thesis-subtext">
              Zero requirement for proprietary camera rip-and-replace. Deploys seamlessly on existing RTSP/ONVIF feeds 
              to amplify operator capability with contextual reasoning.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .why-ibvap-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .problem-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .problem-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
        }

        .card-pillar-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .card-heading {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--violet-deep);
        }

        .card-description {
          font-size: 0.8875rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .card-impact-box {
          background: var(--bg-surface-subtle);
          border-left: 3px solid var(--violet-royal);
          padding: 10px 12px;
          border-radius: 0 6px 6px 0;
        }

        .impact-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--violet-dark);
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }

        .impact-text {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        /* Prominent Thesis Banner */
        .core-thesis-banner {
          position: relative;
          background: linear-gradient(135deg, #240e4f 0%, #3b137d 50%, #4c1d95 100%);
          border-radius: var(--radius-xl);
          padding: 44px 48px;
          color: #ffffff;
          overflow: hidden;
          box-shadow: 0 20px 40px -10px rgba(46, 16, 101, 0.28);
          border: 1px solid rgba(167, 139, 250, 0.3);
          text-align: center;
        }

        .thesis-glow-orb {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        .thesis-content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        .thesis-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .thesis-statement {
          font-size: clamp(1.35rem, 2.8vw, 1.85rem);
          font-weight: 800;
          line-height: 1.35;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .thesis-subtext {
          font-size: 0.95rem;
          color: #ddd6fe;
          line-height: 1.6;
          display: block;
          max-width: 680px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .problem-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .problem-cards-grid {
            grid-template-columns: 1fr;
          }
          .core-thesis-banner {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
}
