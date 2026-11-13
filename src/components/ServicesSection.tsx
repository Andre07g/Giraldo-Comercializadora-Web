import React, { useState } from 'react';
import {
  Building2,
  Compass,
  Wrench,
  Zap,
  Truck,
  ShieldAlert,
  Paintbrush,
  Fence,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST, Service } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'obras' | 'vial' | 'especializados'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#0f2444]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#0f2444]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#0f2444]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0f2444]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#0f2444]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#0f2444]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-[#0f2444]" />;
      case 'Fence':
        return <Fence className="w-5 h-5 text-[#0f2444]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#0f2444]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#0f2444]" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'obras') {
      return ['obras-civiles', 'gestion-proyectos', 'obras-hidromecanicas', 'obras-hidraulicas'].includes(service.id);
    }
    if (selectedFilter === 'vial') {
      return ['mantenimiento-vias', 'cercas-perimetrales'].includes(service.id);
    }
    if (selectedFilter === 'especializados') {
      return ['redes-electricas', 'pintura-acabados', 'proyectos-ambientales'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with CTA on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
              <span>Soluciones Integrales en Ingeniería</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
              Soluciones integrales en ingeniería y construcción
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Desarrollamos soluciones globales en toda la cadena de ingeniería civil e industrial: movimiento de tierras,
              obra civil, redes eléctricas, obras hidráulicas, mantenimiento vial y servicios ambientales con maquinaria propia
              y personal calificado.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="self-start lg:self-end px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0f2444] hover:bg-[#000e27] active:scale-[0.98] transition-all rounded-lg shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Solicitar propuesta por servicio</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#0f2444] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos los Servicios (9)
          </button>
          <button
            onClick={() => setSelectedFilter('obras')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedFilter === 'obras'
                ? 'bg-[#0f2444] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Obras Civiles e Hidráulicas
          </button>
          <button
            onClick={() => setSelectedFilter('vial')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedFilter === 'vial'
                ? 'bg-[#0f2444] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Infraestructura Vial & Cercas
          </button>
          <button
            onClick={() => setSelectedFilter('especializados')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedFilter === 'especializados'
                ? 'bg-[#0f2444] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Redes Eléctricas & Especiales
          </button>
        </div>

        {/* 3x3 Grid of Services */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#0f2444]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Image if available */}
                {service.image ? (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#000e27]/80 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0f2444] group-hover:text-white transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {service.category}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0f2444] group-hover:text-[#d32f2f] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#0f2444] group-hover:text-[#d32f2f] border-t border-slate-100 pt-3 transition-colors">
                  <span>Consultar este servicio</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
