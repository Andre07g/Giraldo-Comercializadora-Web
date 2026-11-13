import React from 'react';
import { COMPANY_INFO, CORPORATE_VALUES } from '../data/companyData';
import companyTeamImage from '../assets/images/company-profile-team.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="bg-[#f1f3f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-[#0f2444] max-w-5xl leading-[0.95]">
          Experiencia, compromiso y soluciones para grandes proyectos
        </h2>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <figure className="lg:col-span-7 relative overflow-hidden bg-[#000e27]">
            <img
              src={companyTeamImage}
              alt="Equipo de Giraldo Ramírez durante una actividad en vía"
              loading="lazy"
              className="w-full aspect-[3/2] object-cover"
              referrerPolicy="no-referrer"
            />
            <figcaption className="absolute left-0 bottom-0 bg-white text-[#0f2444] px-4 py-2.5 font-display uppercase tracking-wide text-sm sm:text-base font-bold leading-none border-t-4 border-[#d32f2f]">
              Nuestro equipo · Actividad en vía
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <h3 className="text-3xl sm:text-4xl text-[#0f2444]">Origen y consolidación regional</h3>
            <div className="mt-5 space-y-4 text-lg text-slate-700 leading-snug">
              <p>
                <strong className="text-[#0f2444] font-semibold">{COMPANY_INFO.name}</strong> nació en
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
        </div>

        {/* Cifras como señal de obra: numeral grande, línea y texto */}
        <dl className="mt-14 grid sm:grid-cols-3 border-t-2 border-[#0f2444]">
          {[
            ['5', 'líneas de servicio: metalmecánica, vías, rocería, obras eléctricas y obra civil'],
            ['3', 'sedes: Valledupar, La Loma y Bosconia, en el Cesar'],
            [COMPANY_INFO.foundationYear, 'año en que nació la empresa en Valledupar'],
          ].map(([cifra, texto]) => (
            <div key={texto} className="py-6 sm:pr-8 border-b border-[#0f2444]/20 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-8 sm:first:pl-0">
              <dt className="font-display font-extrabold text-7xl sm:text-8xl text-[#d32f2f] leading-none tabular-nums">
                {cifra}
              </dt>
              <dd className="mt-2 text-base text-slate-700 max-w-xs leading-snug">{texto}</dd>
            </div>
          ))}
        </dl>

        {/* Principios y valores: texto sobre una regla, sin tarjetas ni íconos */}
        <div className="mt-16">
          <h3 className="text-3xl sm:text-4xl text-[#0f2444]">Principios y valores corporativos</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
            {CORPORATE_VALUES.map((val) => (
              <div key={val.name} className="border-t-4 border-[#0f2444] pt-4">
                <h4 className="text-2xl text-[#0f2444]">{val.name}</h4>
                <p className="mt-2 text-base text-slate-700 leading-snug">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Misión y visión */}
        <div className="mt-16 grid md:grid-cols-2">
          <div className="bg-[#0f2444] text-white p-8 sm:p-12">
            <h3 className="text-4xl sm:text-5xl">Misión</h3>
            <p className="mt-5 text-lg text-white/90 leading-snug">{COMPANY_INFO.mission}</p>
          </div>
          <div className="bg-white text-[#0f2444] p-8 sm:p-12 border-t-8 md:border-t-0 md:border-b-8 border-[#d32f2f]">
            <h3 className="text-4xl sm:text-5xl">Visión 2029</h3>
            <p className="mt-5 text-lg text-slate-700 leading-snug">{COMPANY_INFO.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
