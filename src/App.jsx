import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ShipmentTracker from './components/ShipmentTracker.jsx';
import LandedCostCalculator from './components/LandedCostCalculator.jsx';
import IndustryHubs from './components/IndustryHubs.jsx';
import ChinaCredentials from './components/ChinaCredentials.jsx';
import BusinessTrips from './components/BusinessTrips.jsx';
import CaseStudiesAndReviews from './components/CaseStudiesAndReviews.jsx';
import BlogAndFaq from './components/BlogAndFaq.jsx';
import QuoteSection from './components/QuoteSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import InspectionModal from './components/InspectionModal.jsx';
import CantonFairModal from './components/CantonFairModal.jsx';

export default function App() {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const [isCantonFairModalOpen, setIsCantonFairModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#111111] flex flex-col font-sans selection:bg-[#D32F2F]/20 selection:text-[#D32F2F]">
      {/* 1. Glassmorphism Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with 3D Globe Visual and Route Marquee */}
        <Hero />

        {/* 3. End-to-End Imports Services Grid */}
        <ServicesSection
          onOpenInspectionModal={() => setIsInspectionModalOpen(true)}
        />

        {/* 4. Interactive How-it-Works Shipment Pipeline */}
        <ShipmentTracker
          onOpenInspectionModal={() => setIsInspectionModalOpen(true)}
        />

        {/* 5. Interactive Landed Cost & Customs Duty Calculator */}
        <LandedCostCalculator />

        {/* 6. What We Import - 6 Major China Industry Hubs */}
        <IndustryHubs />

        {/* 7. Registered China Enterprise Credentials & Business License */}
        <ChinaCredentials />

        {/* 8. Business Trips & Canton Fair Delegation */}
        <BusinessTrips
          onOpenCantonFairModal={() => setIsCantonFairModalOpen(true)}
        />

        {/* 9. Proven Track Record & Client Reviews */}
        <CaseStudiesAndReviews />

        {/* 10. Import Guides & FAQ Accordion */}
        <BlogAndFaq />

        {/* 11. Interactive Quote Builder & Direct Contact */}
        <QuoteSection />
      </main>

      {/* 12. Footer with 4-Column Navigation */}
      <Footer />

      {/* 13. Floating WhatsApp Instant Direct Inquiry Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <InspectionModal
        isOpen={isInspectionModalOpen}
        onClose={() => setIsInspectionModalOpen(false)}
      />

      <CantonFairModal
        isOpen={isCantonFairModalOpen}
        onClose={() => setIsCantonFairModalOpen(false)}
      />
    </div>
  );
}
