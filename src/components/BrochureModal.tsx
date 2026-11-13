import React from 'react';
import { X, Download, Printer, ShieldCheck, FileCheck, Building, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, PROJECTS_LIST } from '../data/companyData';
import { Logo } from './Logo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab?: 'brochure' | 'certifications';
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  tab = 'brochure',
}) => {
  const [activeTab, setActiveTab] = React.useState<'brochure' | 'certifications'>(tab);

  React.useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000e27]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="bg-[#0f2444] text-white p-4 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('brochure')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'brochure'
                  ? 'bg-[#d32f2f] text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Brochure Institucional
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-[#d32f2f] text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Certificaciones & RUES
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content Area */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#fdfdfd]">
          {activeTab === 'brochure' ? (
            <div className="space-y-6">
              {/* Cover Header */}
              <div className="border-b-2 border-[#0f2444] pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Logo variant="full" />
                <div className="text-right sm:text-right text-xs text-slate-500 font-medium">
                  <div>Dossier Corporativo · Vigencia 2024-2026</div>
                  <div className="font-bold text-[#0f2444]">NIT: {COMPANY_INFO.nit}</div>
                  <div>Valledupar, Cesar, Colombia</div>
                </div>
              </div>

              {/* Executive Presentation */}
              <div className="bg-[#eff4ff] p-5 rounded-xl border border-blue-100">
                <h3 className="text-sm font-extrabold text-[#0f2444] uppercase tracking-wider mb-2">
                  Presentación Empresarial
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {COMPANY_INFO.name} es una empresa contratista fundada en el año {COMPANY_INFO.foundationYear},
                  especializada en la dirección, consultoría y ejecución de macroproyectos civiles, mineros,
                  viales, eléctricos y ambientales en el norte de Colombia.
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-3 border-b pb-1">
                  Capacidades y Líneas de Contratación
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SERVICES_LIST.map((srv, idx) => (
                    <div key={srv.id} className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                      <div className="font-bold text-[#0f2444] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
                        <span>{srv.title}</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-1 line-clamp-2">
                        {srv.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machinery Fleet */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-3 border-b pb-1">
                  Parque de Maquinaria y Equipamiento
                </h4>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div>✓ Estaciones Totales Láser RTK</div>
                  <div>✓ Retroexcavadoras de Oruga CAT</div>
                  <div>✓ Vibrocompactadores de 10 Toneladas</div>
                  <div>✓ Grúas Telescópicas para Prefabricados</div>
                  <div>✓ Motoniveladoras CAT 140M</div>
                  <div>✓ Camiones Canasta Dieléctricos</div>
                  <div>✓ Hoyadoras para Postes de Concreto</div>
                  <div>✓ Formaletería Metálica Modular</div>
                  <div>✓ Carrotanques de Agua 3,000 Gal</div>
                </div>
              </div>

              {/* Summary Projects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2444] mb-3 border-b pb-1">
                  Experiencia Contractual Destacada
                </h4>
                <div className="space-y-2 text-xs">
                  {PROJECTS_LIST.slice(0, 3).map((p) => (
                    <div key={p.id} className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#0f2444]">{p.title}</span>
                        <span className="text-slate-500 text-[11px] block">{p.location ?? p.contractTag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Legal & Fiscal Verification */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-[#0f2444] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Certificación de Idoneidad y Personería Jurídica</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Documentación requerida para procesos licitatorios públicos y privados.
                </p>
              </div>

              {/* RUT Record Card */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs font-bold text-[#0f2444]">
                    DIAN · REGISTRO ÚNICO TRIBUTARIO (RUT)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                    ESTADO: ACTIVO
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block font-medium">Razón Social:</span>
                    <span className="font-bold">{COMPANY_INFO.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">NIT:</span>
                    <span className="font-bold">{COMPANY_INFO.nit}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Actividad Económica Principal (CIIU):</span>
                    <span>4290 - Construcción de otras obras de ingeniería civil</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Actividad Secundaria (CIIU):</span>
                    <span>4659 - Comercio de maquinaria y equipo de construcción</span>
                  </div>
                </div>
              </div>

              {/* Cámara de Comercio */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs font-bold text-[#0f2444]">
                    CÁMARA DE COMERCIO DE VALLEDUPAR · RUES
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                    MATRÍCULA RENOVADA
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block font-medium">Tipo Societario:</span>
                    <span>Sociedad Limitada (Ltda.)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Domicilio Principal:</span>
                    <span>Valledupar, Cesar (Carrera 4G No. 21-93)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Fecha de Constitución:</span>
                    <span>Año 2009</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500">
            PBX: {COMPANY_INFO.phones[0].number} · {COMPANY_INFO.emails[0]}
          </div>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar Documento en PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
