import { Rocket, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { PROJECT_LINKS } from '../config/links';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="cta-ambient-glow"></div>
      <div className="container cta-container">
        <div className="cta-badge-wrap">
          <span className="cta-tag">
            <ShieldCheck size={14} />
            EVALUATOR ACTION
          </span>
        </div>

        <h2 className="cta-heading">
          From Surveillance to Intelligence.
        </h2>

        <p className="cta-statement">
          IBVAP is designed to help transform existing surveillance infrastructure into 
          contextual, explainable and operator-centric border intelligence.
        </p>

        <div className="cta-buttons-row">
          <a
            href="#prototype"
            className="btn btn-primary btn-lg cta-btn-launch"
          >
            <span>Launch Prototype</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#architecture"
            className="btn btn-secondary btn-lg cta-btn-arch"
          >
            <Layers size={17} />
            <span>Explore Technical Architecture</span>
          </a>

          <a
            href={PROJECT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-lg cta-btn-github"
          >
            <GithubIcon size={18} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          background: linear-gradient(135deg, #180933 0%, #2e1065 40%, #4c1d95 85%, #5b21b6 100%);
          padding: 96px 0;
          color: #ffffff;
          overflow: hidden;
          text-align: center;
        }

        .cta-ambient-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 860px;
        }

        .cta-badge-wrap {
          margin-bottom: 20px;
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #e9d5ff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 16px;
          border-radius: var(--radius-full);
        }

        .cta-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .cta-statement {
          font-size: 1.1875rem;
          color: #ddd6fe;
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn-launch {
          background: #ffffff;
          color: var(--violet-dark);
          border-color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .cta-btn-launch:hover {
          background: var(--violet-whisper);
          color: var(--violet-deep);
          transform: translateY(-2px);
        }

        .cta-btn-arch {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
        }

        .cta-btn-arch:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .cta-btn-github {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-btn-github:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
          color: #ffffff;
        }

        @media (max-width: 640px) {
          .final-cta-section {
            padding: 64px 0;
          }
          .cta-buttons-row {
            flex-direction: column;
            width: 100%;
          }
          .cta-buttons-row .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
