import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const defaultMsg = encodeURIComponent(
      "Hello ImportNow! I am interested in importing products directly from China. Please share how your sourcing, inspection, and shipping services work."
    );
    window.open(`https://wa.me/919989724320?text=${defaultMsg}`, '_blank');
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center">
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-green-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 select-none"
        aria-label="Chat with ImportNow on WhatsApp"
      >
        {/* Pulsing ripple ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping-slow pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] stroke-[1.5]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white" />
        </div>

        {/* Text for desktop */}
        <div className="hidden sm:flex flex-col items-start text-left leading-none">
          <span className="text-[10px] uppercase font-bold tracking-wider text-green-950/80">
            Live Support
          </span>
          <span className="font-display font-extrabold text-sm text-white tracking-tight">
            Chat on WhatsApp
          </span>
        </div>
      </button>
    </aside>
  );
}
