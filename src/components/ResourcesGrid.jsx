import React, { useState } from 'react';
import { 
  Rocket, 
  Video, 
  Layers, 
  Presentation, 
  Code2, 
  BookMarked, 
  ExternalLink, 
  FolderGit2,
  Check,
  AlertCircle
} from 'lucide-react';
import { PROJECT_LINKS, isPlaceholderUrl } from '../config/links';

export default function ResourcesGrid() {
  const [toastMessage, setToastMessage] = useState('');

  const resources = [
    {
      title: "Interactive Prototype",
      icon: Rocket,
      badge: "LIVE CONSOLE",
      desc: "Interactive system demonstration showcasing zone definitions, real-time alert triage, and kinematic tracking.",
      urlKey: "prototype",
      url: PROJECT_LINKS.prototype,
      actionLabel: "Launch Prototype"
    },
    {
      title: "Demo Video",
      icon: Video,
      badge: "RECORDED WALKTHROUGH",
      desc: "High-resolution recorded system walkthrough explaining operational edge scenarios and operator alert workflows.",
      urlKey: "demo",
      url: PROJECT_LINKS.demo,
      actionLabel: "Watch Demo Video"
    },
    {
      title: "Technical Architecture",
      icon: Layers,
      badge: "SYSTEM DESIGN",
      desc: "Complete technical architecture, mathematical models, pipeline latency benchmarks, and integration APIs.",
      urlKey: "techDocs",
      url: PROJECT_LINKS.techDocs,
      actionLabel: "Open Documentation"
    },
    {
      title: "SIH 2026 Presentation",
      icon: Presentation,
      badge: "PITCH & EVALUATION DECK",
      desc: "Official Smart India Hackathon presentation deck summarizing problem statement, technology stack, and feasibility.",
      urlKey: "ppt",
      url: PROJECT_LINKS.ppt,
      actionLabel: "View Presentation PPT"
    },
    {
      title: "Source Code Repository",
      icon: Code2,
      badge: "OPEN SOURCE",
      desc: "Public GitHub repository with development history, installation instructions, license, and issue trackers.",
      urlKey: "github",
      url: PROJECT_LINKS.github,
      actionLabel: "Explore GitHub Repo"
    },
    {
      title: "Research & Citations",
      icon: BookMarked,
      badge: "GOVERNMENT SOURCES",
      desc: "Direct references to Ministry of Home Affairs reports, BPRD research, IDSA analyses, and technical vision baselines.",
      urlKey: "research",
      url: "#research",
      actionLabel: "Browse Research Library"
    }
  ];

  const handleCardClick = (e, res) => {
    if (res.url.startsWith('#')) return; // smooth anchor link
    if (isPlaceholderUrl(res.url)) {
      e.preventDefault();
      setToastMessage(`The "${res.title}" URL is currently configured as a placeholder constant in links.js.`);
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  return (
    <section id="resources" className="section-spacing resources-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={13} />
            CENTRAL REPOSITORY
          </span>
          <h2 className="section-title">Project Resources</h2>
          <p className="section-subtitle">
            All key evaluation assets, documentation, presentation slides, and code repositories 
            accessible from a single permanent hub.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="resources-grid">
          {resources.map((item) => {
            const Icon = item.icon;
            const isPlaceholder = !item.url.startsWith('#') && isPlaceholderUrl(item.url);

            return (
              <a
                key={item.title}
                href={item.url}
                target={item.url.startsWith('#') ? '_self' : '_blank'}
                rel={item.url.startsWith('#') ? '' : 'noopener noreferrer'}
                onClick={(e) => handleCardClick(e, item)}
                className="premium-card resource-card"
              >
                <div className="resource-header">
                  <div className="resource-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="resource-badge">{item.badge}</span>
                </div>

                <h3 className="resource-card-title">{item.title}</h3>
                <p className="resource-card-desc">{item.desc}</p>

                <div className="resource-footer">
                  <span className="resource-action-link">
                    <span>{item.actionLabel}</span>
                    <ExternalLink size={14} />
                  </span>

                  {isPlaceholder ? (
                    <span className="placeholder-tag">Placeholder URL</span>
                  ) : (
                    <span className="active-link-tag">Ready</span>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Informative notification toast if user clicks a placeholder */}
        {toastMessage && (
          <div className="toast-notification">
            <AlertCircle size={18} className="toast-icon" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>

      <style>{`
        .resources-section {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .resource-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
        }

        .resource-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .resource-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-primary);
          transition: all 0.2s ease;
        }

        .resource-card:hover .resource-icon-box {
          background: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .resource-badge {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .resource-card-title {
          font-size: 1.1875rem;
          color: var(--violet-deep);
          margin-bottom: 10px;
        }

        .resource-card-desc {
          font-size: 0.84375rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .resource-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
        }

        .resource-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-primary);
          transition: color 0.2s ease;
        }

        .resource-card:hover .resource-action-link {
          color: var(--violet-dark);
        }

        .placeholder-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #d97706;
          background: #fffbeb;
          border: 1px solid #fde68a;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .active-link-tag {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .toast-notification {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1035;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-violet-strong);
          box-shadow: var(--shadow-xl);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          z-index: 3000;
          animation: floatSlow 0.3s ease-out;
        }

        .toast-icon {
          color: #facc15;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
          .resource-card {
            padding: 20px 16px;
          }
          .toast-notification {
            width: calc(100% - 32px);
            max-width: 380px;
            justify-content: center;
            padding: 10px 16px;
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </section>
  );
}
