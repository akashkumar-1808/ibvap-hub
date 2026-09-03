import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Landmark, 
  Cpu, 
  Compass, 
  Shield, 
  CheckCircle2,
  Building2,
  Scale
} from 'lucide-react';
import { PROJECT_LINKS } from '../config/links';

export default function ResearchSection() {
  const [activeTab, setActiveTab] = useState('all');

  const researchItems = [
    // PROBLEM RESEARCH (Government & Policy)
    {
      category: "problem",
      tag: "GOVERNMENT REPORT",
      title: "MHA Annual Reports — Border Management",
      organization: "Ministry of Home Affairs (MHA), Govt of India",
      description: "Annual Reports from 2016–17, 2023, and 2024–25 were systematically reviewed to understand central government budgetary allocations, border fencing infrastructure, floodlighting, and evolving asymmetric security challenges across border sectors.",
      links: [
        { label: "2016–17 Report", url: PROJECT_LINKS.research.mha2016_17 },
        { label: "2023 Report", url: PROJECT_LINKS.research.mha2023 },
        { label: "2024–25 Report", url: PROJECT_LINKS.research.mha2024_25 }
      ],
      impact: "Informed our architectural priority on multi-terrain resilience and low-cost sensor integration."
    },
    {
      category: "problem",
      tag: "POLICY WHITEPAPER",
      title: "Integrated Border Management & National Security",
      organization: "Bureau of Police Research and Development (BPRD)",
      description: "Reviewed to analyze structural disconnects between fragmented agencies, disjointed camera networks, and the imperative for interoperable border command architectures.",
      links: [
        { label: "View BPRD Document", url: PROJECT_LINKS.research.bprd }
      ],
      impact: "Guided IBVAP's software-layer integration philosophy over proprietary vendor lock-in."
    },
    {
      category: "problem",
      tag: "INSTITUTIONAL OVERVIEW",
      title: "Border Management-I Division Reference",
      organization: "Ministry of Home Affairs (MHA)",
      description: "Baseline reference detailing operational requirements for physical and technological fencing, floodlighting, high-mast towers, Border Out Posts (BOPs), and riverine surveillance.",
      links: [
        { label: "MHA Division-I Portal", url: PROJECT_LINKS.research.mhaDivision1 }
      ],
      impact: "Defined our zone polygon schemas and sensor placement assumptions."
    },
    {
      category: "problem",
      tag: "PARLIAMENTARY RECORD",
      title: "Infiltration Along International Borders",
      organization: "Lok Sabha Parliamentary Q&A (MHA)",
      description: "Official parliamentary proceedings establishing persistent infiltration, terrain vulnerabilities, and night-time clandestine crossing attempts as continuous national priorities.",
      links: [
        { label: "Lok Sabha Official Record", url: PROJECT_LINKS.research.lokSabha }
      ],
      impact: "Reinforced requirements for continuous temporal dwell detection and tracking."
    },
    {
      category: "problem",
      tag: "STRATEGIC ANALYSIS",
      title: "CIBMS: Issues and Challenges",
      organization: "Manohar Parrikar Institute for Defence Studies and Analyses (MP-IDSA)",
      description: "Critical analysis of shortcomings in initial Comprehensive Integrated Border Management System (CIBMS) pilots, specifically highlighting false alarms and sensor fatigue.",
      links: [
        { label: "MP-IDSA Research Brief", url: PROJECT_LINKS.research.idsaCibms }
      ],
      impact: "Directly motivated IBVAP's Evidence Fusion layer to filter false alarms before dispatch."
    },
    {
      category: "problem",
      tag: "DEFENCE JOURNAL",
      title: "Challenges to India's Land Border Management",
      organization: "Centre for Joint Warfare Studies (CENJOWS)",
      description: "Operational analysis by Maj. Gen. Alok Deb (Retd.) examining the necessity of an all-of-government approach and real-time situational awareness across complex frontiers.",
      links: [
        { label: "CENJOWS Publication", url: PROJECT_LINKS.research.cenjows }
      ],
      impact: "Emphasized explainable alerts for inter-agency coordination and auditability."
    },
    {
      category: "problem",
      tag: "OPERATIONAL DEPLOYMENT",
      title: "BOLD–QIT Inauguration on Indo-Bangladesh Border",
      organization: "Press Information Bureau (PIB), Govt of India",
      description: "Study of the BOLD-QIT (Border Electronically Dominated QRT Interception Technique) deployed along riverine frontiers in Dhubri, Assam, proving the viability of electronic barriers.",
      links: [
        { label: "PIB Press Release", url: PROJECT_LINKS.research.boldQit }
      ],
      impact: "Validated software intelligence augmentation on physical border barriers."
    },

    // TECHNICAL FOUNDATIONS (Section 7)
    {
      category: "technical",
      tag: "COMPUTER VISION BASELINE",
      title: "Digital Border Surveillance System (YOLOv7)",
      organization: "ResearchGate Academic Publication",
      description: "Research baseline demonstrating high-accuracy real-time object detection and classification on border perimeters, which directly informed our detection backbone choices.",
      links: [
        { label: "View Research Paper", url: PROJECT_LINKS.technical.yolov7Paper }
      ],
      impact: "Informed our inference latency targets and entity categorization matrices."
    },
    {
      category: "technical",
      tag: "HUMAN FACTORS & SOC",
      title: "False Alarm Fatigue in Security Operations",
      organization: "Rad Security Technical Operations Analysis",
      description: "In-depth study on how excessive unverified security alerts induce operator cognitive fatigue, highlighting the urgent requirement for automated context verification and evidence scoring.",
      links: [
        { label: "Read Analysis Article", url: PROJECT_LINKS.technical.falseAlarmPaper }
      ],
      impact: "Provided quantitative justification for why single-frame detection is insufficient."
    },

    // IDEATION SUPPORT (Section 8)
    {
      category: "ideation",
      tag: "CONCEPT GENESIS",
      title: "Smart Fence / CIBMS Overview",
      organization: "Model Diplomat Security Infrastructure Analysis",
      description: "Comprehensive assessment of radar, infrared, vibration sensors, and CCTV on border fences. Guided our architectural decision to build an intelligent software layer over existing cameras rather than demanding costly hardware overhauls.",
      links: [
        { label: "Explore Overview", url: PROJECT_LINKS.ideation.smartFence }
      ],
      impact: "Established the core premise: intelligent software fusion over legacy hardware."
    },
    {
      category: "ideation",
      tag: "TERRAIN STUDY",
      title: "Smart Fencing Along the India–Myanmar Border",
      organization: "International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS)",
      description: "Field analysis examining dense jungle foliage, undulating topography, community cross-border patterns, and the critical need for terrain-aware spatial analytics.",
      links: [
        { label: "Read Journal Paper", url: PROJECT_LINKS.ideation.myanmarBorder }
      ],
      impact: "Drove the inclusion of configurable polygonal zones and trajectory filters."
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? researchItems 
    : researchItems.filter(item => item.category === activeTab);

  return (
    <section id="research" className="section-spacing research-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={13} />
            EVALUATOR EVIDENCE
          </span>
          <h2 className="section-title">Research-Backed. Government-Informed.</h2>
          <p className="section-subtitle">
            Our approach was shaped by official government reports, parliamentary records, 
            defence think-tank studies, and peer-reviewed technical publications addressing India's border security challenges.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="research-filter-tabs">
          <button
            type="button"
            className={`filter-tab ${activeTab === 'all' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Evidence Sources ({researchItems.length})
          </button>
          <button
            type="button"
            className={`filter-tab ${activeTab === 'problem' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('problem')}
          >
            <Landmark size={15} />
            Problem Research (MHA / BPRD / PIB)
          </button>
          <button
            type="button"
            className={`filter-tab ${activeTab === 'technical' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <Cpu size={15} />
            Technical Foundations
          </button>
          <button
            type="button"
            className={`filter-tab ${activeTab === 'ideation' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('ideation')}
          >
            <Compass size={15} />
            Where the Idea Came From
          </button>
        </div>

        {/* Research Cards Grid */}
        <div className="research-cards-grid">
          {filteredItems.map((item, index) => (
            <div key={item.title + index} className="premium-card research-card">
              <div className="research-card-header">
                <span className="research-tag">{item.tag}</span>
                <span className="research-org">{item.organization}</span>
              </div>

              <h3 className="research-title">{item.title}</h3>
              <p className="research-description">{item.description}</p>

              <div className="research-impact-box">
                <span className="impact-tag">HOW IT SHAPED IBVAP:</span>
                <p className="impact-notes">{item.impact}</p>
              </div>

              <div className="research-links-group">
                {item.links.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-link-btn"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .research-section {
          background-color: #ffffff;
        }

        .research-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84375rem;
          font-weight: 600;
          font-family: var(--font-sans);
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab:hover {
          background: var(--violet-whisper);
          border-color: var(--border-violet-strong);
          color: var(--violet-primary);
        }

        .filter-tab.tab-active {
          background: var(--violet-royal);
          border-color: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .research-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .research-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
        }

        .research-card-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .research-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--violet-royal);
          letter-spacing: 0.05em;
        }

        .research-org {
          font-size: 0.78125rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .research-title {
          font-size: 1.125rem;
          color: var(--violet-deep);
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .research-description {
          font-size: 0.84375rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .research-impact-box {
          background: var(--bg-surface-subtle);
          border-left: 2px solid var(--violet-royal);
          padding: 8px 12px;
          border-radius: 0 6px 6px 0;
          margin-bottom: 18px;
        }

        .impact-tag {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.59375rem;
          font-weight: 700;
          color: var(--violet-dark);
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .impact-notes {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        .research-links-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 14px;
        }

        .research-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .research-link-btn:hover {
          background: var(--violet-royal);
          color: #ffffff;
          border-color: var(--violet-royal);
        }

        @media (max-width: 1080px) {
          .research-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .research-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
