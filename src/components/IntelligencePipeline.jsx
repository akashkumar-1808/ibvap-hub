import React, { useState } from 'react';
import { 
  Video, 
  Scan, 
  GitCommit, 
  MapPin, 
  GitMerge, 
  ShieldAlert, 
  ArrowRight, 
  Check, 
  Layers,
  Activity,
  Cpu,
  CornerDownRight
} from 'lucide-react';

export default function IntelligencePipeline() {
  const [activeStep, setActiveStep] = useState(4); // Default to Evidence Fusion

  const pipelineSteps = [
    {
      stepNum: "01",
      title: "VIDEO INPUT",
      subtitle: "Existing CCTV / Surveillance Feeds",
      icon: Video,
      description: "Ingests raw RTSP, ONVIF, and recorded IP camera streams directly from existing fixed, PTZ, or border outpost sensors without requiring hardware replacement.",
      inputs: "RTSP/H.264/H.265 video streams (1080p/4K @ 15-30fps)",
      outputs: "Standardized frame buffer & timestamped video packet queue",
      telemetry: "Zero hardware retrofit • Protocol-agnostic stream decoding"
    },
    {
      stepNum: "02",
      title: "OBJECT DETECTION",
      subtitle: "Identify Relevant Entities & Events",
      icon: Scan,
      description: "Optimized neural vision backbone identifies potential entities of interest (humans, vehicles, crossing assets) across challenging illumination and weather conditions.",
      inputs: "Normalized RGB frame buffers from video ingest",
      outputs: "Bounding boxes, class labels, and confidence probability tensors",
      telemetry: "Edge-accelerated inferencing • Low-light resilience"
    },
    {
      stepNum: "03",
      title: "MULTI-OBJECT TRACKING",
      subtitle: "Maintain Identity Across Frames",
      icon: GitCommit,
      description: "Binds sequential detections into persistent temporal trajectories with unique track IDs, mitigating occlusion, temporary camera blind spots, and re-entry confusion.",
      inputs: "Per-frame detections and bounding coordinates",
      outputs: "Persistent Track ID, velocity vectors, and historical coordinate paths",
      telemetry: "Occlusion-resistant Kalman state estimation & visual embedding"
    },
    {
      stepNum: "04",
      title: "SPATIAL REASONING",
      subtitle: "Configurable Zones & Movement Patterns",
      icon: MapPin,
      description: "Projects pixel coordinate tracks against calibrated real-world zones: zero-tolerance fences, buffer corridors, crossing vectors, and forbidden direction corridors.",
      inputs: "Track trajectories + polygon geofence definitions",
      outputs: "Zone entry/dwell/exit events, vector heading, and distance-to-boundary",
      telemetry: "Polygonal ray-casting • Directional vector thresholding"
    },
    {
      stepNum: "05",
      title: "EVIDENCE FUSION",
      subtitle: "Combine Multimodal Spatiotemporal Context",
      icon: GitMerge,
      description: "Synthesizes raw detections, multi-frame kinematics, dwell duration, and false-alarm filters (environmental foliage, animal motion) into a correlated event manifest.",
      inputs: "Spatial events, track history, temporal duration, environmental filters",
      outputs: "Correlated threat hypothesis with confidence weight & filter verification",
      telemetry: "Spatiotemporal graph reasoning • False-alarm rejection matrix"
    },
    {
      stepNum: "06",
      title: "EXPLAINABLE ALERT",
      subtitle: "Actionable Alert With Supporting Evidence",
      icon: ShieldAlert,
      description: "Generates an auditable, high-confidence alert card for the operator, displaying visual track history, spatial timeline, and exact algorithmic rationale.",
      inputs: "Correlated threat manifest & keyframe evidence crop",
      outputs: "Explainable operator dispatch package, audit log, visual trajectory overlay",
      telemetry: "Zero black-box ambiguity • Operator-centric prioritization"
    }
  ];

  return (
    <section id="intelligence-layer" className="section-spacing intelligence-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Activity size={13} />
            CORE TECHNOLOGY
          </span>
          <h2 className="section-title">The Intelligence Layer</h2>
          <p className="section-subtitle">
            How raw pixels become tactical clarity. A six-stage reasoning pipeline engineered 
            specifically to filter out noise, preserve spatiotemporal context, and deliver explainable evidence.
          </p>
        </div>

        {/* Pipeline Horizontal Flow Navigation */}
        <div className="pipeline-flow-container">
          <div className="flow-track-line"></div>
          
          <div className="flow-steps-grid">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.stepNum}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`pipeline-step-node ${isSelected ? 'node-selected' : ''}`}
                >
                  <div className="node-badge-num">
                    <span>{step.stepNum}</span>
                  </div>
                  
                  <div className="node-icon-circle">
                    <Icon size={20} />
                  </div>

                  <div className="node-text">
                    <span className="node-title">{step.title}</span>
                    <span className="node-sub">{step.subtitle}</span>
                  </div>

                  {isSelected && <div className="node-active-caret"></div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="pipeline-deepdive-card">
          <div className="deepdive-header">
            <div className="deepdive-left">
              <span className="deepdive-number">STAGE {pipelineSteps[activeStep].stepNum} OF 06</span>
              <h3 className="deepdive-title">{pipelineSteps[activeStep].title}</h3>
              <p className="deepdive-sub">{pipelineSteps[activeStep].subtitle}</p>
            </div>
            <div className="deepdive-status-pill">
              <span className="pulse-dot"></span>
              <span>LIVE REASONING STAGE</span>
            </div>
          </div>

          <p className="deepdive-description">
            {pipelineSteps[activeStep].description}
          </p>

          <div className="deepdive-specs-grid">
            <div className="spec-card">
              <span className="spec-label">STAGE INPUT</span>
              <p className="spec-val">{pipelineSteps[activeStep].inputs}</p>
            </div>

            <div className="spec-card">
              <span className="spec-label">STAGE OUTPUT</span>
              <p className="spec-val output-val">{pipelineSteps[activeStep].outputs}</p>
            </div>

            <div className="spec-card spec-highlight">
              <span className="spec-label">SYSTEM ADVANTAGE</span>
              <p className="spec-val">{pipelineSteps[activeStep].telemetry}</p>
            </div>
          </div>

          {/* Flow Stepper Buttons */}
          <div className="stepper-controls">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="btn btn-secondary btn-sm"
            >
              ← Previous Stage
            </button>
            <span className="step-counter-text">
              Stage <strong>{pipelineSteps[activeStep].stepNum}</strong> of <strong>06</strong>
            </span>
            <button
              type="button"
              disabled={activeStep === pipelineSteps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(pipelineSteps.length - 1, prev + 1))}
              className="btn btn-primary btn-sm"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .intelligence-section {
          background: linear-gradient(180deg, #ffffff 0%, var(--bg-surface) 100%);
          position: relative;
        }

        .pipeline-flow-container {
          position: relative;
          margin-bottom: 40px;
        }

        .flow-track-line {
          position: absolute;
          top: 36px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg, var(--violet-lavender) 0%, var(--violet-royal) 50%, var(--violet-lavender) 100%);
          z-index: 0;
          opacity: 0.6;
        }

        .flow-steps-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .pipeline-step-node {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          box-shadow: var(--shadow-xs);
          min-height: 145px;
        }

        .pipeline-step-node:hover {
          transform: translateY(-3px);
          border-color: var(--violet-royal);
          box-shadow: var(--shadow-md);
        }

        .pipeline-step-node.node-selected {
          background: linear-gradient(180deg, var(--violet-whisper) 0%, #ffffff 100%);
          border-color: var(--violet-royal);
          box-shadow: 0 8px 24px -4px rgba(124, 58, 237, 0.25);
          transform: translateY(-4px);
        }

        .node-badge-num {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-primary);
          background: var(--violet-subtle);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          margin-bottom: 10px;
        }

        .node-selected .node-badge-num {
          background: var(--violet-royal);
          color: #ffffff;
        }

        .node-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--violet-core);
          margin-bottom: 10px;
          transition: all 0.25s ease;
        }

        .node-selected .node-icon-circle {
          background: var(--violet-royal);
          color: #ffffff;
          box-shadow: 0 0 14px rgba(124, 58, 237, 0.4);
        }

        .node-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .node-title {
          font-family: var(--font-display);
          font-size: 0.78125rem;
          font-weight: 700;
          color: var(--violet-deep);
          line-height: 1.2;
        }

        .node-sub {
          font-size: 0.6875rem;
          color: var(--text-muted);
          line-height: 1.25;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .node-active-caret {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid var(--violet-royal);
        }

        /* Deepdive Detail Panel */
        .pipeline-deepdive-card {
          background: #ffffff;
          border: 1px solid var(--border-violet-strong);
          border-radius: var(--radius-xl);
          padding: 36px 40px;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .deepdive-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .deepdive-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--violet-royal);
          display: block;
          margin-bottom: 6px;
        }

        .deepdive-title {
          font-size: 1.625rem;
          color: var(--violet-deep);
          margin-bottom: 4px;
        }

        .deepdive-sub {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .deepdive-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--violet-dark);
          background: var(--violet-whisper);
          border: 1px solid var(--border-violet);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .deepdive-description {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 960px;
        }

        .deepdive-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .spec-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 18px 20px;
        }

        .spec-card.spec-highlight {
          background: var(--violet-whisper);
          border-color: var(--border-violet-strong);
        }

        .spec-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--violet-primary);
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }

        .spec-val {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .output-val {
          color: var(--violet-dark);
          font-weight: 600;
        }

        .stepper-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-subtle);
          padding-top: 20px;
        }

        .step-counter-text {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .flow-steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .flow-track-line {
            display: none;
          }
          .deepdive-specs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .flow-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pipeline-deepdive-card {
            padding: 24px 18px;
          }
          .stepper-controls {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .stepper-controls .btn {
            width: 100%;
            justify-content: center;
          }
          .step-counter-text {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .pipeline-deepdive-card {
            padding: 18px 14px;
          }
          .deepdive-title {
            font-size: 1.25rem;
          }
          .node-title {
            font-size: 0.75rem;
          }
          .pipeline-step-node {
            padding: 12px 8px;
            min-height: 125px;
          }
        }

        @media (max-width: 360px) {
          .flow-steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
