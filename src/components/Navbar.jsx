import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Duty Calculator', href: '#calculator' },
    { name: 'What we import', href: '#hubs' },
    { name: 'China trips', href: '#trips' },
    { name: 'Blog & FAQ', href: '#blog' },
    { name: 'Contact', href: '#quote' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-header shadow-sm border-b border-[#E5E7EB]'
          : 'bg-[#F5F5F7]/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Red/Black Globe in 'O' */}
          <a
            href="#"
            className="flex items-center gap-2 group select-none"
            onClick={(e) => handleScrollTo(e, '#root')}
          >
            <div className="flex items-center tracking-tightest">
              <span className="font-display font-extrabold text-2xl text-[#111111] tracking-tight">
                IMPORTN
              </span>
              {/* Globe Icon in Place of 'O' */}
              <span className="relative inline-flex items-center justify-center w-6 h-6 mx-0.5">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#111111] to-[#262626] shadow-sm"></span>
                <span className="absolute w-2.5 h-2.5 rounded-full bg-[#D32F2F]"></span>
                <Globe className="w-5 h-5 text-white relative z-10 stroke-[2.2] animate-spin-slow" />
              </span>
              <span className="font-display font-extrabold text-2xl text-[#111111] tracking-tight">
                W
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#D32F2F] border border-red-200">
              China · India
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#52525B] hover:text-[#111111] transition-colors duration-150 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D32F2F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#quote"
              onClick={(e) => handleScrollTo(e, '#quote')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#111111] hover:bg-white/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E7EB] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#111111] hover:bg-[#F5F5F7] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#D32F2F] font-bold">›</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#quote"
                onClick={(e) => handleScrollTo(e, '#quote')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#111111] text-white text-base font-semibold hover:bg-black transition-all"
              >
                <span>Get a free quote</span>
                <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
