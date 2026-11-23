import React from 'react';
import { Calendar, MapPin, CheckCircle2, ArrowRight, Plane, Utensils, Hotel, Languages, Users } from 'lucide-react';

const TRIP_DESTINATIONS = [
  { name: 'Guangzhou', label: 'Canton Fair & Auto Hub', tag: 'Flagship' },
  { name: 'Shenzhen', label: 'Huaqiangbei Electronics', tag: 'Tech' },
  { name: 'Yiwu', label: 'Small Commodities Market', tag: 'Wholesale' },
  { name: 'Foshan', label: 'Furniture & Tiles Mart', tag: 'Interiors' },
  { name: 'Macau', label: 'Historic Day Excursion', tag: 'Leisure' },
  { name: 'Glass bridge', label: 'Scenic Landmark Tour', tag: 'Sightseeing' },
];

const TRIP_INCLUSIONS = [
  {
    icon: Plane,
    title: 'Visa & Official Invitation Letter',
    desc: 'Government-approved business visa invitation letter issued from our Shanghai company, plus full consulate paperwork guidance.'
  },
  {
    icon: Hotel,
    title: '4-Star & 5-Star Hotel Stays',
    desc: 'Premium hotel accommodations within direct walking distance or luxury AC coach transfer to Canton Fair Pazhou Complex.'
  },
  {
    icon: Utensils,
    title: 'Daily Indian Veg & Non-Veg Meals',
    desc: 'Authentic Indian food curated daily by Indian chefs in Guangzhou. Jain food options available with zero dietary compromises.'
  },
  {
    icon: Languages,
    title: 'Dedicated Bilingual Translators',
    desc: 'Professional English/Hindi/Telugu to Mandarin translators accompanying your group into factory negotiations.'
  },
  {
    icon: Users,
    title: 'Private Factory & Showroom Visits',
    desc: 'Curated one-on-one visits to high-end manufacturing facilities in Foshan and Shenzhen outside the crowded exhibition floor.'
  },
  {
    icon: MapPin,
    title: 'Curated Sightseeing & Bullet Train',
    desc: 'Experience China’s 350 km/h high-speed rail, Guangzhou Pearl River night cruise, and networking dinners with top Indian importers.'
  }
];

export default function BusinessTrips({ onOpenCantonFairModal }) {
  const handleJoinTrip = () => {
    const msg = encodeURIComponent(
      "Hi ImportNow! I am interested in joining your upcoming Canton Fair business trip to China. Please send me the itinerary, dates, and package details."
    );
    window.open(`https://wa.me/919989724320?text=${msg}`, '_blank');
  };

  return (
    <section id="trips" className="py-20 sm:py-24 bg-[#F5F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-bold uppercase tracking-wider text-[#D32F2F] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
            <span>Business Trips to China</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tightest leading-tight">
            Visit China with us.{' '}
            <span className="text-[#D32F2F]">We handle visas, hotels, food & factories.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Visiting China for the first time can be intimidating with language barriers, visa paperwork, and food worries. We organize end-to-end VIP delegation trips for Indian business owners.
          </p>
        </div>

        {/* Canton Fair Flagship Highlight Banner Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-lg mb-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-red-100 text-[#D32F2F] font-bold text-xs uppercase tracking-wider">
                  Flagship delegation
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium text-xs">
                  Guangzhou, China
                </span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Upcoming Departures Open
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight mb-3">
                Canton Fair · Guangzhou (China Import & Export Fair)
              </h3>

              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6">
                The world’s largest cross-border trade exposition with 25,000+ top factories and 16 broad sectors. We guide you booth-by-booth, protect you from inflated pricing, and negotiate directly with owners.
              </p>

              {/* Fair Sessions Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F5F5F7] border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D32F2F] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Spring Edition</span>
                  </div>
                  <span className="font-display font-bold text-base text-gray-950 block">
                    April – May (Phase 1, 2 & 3)
                  </span>
                  <span className="text-xs text-gray-500">
                    Electronics, Machinery, Home Decor, Furniture & Consumer Goods
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F5F7] border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D32F2F] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Autumn Edition</span>
                  </div>
                  <span className="font-display font-bold text-base text-gray-950 block">
                    October – November (Phase 1, 2 & 3)
                  </span>
                  <span className="text-xs text-gray-500">
                    Hardware, Lighting, Textiles, Medical Devices & Automotive Parts
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 bg-[#111111] text-white p-6 sm:p-7 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block mb-1">
                  Limited to 15 Entrepreneurs / Batch
                </span>
                <h4 className="font-display font-extrabold text-xl text-white mb-3">
                  All-Inclusive Delegations
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  From Indian airport departure to returning home, every visa, five-star stay, meal, and factory transfer is taken care of.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleJoinTrip}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D32F2F] text-white text-sm font-bold hover:bg-[#b71c1c] transition-all shadow-md cursor-pointer"
                >
                  <span>Join the next trip</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {onOpenCantonFairModal && (
                  <button
                    onClick={onOpenCantonFairModal}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>View 6-Day Detailed Itinerary</span>
                    <ArrowRight className="w-3 h-3 text-[#D32F2F]" />
                  </button>
                )}
                <span className="text-[11px] text-gray-400 text-center block pt-1">
                  Direct WhatsApp assistance for visa processing
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Destination Badges Marquee Row */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3 text-center sm:text-left">
            Included Cities & Industrial Hubs on the Itinerary:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {TRIP_DESTINATIONS.map((dest, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs hover:border-gray-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                <span className="font-display font-bold text-xs sm:text-sm text-gray-900">
                  {dest.name}
                </span>
                <span className="text-[11px] text-gray-500 hidden sm:inline">
                  ({dest.label})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Item VIP Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRIP_INCLUSIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-gray-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D32F2F] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#111111] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
