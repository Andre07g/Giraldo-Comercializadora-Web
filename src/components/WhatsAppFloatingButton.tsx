import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const sendWhatsApp = (quickTopic?: string) => {
    const text = quickTopic || userMsg || 'Hola, deseo solicitar información sobre sus servicios de ingeniería y construcción.';
    const url = `https://wa.me/573183441355?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setUserMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0f2444] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold">Giraldo Ramírez Ltda.</div>
                <div className="text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>En línea · Atención Técnica</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 text-xs sm:text-sm text-slate-700 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 shadow-sm max-w-[90%]">
              <p className="font-semibold text-slate-900">¡Hola! Bienvenido a Giraldo Ramírez Comercializadora Ltda.</p>
              <p className="mt-1 text-slate-600 text-xs">
                ¿En qué proyecto de ingeniería, obra civil o infraestructura vial podemos apoyarle hoy?
              </p>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase font-bold text-slate-600">
                Opciones rápidas:
              </div>
              <button
                onClick={() => sendWhatsApp('Deseo cotizar una obra civil / infraestructura')}
                className="w-full text-left p-2 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium text-[#0f2444] transition-colors cursor-pointer"
              >
                🏗️ Cotizar obra civil o movimiento de tierras
              </button>
              <button
                onClick={() => sendWhatsApp('Deseo consultar sobre suministro de box culvert y obras hidráulicas')}
                className="w-full text-left p-2 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium text-[#0f2444] transition-colors cursor-pointer"
              >
                🌊 Obras hidráulicas y box culvert
              </button>
              <button
                onClick={() => sendWhatsApp('Deseo cotizar desmonte e instalación de cercas en concreto')}
                className="w-full text-left p-2 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium text-[#0f2444] transition-colors cursor-pointer"
              >
                🚧 Cercas perimetrales y derecho de vía
              </button>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp()}
              placeholder="Escriba su mensaje..."
              className="flex-1 px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2444]"
            />
            <button
              onClick={() => sendWhatsApp()}
              className="p-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-white/50"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};
