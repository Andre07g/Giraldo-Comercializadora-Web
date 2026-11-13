import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_LIST, Project } from '../data/companyData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onRequestQuote: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onRequestQuote,
}) => {
  return (
    <section id="proyectos" className="bg-[#0f2444] text-white">
      <div className="barrera" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Proyectos que reflejan nuestra experiencia
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-snug max-w-xl">
              Algunos de nuestros trabajos en obra civil, vías, señalización y obras eléctricas.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="self-start md:self-end px-6 py-3.5 font-display uppercase tracking-wide text-base font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] transition-colors flex items-center gap-2.5 shrink-0 cursor-pointer"
          >
            <span>Solicitar cotización de proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Una obra por fila, la foto manda */}
        <div className="mt-14 sm:mt-20 space-y-14 sm:space-y-20">
          {PROJECTS_LIST.map((project, index) => {
            const invertida = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-center"
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Ver ficha de ${project.title}`}
                  className={`group relative block overflow-hidden bg-[#000e27] cursor-pointer md:col-span-7 ${
                    invertida ? 'md:order-2' : ''
                  }`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </button>

                <div className={`md:col-span-5 ${invertida ? 'md:order-1' : ''}`}>
                  <h3 className="text-4xl sm:text-5xl leading-[0.95]">{project.title}</h3>
                  <p className="mt-3 font-display uppercase tracking-wide text-base font-semibold text-white/70">
                    <span className="inline-block bg-[#d32f2f] text-white px-2 py-0.5 mr-2">{project.contractTag}</span>
                    {project.location}
                  </p>
                  <p className="mt-4 text-lg text-white/85 leading-snug">{project.summary}</p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="mt-6 inline-flex items-center gap-2 font-display uppercase tracking-wide text-base font-bold border-b-2 border-[#d32f2f] pb-1 hover:gap-3 transition-all cursor-pointer"
                  >
                    Ver ficha técnica de obra
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
