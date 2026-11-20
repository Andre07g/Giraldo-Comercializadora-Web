import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { VIDEOS_LIST, CompanyVideo } from '../data/companyData';

// El video solo se carga al pulsar: la página abre más rápido y no se
// contacta a YouTube hasta que la persona decide reproducirlo.
const VideoCard: React.FC<{ video: CompanyVideo; numero: number }> = ({ video, numero }) => {
  const [activo, setActivo] = useState(false);
  const formato = video.vertical ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div className={`relative w-full ${formato} bg-[#000e27] overflow-hidden`}>
      {activo ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
          title={`Video ${numero} de Giraldo Ramírez Comercializadora`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivo(true)}
          aria-label={`Reproducir video ${numero} de ${VIDEOS_LIST.length}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <span className="absolute inset-0 bg-[#0f2444]/20 group-hover:bg-transparent transition-colors" />
          <span className="absolute left-0 bottom-0 flex items-center gap-3 bg-[#d32f2f] group-hover:bg-white group-hover:text-[#d32f2f] text-white px-4 py-3 font-display uppercase tracking-wide text-base font-bold transition-colors">
            <Play className="w-5 h-5 fill-current" />
            Ver video
          </span>
        </button>
      )}
    </div>
  );
};

export const VideosSection: React.FC = () => {
  const principal = VIDEOS_LIST.find((v) => !v.vertical);
  const verticales = VIDEOS_LIST.filter((v) => v.vertical);

  return (
    <section id="videos" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-[#0f2444] leading-[0.95] max-w-3xl">
          Nuestro trabajo en video
        </h2>
        <p className="mt-5 text-lg text-slate-700 leading-snug max-w-xl">
          Mire cómo trabajamos en obra.
        </p>

        {principal && (
          <div className="mt-12 border-t-[6px] border-[#d32f2f]">
            <VideoCard video={principal} numero={VIDEOS_LIST.indexOf(principal) + 1} />
          </div>
        )}

        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {verticales.map((video) => (
            <div key={video.id} className="mx-auto w-full max-w-[22rem] sm:max-w-none">
              <VideoCard video={video} numero={VIDEOS_LIST.indexOf(video) + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
