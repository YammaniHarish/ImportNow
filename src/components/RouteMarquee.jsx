import React from 'react';

const ROUTES = [
  { from: 'Yiwu', to: 'Adilabad', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Foshan', to: 'Hyderabad', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Shenzhen', to: 'Siddipet', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Guangzhou', to: 'Chennai', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Shanghai', to: 'Nhava Sheva', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Guzhen', to: 'Vizag', flagFrom: '🇨🇳', flagTo: '🇮🇳' },
  { from: 'Ningbo', to: 'Mumbai', flagFrom: '🇨🇳', flagTo: '🇮🇳' }
];

export default function RouteMarquee() {
  // Duplicate array to ensure smooth continuous marquee loop
  const displayRoutes = [...ROUTES, ...ROUTES, ...ROUTES];

  return (
    <div className="relative w-full py-4 bg-white border-y border-[#E5E7EB] overflow-hidden select-none">
      {/* Left and Right Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee-smooth flex items-center">
        {displayRoutes.map((route, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 sm:px-6 py-1 shrink-0 group cursor-default"
          >
            <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold tracking-tight text-[#111111] group-hover:text-[#D32F2F] transition-colors">
              <span className="text-gray-400 font-mono text-[11px] mr-1">#{String((idx % ROUTES.length) + 1).padStart(2, '0')}</span>
              <span className="text-base sm:text-lg">{route.flagFrom}</span>
              <span>{route.from}</span>
              <span className="text-[#D32F2F] font-black px-1">→</span>
              <span className="text-base sm:text-lg">{route.flagTo}</span>
              <span>{route.to}</span>
            </div>
            <span className="text-[#D32F2F] font-bold text-xs">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
