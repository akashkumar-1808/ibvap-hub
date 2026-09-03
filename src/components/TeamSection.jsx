import React from 'react';
import { Users, Shield, Award, Cpu, UserCheck } from 'lucide-react';

export default function TeamSection() {
  // Editable placeholders as requested: do not invent fake names or credentials
  const teamMembers = [
    {
      name: "Team Lead & System Architect",
      role: "Lead Architecture & Integration",
      responsibility: "Overall pipeline design, state estimation logic, and evaluation coordination",
      slotId: "MEMBER 01"
    },
    {
      name: "Computer Vision Engineer",
      role: "AI Detection & Multi-Object Tracking",
      responsibility: "Neural detection model optimization, Kalman tracking, and occlusion handling",
      slotId: "MEMBER 02"
    },
    {
      name: "Spatial Analytics Specialist",
      role: "Spatial Reasoning & Geofencing",
      responsibility: "Polygonal zone math, directional tripwire triggers, and GIS coordination",
      slotId: "MEMBER 03"
    },
    {
      name: "Evidence Fusion Engineer",
      role: "Evidence Synthesis & Filter Stack",
      responsibility: "False alarm rejection heuristics, multi-frame context correlation, and confidence scoring",
      slotId: "MEMBER 04"
    },
    {
      name: "Frontend & Operator UX Designer",
      role: "Tactical Console & Hub Engineering",
      responsibility: "High-trust evaluator portal, responsive operator interface, and visualization HUD",
      slotId: "MEMBER 05"
    },
    {
      name: "Research & Domain Analyst",
      role: "Policy, Doctrine & Test Verification",
      responsibility: "MHA/BPRD/CENJOWS literature grounding, dataset benchmarking, and audit reporting",
      slotId: "MEMBER 06"
    }
  ];

  return (
    <section id="team" className="section-spacing team-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Users size={13} />
            SMART INDIA HACKATHON 2026
          </span>
          <h2 className="section-title">TEAM TATVA</h2>
          <p className="section-subtitle">
            Building practical AI for complex border environments.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.slotId} className="premium-card team-card">
              <div className="team-card-top">
                <div className="team-avatar-placeholder">
                  <UserCheck size={24} />
                </div>
                <span className="team-slot-pill">{member.slotId}</span>
              </div>

              <h3 className="team-member-name">{member.name}</h3>
              <span className="team-member-role">{member.role}</span>

              <div className="team-resp-box">
                <span className="resp-label">CORE RESPONSIBILITY:</span>
                <p className="resp-desc">{member.responsibility}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Identity Attribution Banner */}
        <div className="team-creds-banner">
          <div className="team-creds-content">
            <div className="creds-icon-box">
              <Shield size={28} />
            </div>
            <div>
              <h4 className="creds-title">Team TATVA – IBVAP</h4>
              <p className="creds-subtitle">
                Official Contestant Team • Smart India Hackathon 2026 • AI & Video Analytics Domain
              </p>
            </div>
          </div>
          <span className="creds-sih-tag">SIH 2026 PROJECT HUB</span>
        </div>
      </div>

      <style>{`
        .team-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .team-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .team-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .team-avatar-placeholder {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-royal);
        }

        .team-slot-pill {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--violet-primary);
          background: var(--violet-subtle);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .team-member-name {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .team-member-role {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-royal);
          margin-bottom: 16px;
          display: block;
        }

        .team-resp-box {
          background: var(--bg-surface-subtle);
          border-radius: var(--radius-sm);
          padding: 12px;
          border: 1px solid var(--border-light);
          flex-grow: 1;
        }

        .resp-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--violet-dark);
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }

        .resp-desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* Attribution banner */
        .team-creds-banner {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: var(--shadow-sm);
        }

        .team-creds-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .creds-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--violet-dark) 0%, var(--violet-royal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .creds-title {
          font-size: 1.15rem;
          color: var(--violet-deep);
          margin-bottom: 2px;
        }

        .creds-subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .creds-sih-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--violet-royal);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet-strong);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .team-creds-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
