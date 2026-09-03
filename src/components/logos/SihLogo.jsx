import React from 'react';

/**
 * Official Smart India Hackathon (SIH) 2026 Logo Component
 * Uses the exact official SIH 2026 emblem provided by the user:
 * - Brain-bulb innovation icon (Saffron circuit left + Green binary '0101' right)
 * - Lightbulb socket with "SIH" mark and radiating ideas rays
 * - Official wordmark: "SMART INDIA HACKATHON 2026"
 */
export default function SihLogo({ size = 44, darkTheme = false, className = '' }) {
  return (
    <div className={`sih-logo-wrapper ${className} ${darkTheme ? 'sih-dark-container' : ''}`}>
      <img
        src="/logos/sih_2026_logo.png"
        alt="Smart India Hackathon 2026 Official Logo"
        className="sih-official-logo-img"
        style={{ height: size, width: 'auto' }}
        loading="eager"
      />

      <style>{`
        .sih-logo-wrapper {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .sih-logo-wrapper:hover {
          transform: translateY(-1px);
        }

        .sih-official-logo-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
        }

        /* When displayed on dark surfaces (such as the footer), provide a clean subtle light backdrop */
        .sih-dark-container {
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
