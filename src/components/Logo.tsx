import React from 'react';
import emblem from '../assets/images/logo-emblema.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', variant = 'full' }) => {
  const isLight = variant === 'light' || variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblema oficial (recorte de DOC/WhatsApp Image 2026-11-13 at 10.2ggg0.00 AM.jpeg) */}
      <div className={`relative shrink-0 flex items-center justify-center ${isLight ? 'bg-white rounded-md p-0.5' : ''}`}>
        <img
          src={emblem}
          alt="Logo Giraldo Ramírez Comercializadora"
          className="w-12 md:w-14 h-auto"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-extrabold tracking-tight leading-none text-base sm:text-lg md:text-xl ${
              isLight ? 'text-white' : 'text-[#0f2444]'
            }`}
          >
            Giraldo Ramírez
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
              isLight ? 'text-slate-300' : 'text-[#44474e]'
            }`}
          >
            Comercializadora Ltda.
          </span>
          {variant === 'full' && (
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.2 bg-[#d32f2f]/10 text-[#d32f2f] font-bold rounded">
              NIT 900302289-2
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
