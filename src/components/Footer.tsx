import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000e27] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4">
            <Logo variant="light" className="mb-4" />
            <p className="text-slate-300 text-sm font-light mt-3 max-w-sm leading-relaxed">
              {COMPANY_INFO.slogan} Metalmecánica, vías y señalización, rocería,
              obras eléctricas y obra civil.
            </p>
            <div className="mt-4 text-xs text-slate-400 font-medium">
              NIT: {COMPANY_INFO.nit} · Registro Mercantil Valledupar
            </div>
          </div>

          {/* Column 1: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-white transition-colors">Clientes</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-white transition-colors">Noticias</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contáctanos</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Sedes y Contacto */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sedes y Contacto
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Principal:</span> {COMPANY_INFO.addresses.principal}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Otras sedes:</span> La Loma, Cesar / Bosconia, Cesar
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div>
                  <div>PBX: {COMPANY_INFO.phones[0].number}</div>
                  <div>Cel: {COMPANY_INFO.phones[1].number}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div className="text-slate-300 break-all">
                  {COMPANY_INFO.emails[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Horarios de Atención */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Horarios de Atención
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Lunes a Viernes:</div>
                  <div>8:00 a.m. a 12:00 m.</div>
                  <div>2:00 p.m. a 5:30 p.m.</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Sábados:</div>
                  <div>8:00 a.m. a 12:00 m.</div>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="mt-4 px-3 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer text-slate-200"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300 font-medium">
          <div>
            © {new Date().getFullYear()} GIRALDO RAMÍREZ COMERCIALIZADORA LTDA. Todos los derechos reservados.
            <span className="mx-2">·</span>
            NIT: {COMPANY_INFO.nit}
          </div>
          <div className="tracking-widest uppercase text-slate-300 font-bold">
            Ingeniería & Construcción · Solidez Cívica
          </div>
        </div>
      </div>
    </footer>
  );
};
