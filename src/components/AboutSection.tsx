import React from 'react';
import {
  Building2,
  CheckCircle2,
  Clock,
  Gauge,
  HeartHandshake,
  Users,
  FileCheck,
  Building,
  Target,
  Compass,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, CORPORATE_VALUES } from '../data/companyData';
import companyTeamImage from '../assets/images/company-profile-team.png';

export const AboutSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#d32f2f]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#d32f2f]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#d32f2f]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#d32f2f]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#d32f2f]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#d32f2f]" />;
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
            <span>El Perfil Corporativo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
            Experiencia, compromiso y soluciones para grandes proyectos
          </h2>
        </div>

        {/* 2-Column Story Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Corporate Story & Stats */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_4px_20px_-2px_rgba(15,36,68,0.05)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md mb-4">
                <Building2 className="w-3.5 h-3.5 text-[#0f2444]" />
                <span>FUNDADA EN {COMPANY_INFO.foundationYear}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2444] tracking-tight mb-4">
                Origen y Consolidación Regional
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">{COMPANY_INFO.name}</strong> nació en
                  Valledupar en el año {COMPANY_INFO.foundationYear}. Desde entonces hemos consolidado nuestra
                  presencia en el Cesar con sedes en Valledupar, La Loma y Bosconia, para atender proyectos
                  de los sectores minero, civil e institucional.
                </p>
                <p>
                  Contamos con un equipo multidisciplinario altamente calificado: ingenieros civiles,
                  topógrafos con instrumentación de precisión, técnicos mecánicos y operadores certificados
                  con amplia experiencia y solidez técnica para respaldar requerimientos de alta exigencia
                  geotécnica y estructural.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div className="bg-[#eff4ff] rounded-xl p-4 border border-blue-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2444] tabular-nums">
                  5 Líneas
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  de servicio: metalmecánica, vías, rocería, obras eléctricas y obra civil
                </div>
              </div>
              <div className="bg-[#eff4ff] rounded-xl p-4 border border-blue-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2444] tabular-nums">
                  3 Sedes
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  Centros operativos y administrativos en el Cesar
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Profile Image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,36,68,0.05)] min-h-[380px] lg:min-h-full flex flex-col justify-end group">
            <img
              src={companyTeamImage}
              alt="Equipo de Giraldo Ramírez durante una actividad en vía"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000e27]/90 via-[#000e27]/30 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <div className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[#d32f2f] rounded text-white mb-2">
                Nuestro equipo
              </div>
              <h4 className="text-lg font-bold text-white">
                Personal de Giraldo Ramírez
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                <span>Equipo de trabajo durante una actividad en vía.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Principios y Valores Corporativos */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#0f2444] tracking-tight">
              Principios y Valores Corporativos
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CORPORATE_VALUES.map((val) => (
              <div
                key={val.name}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0f2444]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                    {getIcon(val.iconName)}
                  </div>
                  <h4 className="text-base font-bold text-[#0f2444]">{val.name}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Misión y Visión (Blueprint vs Modern Horizon) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Misión Card (Deep Navy) */}
          <div className="bg-[#0f2444] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#d32f2f]" />
                <span>Propósito y Direccionamiento</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Misión</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Compromiso Corporativo Vigente
            </div>
          </div>

          {/* Visión Card (White & Red Accent) */}
          <div className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#d32f2f]" />
            <div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#d32f2f] mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d32f2f]" />
                <span>Horizonte 2029</span>
              </div>
              <h3 className="text-2xl font-black text-[#0f2444] mb-4">Visión 2029</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Plan Estratégico Quinquenal · Vigencia 2024-2029
            </div>
          </div>
        </div>

        {/* Certificaciones y Evaluaciones Oficiales */}
        <div className="mt-12 bg-[#eff4ff] rounded-2xl p-6 sm:p-8 border border-blue-100">
          <div className="max-w-3xl mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#0f2444] tracking-tight">
              Certificaciones y Evaluaciones Oficiales
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Nuestras operaciones se rigen bajo los más estrictos estándares normativos de seguridad,
              gestión de calidad y solvencia jurídica en contratación de gran impacto e infraestructura minero-civil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f2444] flex items-center justify-center shrink-0 font-black text-sm">
                RUT
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f2444]">
                  Registro Único Tributario (DIAN) · Verificado
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Certificación fiscal al día especificando actividad económica principal: Construcción de obras de ingeniería civil y suministros afines.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#d32f2f] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-[#d32f2f]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f2444]">
                  Cámara de Comercio de Valledupar · Matrícula Mercantil
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Renovación mercantil y personería jurídica que certifica idoneidad legal y financiera para la adjudicación de contratos de gran envergadura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
