import React, { useEffect } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ArrowRight, Utensils, Hotel, Languages, Plane, ShieldCheck } from 'lucide-react';

export default function CantonFairModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itinerary = [
    {
      day: 'Day 1',
      city: 'Guangzhou',
      title: 'Arrival & Indian Welcome Dinner',
      desc: 'Airport reception at Guangzhou Baiyun (CAN) by ImportNow staff. Private AC coach to 5-star hotel near Pazhou Complex. Evening authentic Indian dinner and delegation briefing.'
    },
    {
      day: 'Day 2',
      city: 'Pazhou Complex',
      title: 'Canton Fair Phase 1 VIP Access',
      desc: 'Pre-issued official buyer badges. Booth-by-booth walkthrough of Electronics, Electrical Appliances, Industrial Machinery, and Hardware halls with your assigned Mandarin-English translator.'
    },
    {
      day: 'Day 3',
      city: 'Pazhou Complex',
      title: 'Direct Factory Negotiation & Price Locking',
      desc: 'One-on-one meetings with vetted Chinese factory directors. Price benchmarking in local RMB, reviewing factory MOQs, sample stress testing, and legal contract drafting.'
    },
    {
      day: 'Day 4',
      city: 'Foshan (Shunde)',
      title: 'High-Speed Bullet Train to Furniture Capital',
      desc: 'Morning 20-minute bullet train to Foshan. Tour Lecong Furniture City and Louvre International Furniture Exhibition (5 million sq meters). Sourcing luxury sofas, marble dining, and whole-villa sanitaryware.'
    },
    {
      day: 'Day 5',
      city: 'Shenzhen / Guzhen',
      title: 'Tech Valley or Lighting Plaza Private Tours',
      desc: 'Private vehicle convoy to Shenzhen Huaqiangbei tech district or Guzhen lighting market. Private visits directly to factory production lines outside the crowded trade show floor.'
    },
    {
      day: 'Day 6',
      city: 'Guangzhou',
      title: 'Pearl River Cruise & Return Flight to India',
      desc: 'Morning sightseeing, high-speed shopping, luxury Pearl River night cruise with fellow Indian entrepreneurs. Transfer to Guangzhou Baiyun or Hong Kong International Airport.'
    }
  ];

  const handleInquireOnWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hi ImportNow! I reviewed the 6-Day Canton Fair Delegation Itinerary. Please send me the fee structure, upcoming departure dates, and visa invitation requirements."
    );
    window.open(`https://wa.me/919989724320?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#111111] text-white">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#D32F2F]" />
            <span className="font-display font-bold text-sm sm:text-base">
              Canton Fair VIP Delegation Itinerary (6 Days · All Inclusive)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6 text-gray-900">
          
          {/* Top Banner */}
          <div className="p-5 rounded-2xl bg-red-50 border border-red-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] block">
                Next Trip Sessions Open
              </span>
              <h3 className="font-display font-extrabold text-xl text-gray-950 mt-0.5">
                Canton Fair Spring & Autumn Editions
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Guangzhou · Foshan · Shenzhen · Yiwu · VIP Private Factory Convoy
              </p>
            </div>

            <button
              onClick={handleInquireOnWhatsApp}
              className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D32F2F] text-white text-xs font-bold hover:bg-[#b71c1c] shadow-sm transition-all cursor-pointer"
            >
              <span>Book Delegation Spot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6-Day Timeline */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-700">
              Day-by-Day Delegation Program:
            </h4>

            {itinerary.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F5F5F7] border border-gray-200/80 flex flex-col sm:flex-row items-start gap-4 hover:border-gray-400 transition-colors"
              >
                <div className="shrink-0 w-20 text-center sm:text-left">
                  <span className="font-display font-black text-sm text-[#D32F2F] block">
                    {item.day}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {item.city}
                  </span>
                </div>

                <div className="flex-1">
                  <h5 className="font-display font-bold text-sm sm:text-base text-gray-950">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Inclusions Reminder */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official Visa Letter</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>5-Star Hotel Stay</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Daily Indian Food</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Mandarin Translators</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
