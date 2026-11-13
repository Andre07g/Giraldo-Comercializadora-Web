import React from 'react';
import { X, MapPin, Calendar, CheckCircle2, Shield, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Project, COMPANY_INFO } from '../data/companyData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  const handleWhatsApp = () => {
    const text = `Hola, he revisado el proyecto "${project.title}" en su portafolio y deseo consultar sobre una obra similar.`;
    window.open(`https://wa.me/573183441355?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000e27]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Image / Header */}
        <div className="relative h-60 w-full shrink-0 bg-slate-900">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-[#0f2444] flex items-center justify-center text-white font-bold">
              {project.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000e27] via-[#000e27]/50 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 bg-[#d32f2f] rounded">
                {project.contractTag}
              </span>
              {project.status && (
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-600 rounded">
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            {project.client && (
              <div>
                <span className="text-slate-400 block font-semibold">Cliente / Entidad:</span>
                <span className="font-bold text-[#0f2444]">{project.client}</span>
              </div>
            )}
            <div>
              <span className="text-slate-400 block font-semibold">Ubicación:</span>
              <span className="font-bold text-[#0f2444]">{project.location}</span>
            </div>
            {project.year && (
              <div>
                <span className="text-slate-400 block font-semibold">Vigencia / Periodo:</span>
                <span className="font-bold text-[#0f2444]">{project.year}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Memoria Técnica de Ejecución
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-3">
              Métricas Clave de Desempeño
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#eff4ff] border border-blue-100 rounded-xl text-center">
                  <div className="text-base sm:text-lg font-black text-[#0f2444] tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Supervisión: {COMPANY_INFO.shortName}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Consultar en WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Cotizar Obra Similar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
