import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrototypeDisclaimerBanner from './components/PrototypeDisclaimerBanner';
import ProblemStatementDetails from './components/ProblemStatementDetails';
import WhyIbvap from './components/WhyIbvap';
import IntelligencePipeline from './components/IntelligencePipeline';
import Comparison from './components/Comparison';
import ResearchSection from './components/ResearchSection';
import Architecture from './components/Architecture';
import PrototypeSection from './components/PrototypeSection';
import ResourcesGrid from './components/ResourcesGrid';
import ProjectStatus from './components/ProjectStatus';
import TeamSection from './components/TeamSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      {/* Background Ambience Layer */}
      <div className="ambient-bg-canvas" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      {/* 1. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* Prototype Development Notice & Live Status Advisory */}
        <PrototypeDisclaimerBanner />

        {/* Official SIH 2026 Problem Statement SIH26187 (MHA) Details */}
        <ProblemStatementDetails />

        {/* 3. Why IBVAP */}
        <WhyIbvap />

        {/* 4. The IBVAP Intelligence Layer */}
        <IntelligencePipeline />

        {/* 5. What Makes IBVAP Different */}
        <Comparison />

        {/* 6, 7, 8. Research Foundation, Technical Foundations & Ideation Sources */}
        <ResearchSection />

        {/* 9. Technical Architecture */}
        <Architecture />

        {/* 10. Prototype / Demo Showcase */}
        <PrototypeSection />

        {/* 11. Project Resources Grid */}
        <ResourcesGrid />

        {/* 12. Current Project Status */}
        <ProjectStatus />

        {/* 13. Team TATVA */}
        <TeamSection />

        {/* 14. Final Violet Gradient Call-to-Action */}
        <FinalCTA />
      </main>

      {/* 15. Institutional Footer */}
      <Footer />
    </div>
  );
}
