import React from 'react';
import { Globe, ArrowUpRight, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-gray-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-800">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center tracking-tightest">
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                IMPORTN
              </span>
              <span className="relative inline-flex items-center justify-center w-6 h-6 mx-0.5">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900"></span>
                <span className="absolute w-2.5 h-2.5 rounded-full bg-[#D32F2F]"></span>
                <Globe className="w-5 h-5 text-white relative z-10 stroke-[2.2]" />
              </span>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                W
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Cross-border sourcing and logistics platform replicating the ease of domestic purchasing. Sourcing, factory inspection, ocean shipping, customs, and door-to-door delivery.
            </p>

            <div className="text-xs text-gray-400 space-y-1 pt-1">
              <p className="text-gray-300 font-semibold">
                🇨🇳 Shanghai Shengqiao Chain Trading Co., Ltd.
              </p>
              <p className="text-gray-500 font-mono text-[11px]">
                上海盛桥链商贸有限公司 · Pudong Free Trade Zone
              </p>
              <p className="text-gray-400">
                🇮🇳 Serving 500+ Indian businesses across 40+ cities
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/importnow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>@importnow.in (83K+)</span>
              </a>
              <span className="text-xs text-gray-400 font-medium">
                • 1 pc MOQ
              </span>
            </div>
          </div>

          {/* Col 2: Hubs & Sourcing (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              China Sourcing Hubs
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Foshan · Furniture & Interiors</span>
                  <span className="text-gray-400">MOQ 1</span>
                </a>
              </li>
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Shenzhen · Tech & Electronics</span>
                  <span className="text-gray-400">Huaqiangbei</span>
                </a>
              </li>
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Guangzhou · EV & Automotive</span>
                  <span className="text-gray-400">LED Lights</span>
                </a>
              </li>
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Guzhen · Lighting Plaza</span>
                  <span className="text-gray-400">Chandeliers</span>
                </a>
              </li>
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Yiwu · Supermarket Commodities</span>
                  <span className="text-gray-400">Small Goods</span>
                </a>
              </li>
              <li>
                <a href="#hubs" onClick={(e) => handleScrollTo(e, '#hubs')} className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Pan-China · Industrial Machinery</span>
                  <span className="text-gray-400">Laser & CNC</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Trips (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              End-to-End Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  Product Sourcing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  Factory Audits
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  AQL 2.5 Quality Control
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  FCL & LCL Ocean Freight
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  Indian Customs Clearance
                </a>
              </li>
              <li>
                <a href="#trips" onClick={(e) => handleScrollTo(e, '#trips')} className="hover:text-white transition-colors text-[#D32F2F] font-bold flex items-center gap-1">
                  <span>Canton Fair 2026</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Inquiries (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <a
                href="https://wa.me/919989724320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span className="font-mono text-sm font-semibold">+91 99897 24320</span>
              </a>

              <a
                href="mailto:hello@importnow.in"
                className="flex items-center gap-2 hover:text-[#D32F2F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D32F2F]" />
                <span>hello@importnow.in</span>
              </a>

              <div className="pt-2 text-gray-400 space-y-1.5 text-[11px]">
                <p>📍 <strong>Hyderabad:</strong> Hitech City, Hyderabad, TG</p>
                <p>📍 <strong>Shanghai:</strong> Pudong Free Trade Zone, Shanghai</p>
                <p>📍 <strong>Yiwu:</strong> Chouzhou North Road Warehouse</p>
              </div>

              <div className="pt-3">
                <a
                  href="#quote"
                  onClick={(e) => handleScrollTo(e, '#quote')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold transition-all shadow-md"
                >
                  <span>Request Sourcing Estimate</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} ImportNow Logistics. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Legal Bill of Entry
            </span>
            <span>·</span>
            <span>Direct RMB Domestic Settlement</span>
            <span>·</span>
            <span>Doorstep Delivery Across India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
