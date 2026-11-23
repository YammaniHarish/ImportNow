import React, { useState } from 'react';
import { ChevronDown, BookOpen, HelpCircle, ArrowRight, FileCheck, ShieldCheck } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: 'How to Import from China to India in 2026: The Definitive Guide',
    desc: 'Everything Indian businesses must know about the 2026 customs clearance process, IEC registration, HS code mapping, and maximizing 100% GST input tax credit.',
    readTime: '6 min read',
    tag: '2026 Customs Guide',
    date: 'Updated Feb 2026'
  },
  {
    id: 2,
    title: 'Yiwu vs Guangzhou vs Foshan: Which China Market Should You Visit?',
    desc: 'A comprehensive city-by-city breakdown of mainland China’s top manufacturing clusters, minimum order quantities (MOQ), and sector specializations.',
    readTime: '5 min read',
    tag: 'Market Clusters',
    date: 'Updated Jan 2026'
  },
  {
    id: 3,
    title: 'Importing Furniture from China: How Indian Homeowners Save 50–70%',
    desc: 'Why luxury villa owners in Jubilee Hills, Whitefield, and Gurgaon are sourcing directly from Foshan instead of paying showroom markups.',
    readTime: '7 min read',
    tag: 'Furniture & Interiors',
    date: 'Updated Jan 2026'
  }
];

const FAQS = [
  {
    q: 'Can I really import just 1 piece or do I need to order an entire container?',
    a: 'Yes, you can import just 1 piece! For furniture, chandeliers, villa sanitaryware, or industrial machinery, we offer LCL (Less than Container Load) consolidation. We combine your single piece or pallet with other verified shipments inside our Yiwu or Guangzhou warehouse. For wholesale consumer goods (toys, stationery, gadgets), individual factory MOQs typically start from 50 to 500 units.'
  },
  {
    q: 'How long does shipping take from China to India door-to-door?',
    a: 'For Ocean Freight, the average total turnaround is 30 to 35 days. This includes: 5 days factory readiness & packing, 12 to 14 days sea sailing from Shanghai/Ningbo/Guangzhou to Chennai or Nhava Sheva (JNPT) port, 3 to 4 days port customs clearance, and 3 to 5 days domestic truck delivery directly to your premises. For urgent consignments, Air Cargo takes just 6 to 9 days door-to-door.'
  },
  {
    q: 'How do customs duties and GST work? Can I claim Input Tax Credit (ITC)?',
    a: 'Every single shipment handled by ImportNow is 100% legal with an official Bill of Entry filed through Indian Customs EDI. Customs duty is calculated based on your product’s exact 8-digit HS Code. You pay the duty and IGST directly or through our transparent ledger, and your business can claim 100% Input Tax Credit (ITC) on the IGST against your domestic GST liabilities.'
  },
  {
    q: 'Do I need an Import-Export Code (IEC) to start importing?',
    a: 'If you already hold an active Indian business GSTIN, obtaining an IEC from the DGFT portal is 100% digital and takes just 24 hours. Our team guides you through the process free of charge. If you are an individual homeowner furnishing a private villa without a business entity, we facilitate legal clearance through our authorized compliance channels.'
  },
  {
    q: 'Can I visit the factories myself before placing an order?',
    a: 'Absolutely! In fact, we encourage it. We host curated business delegation trips to Canton Fair in Guangzhou, Shunde Furniture Mart in Foshan, and Yiwu Trade City. We issue your official Chinese business visa invitation letter, arrange 4-star/5-star hotels, provide authentic daily Indian food (veg & non-veg), and assign you a dedicated Mandarin-English translator for private factory negotiations.'
  },
  {
    q: 'What are the best trending business ideas to import right now?',
    a: 'Right now in 2026, the highest ROI categories for Indian entrepreneurs include: smart home automation and magnetic track lighting (60%+ margins), aesthetic cafe furniture and modular office pods, automotive LED projector headlights, supermarket heavy-duty display fixtures, and custom private-label GaN fast chargers.'
  }
];

export default function BlogAndFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="blog" className="py-20 sm:py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>Knowledge & Guidance</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Import Guides & Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Everything you need to know about cross-border trade tariffs, container consolidation, and factory audits.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => {
                const el = document.querySelector('#quote');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-bold text-[#D32F2F] bg-red-50 px-2.5 py-0.5 rounded border border-red-100">
                    {article.tag}
                  </span>
                  <span className="text-gray-400 font-medium">{article.readTime}</span>
                </div>

                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#111111] group-hover:text-[#D32F2F] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6">
                  {article.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#111111]">
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-1 text-[#D32F2F] group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111]">
              Got Questions? We Have Answers.
            </h3>
            <p className="text-sm text-[#52525B] mt-1">
              Transparent answers about MOQs, customs duties, payment terms, and factory audits.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#D32F2F] shadow-md' : 'border-[#E5E7EB] hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#111111] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-red-50 text-[#D32F2F] rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#52525B] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#52525B]">
              Have a specific question about your product's import tariff or HS code?{' '}
              <a href="#quote" className="text-[#D32F2F] font-bold underline hover:text-[#b71c1c]">
                Ask our sourcing team directly →
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
