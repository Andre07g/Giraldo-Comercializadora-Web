import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES_LIST, Service } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  return (
    <section id="servicios" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-7xl text-[#0f2444] leading-[0.95]">
            Nuestras cinco líneas de servicio
          </h2>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-lg text-slate-700 leading-snug max-w-md">
              Cinco líneas de servicio: metalmecánica, vías y señalización, rocería, obras eléctricas y obra civil.
            </p>
            <button
              onClick={onRequestQuote}
              className="mt-5 px-6 py-3.5 font-display uppercase tracking-wide text-base font-bold text-white bg-[#0f2444] hover:bg-[#d32f2f] transition-colors flex items-center gap-2.5 cursor-pointer"
            >
              <span>Solicitar propuesta por servicio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Composición asimétrica: dos líneas grandes y tres medianas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4">
          {SERVICES_LIST.map((service, index) => {
            const grande = index < 2;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelectService(service)}
                className={`group flex flex-col text-left overflow-hidden bg-[#0f2444] text-white cursor-pointer ${
                  grande ? 'md:col-span-3' : 'md:col-span-2'
                }`}
              >
                <div className="relative overflow-hidden aspect-[3/2] bg-[#000e27]">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <div className="relative flex-1 p-5 sm:p-6 border-t-[6px] border-[#d32f2f] group-hover:border-white transition-colors">
                  <h3 className={`${grande ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} leading-[0.95]`}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-white/85 leading-snug max-w-md">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display uppercase tracking-wide text-sm font-bold">
                    Ver detalle y contactar
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
