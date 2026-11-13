import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Award, Building, HardHat } from 'lucide-react';
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
    <section id="inicio" className="relative bg-[#000e27] text-white overflow-hidden">
      {/* Background Hero Image with Deep Structural Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={canalWorkImage}
          alt="Cuadrilla y maquinaria en una obra de canal"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle geometric grid / technical blueprint mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000e27] via-[#000e27]/85 to-[#0f2444]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000e27] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-14 sm:pb-20">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 mb-6 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#d32f2f] ring-2 ring-[#d32f2f]/30" />
          <span>NIT: {COMPANY_INFO.nit}</span>
          <span className="text-white/40">·</span>
          <span>VALLEDUPAR, CESAR</span>
        </div>

        {/* Main Display Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] text-balance">
          Construyendo para un futuro mejor.
        </h1>

        {/* Value Proposition */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed text-balance">
          Metalmecánica, vías y señalización, rocería, obras eléctricas y obra civil,
          con personal calificado.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] active:scale-[0.98] transition-all rounded-lg shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Solicitar propuesta por WhatsApp</span>
          </a>

          <a
            href="#proyectos"
            className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0f2444]/90 hover:bg-[#0f2444] border border-white/20 active:scale-[0.98] transition-all rounded-lg flex items-center gap-2 backdrop-blur-sm cursor-pointer"
          >
            <span>Conozca nuestro portafolio</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </a>
        </div>

        {/* 4 Key Metrics Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#0f2444]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/25 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              15+ Años
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
              de experiencia en el sector
            </div>
          </div>

          <div className="bg-[#0f2444]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/25 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Público y Privado
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
              Clientes a nivel nacional
            </div>
          </div>

          <div className="bg-[#0f2444]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/25 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Multidisciplinario
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
              Equipo técnico calificado
            </div>
          </div>

          <div className="bg-[#0f2444]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/25 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              3 Sedes
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
              Valledupar, La Loma y Bosconia
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Accreditations Banner */}
      <div className="relative z-10 bg-[#041b3b]/90 border-t border-b border-white/10 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-200">
          <div className="flex items-center gap-2 text-slate-300 tracking-wider text-[11px] uppercase font-bold">
            <Building className="w-3.5 h-3.5 text-[#d32f2f]" />
            <span>Sedes: Valledupar · La Loma · Bosconia</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>RUT Verificado (DIAN)</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Cámara de Comercio de Valledupar</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Empresa Contratista de Éxito</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <HardHat className="w-4 h-4 text-[#d32f2f]" />
              <span>SST & Calidad Integral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
