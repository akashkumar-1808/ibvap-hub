import React from 'react';

/**
 * Official Supporting Organizing Bodies for Smart India Hackathon:
 * - Ministry of Education (MoE), Government of India
 * - All India Council for Technical Education (AICTE)
 * - MoE's Innovation Cell (MIC)
 */
export default function SupportingOrganizersLogo({ size = 36, darkTheme = false, className = '' }) {
  return (
    <div className={`supporting-organizers-wrap ${className} ${darkTheme ? 'supporting-dark-container' : ''}`}>
      <img
        src="/logos/sih_supporting_organizers.png"
        alt="Ministry of Education, AICTE, and MoE's Innovation Cell (MIC) - Government of India"
        className="supporting-logos-img"
        style={{ height: size, width: 'auto' }}
        loading="eager"
      />

      <style>{`
        .supporting-organizers-wrap {
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .supporting-organizers-wrap:hover {
          transform: translateY(-1px);
        }

        .supporting-logos-img {
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
        }

        .supporting-dark-container {
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 480px) {
          .supporting-logos-img {
            max-height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
