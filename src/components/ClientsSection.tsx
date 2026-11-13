import React from 'react';
import { CLIENT_PARTNERS } from '../data/companyData';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clientes" className="bg-[#f1f3f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0f2444] max-w-3xl">
          Empresas con las que hemos trabajado
        </h2>
        <p className="mt-4 text-lg text-slate-700">Empresas para las que hemos realizado trabajos.</p>

        <ul className="mt-10 border-t-2 border-[#0f2444] grid sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_PARTNERS.map((client) => (
            <li
              key={client.name}
              className="py-6 pr-6 border-b border-[#0f2444]/20 flex flex-col"
            >
              <span className="font-display uppercase text-3xl sm:text-4xl font-bold text-[#0f2444] leading-none">
                {client.name}
              </span>
              {client.scope && (
                <span className="mt-2 text-base text-slate-600">{client.scope}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
