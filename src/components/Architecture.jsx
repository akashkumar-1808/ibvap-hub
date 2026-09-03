import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  Camera, 
  Binary, 
  Cpu, 
  GitBranch, 
  Compass, 
  Clock, 
  Combine, 
  BellRing, 
  Monitor,
  CheckCircle,
  Network
} from 'lucide-react';
import { PROJECT_LINKS } from '../config/links';

export default function Architecture() {
  const architectureNodes = [
    {
      step: "01",
      layer: "INGESTION LAYER",
      title: "Video Sources",
      icon: Camera,
      tech: "RTSP / ONVIF / H.264 / IP BOP Feeds",
      description: "Direct stream acquisition from existing fixed cameras, PTZ units, thermal sensors, and BOP surveillance posts without proprietary lock-in."
    },
    {
      step: "02",
      layer: "PROCESSING LAYER",
      title: "Video Processing",
      icon: Binary,
      tech: "Frame Demuxing • Resize • Temporal Buffer",
      description: "Low-latency frame decapsulation, adaptive sampling, and color space normalization optimized for lightweight GPU/edge execution."
    },
    {
      step: "03",
      layer: "COMPUTER VISION",
      title: "AI Detection",
      icon: Cpu,
      tech: "Edge-Trained Neural Detectors",
      description: "High-speed bounding box localization and multi-class classification resilient to challenging frontier illumination and atmospheric clutter."
    },
    {
      step: "04",
      layer: "KINEMATIC MEMORY",
      title: "Object Tracking",
      icon: GitBranch,
      tech: "Kalman State Prediction • Deep ReID",
      description: "Maintains uninterrupted identity persistence, trajectory velocity vectors, and historical coordinate paths across successive frames."
    },
    {
      step: "05",
      layer: "GEOMETRIC CONTEXT",
      title: "Spatial / Zone Engine",
      icon: Compass,
      tech: "Polygonal Ray-Casting • Virtual Tripwires",
      description: "Evaluates tracked trajectories against sector boundaries, zero-tolerance borders, buffer zones, and directional crossing vectors."
    },
    {
      step: "06",
      layer: "BEHAVIOURAL REASONING",
      title: "Temporal & Behavioural",
      icon: Clock,
      tech: "Dwell Time Analysis • Speed Anomalies",
      description: "Quantifies dwell duration, abnormal loitering, speed shifts, and sudden direction changes indicative of deliberate breach attempts."
    },
    {
      step: "07",
      layer: "CORRELATION SYNTHESIS",
      title: "Evidence Fusion",
      icon: Combine,
      tech: "Multi-Signal Correlation • Noise Filter",
      description: "Fuses kinematic, spatial, temporal, and weather factors to eliminate false alarms (wildlife, foliage) and assign evidence confidence."
    },
    {
      step: "08",
      layer: "DISPATCH LOGIC",
      title: "Alert Generation",
      icon: BellRing,
      tech: "Severity Scoring • JSON Threat Payload",
      description: "Constructs prioritized, explainable alert bundles with cropped keyframes, timeline breadcrumbs, and exact trigger conditions."
    },
    {
      step: "09",
      layer: "COMMAND INTERACTION",
      title: "Operator Intelligence Interface",
      icon: Monitor,
      tech: "Web Tactical HUD • Audit Trail Export",
      description: "Zero-confusion control-room dashboard presenting verified incidents, interactive zone maps, and one-click dispatch verification."
    }
  ];

  return (
    <section id="architecture" className="section-spacing architecture-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Network size={13} />
            SYSTEM DESIGN
          </span>
          <h2 className="section-title">System Architecture</h2>
          <p className="section-subtitle">
            A modular, pipelined architecture engineered to transform surveillance video into 
            contextual, explainable intelligence with transparent audit trails.
          </p>
        </div>

        {/* Modular Node Flow Grid */}
        <div className="architecture-grid">
          {architectureNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.title} className="arch-node-card">
                <div className="node-top-bar">
                  <span className="node-seq">STEP {node.step}</span>
                  <span className="node-layer-tag">{node.layer}</span>
                </div>

                <div className="node-title-group">
                  <div className="node-icon-wrapper">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="node-main-title">{node.title}</h3>
                    <span className="node-tech-label">{node.tech}</span>
                  </div>
                </div>

                <p className="node-description">{node.description}</p>

                {index < architectureNodes.length - 1 && (
                  <div className="node-connector-arrow">↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Documentation Callout Bar */}
        <div className="tech-docs-callout">
          <div className="docs-callout-text">
            <div className="docs-badge">
              <FileText size={15} />
              <span>DETAILED SPECIFICATION</span>
            </div>
            <h4 className="docs-callout-title">Full Technical Architecture & System Specifications</h4>
            <p className="docs-callout-sub">
              Access the complete Google Docs technical blueprint containing system parameters, 
              mathematical formulations, interface APIs, and failure mode mitigation protocols.
            </p>
          </div>

          <div className="docs-callout-cta">
            <a
              href={PROJECT_LINKS.techDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <span>Open Full Technical Documentation</span>
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .architecture-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .architecture-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }

        .arch-node-card {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px;
          position: relative;
          box-shadow: var(--shadow-xs);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .arch-node-card:hover {
          border-color: var(--violet-royal);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .node-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .node-seq {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .node-layer-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .node-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .node-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          flex-shrink: 0;
        }

        .node-main-title {
          font-size: 1.05rem;
          color: var(--violet-deep);
          line-height: 1.25;
        }

        .node-tech-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--violet-royal);
          display: block;
        }

        .node-description {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .node-connector-arrow {
          display: none;
        }

        /* Documentation callout */
        .tech-docs-callout {
          background: #ffffff;
          border: 1px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: var(--shadow-lg);
        }

        .docs-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .docs-callout-title {
          font-size: 1.35rem;
          color: var(--violet-deep);
          margin-bottom: 8px;
        }

        .docs-callout-sub {
          font-size: 0.90625rem;
          color: var(--text-secondary);
          max-width: 680px;
          line-height: 1.55;
        }

        .docs-callout-cta {
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .architecture-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tech-docs-callout {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .architecture-grid {
            grid-template-columns: 1fr;
          }
          .tech-docs-callout {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
