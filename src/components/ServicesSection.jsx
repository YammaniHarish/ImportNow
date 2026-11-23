import React from 'react';
import { Search, ShieldAlert, CheckCircle, Ship, FileText, Truck, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'Product sourcing',
    subtitle: 'Direct factory pricing across Yiwu, Guangzhou, Shenzhen & Foshan',
    description: 'We negotiate directly with verified tier-1 manufacturers in local RMB. No commission agents, no marked-up trading house catalogs. You get genuine factory-gate pricing.',
    icon: Search,
    tags: ['Factory Price Locking', 'Direct RMB Settlement', 'Supplier Verification']
  },
  {
    number: '02',
    title: 'Factory inspection',
    subtitle: 'In-person audits before you wire a single dollar',
    description: 'Our ground team in Shanghai and Guangdong visits the manufacturing facility in person to check business licences, ISO certifications, export permits, and real production line capacity.',
    icon: ShieldAlert,
    tags: ['On-Site Audits', 'License Verification', 'Sample Testing']
  },
  {
    number: '03',
    title: 'Quality control',
    subtitle: 'Pre-shipment 4K photo & video inspection reports',
    description: 'Before the container is sealed or final payment is released, we execute rigorous AQL 2.5 defect inspections, drop tests, packaging checks, and provide timestamped video proof.',
    icon: CheckCircle,
    tags: ['AQL 2.5 Standards', 'Timestamped Video', 'Seal Verification']
  },
  {
    number: '04',
    title: 'Shipping & logistics',
    subtitle: 'FCL & LCL sea freight + express air cargo',
    description: 'Whether you need a dedicated 40ft HQ container or a single pallet consolidated via LCL, we secure competitive shipping rates from Shanghai, Ningbo, Shenzhen to Indian ports.',
    icon: Ship,
    tags: ['FCL & LCL Consolidation', 'Express Air Cargo', 'Vessel Tracking']
  },
  {
    number: '05',
    title: 'Customs clearance',
    subtitle: '100% legal documentation & full GST input credit',
    description: 'Complete Indian port clearance handling: HS code mapping, bill of entry filing, port duty assessment, and IGST compliance so your business claims 100% input tax credit smoothly.',
    icon: FileText,
    tags: ['Bill of Entry in Your Name', 'HS Code Optimization', '100% GST ITC']
  },
  {
    number: '06',
    title: 'Doorstep delivery',
    subtitle: 'Port to your shop, warehouse, villa or factory site',
    description: 'Once cleared from Nhava Sheva, Chennai, or Mundra port, we manage secure domestic transport with real-time GPS tracking and crane/tailgate offloading directly at your premises.',
    icon: Truck,
    tags: ['GPS Domestic Fleet', 'Warehouse Delivery', 'Safe Unloading']
  }
];

export default function ServicesSection({ onOpenInspectionModal }) {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>End-to-End Imports</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            One team from the factory floor to your front door.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Eliminate unreliable middlemen, hidden port penalties, and quality surprises. Our registered Shanghai company and Indian team take complete legal and operational custody of your shipment.
          </p>
        </div>

        {/* 3x2 Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-gray-200 group-hover:text-[#D32F2F] transition-colors duration-200">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] group-hover:bg-red-50 flex items-center justify-center text-[#111111] group-hover:text-[#D32F2F] transition-colors duration-200">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-2 group-hover:text-[#D32F2F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D32F2F] uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-[#52525B] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100 group-hover:bg-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.number === '03' && onOpenInspectionModal && (
                    <button
                      type="button"
                      onClick={onOpenInspectionModal}
                      className="mt-2 w-full text-xs font-bold text-[#D32F2F] hover:text-[#b71c1c] text-left underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Sample AQL 2.5 Report →</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#111111]">
                Need a custom sourcing feasibility check for your product?
              </h4>
              <p className="text-sm text-[#52525B]">
                Send us a sample link or photo, and we will audit 3 verified factories within 48 hours.
              </p>
            </div>
          </div>
          <a
            href="#quote"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-black transition-all"
          >
            <span>Request Feasibility Check</span>
            <ArrowUpRight className="w-4 h-4 text-[#D32F2F]" />
          </a>
        </div>

      </div>
    </section>
  );
}
