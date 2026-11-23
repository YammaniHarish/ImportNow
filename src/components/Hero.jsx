import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Building2, Users, PackageCheck } from 'lucide-react';
import GlobeVisual from './GlobeVisual.jsx';
import RouteMarquee from './RouteMarquee.jsx';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Stats */}
          <div className="flex flex-col items-start z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-xs text-xs sm:text-sm font-medium text-[#111111] mb-6">
              <span className="flex items-center gap-1.5 font-bold">
                <span>🇨🇳</span>
                <span className="text-[#D32F2F]">→</span>
                <span>🇮🇳</span>
              </span>
              <span className="h-3 w-px bg-gray-300"></span>
              <span className="font-semibold text-gray-800">Trusted by 500+ Indian businesses</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[1.08] tracking-tightest mb-6">
              Import directly from China.{' '}
              <span className="text-[#D32F2F] block sm:inline">
                Without the guesswork.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#52525B] leading-relaxed mb-8 max-w-xl font-normal">
              Sourcing, factory inspection, shipping and customs, handled end to end by a team with its own company in Shanghai. You choose the product. We bring it to your door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={() => handleScrollTo('#quote')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111111] text-white text-base font-semibold hover:bg-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Get a free sourcing quote</span>
                <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
              </button>
              
              <button
                onClick={() => handleScrollTo('#how-it-works')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#111111] text-base font-semibold border border-[#E5E7EB] hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
              >
                <span>See how it works</span>
                <ChevronRight className="w-4 h-4 text-[#52525B]" />
              </button>
            </div>

            {/* 4-Column Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-[#E5E7EB]">
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  500+
                </span>
                <span className="text-xs text-[#52525B] mt-0.5 font-medium">
                  Businesses served
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight flex items-baseline">
                  83K+
                </span>
                <span className="text-xs text-[#52525B] mt-0.5 font-medium">
                  Community on IG
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#D32F2F] tracking-tight">
                  1 pc
                </span>
                <span className="text-xs text-[#52525B] mt-0.5 font-medium">
                  MOQ on many products
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Shanghai
                </span>
                <span className="text-xs text-[#52525B] mt-0.5 font-medium">
                  Own registered entity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Globe Visualization */}
          <div className="w-full relative flex items-center justify-center lg:justify-end">
            <GlobeVisual />
          </div>

        </div>
      </div>

      {/* Infinite Horizontal Route Marquee */}
      <div className="mt-14 sm:mt-16">
        <RouteMarquee />
      </div>
    </section>
  );
}
