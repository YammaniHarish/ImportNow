import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const CATEGORIES = [
  'Furniture & Luxury Interiors',
  'Electronics & Hardware',
  'Supermarket & Retail Goods',
  'Architectural Lighting',
  'EV & Automotive Parts',
  'Industrial Machinery & Automation',
  'Custom Private Label / Other'
];

const QUANTITIES = [
  '1 Piece (Sample / Private Villa)',
  'Small Batch (50 - 200 pcs)',
  'Medium Commercial (200 - 1,000 pcs)',
  'Full 20ft Container (FCL)',
  'Full 40ft HQ Container (FCL)'
];

const BUDGETS = [
  '< ₹2 Lakhs',
  '₹2L - ₹5L',
  '₹5L - ₹15L',
  '₹15L - ₹50L',
  '₹50L+'
];

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    category: CATEGORIES[0],
    quantity: QUANTITIES[0],
    budget: '₹5L - ₹15L',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct rich WhatsApp message text
    const message = `Hello ImportNow Team! 👋%0A%0AI would like a direct sourcing quote from China:%0A%0A` +
      `👤 *Name:* ${formData.name || 'Not provided'}%0A` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}%0A` +
      `📍 *Destination City:* ${formData.city || 'India'}%0A` +
      `📦 *Category:* ${formData.category}%0A` +
      `🔢 *Approx Quantity:* ${formData.quantity}%0A` +
      `💰 *Target Budget:* ${formData.budget}%0A` +
      `📝 *Details:* ${formData.details || 'Please contact me to discuss details.'}%0A%0A` +
      `Please provide factory feasibility and landed cost estimate.`;

    const whatsappUrl = `https://wa.me/919989724320?text=${message}`;
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="quote" className="py-20 sm:py-24 bg-white relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>Calculate & Inquire</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Get an instant import estimate.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Tell us what you want to import. Our Shanghai and Hyderabad ground teams will verify 3 vetted factories and revert with genuine factory pricing within 24 hours.
          </p>
        </div>

        {/* 2-Column Split: Contact Info Left & Quote Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Offices (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3 className="font-display font-extrabold text-2xl text-[#111111] mb-3">
                Speak directly with our trade directors
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Prefer calling or messaging on WhatsApp right now? Reach out directly. We speak Telugu, Hindi, and English.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919989724320?text=Hello%20ImportNow%2C%20I%20have%20an%20import%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-[#25D366] hover:bg-green-50/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                    Phone & WhatsApp Hotline
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#25D366] transition-colors">
                    +91 99897 24320
                  </span>
                </div>
              </a>

              <a
                href="mailto:hello@importnow.in"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-[#111111] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                    Official Trade Desk Email
                  </span>
                  <span className="font-display font-bold text-base text-[#111111] group-hover:text-[#D32F2F] transition-colors">
                    hello@importnow.in
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/importnow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] hover:border-pink-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                    Instagram Community
                  </span>
                  <span className="font-display font-bold text-base text-[#111111]">
                    @importnow.in <span className="text-xs font-normal text-gray-500">(83K+ followers)</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Registered Locations List */}
            <div className="pt-4 border-t border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
                Global Operations & Hubs
              </span>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-display">Hyderabad India HQ:</strong>
                    <span>Hitech City, Hyderabad, Telangana, India 500081</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-display">Shanghai China Entity:</strong>
                    <span>Shanghai Shengqiao Chain Trading Co., Ltd. · Pudong Free Trade Zone, Shanghai</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-display">Yiwu & Guangzhou Warehouses:</strong>
                    <span>International Trade City District 4 Warehouse & Panyu Logistics Hub</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Legal Bill of Entry
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-[11px] font-semibold border border-gray-200">
                <Clock className="w-3.5 h-3.5 text-gray-600" />
                24-Hour Factory Response
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Quote Builder Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F5F5F7] rounded-3xl p-7 sm:p-10 border border-[#E5E7EB] shadow-md">
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-extrabold text-2xl text-[#111111]">
                Quick Quote Builder
              </h3>
              <span className="text-xs bg-red-100 text-[#D32F2F] font-bold px-2.5 py-1 rounded-full">
                Direct WhatsApp Sync
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 2: City & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Destination City in India *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad, Mumbai, Bangalore"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all cursor-pointer"
                  >
                    {CATEGORIES.map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Approximate Quantity Required
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all cursor-pointer"
                >
                  {QUANTITIES.map((qty, idx) => (
                    <option key={idx} value={qty}>{qty}</option>
                  ))}
                </select>
              </div>

              {/* Row 4: Budget Range Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Target Landed Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {BUDGETS.map((b) => {
                    const isSelected = formData.budget === b;
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Product Details Textarea */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Product Details & Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the product, materials, Alibaba/1688 references, custom branding, or special packaging requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#111111] hover:bg-black text-white text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer"
              >
                <span>Generate WhatsApp Quote Now</span>
                <Send className="w-4 h-4 text-[#D32F2F]" />
              </button>

              {submitted && (
                <div className="p-3 bg-green-100 border border-green-300 text-green-900 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Opening WhatsApp with your pre-filled inquiry...</span>
                </div>
              )}

              <p className="text-[11px] text-gray-500 text-center">
                🔒 Your contact details are kept strictly confidential under trade NDA. No spam calls.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
