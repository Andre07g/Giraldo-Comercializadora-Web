import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Download,
  FileCheck2,
  Send,
  MessageSquare,
  Building,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface ContactSectionProps {
  onDownloadBrochure: () => void;
  onViewCertifications: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onDownloadBrochure,
  onViewCertifications,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    service: 'Obras Civiles y Arquitectónicas',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Create formatted message for WhatsApp
    const message = `*SOLICITUD DE COTIZACIÓN - GIRALDO RAMÍREZ COMERCIALIZADORA LTDA.*%0A%0A` +
      `*Solicitante:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Empresa:* ${encodeURIComponent(formData.company || 'Particular / Contratista')}%0A` +
      `*Teléfono:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Correo:* ${encodeURIComponent(formData.email || 'No especificado')}%0A` +
      `*Servicio de Interés:* ${encodeURIComponent(formData.service)}%0A` +
      `*Detalles del Proyecto:* ${encodeURIComponent(formData.details || 'Solicitud de contacto y pliego de condiciones.')}`;

    setSubmitted(true);

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/573183441355?text=${message}`, '_blank');
    }, 400);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
            <span>Atención Empresarial y Cotizaciones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
            Hablemos de su próximo proyecto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Permítanos cotizarle o participar en sus procesos licitatorios y operativos. Respondemos a solicitudes de
            propuesta, presupuestos de obra civil y estudios preliminares con prontitud y rigor.
          </p>
        </div>

        {/* 2-Column Split: Info & Fast Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Corporate Office Info */}
          <div className="lg:col-span-5 bg-[#f8f9ff] rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[#0f2444] text-white rounded mb-3">
              Sede Principal
            </div>

            <h3 className="text-xl font-extrabold text-[#0f2444]">
              {COMPANY_INFO.name}
            </h3>
            <div className="text-xs font-bold text-[#d32f2f] mt-0.5">
              NIT: {COMPANY_INFO.nit}
            </div>

            {/* Address & Contacts */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Dirección Principal:</div>
                  <div>{COMPANY_INFO.addresses.principal}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#0f2444] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Sedes:</div>
                  <div>Valledupar, La Loma y Bosconia, Cesar</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Líneas Telefónicas & WhatsApp:</div>
                  <div className="text-slate-800 font-medium">
                    {COMPANY_INFO.phones[0].number} / {COMPANY_INFO.phones[1].number}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0f2444] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Correo Electrónico:</div>
                  <div className="text-slate-800">{COMPANY_INFO.emails[0]}</div>
                  <div className="text-slate-500 text-xs">{COMPANY_INFO.emails[1]}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Horarios de Atención:</div>
                  <div>{COMPANY_INFO.hours.weekdays}</div>
                  <div>{COMPANY_INFO.hours.saturdays}</div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onDownloadBrochure}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] active:scale-[0.98] rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar BROCHURE</span>
              </button>

              <button
                onClick={onViewCertifications}
                className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#0f2444] hover:bg-[#000e27] active:scale-[0.98] rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Certificaciones RUES / RUT</span>
              </button>
            </div>

            {/* 3 Operational Hubs Chips */}
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="text-xs font-bold text-[#0f2444]">Valledupar</div>
                <div className="text-[10px] text-slate-500">Sede Principal</div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="text-xs font-bold text-[#0f2444]">La Loma</div>
                <div className="text-[10px] text-slate-500">Cesar</div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="text-xs font-bold text-[#0f2444]">Bosconia</div>
                <div className="text-[10px] text-slate-500">Cesar</div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Canal de Contacto Rápido
            </div>
            <h3 className="text-xl font-bold text-[#0f2444]">
              Escríbanos directamente
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
              Complete los datos y le responderemos a la brevedad con propuesta técnica o cotización.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-900">
                  ¡Solicitud Enviada con Éxito!
                </h4>
                <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto">
                  Hemos transferido su requerimiento al equipo comercial de Giraldo Ramírez Comercializadora Ltda.
                  También abrimos su canal de WhatsApp para atención inmediata.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-5 py-2 text-xs font-bold text-white bg-[#0f2444] rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre completo / Representante Legal *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. Ing. Carlos Martínez"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Empresa / Entidad Contratante
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Consorcio Vial del Cesar"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. +57 318 000 0000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contacto@empresa.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Servicio de interés *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Suministro de Personal Técnico y Operativo">
                      Suministro de Personal Técnico y Operativo
                    </option>
                    <option value="Cotización Integral de Licitación">
                      Cotización Integral de Licitación / Pliego
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Descripción del proyecto o solicitud de cotización
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Indique ubicación aproximada, volumen o alcance estimado, plazos previstos..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f2444] text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] active:scale-[0.98] transition-all rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar solicitud vía WhatsApp / Email</span>
                </button>
                <div className="text-[11px] text-slate-600 text-center">
                  * Sus datos serán tratados conforme a la política de privacidad de contratación empresarial.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
