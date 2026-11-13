/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientsSection } from './components/ClientsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { BrochureModal } from './components/BrochureModal';
import { Service, Project } from './data/companyData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [brochureModalState, setBrochureModalState] = useState<{
    isOpen: boolean;
    tab: 'brochure' | 'certifications';
  }>({
    isOpen: false,
    tab: 'brochure',
  });

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setBrochureModalState({ isOpen: true, tab: 'brochure' });
  };

  const handleOpenCertifications = () => {
    setBrochureModalState({ isOpen: true, tab: 'certifications' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0d1c2f] flex flex-col selection:bg-[#da3433] selection:text-white">
      {/* Navigation Header */}
      <Header onRequestQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onRequestQuote={() => handleOpenQuote()} />

        {/* Corporate Profile (Nosotros, Historia, Misión, Visión, Valores) */}
        <AboutSection />

        {/* Services & Capabilities (9 Civil & Industrial disciplines) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* Clientes y relaciones empresariales */}
        <ClientsSection />

        {/* Projects Portfolio (Calenturitas, CCO, Box Culvert, Cercas, etc.) */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* News & Bulletins */}

        {/* Contact, Headquarters and Quick Quote Form */}
        <ContactSection
          onDownloadBrochure={handleOpenBrochure}
          onViewCertifications={handleOpenCertifications}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action WhatsApp Help Widget */}
      <WhatsAppFloatingButton />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedQuoteService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => handleOpenQuote()}
      />

      <BrochureModal
        isOpen={brochureModalState.isOpen}
        onClose={() => setBrochureModalState({ ...brochureModalState, isOpen: false })}
        tab={brochureModalState.tab}
      />
    </div>
  );
}
