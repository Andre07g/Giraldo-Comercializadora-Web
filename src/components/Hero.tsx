import React from 'react';
import { MessageSquare, ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import canalWorkImage from '../assets/images/canal-alamosa-obra.jpeg';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const whatsappUrl = `https://wa.me/573183441355?text=${encodeURIComponent(
    'Hola, me comunico desde su sitio web de Giraldo Ramírez Comercializadora Ltda. Deseo solicitar una propuesta técnica y cotización.'
  )}`;

  return (
    <section id="inicio" className="bg-[#0f2444] text-white">
      <div className="grid lg:grid-cols-12 lg:min-h-[640px]">
        {/* Foto de obra, a color y sin velo: es la prueba */}
        <figure className="relative order-1 lg:order-2 lg:col-span-7 h-[300px] sm:h-[420px] lg:h-auto overflow-hidden bg-[#000e27]">
          <img
            src={canalWorkImage}
            alt="Cuadrilla y maquinaria en una obra de canal"
            className="revelar absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <figcaption className="absolute left-0 bottom-0 bg-white text-[#0f2444] px-4 py-2.5 font-display uppercase tracking-wide text-sm sm:text-base font-bold leading-none border-t-4 border-[#d32f2f]">
            Canal Alamosa · Mina Drummond
          </figcaption>
        </figure>

        {/* Bloque de mensaje */}
        <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center px-5 sm:px-10 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 py-12 sm:py-16">
          <p className="font-display uppercase tracking-[0.08em] text-sm sm:text-base font-semibold text-white/70">
            NIT {COMPANY_INFO.nit} · Valledupar, Cesar
          </p>

          <h1 className="mt-5 text-[3.25rem] sm:text-7xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[0.92] tracking-[-0.01em]">
            Construyendo para un <span className="underline decoration-[#d32f2f] decoration-[6px] underline-offset-[10px]">futuro mejor.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-md leading-snug">
            Metalmecánica, vías y señalización, rocería, obras eléctricas y obra civil,
            con personal calificado.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-base font-bold uppercase tracking-wide font-display text-white bg-[#d32f2f] hover:bg-[#b6171e] active:translate-y-px transition-colors flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Solicitar propuesta por WhatsApp</span>
            </a>
            <a
              href="#proyectos"
              className="px-6 py-4 text-base font-bold uppercase tracking-wide font-display text-white border-2 border-white/40 hover:border-white hover:bg-white hover:text-[#0f2444] transition-colors flex items-center justify-center gap-2.5"
            >
              <span>Conozca nuestro portafolio</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-10 pt-5 border-t border-white/20 text-sm text-white/70">
            Sedes en Valledupar, La Loma y Bosconia
          </p>
        </div>
      </div>
      <div className="barrera" aria-hidden="true" />
    </section>
  );
};
