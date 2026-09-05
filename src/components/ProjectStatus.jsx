import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Compass, 
  TrendingUp, 
  ShieldAlert, 
  Calendar,
  Layers
} from 'lucide-react';

export default function ProjectStatus() {
  const milestones = [
    {
      phase: "PHASE 01",
      title: "Research & Problem Scoping",
      status: "COMPLETED",
      statusType: "completed",
      date: "Q3–Q4 2025",
      summary: "In-depth review of MHA Annual Reports, BPRD whitepapers, Lok Sabha records, and MP-IDSA CIBMS operational challenges to isolate false alarm fatigue as the prime bottleneck."
    },
    {
      phase: "PHASE 02",
      title: "Architecture & Algorithmic Design",
      status: "DEFINED",
      statusType: "completed",
      date: "Q4 2025",
      summary: "Defined 6-stage modular intelligence pipeline, kinematic tracking protocols, spatial polygon ray-casting logic, and explainable operator alert schema."
    },
    {
      phase: "PHASE 03",
      title: "Functional Prototype",
      status: "DEPLOYED & LIVE ON RENDER",
      statusType: "completed",
      date: "Q1 2026 (Live)",
      summary: "Interactive demonstration console published and running live on Render cloud with simulated RTSP stream ingestion, dynamic bounding box tracking, zone intrusion trigger rules, and audit log generation."
    },
    {
      phase: "PHASE 04",
      title: "System Validation & Benchmarking",
      status: "ONGOING",
      statusType: "ongoing",
      date: "Active Hackathon Phase",
      summary: "Synthetic and recorded edge-case testing: multi-target occlusion, low-illumination degradation, fast crossing vectors, and foliage movement rejection."
    },
    {
      phase: "PHASE 05",
      title: "Operational Field Deployment",
      status: "FUTURE PHASE",
      statusType: "future",
      date: "Roadmap Milestone",
      summary: "Pilot hardware integration on physical BOP edge servers, multi-camera handoff orchestration, and authorized institutional validation trials."
    }
  ];

  return (
    <section id="status" className="section-spacing status-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Calendar size={13} />
            HONEST DEVELOPMENT TIMELINE
          </span>
          <h2 className="section-title">Project Status</h2>
          <p className="section-subtitle">
            Transparent milestones reflecting our authentic progress for Smart India Hackathon 2026 — 
            from foundational policy research to functional prototype demonstration.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="timeline-wrapper">
          <div className="timeline-connector-bar"></div>

          <div className="timeline-items-list">
            {milestones.map((item, idx) => {
              const isCompleted = item.statusType === 'completed';
              const isActive = item.statusType === 'active';
              const isOngoing = item.statusType === 'ongoing';
              const isFuture = item.statusType === 'future';

              return (
                <div key={item.phase} className={`timeline-card ${isActive ? 'card-current-phase' : ''}`}>
                  <div className="timeline-node-marker">
                    {isCompleted && <CheckCircle2 size={18} className="marker-icon completed" />}
                    {isActive && <div className="marker-active-pulse"></div>}
                    {isOngoing && <Clock size={16} className="marker-icon ongoing" />}
                    {isFuture && <div className="marker-future-dot"></div>}
                  </div>

                  <div className="timeline-card-inner">
                    <div className="timeline-header-row">
                      <div className="timeline-phase-group">
                        <span className="phase-id">{item.phase}</span>
                        <h3 className="phase-title">{item.title}</h3>
                      </div>

                      <div className="timeline-badges">
                        <span className={`status-pill pill-${item.statusType}`}>
                          {item.status}
                        </span>
                        <span className="timeline-date">{item.date}</span>
                      </div>
                    </div>

                    <p className="timeline-summary">{item.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Evaluation Disclaimer Note */}
        <div className="status-disclaimer-box">
          <ShieldAlert size={18} className="disclaimer-icon" />
          <p className="disclaimer-text">
            <strong>Institutional Integrity Note:</strong> TEAM TATVA does not falsely claim production border deployment. 
            IBVAP is an actively developed hackathon project and research-backed technical prototype designed to validate software-layer fusion over surveillance video feeds.
          </p>
        </div>
      </div>

      <style>{`
        .status-section {
          background-color: #ffffff;
        }

        .timeline-wrapper {
          position: relative;
          max-width: 920px;
          margin: 0 auto 40px;
        }

        .timeline-connector-bar {
          position: absolute;
          top: 24px;
          bottom: 24px;
          left: 20px;
          width: 2px;
          background: linear-gradient(180deg, var(--violet-royal) 0%, var(--violet-lavender) 60%, var(--border-light) 100%);
          z-index: 0;
        }

        .timeline-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .timeline-card {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          position: relative;
        }

        .timeline-node-marker {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .marker-icon.completed {
          color: #059669;
        }

        .marker-icon.ongoing {
          color: #2563eb;
        }

        .marker-future-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-whisper);
        }

        .marker-active-pulse {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--violet-royal);
          box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
          animation: pulse 2s infinite;
        }

        .timeline-card-inner {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 22px 28px;
          flex-grow: 1;
          box-shadow: var(--shadow-xs);
          transition: all 0.2s ease;
        }

        .timeline-card:hover .timeline-card-inner {
          border-color: var(--border-violet-strong);
          box-shadow: var(--shadow-md);
        }

        .card-current-phase .timeline-card-inner {
          border-color: var(--violet-royal);
          background: linear-gradient(180deg, var(--violet-whisper) 0%, #ffffff 100%);
          box-shadow: var(--shadow-md), 0 0 20px rgba(124, 58, 237, 0.08);
        }

        .timeline-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .timeline-phase-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .phase-id {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .phase-title {
          font-size: 1.125rem;
          color: var(--violet-deep);
        }

        .timeline-badges {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .status-pill {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .pill-completed {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .pill-active {
          background: var(--violet-whisper);
          color: var(--violet-dark);
          border: 1px solid var(--border-violet-strong);
        }

        .pill-ongoing {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }

        .pill-future {
          background: var(--bg-surface-subtle);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
        }

        .timeline-date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .timeline-summary {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .status-disclaimer-box {
          max-width: 920px;
          margin: 0 auto;
          background: var(--bg-surface);
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .disclaimer-icon {
          color: var(--violet-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .disclaimer-text {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .disclaimer-text strong {
          color: var(--violet-deep);
        }

        @media (max-width: 640px) {
          .timeline-connector-bar {
            left: 16px;
          }
          .timeline-node-marker {
            width: 34px;
            height: 34px;
          }
          .timeline-card {
            gap: 14px;
          }
          .timeline-card-inner {
            padding: 16px;
          }
          .timeline-header-row {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}
