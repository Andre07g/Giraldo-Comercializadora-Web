import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contáctanos', href: '#contacto' },
  ];

  return (
    <>
      {/* Top corporate info bar */}
      <div className="bg-[#000e27] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wide">
            <span>NIT: {COMPANY_INFO.nit}</span>
            <span className="text-white/30">|</span>
            <span>Valledupar · La Loma · Bosconia</span>
            <span className="text-white/30">|</span>
            <span>Atención: Lun - Vie 8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.phones[1].raw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#d32f2f]" />
              <span>{COMPANY_INFO.phones[1].number}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emails[0]}`}
              className="hover:text-white transition-colors text-slate-300"
            >
              {COMPANY_INFO.emails[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - 1 Row, 3 Zones */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#0f2444] rounded"
            aria-label="Giraldo Ramírez Comercializadora Ltda."
          >
            <Logo variant="full" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0f2444] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d32f2f] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] active:scale-[0.98] transition-all rounded-lg shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Solicitar propuesta</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0f2444] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#d32f2f] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="text-xs text-slate-500 font-medium">
                NIT: {COMPANY_INFO.nit} · Valledupar, Cesar
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#0f2444] hover:bg-[#000e27] rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Cotización de Obra
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
