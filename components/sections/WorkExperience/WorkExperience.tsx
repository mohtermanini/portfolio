import React, { useState } from 'react';
import Image from 'next/image';
import { companies, formatText } from './constants';
import { itemVariants } from './animationVariants';
import SectionHeader from '../../SectionHeader';

export default function WorkExperience() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work-experience" className="w-full h-screen flex flex-col bg-transparent overflow-hidden">
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(96, 165, 250, 0.5);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(96, 165, 250, 0.7);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(96, 165, 250, 0.5) rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <SectionHeader title="Work Experience" bg="bg-gradient-to-r from-white/10 via-white/10 to-transparent xl:backdrop-blur-none backdrop-blur-sm" variants={itemVariants} />
      <div className="w-full border-b border-white/20" />

      {/* Body: Timeline and Details */}
      <div className="flex flex-col md:flex-row w-full flex-1 min-h-0">
        {/* Timeline Column */}
        <div className="w-full md:w-1/3 lg:w-1/4 min-h-0 md:min-h-full py-4 md:py-8 px-2 md:px-8 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent md:from-black/40 md:via-black/20 backdrop-blur-sm overflow-hidden" />

          {/* Vertical Timeline Line with Animated Gradient - Only visible on desktop */}
          <div className="hidden md:block absolute left-[68px] top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          </div>

          {/* Mobile Cards Container */}
          <div className="md:hidden flex overflow-x-auto pb-2 gap-2 relative z-10 custom-scrollbar">
            {companies.map((company, idx) => (
              <button
                key={company.name}
                onClick={() => setSelected(idx)}
                className={`relative group transition-all duration-300 flex-shrink-0 cursor-pointer ${selected === idx
                    ? 'scale-[1.02]'
                    : 'hover:scale-[1.01]'
                  }`}
                aria-label={`Select ${company.name}`}
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${selected === idx
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                    : 'bg-white/5'
                  }`} />

                {/* Card Content */}
                <div className={`relative p-2.5 rounded-lg border-2 backdrop-blur-sm transition-all duration-300 ${selected === idx
                    ? 'border-blue-400/50 shadow-[0_0_20px_rgba(96,165,250,0.2)]'
                    : 'border-white/10 group-hover:border-blue-300/30'
                  }`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${selected === idx
                        ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-blue-400/30'
                        : 'bg-white/20 border-white/30 group-hover:border-blue-300/30'
                      } border shadow-sm overflow-hidden`}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${company.logo}`}
                        alt={company.name}
                        width={32}
                        height={32}
                        className="object-contain w-5 h-5"
                      />
                    </span>
                    <div className="flex flex-col items-start min-w-0 flex-1">
                      <span className={`text-sm font-bold transition-colors duration-300 whitespace-normal break-words ${selected === idx ? 'text-blue-200' : 'text-white'} drop-shadow-lg`}>
                        {company.name}
                      </span>
                      <span className="text-xs text-blue-200/80 mt-0.5">
                        {company.period}
                      </span>
                    </div>
                    {/* Selection Indicator */}
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${selected === idx
                        ? 'bg-blue-400 scale-100'
                        : 'bg-white/30 scale-75 group-hover:scale-90'
                      }`} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative z-10">
            {companies.map((company, idx) => (
              <div key={company.name} className="relative mb-12 last:mb-0 group">
                {/* Timeline Dot with Animated Glow */}
                <div className={`absolute left-[-5px] top-[-5px] w-4 h-4 rounded-full border-2 transition-all duration-300 ${selected === idx
                    ? 'bg-blue-400 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] scale-110'
                    : 'bg-white/10 border-white/30 group-hover:border-blue-300/50'
                  } z-10`} />

                {/* Connecting Line with Gradient */}
                <div className="absolute left-[68px] w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  className={`flex items-center w-full gap-4 px-4 py-3 rounded-xl transition-all duration-300 shadow-md border-2 backdrop-blur-sm group-hover:translate-x-1 cursor-pointer ${selected === idx
                      ? 'border-blue-400 bg-gradient-to-r from-blue-400/10 to-purple-400/5 shadow-[0_0_20px_rgba(96,165,250,0.2)]'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                    } focus:outline-none`}
                  onClick={() => setSelected(idx)}
                  aria-label={`Select ${company.name}`}
                >
                  <span className={`w-14 h-14 flex items-center justify-center rounded-lg transition-all duration-300 ${selected === idx
                      ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 border-blue-400/30'
                      : 'bg-white/20 border-white/30 group-hover:border-blue-300/30'
                    } border shadow-sm overflow-hidden`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${company.logo}`}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </span>
                  <div className="flex flex-col items-start min-w-0">
                    <span className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-normal break-words ${selected === idx ? 'text-blue-200' : 'text-white'} drop-shadow-lg`}>
                      {company.name}
                    </span>
                    <span className="text-xs text-blue-200/80 mt-1">
                      {company.period}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Details Panel */}
        <div className="flex-1 min-h-0 flex flex-col bg-transparent">
          <div className="w-full flex-1 min-h-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent md:from-white/10 md:via-white/5 backdrop-blur-sm shadow-2xl border border-white/20 p-3 md:p-6 transition-all duration-500 flex flex-col relative overflow-y-auto overflow-x-hidden custom-scrollbar box-border">
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4 relative z-10">
              <span className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-400/30 shadow-lg p-1.5 md:p-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${companies[selected].logo}`}
                  alt={companies[selected].name} width={32} height={32} className="object-contain w-6 h-6 md:w-8 md:h-8" />
              </span>
              <div className="flex flex-col lg:flex-row lg:items-center lg:flex-1">
                <span className="text-base md:text-2xl font-bold text-white drop-shadow-lg">{companies[selected].displayTitle}</span>
                <span className="text-xs md:text-base text-blue-200 lg:ml-auto">{companies[selected].period}</span>
              </div>
            </div>
            <div
              key={selected}
              className="text-sm md:text-base text-white/90 leading-relaxed whitespace-pre-line flex-1 min-h-0 h-0 relative z-10 animate-fadeIn"
            >
              {companies[selected].description.map((section: { title: string, bullets: string[] }, index: number) => {
                return (
                  <div key={index} className="mb-4">
                    <h3 className={'text-base md:text-xl font-bold text-blue-100 tracking-wide'}>{section.title}</h3>
                    <ul className="mt-3 space-y-3">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="relative p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                          <div className="flex items-start gap-2 md:gap-3">
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white/80 flex-shrink-0 mt-1.5 md:mt-2 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">{formatText(bullet)}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 