import React from 'react';
import {
  ShieldCheck,
  FileCode,
  ExternalLink,
  Cpu,
  Eye,
  MapPin,
  CheckCircle2,
  Sparkles,
  Building2,
  Tag,
  Layers,
  ArrowRight
} from 'lucide-react';
import SihLogo from './logos/SihLogo';
import MhaLogo from './logos/MhaLogo';
import SupportingOrganizersLogo from './logos/SupportingOrganizersLogo';
import { PROJECT_LINKS } from '../config/links';

export default function ProblemStatementDetails() {
  const psKeyDeliverables = [
    {
      title: "Retrofit Over Existing CCTV Infrastructure",
      desc: "Zero-cost hardware requirement. Ingests existing RTSP/ONVIF feeds directly from Border Out Posts (BOPs), fence cameras, and riverine thermal sensors.",
      status: "Directly Solved"
    },
    {
      title: "AI Detection Across Adverse Conditions",
      desc: "Robust deep vision backbone trained for low-light, fog, foliage occlusion, and long-range border boundary conditions.",
      status: "Directly Solved"
    },
    {
      title: "Persistent Tracking & Loitering Analysis",
      desc: "Continuous Kalman trajectory estimation with velocity vector modeling and loitering dwell time trigger rules.",
      status: "Directly Solved"
    },
    {
      title: "Configurable Virtual Zones & Crossing Tripwires",
      desc: "Interactive polygonal spatial reasoning engine mapping real-world exclusion sectors, buffer corridors, and directional thresholds.",
      status: "Directly Solved"
    },
    {
      title: "False Alarm Fatigue Mitigation & Evidence Fusion",
      desc: "Multi-signal correlation rejecting foliage movement and animal crossing, producing explainable, high-trust alerts with audit trails.",
      status: "Directly Solved"
    }
  ];

  return (
    <section id="problem-statement" className="section-spacing ps-section">
      <div className="container">
        {/* Official Organizing Bodies Header Bar */}
        <div className="ps-authorities-banner">
          <div className="ps-authority-item" title="Smart India Hackathon 2026">
            <SihLogo size={42} showYear={true} />
          </div>
          <div className="ps-divider-pipe"></div>
          <div className="ps-authority-item" title="Ministry of Education, AICTE & MoE's Innovation Cell (MIC)">
            <SupportingOrganizersLogo size={34} />
          </div>
          <div className="ps-divider-pipe"></div>
          <div className="ps-authority-item" title="Ministry of Home Affairs (Sponsoring Ministry)">
            <MhaLogo size={44} showText={true} />
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header ps-section-header">
          <span className="section-tag">
            <ShieldCheck size={13} />
            OFFICIAL SIH 2026 PROBLEM STATEMENT
          </span>
          <h2 className="section-title">Problem Statement: SIH26187</h2>
          <p className="section-subtitle">
            Official challenge details, ministry requirements, and operational scope from the Smart India Hackathon 2026 portal.
          </p>
        </div>

        {/* Core PS Details Card */}
        <div className="premium-card ps-detail-card">
          {/* Top Metadata Strip */}
          <div className="ps-meta-strip">
            <div className="meta-badge-group">
              <span className="ps-id-badge">
                <Tag size={13} />
                PS ID: SIH26187
              </span>
              <span className="ps-theme-badge">
                <Cpu size={13} />
                THEME: BLOCKCHAIN AND CYBERSECURITY
              </span>
              <span className="ps-category-badge">
                CATEGORY: SOFTWARE
              </span>
            </div>

            <div className="ps-ministry-label">
              <Building2 size={15} />
              <span>MINISTRY OF HOME AFFAIRS (MHA)</span>
            </div>
          </div>

          {/* Problem Statement Title */}
          <h3 className="ps-main-title">
            AI-Based Intelligent Video Analytics Platform for Border Surveillance using existing CCTV Infrastructure
          </h3>

          {/* Description Block */}
          <div className="ps-description-block">
            <h4 className="block-label">OFFICIAL PROBLEM DESCRIPTION & BACKGROUND:</h4>
            <p className="block-text">
              Border surveillance operations across India rely on extensive camera networks deployed at Border Out Posts (BOPs),
              fences, and remote frontier terrain. Continuous manual monitoring of these video feeds induces severe cognitive fatigue,
              leading to missed anomalous movements and a high volume of false alarms caused by environmental clutter (foliage, shadows, weather, animals).
            </p>
            <p className="block-text">
              <strong>Problem Statement SIH26187</strong> challenges innovators to develop an AI-powered, edge-capable software platform
              that seamlessly leverages <strong>existing CCTV infrastructure</strong> without demanding expensive hardware overhauls.
              The platform must provide real-time multi-class detection, persistent object tracking, configurable spatial zone reasoning,
              and evidence-backed explainable alerts to empower control-room operators with actionable situational awareness.
            </p>
          </div>

          {/* Key Deliverables Alignment Grid */}
          <div className="ps-deliverables-wrapper">
            <h4 className="deliverables-heading">
              How TEAM TATVA (IBVAP) Directly Fulfills SIH26187 Mandates:
            </h4>

            <div className="deliverables-grid">
              {psKeyDeliverables.map((item, index) => (
                <div key={item.title} className="deliverable-item-card">
                  <div className="deliverable-top">
                    <span className="deliverable-idx">0{index + 1}</span>
                    <span className="deliverable-solved-tag">
                      <CheckCircle2 size={12} />
                      {item.status}
                    </span>
                  </div>
                  <h5 className="deliverable-title">{item.title}</h5>
                  <p className="deliverable-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="ps-action-footer">
            <div className="ps-footer-info">
              <span>Solution Designed by: <strong>TEAM TATVA – IBVAP</strong></span>
              <span className="sub-info">Smart India Hackathon 2026 Official Submission</span>
            </div>

            <div className="ps-footer-ctas">
              <a href="#prototype" className="btn btn-primary btn-sm">
                <span>View Prototype Response</span>
                <ArrowRight size={14} />
              </a>
              <a href="#architecture" className="btn btn-secondary btn-sm">
                <Layers size={14} />
                <span>Explore Architecture Flow</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ps-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Authorities Banner */
        .ps-authorities-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-xl);
          padding: 20px 36px;
          margin-bottom: 48px;
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }

        .ps-authority-item {
          display: flex;
          align-items: center;
        }

        .ps-divider-pipe {
          width: 1px;
          height: 48px;
          background: var(--border-light);
        }

        .ps-section-header {
          margin-bottom: 36px;
        }

        /* Main PS Detail Card */
        .ps-detail-card {
          background: #ffffff;
          border: 2px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 40px 48px;
          box-shadow: var(--shadow-lg);
        }

        .ps-meta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 16px;
        }

        .meta-badge-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ps-id-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.05em;
        }

        .ps-theme-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .ps-category-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .ps-ministry-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #1e1b4b;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
        }

        .ps-main-title {
          font-size: clamp(1.4rem, 2.6vw, 1.85rem);
          color: var(--violet-deep);
          line-height: 1.3;
          margin-bottom: 24px;
        }

        .ps-description-block {
          background: var(--bg-surface);
          border-left: 4px solid var(--violet-royal);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 20px 24px;
          margin-bottom: 36px;
        }

        .block-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-dark);
          margin-bottom: 10px;
        }

        .block-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 10px;
        }

        .block-text:last-child {
          margin-bottom: 0;
        }

        .deliverables-heading {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 18px;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .deliverable-item-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
        }

        .deliverable-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .deliverable-idx {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
        }

        .deliverable-solved-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .deliverable-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--violet-deep);
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .deliverable-desc {
          font-size: 0.78125rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Action footer */
        .ps-action-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ps-footer-info {
          display: flex;
          flex-direction: column;
          font-size: 0.84375rem;
          color: var(--text-secondary);
        }

        .sub-info {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .ps-footer-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .ps-detail-card {
            padding: 24px 20px;
          }
          .ps-authorities-banner {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
          }
          .ps-divider-pipe {
            display: none;
          }
          .ps-action-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
