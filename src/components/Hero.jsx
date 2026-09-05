import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Layers, 
  ShieldCheck, 
  Eye, 
  Cpu, 
  Crosshair, 
  Compass, 
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  Rocket,
  ExternalLink
} from 'lucide-react';
import SihLogo from './logos/SihLogo';
import MhaLogo from './logos/MhaLogo';
import SupportingOrganizersLogo from './logos/SupportingOrganizersLogo';
import { PROJECT_LINKS } from '../config/links';

export default function Hero() {
  const [activeZone, setActiveZone] = useState('sector-north');

  return (
    <section id="overview" className="hero-section">
      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          {/* Official SIH & MHA Authorities Bar */}
          <div className="hero-official-logos-row">
            <a href="#problem-statement" className="hero-logo-link" title="Smart India Hackathon 2026">
              <SihLogo size={36} showYear={true} />
            </a>
            <div className="hero-logo-sep"></div>
            <a href="#problem-statement" className="hero-logo-link" title="Ministry of Education, AICTE & MoE's Innovation Cell (MIC)">
              <SupportingOrganizersLogo size={28} />
            </a>
            <div className="hero-logo-sep"></div>
            <a href="#problem-statement" className="hero-logo-link" title="Ministry of Home Affairs, Government of India">
              <MhaLogo size={38} showText={true} />
            </a>
          </div>

          {/* SIH Badge & Problem Statement Tag */}
          <div className="hero-badge-wrap">
            <a href="#problem-statement" className="badge-pill hero-badge hero-ps-badge">
              <span className="pulse-dot"></span>
              <span>PROBLEM STATEMENT: SIH26187</span>
            </a>
            <span className="credibility-badge">
              <ShieldCheck size={14} className="cred-icon" />
              TEAM TATVA – IBVAP
            </span>
          </div>

          {/* Headings */}
          <h1 className="hero-title">
            IBVAP <span className="hero-title-gradient">HUB</span>
          </h1>
          <h2 className="hero-subtitle">
            AI-Powered Border Intelligence & Video Analytics
          </h2>

          <p className="hero-statement">
            Transforming existing border surveillance video into actionable, explainable intelligence 
            through detection, tracking, spatial reasoning and evidence fusion.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a 
              href={PROJECT_LINKS.prototype} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
            >
              <Rocket size={18} />
              <span>Launch Live Prototype</span>
              <ExternalLink size={15} />
            </a>

            <a href="#prototype" className="btn btn-secondary btn-lg">
              <Layers size={17} />
              <span>Explore Prototype Suite</span>
            </a>
          </div>

          <div className="hero-sub-action">
            <a href="#architecture" className="subtle-link">
              <Layers size={15} />
              <span>Explore Technical Architecture →</span>
            </a>
          </div>

          {/* Intelligence Pipeline Status Panel */}
          <div className="pipeline-status-panel">
            <div className="pipeline-header">
              <div className="pipeline-indicator">
                <span className="pipeline-dot"></span>
                <span className="pipeline-title">INTELLIGENCE PIPELINE</span>
              </div>
              <span className="pipeline-badge">ACTIVE FLOW</span>
            </div>

            <div className="pipeline-steps-ticker">
              <div className="step-pill">
                <span className="num">01</span>
                <span>Video Input</span>
              </div>
              <span className="step-arrow">→</span>

              <div className="step-pill">
                <span className="num">02</span>
                <span>Detection</span>
              </div>
              <span className="step-arrow">→</span>

              <div className="step-pill">
                <span className="num">03</span>
                <span>Tracking</span>
              </div>
              <span className="step-arrow">→</span>

              <div className="step-pill">
                <span className="num">04</span>
                <span>Spatial Reasoning</span>
              </div>
              <span className="step-arrow">→</span>

              <div className="step-pill">
                <span className="num">05</span>
                <span>Evidence Fusion</span>
              </div>
              <span className="step-arrow">→</span>

              <div className="step-pill active-alert">
                <span className="num">06</span>
                <span>Explainable Alert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Column: Abstract AI Intelligence HUD Visual */}
        <div className="hero-visual">
          <div className="surveillance-hud-wrapper">
            {/* Top HUD Bar */}
            <div className="hud-top-bar">
              <div className="hud-source">
                <span className="rec-dot"></span>
                <span className="hud-source-title">CAMERA NODE // CAM-04B-NORTH</span>
              </div>
              <div className="hud-telemetry">
                <span className="telemetry-item">RTSP 1080p // 30 FPS</span>
                <span className="telemetry-item">LATENCY 42ms</span>
              </div>
            </div>

            {/* Video Analytics Canvas Surface */}
            <div className="hud-canvas">
              {/* Surveillance Grid Coordinates */}
              <div className="hud-grid-overlay"></div>

              {/* Crosshair Center */}
              <div className="hud-center-crosshair">
                <Crosshair size={28} strokeWidth={1} />
              </div>

              {/* Spatial Buffer Zone (Geometric Polygon) */}
              <div className="spatial-zone spatial-zone-buffer">
                <div className="zone-label">ZONE A // BUFFER CORRIDOR</div>
              </div>

              {/* Spatial Exclusion Zone (High Priority Border Perimeter) */}
              <div className="spatial-zone spatial-zone-critical">
                <div className="zone-label-critical">ZONE B // EXCLUSION PERIMETER</div>
              </div>

              {/* AI Detection Bounding Box & Vector Trajectory */}
              <div className="detection-target-box">
                {/* Target Corners */}
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>

                {/* Target Metadata Tag */}
                <div className="target-meta">
                  <span className="target-id">ENTITY #T-0824</span>
                  <span className="target-conf">CONF: 94.2%</span>
                </div>

                {/* Trajectory Vector Arrow */}
                <div className="vector-trail">
                  <div className="vector-dot dot-1"></div>
                  <div className="vector-dot dot-2"></div>
                  <div className="vector-dot dot-3"></div>
                  <div className="vector-arrow"></div>
                </div>
              </div>

              {/* Secondary Tracked Entity */}
              <div className="detection-target-box secondary-target">
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>
                <div className="target-meta">
                  <span className="target-id">VEHICLE #V-019</span>
                  <span className="target-conf">PATROL // AUTH</span>
                </div>
              </div>

              {/* Overlay Radar Pulse Ring */}
              <div className="radar-sweep-ring"></div>

              {/* Real-time Explainable Evidence Toast */}
              <div className="evidence-fusion-overlay">
                <div className="fusion-header">
                  <div className="fusion-tag">
                    <Zap size={14} className="fusion-icon" />
                    <span>EVIDENCE FUSION ALERT</span>
                  </div>
                  <span className="fusion-status">CORRELATED</span>
                </div>
                <div className="fusion-body">
                  <p className="fusion-message">
                    Target <strong>#T-0824</strong> trajectory crosses Zone A into Restricted Sector. 
                    Temporal dwell &gt; 45s. Verified against false alarm filters.
                  </p>
                  <div className="fusion-metrics">
                    <span className="metric-pill">Spatial Logic: TRUE</span>
                    <span className="metric-pill">Kinematic Motion: IRREGULAR</span>
                    <span className="metric-pill highlighted">Operator Priority: HIGH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom HUD Bar */}
            <div className="hud-bottom-bar">
              <div className="hud-stat">
                <span className="stat-label">OPERATING MODE</span>
                <span className="stat-val">CONTINUOUS REASONING</span>
              </div>
              <div className="hud-stat">
                <span className="stat-label">FILTER STACK</span>
                <span className="stat-val">TEMPORAL + SPATIAL FUSION</span>
              </div>
              <div className="hud-stat">
                <span className="stat-label">EXPLAINABILITY</span>
                <span className="stat-val status-ok">ACTIVE AUDIT TRAIL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 48px);
          padding-bottom: 72px;
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, var(--bg-surface-subtle) 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1000px;
          height: 480px;
          background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, rgba(245, 243, 255, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-official-logos-row {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 8px 18px;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }

        .hero-logo-link {
          display: flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .hero-logo-link:hover {
          transform: translateY(-1px);
        }

        .hero-logo-sep {
          width: 1px;
          height: 32px;
          background: var(--border-light);
        }

        .hero-badge-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .hero-ps-badge {
          color: var(--violet-dark);
          border-color: var(--violet-royal);
          background: var(--violet-whisper);
          text-decoration: none;
        }

        .hero-ps-badge:hover {
          background: var(--violet-subtle);
          transform: translateY(-1px);
        }

        .hero-badge {
          background: #ffffff;
          border-color: var(--border-violet-strong);
        }

        .credibility-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--violet-dark);
          background: var(--violet-subtle);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-violet);
        }

        .cred-icon {
          color: var(--violet-primary);
        }

        .hero-title {
          font-size: clamp(2rem, 6.5vw, 4.25rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
          color: var(--violet-deep);
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, var(--violet-primary) 0%, var(--violet-royal) 50%, var(--violet-vivid) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2.4vw, 1.625rem);
          font-weight: 700;
          color: var(--violet-core);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .hero-statement {
          font-size: 1.125rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .play-icon {
          fill: var(--violet-primary);
          color: var(--violet-primary);
        }

        .hero-sub-action {
          margin-bottom: 36px;
        }

        .subtle-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.90625rem;
          font-weight: 600;
          color: var(--violet-primary);
          transition: all 0.2s ease;
        }

        .subtle-link:hover {
          color: var(--violet-dark);
          transform: translateX(4px);
        }

        /* Status panel ticker */
        .pipeline-status-panel {
          background: #ffffff;
          border: 1px solid var(--border-violet);
          border-radius: var(--radius-lg);
          padding: 16px 20px;
          box-shadow: var(--shadow-sm);
        }

        .pipeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .pipeline-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pipeline-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .pipeline-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--violet-dark);
        }

        .pipeline-badge {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--violet-primary);
          background: var(--violet-whisper);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .pipeline-steps-ticker {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .step-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          color: var(--text-secondary);
        }

        .step-pill .num {
          font-family: var(--font-mono);
          color: var(--violet-primary);
        }

        .step-arrow {
          color: var(--violet-soft);
          font-size: 0.8rem;
        }

        .step-pill.active-alert {
          background: var(--violet-whisper);
          border-color: var(--violet-royal);
          color: var(--violet-dark);
        }

        /* Surveillance HUD Graphic */
        .surveillance-hud-wrapper {
          background: #0f081d;
          border: 1px solid rgba(139, 92, 246, 0.35);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-hero), 0 0 30px rgba(124, 58, 237, 0.15);
          overflow: hidden;
          position: relative;
        }

        .hud-top-bar {
          background: rgba(22, 10, 42, 0.95);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #d8b4fe;
        }

        .hud-source {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rec-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulse 1.5s infinite;
        }

        .hud-source-title {
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #f5f3ff;
        }

        .hud-telemetry {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #a78bfa;
          font-size: 0.6875rem;
        }

        .hud-canvas {
          height: 380px;
          position: relative;
          background: 
            radial-gradient(circle at 40% 40%, rgba(91, 33, 182, 0.35) 0%, transparent 60%),
            linear-gradient(180deg, #130924 0%, #0c0517 100%);
          overflow: hidden;
        }

        .hud-grid-overlay {
          position: absolute;
          inset: 0;
          background-size: 32px 32px;
          background-image: 
            linear-gradient(to right, rgba(168, 85, 247, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.08) 1px, transparent 1px);
        }

        .hud-center-crosshair {
          position: absolute;
          top: 48%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(168, 85, 247, 0.35);
          pointer-events: none;
        }

        /* Spatial polygons */
        .spatial-zone {
          position: absolute;
          border-width: 1px;
          border-style: dashed;
          pointer-events: none;
        }

        .spatial-zone-buffer {
          top: 30px;
          left: 40px;
          width: 240px;
          height: 140px;
          border-color: rgba(96, 165, 250, 0.5);
          background: rgba(59, 130, 246, 0.05);
          border-radius: 8px;
        }

        .zone-label {
          position: absolute;
          top: 6px;
          left: 8px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #93c5fd;
          letter-spacing: 0.05em;
        }

        .spatial-zone-critical {
          bottom: 75px;
          right: 30px;
          width: 280px;
          height: 160px;
          border-color: rgba(239, 68, 68, 0.5);
          background: rgba(239, 68, 68, 0.06);
          border-radius: 8px;
        }

        .zone-label-critical {
          position: absolute;
          top: 6px;
          right: 8px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #fca5a5;
          letter-spacing: 0.05em;
        }

        /* Target Bounding Box */
        .detection-target-box {
          position: absolute;
          top: 75px;
          left: 140px;
          width: 90px;
          height: 110px;
          border: 1px solid rgba(168, 85, 247, 0.85);
          background: rgba(124, 58, 237, 0.12);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
          animation: floatSlow 6s ease-in-out infinite;
        }

        .detection-target-box.secondary-target {
          top: 140px;
          right: 60px;
          left: auto;
          width: 110px;
          height: 70px;
          border-color: rgba(16, 185, 129, 0.6);
          background: rgba(16, 185, 129, 0.08);
          animation: none;
        }

        .target-meta {
          position: absolute;
          top: -22px;
          left: -1px;
          background: rgba(76, 29, 149, 0.95);
          border: 1px solid rgba(168, 85, 247, 0.5);
          padding: 2px 6px;
          border-radius: 3px;
          display: flex;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #ffffff;
          white-space: nowrap;
        }

        .secondary-target .target-meta {
          background: rgba(6, 78, 59, 0.95);
          border-color: rgba(52, 211, 153, 0.5);
        }

        .corner {
          position: absolute;
          width: 6px;
          height: 6px;
          border-color: #c084fc;
        }
        .corner.tl { top: -1px; left: -1px; border-top: 2px solid; border-left: 2px solid; }
        .corner.tr { top: -1px; right: -1px; border-top: 2px solid; border-right: 2px solid; }
        .corner.bl { bottom: -1px; left: -1px; border-bottom: 2px solid; border-left: 2px solid; }
        .corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid; border-right: 2px solid; }

        /* Vector Trajectory */
        .vector-trail {
          position: absolute;
          bottom: -40px;
          right: -30px;
          width: 60px;
          height: 40px;
          pointer-events: none;
        }

        .vector-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c084fc;
        }
        .dot-1 { bottom: 30px; right: 40px; opacity: 0.4; }
        .dot-2 { bottom: 20px; right: 25px; opacity: 0.7; }
        .dot-3 { bottom: 10px; right: 10px; opacity: 1; }

        /* Evidence fusion notification overlay */
        .evidence-fusion-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(28, 14, 52, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(168, 85, 247, 0.35);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .fusion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .fusion-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #facc15;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .fusion-status {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #a78bfa;
          background: rgba(124, 58, 237, 0.3);
          padding: 1px 6px;
          border-radius: 3px;
        }

        .fusion-message {
          font-size: 0.78125rem;
          color: #e2d9fc;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .fusion-metrics {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .metric-pill {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: #d8b4fe;
          background: rgba(255, 255, 255, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .metric-pill.highlighted {
          background: rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .hud-bottom-bar {
          background: rgba(22, 10, 42, 0.95);
          border-top: 1px solid rgba(139, 92, 246, 0.2);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
        }

        .hud-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-label {
          color: #a78bfa;
          font-size: 0.5625rem;
          letter-spacing: 0.05em;
        }

        .stat-val {
          color: #ffffff;
          font-weight: 600;
        }

        .stat-val.status-ok {
          color: #34d399;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: calc(var(--header-height) + 28px);
            padding-bottom: 48px;
          }
          .hero-statement {
            font-size: 1rem;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 640px) {
          .hero-official-logos-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 14px;
            width: 100%;
            padding: 10px 14px;
          }
          .hero-logo-sep {
            display: none;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .pipeline-status-panel {
            padding: 12px 14px;
          }
        }

        @media (max-width: 540px) {
          .hud-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 8px 12px;
          }
          .hud-telemetry {
            gap: 10px;
          }
          .hud-canvas {
            height: 330px;
          }
          .spatial-zone-buffer {
            width: 170px;
            height: 100px;
            left: 12px;
            top: 15px;
          }
          .spatial-zone-critical {
            width: 190px;
            height: 110px;
            right: 12px;
            bottom: 75px;
          }
          .detection-target-box {
            left: 55px;
            top: 50px;
            width: 75px;
            height: 90px;
          }
          .detection-target-box.secondary-target {
            right: 20px;
            top: 90px;
            width: 90px;
            height: 60px;
          }
          .evidence-fusion-overlay {
            bottom: 8px;
            left: 8px;
            right: 8px;
            padding: 8px 12px;
          }
          .fusion-message {
            font-size: 0.72rem;
            line-height: 1.35;
            margin-bottom: 6px;
          }
          .fusion-metrics {
            gap: 4px;
          }
          .hud-bottom-bar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            padding: 8px 12px;
          }
        }

        @media (max-width: 380px) {
          .hero-badge-wrap {
            gap: 8px;
          }
          .hero-ps-badge {
            font-size: 0.72rem;
            padding: 4px 10px;
          }
          .credibility-badge {
            font-size: 0.72rem;
            padding: 4px 10px;
          }
          .hud-bottom-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
