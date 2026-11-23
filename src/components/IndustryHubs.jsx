import React, { useState } from 'react';
import { Sofa, Cpu, Car, Lightbulb, ShoppingBag, Cog, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const HUBS = [
  {
    id: 'foshan',
    badge: 'FOSHAN HUB',
    category: 'Furniture & Interiors',
    icon: Sofa,
    marketDesc: 'Shunde Wholesale Furniture Capital & Lecong International Market',
    bullets: [
      'Luxury Italian-replica sofas, marble dining tables & designer custom beds',
      'Whole-villa sanitaryware, architectural tiles, acoustic wall panels & aluminum windows',
      'Commercial office workstations, executive ergonomic chairs & meeting pods'
    ],
    highlight: 'Height-adjustable desk from ₹45,000 · MOQ 1',
    highlightTag: '🔥 Hot for Villas & Offices',
    moq: '1 pc (Villa / Office)',
    savings: 'Save 50–70% vs Indian Retail'
  },
  {
    id: 'shenzhen',
    badge: 'SHENZHEN HUB',
    category: 'Electronics & Tech',
    icon: Cpu,
    marketDesc: 'Huaqiangbei Electronics Hub & Baoan High-Tech Industrial Parks',
    bullets: [
      'Consumer electronics, smart wearables, GaN fast chargers & wireless audio',
      'Custom PCB fabrication, smart IoT sensors & industrial electronic modules',
      'Novel trending gadgets, viral TikTok/Reels products & retail packaging'
    ],
    highlight: "Business ideas India doesn't have yet",
    highlightTag: '💡 Trending Inventions',
    moq: '100 - 500 pcs',
    savings: 'Direct Factory Costing'
  },
  {
    id: 'guangzhou',
    badge: 'GUANGZHOU HUB',
    category: 'EV & Automotive',
    icon: Car,
    marketDesc: 'Yongfu Road Automotive Parts Market & Panyu Manufacturing Base',
    bullets: [
      'Aftermarket automotive LED lighting, laser projector lenses & ambient kits',
      'EV charging accessories, portable wallbox chargers & battery casing parts',
      'Car detailing machinery, ceramic coating supplies & high-grade PPF films'
    ],
    highlight: 'Car LED private label · MOQ 500',
    highlightTag: '⚡ High Margin Private Label',
    moq: '50 - 500 pcs',
    savings: '3x - 4x Retail Margins'
  },
  {
    id: 'guzhen',
    badge: 'GUZHEN HUB',
    category: 'Lighting Capital',
    icon: Lightbulb,
    marketDesc: 'Guzhen Lighting Plaza & Star Alliance Global Lighting Expo',
    bullets: [
      'Grand crystal chandeliers, modern minimalist pendants & luxury art lamps',
      'Commercial stadium floodlights, street luminaires & high-bay warehouse LEDs',
      'Magnetic architectural track lights, COB strip profiles & smart Tuya/DALI systems'
    ],
    highlight: 'Direct from the lighting capital of China',
    highlightTag: '✨ Architectural Grade',
    moq: '1 pc (Chandeliers) / 50 pcs',
    savings: '65% Off Indian Showrooms'
  },
  {
    id: 'yiwu',
    badge: 'YIWU HUB',
    category: 'Supermarket & General Goods',
    icon: ShoppingBag,
    marketDesc: 'Yiwu International Trade City (75,000+ Booths Across 5 Districts)',
    bullets: [
      'Kitchenware, stainless steel cookware, food organizers & plastic containers',
      'Educational toys, stationery, hardware tools, beauty accessories & daily goods',
      'Retail display gondolas, electronic price tags, shopping trolleys & packaging'
    ],
    highlight: "World's largest small-goods market",
    highlightTag: '📦 Retail Supermarket Chains',
    moq: 'Small Mixed Cartons',
    savings: 'Lowest Global Wholesale'
  },
  {
    id: 'panchina',
    badge: 'PAN-CHINA',
    category: 'Machinery & Automation',
    icon: Cog,
    marketDesc: 'Jiangsu, Shandong & Zhejiang Heavy Industrial Clusters',
    bullets: [
      'CNC fiber laser cutting machines, hydraulic press brakes & sheet metal benders',
      'Automatic food packaging, multi-head weighing & liquid bottling lines',
      'Plastic injection molding machines, paper bag & disposable cup making plants'
    ],
    highlight: 'Tell us the machine, we find the factory',
    highlightTag: '⚙️ Industrial Grade',
    moq: '1 Unit Full Line',
    savings: 'Complete Commissioning'
  }
];

export default function IndustryHubs() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredHubs = selectedCategory === 'all'
    ? HUBS
    : HUBS.filter(h => h.id === selectedCategory);

  return (
    <section id="hubs" className="py-20 sm:py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>What We Import</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            China has a market for every industry.{' '}
            <span className="text-[#D32F2F]">We know each one.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Every city in China specializes in one specific craft. We have on-the-ground agents and vetted supplier relationships in every major manufacturing cluster.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white text-[#52525B] border border-[#E5E7EB] hover:text-[#111111]'
            }`}
          >
            All 6 Hubs
          </button>
          {HUBS.map(hub => (
            <button
              key={hub.id}
              onClick={() => setSelectedCategory(hub.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === hub.id
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-[#52525B] border border-[#E5E7EB] hover:text-[#111111]'
              }`}
            >
              {hub.category}
            </button>
          ))}
        </div>

        {/* 6 Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredHubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <div
                key={hub.id}
                className="group bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Hub Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#D32F2F] text-xs font-extrabold tracking-wider">
                      <span>🇨🇳</span>
                      <span>{hub.badge}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center text-gray-700 transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] mb-1">
                    {hub.category}
                  </h3>

                  <p className="text-xs text-[#52525B] mb-5 font-medium">
                    📍 {hub.marketDesc}
                  </p>

                  {/* 3 Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {hub.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight Callout Card */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="p-3.5 rounded-xl bg-[#F5F5F7] group-hover:bg-red-50/50 border border-gray-200/60 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D32F2F]">
                        {hub.highlightTag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">
                        MOQ: {hub.moq}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                      {hub.highlight}
                    </p>
                  </div>

                  <a
                    href="#quote"
                    className="mt-4 inline-flex items-center justify-between w-full text-xs font-semibold text-[#111111] hover:text-[#D32F2F] transition-colors py-1"
                  >
                    <span>Inquire for {hub.category.split('&')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
