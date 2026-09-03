import React from 'react';

/**
 * Official Ministry of Home Affairs (MHA), Govt of India Logo Component
 * Combines the official State Lion Capital Emblem of India with authentic bilingual typography.
 */
export default function MhaLogo({ size = 42, showText = true, darkTheme = false, className = '' }) {
  return (
    <div className={`mha-logo-container ${className} ${darkTheme ? 'mha-dark' : ''}`}>
      {/* Official Emblem of India (Ashoka Lion Capital) */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
        alt="State Emblem of India - Ministry of Home Affairs"
        className="mha-emblem-img"
        style={{ height: size, width: 'auto' }}
        loading="lazy"
      />

      {showText && (
        <div className="mha-text-stack">
          <span className="mha-hindi">गृह मंत्रालय</span>
          <span className="mha-english">MINISTRY OF HOME AFFAIRS</span>
          <span className="mha-gov">GOVERNMENT OF INDIA</span>
        </div>
      )}

      <style>{`
        .mha-logo-container {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .mha-emblem-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
        }

        .mha-dark .mha-emblem-img {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35)) brightness(1.1);
        }

        .mha-text-stack {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .mha-hindi {
          font-family: 'Google Sans', -apple-system, sans-serif;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #1e1b4b;
          letter-spacing: 0.02em;
        }

        .mha-english {
          font-family: 'Google Sans', -apple-system, sans-serif;
          font-size: 0.71875rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.05em;
        }

        .mha-gov {
          font-family: 'Google Sans Text', -apple-system, sans-serif;
          font-size: 0.59375rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .mha-dark .mha-hindi {
          color: #ffffff;
        }

        .mha-dark .mha-english {
          color: #f1f5f9;
        }

        .mha-dark .mha-gov {
          color: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
