import React, { useState } from 'react';
import { Megaphone, Bell, CheckCircle2, Send, Mail } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 500);
  };

  return (
    <section id="noticias" className="py-20 bg-[#f8f9ff] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
            <span>Comunicación Institucional</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
            Noticias y novedades
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Conozca los hitos recientes en el desarrollo de nuestras operaciones, reconocimientos de seguridad
            y convocatorias laborales en el Cesar y el país.
          </p>
        </div>

        {/* Institutional Bulletin Container */}
        <div className="bg-[#eff4ff] rounded-2xl p-6 sm:p-10 border border-blue-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white text-[#0f2444] shadow-sm flex items-center justify-center shrink-0 border border-blue-100">
              <Megaphone className="w-6 h-6 text-[#0f2444]" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5">
                <Bell className="w-3 h-3 text-[#d32f2f]" />
                <span>Sistema de Boletines Institucionales</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f2444]">
                Boletines y Comunicados Técnicos en Preparación
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                En este espacio se publicarán comunicados periódicos de avance de obra, convocatorias de empleo para
                cuadrillas de campo, personal técnico y memorias de responsabilidad social comunitaria.
              </p>
            </div>
          </div>

          {/* Subscription Action Form */}
          <div className="w-full lg:w-auto shrink-0">
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-3 rounded-xl flex items-center gap-2.5 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>¡Suscripción confirmada! Recibirá los boletines oficiales.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-96">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Su correo institucional"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f2444] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0f2444] hover:bg-[#000e27] active:scale-[0.98] transition-all rounded-lg shrink-0 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? 'Registrando...' : 'Suscribirme'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
