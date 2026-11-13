import React from 'react';
import { ArrowUpRight, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROJECTS_LIST, Project } from '../data/companyData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onRequestQuote: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onRequestQuote,
}) => {

  const filteredProjects = PROJECTS_LIST;

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#d32f2f] mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
              <span>Portafolio de Obras</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2444] tracking-tight leading-tight">
              Proyectos que reflejan nuestra experiencia
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Algunos de nuestros trabajos en obra civil, vías, señalización y obras eléctricas.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="self-start md:self-end px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#d32f2f] hover:bg-[#b6171e] active:scale-[0.98] transition-all rounded-lg shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Solicitar cotización de proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Proyectos documentados */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#0f2444]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0f2444] flex items-center justify-center text-white">
                      <span className="text-sm font-bold">{project.contractTag}</span>
                    </div>
                  )}
                  {/* Contract Tag Chip */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#000e27]/85 backdrop-blur-sm rounded text-[10px] font-bold text-white tracking-wider uppercase">
                    {project.contractTag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0f2444] group-hover:text-[#d32f2f] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    {project.location ? (
                      <span className="flex items-center gap-1 truncate max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 text-[#d32f2f] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </span>
                    ) : <span />}
                    {project.year && (
                      <span className="flex items-center gap-1 font-semibold text-slate-700 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.year}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex items-center justify-between text-xs font-bold text-[#0f2444] group-hover:text-[#d32f2f] transition-colors pt-2 border-t border-slate-100">
                  <span>Ver ficha técnica de obra</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
