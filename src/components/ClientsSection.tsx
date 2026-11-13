import React from 'react';
import { Pickaxe, Shield, Navigation, Fuel, Award } from 'lucide-react';
import { CLIENT_PARTNERS } from '../data/companyData';

export const ClientsSection: React.FC = () => {
  const getClientIcon = (iconType: string) => {
    switch (iconType) {
      case 'mining':
        return <Pickaxe className="w-6 h-6 text-[#0f2444]" />;
      case 'road':
      case 'civil':
        return <Shield className="w-6 h-6 text-[#0f2444]" />;
      case 'highway':
        return <Navigation className="w-6 h-6 text-[#0f2444]" />;
      case 'energy':
        return <Fuel className="w-6 h-6 text-[#0f2444]" />;
      default:
        return <Award className="w-6 h-6 text-[#0f2444]" />;
    }
  };

  const primaryClients = CLIENT_PARTNERS.filter((c) => c.category === 'principal');
  const secondaryClients = CLIENT_PARTNERS.filter((c) => c.category === 'relevante');

  return (
    <section id="clientes" className="py-20 bg-[#f8f9ff] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl text-center mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
            <span>Clientes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
            Empresas con las que hemos trabajado
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Empresas para las que hemos realizado trabajos.
          </p>
        </div>

        {/* Row 1: Primary Tier-1 Clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {primaryClients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0f2444]/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getClientIcon(client.iconType)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0f2444]">
                {client.name}
              </h3>
              {client.scope && (
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {client.scope}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Secondary Institutional Partners */}
        <div className="mt-8">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Otras empresas
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {secondaryClients.map((client) => (
              <div
                key={client.name}
                className="bg-white/80 rounded-xl p-4 border border-slate-200/80 text-center hover:bg-white hover:border-slate-300 transition-all"
              >
                <div className="text-sm font-bold text-[#0f2444]">
                  {client.name}
                </div>
                {client.scope && (
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {client.scope}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
