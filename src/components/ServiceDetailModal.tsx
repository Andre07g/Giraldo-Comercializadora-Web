import React from 'react';
import { X, CheckCircle, Shield, Wrench, FileCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { Service, COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const text = `Hola, me interesa solicitar una propuesta técnica y cotización para el servicio: ${service.title}`;
    window.open(`https://wa.me/573183441355?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000e27]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header with image banner if exists */}
        {service.image ? (
          <div className="relative h-48 w-full shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000e27] via-[#000e27]/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-[#d32f2f] rounded">
                {service.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1 leading-snug">
                {service.title}
              </h3>
            </div>
          </div>
        ) : (
          <div className="bg-[#0f2444] text-white p-6 shrink-0 flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-[#d32f2f] rounded">
                {service.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1 leading-snug">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Alcance y Capacidad Técnica
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          {/* Entregables / Actividades */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Actividades & Entregables de Obra</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs font-medium text-slate-800 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] mt-1 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maquinaria & Normatividad */}
          {(service.equipment?.length || service.norms?.length) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#eff4ff] p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-2 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#0f2444]" />
                <span>Maquinaria & Equipos</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1">
                {service.equipment?.map((eq, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#0f2444] font-bold">·</span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#eff4ff] p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-2 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#0f2444]" />
                <span>Normas Técnicas Aplicables</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-1">
                {service.norms?.map((norm, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#d32f2f] font-bold">·</span>
                    <span>{norm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ) : null}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            Atención directa: {COMPANY_INFO.phones[1].number}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Cotizar en WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0f2444] hover:bg-[#000e27] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Solicitar Propuesta Formal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
