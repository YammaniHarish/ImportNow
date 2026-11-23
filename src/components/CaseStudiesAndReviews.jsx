import React from 'react';
import { Star, Building, ShoppingBag, Laptop, MapPin, CheckCircle2, Quote, ArrowUpRight } from 'lucide-react';

const RECENT_PROJECTS = [
  {
    title: 'Complete Villa Furniture & Fixtures',
    route: 'Foshan → Jubilee Hills, Hyderabad',
    flagFrom: '🇨🇳',
    flagTo: '🇮🇳',
    icon: Building,
    specs: '4,500 sq ft luxury residence. Custom Italian-style leather sectional, sintered stone 10-seater dining table, acoustic wall paneling, and architectural magnetic track lighting.',
    metrics: {
      invested: '₹18.5 Lakhs (Landed)',
      marketQuote: '₹46.0 Lakhs in Indian Showrooms',
      savings: 'Saved ₹27.5 Lakhs (60%)',
      timeline: '34 Days Doorstep'
    },
    tag: 'Luxury Residential'
  },
  {
    title: 'Sagar Supermarket Full Store Setup',
    route: 'Yiwu → Adilabad, Telangana',
    flagFrom: '🇨🇳',
    flagTo: '🇮🇳',
    icon: ShoppingBag,
    specs: 'Turnkey supermarket fit-out: heavy duty modular display gondolas, electronic LED price shelf strips, supermarket billing counters, shopping carts, and wire baskets.',
    metrics: {
      invested: '1x 40HQ Container',
      marketQuote: '₹34 Lakhs via Mumbai Agents',
      savings: 'Direct Factory ₹19 Lakhs',
      timeline: '28 Days Delivery'
    },
    tag: 'Retail Commercial'
  },
  {
    title: 'Sreeman Convention Centre',
    route: 'Guangzhou → Warangal, Telangana',
    flagFrom: '🇨🇳',
    flagTo: '🇮🇳',
    icon: Building,
    specs: '1,200 commercial banquet chairs, soundproof decorative acoustic wall panels, 4K P2.5 indoor LED video wall screen (28ft x 14ft), and smart DMX stage moving head lighting.',
    metrics: {
      invested: '2x 40ft Containers',
      marketQuote: 'Saved ₹32 Lakhs on LED & Chairs',
      savings: '100% Legal GST ITC Claimed',
      timeline: '32 Days Sea + Port Clearance'
    },
    tag: 'Hospitality & Events'
  },
  {
    title: 'Smart Office Dual-Motor Ergonomic Desks',
    route: 'Shenzhen & Foshan → Hitech City, Hyderabad',
    flagFrom: '🇨🇳',
    flagTo: '🇮🇳',
    icon: Laptop,
    specs: '150 motorized dual-motor height-adjustable standing desks with memory keypad sensors, cable management raceways, and ergonomic breathable mesh task chairs for an AI startup.',
    metrics: {
      invested: '₹16,500 / Desk (Landed)',
      marketQuote: '₹42,000 / Desk Indian Vendor',
      savings: 'Saved Over ₹38 Lakhs Total',
      timeline: 'Full Batch Cleared in 30 Days'
    },
    tag: 'Tech Corporate'
  }
];

const TESTIMONIALS = [
  {
    name: 'Sai',
    role: 'Founder, Ad-tech Startup',
    location: 'Siddipet & Hyderabad',
    text: 'We wanted 40 dual-motor standing desks for our office expansion. Indian vendors quoted ₹42,000 per desk. ImportNow sourced them directly from the Foshan factory for ₹16,500 landed at our door including sea freight, customs duty, and GST. Flawless execution and zero damage.',
    rating: 5,
    highlight: 'Saved ₹10+ Lakhs on Office Fitout'
  },
  {
    name: 'Mahender Reddy',
    role: 'Real Estate Developer',
    location: 'Hyderabad',
    text: 'Joined their Canton Fair trip last October. Having their team guide us through Guangzhou and Foshan with authentic Indian food and dedicated translators made it feel like a breeze. We bought all bathroom fittings, tiles, and marble for our 8-villa project at 40% of local cost.',
    rating: 5,
    highlight: 'Canton Fair VIP Delegation Client'
  },
  {
    name: 'Sagar Supermarket',
    role: 'Retail Supermarket Chain',
    location: 'Adilabad, Telangana',
    text: 'Dealing with customs clearance at Nhava Sheva was our biggest fear as a first-time importer. ImportNow handled the bill of entry, cleared customs in 3 days without demurrage, and trucked the entire 40HQ container straight to our Adilabad warehouse. Zero headache.',
    rating: 5,
    highlight: 'Direct Doorstep Container Unloading'
  }
];

export default function CaseStudiesAndReviews() {
  return (
    <section id="cases" className="py-20 sm:py-24 bg-white relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Real imports delivered to real Indian cities.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            From luxury residences in Jubilee Hills to commercial supermarkets in Adilabad, explore our recently cleared shipments.
          </p>
        </div>

        {/* Recently Delivered Projects (4 Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {RECENT_PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F5F7] rounded-3xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-gray-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Tag & Route */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-gray-800 border border-gray-200">
                      {project.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111] bg-white px-3 py-1 rounded-full border border-gray-200">
                      <span>{project.flagFrom}</span>
                      <span>→</span>
                      <span>{project.flagTo}</span>
                      <span className="text-gray-600 font-medium">{project.route}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] mb-3">
                    {project.title}
                  </h3>

                  {/* Specs */}
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6 font-normal">
                    {project.specs}
                  </p>
                </div>

                {/* Metrics Breakdown Grid */}
                <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-gray-200/70">
                    <span className="text-gray-400 text-[10px] block uppercase font-mono">Cost Landed:</span>
                    <span className="font-bold text-gray-950 font-display text-sm">{project.metrics.invested}</span>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200/70">
                    <span className="text-emerald-700 text-[10px] block uppercase font-mono font-bold">Client Benefit:</span>
                    <span className="font-bold text-emerald-950 font-display text-xs sm:text-sm">{project.metrics.savings}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-between text-[11px] text-gray-500 px-1 pt-1">
                    <span>Indian Showroom Cost: <strong className="text-gray-800">{project.metrics.marketQuote}</strong></span>
                    <span className="font-semibold text-gray-800">{project.metrics.timeline}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Client Stories / Testimonials (3 Cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-bold text-2xl text-[#111111]">
              What Indian business owners say about ImportNow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, r) => (
                        <Star key={r} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-gray-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#111111]">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        {review.role} · {review.location}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#D32F2F] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      Verified Importer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
