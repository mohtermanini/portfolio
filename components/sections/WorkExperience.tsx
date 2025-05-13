import React, { useState } from 'react';
import Image from 'next/image';

// Function to convert markdown bold to HTML
const formatText = (text: string) => {
  const parts = [];
  let lastIndex = 0;
  const regex = /\*\*(.*?)\*\*/g;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
};


// Refactored descriptions for easier section handling
const descriptions = {
  cheil: [
    {
      title: 'Web Developer',
      bullets: [
        'Developed a **multi-country retail management platform** for **Samsung retailers**, centralizing store operations and enabling automated reporting across regions.',
        'Built secure, scalable **backend APIs** with **Laravel** and responsive **frontend interfaces** using **React/Next.js** and **Bootstrap**, applying **SOLID** principles, **modular architecture**, **TDD**, and **caching** strategies — reducing load times, minimizing bugs and accelerating feature delivery.',
        'Played a key role in building a **survey platform** for **Samsung**, delivering a feature-rich admin panel with **React/Next.js**, **Redux**, **RTK Query**, and **TypeScript** — enabling faster data collection, improved data management, and streamlined reporting.',
        'Applied **Agile** methodologies using **Jira** and daily **Scrum** meetings — helping the team identify blockers early, align priorities, and deliver key features on time.',
        'Participated in migration of a **Laravel monolithic** to a **microservices architecture** using **ASP.NET Core** and **SQL Server**, incorporating Elasticsearch, service registry, and load balancing.',
        '**Optimized** a **legacy website** using modern web techniques such as **caching**, **bundling**, **lazy loading** and **templating** — improving performance and load speed.'
      ]
    }
  ],
  freelancer: [
    {
      title: 'Front End Developer',
      bullets: [
        'Built a responsive **real estate platform** and admin panel to support efficient property management and integrated analytics, using **React/Next.js** to deliver a modern, maintainable and scalable frontend. Collaborated with backend teams to define secure APIs and ensure seamless cross-device performance.'
      ]
    },
    {
      title: 'Back end Developer',
      bullets: [
        'Developed a web platform **connecting modeling agencies with brands and casting directors**.',
        'Reduced API response time by over **50%** through **advanced SQL query tuning**, **efficient indexing**, use of **precomputed columns**, and **denormalized intermediate tables**.',
        'Implemented a **smart shuffling mechanism** to randomize paginated results per user session by generating and caching offset positions — improving performance by **40%** and fulfilling **key product requirements**.',
        'Applied **caching strategies**, **optimized Docker setup**, enabled **GZIP compression**, and implemented **code-level caching** — resulting in a **30%** improvement in system speed.',
        'Utilized **advanced debugging and monitoring tools** (**Laravel Telescope**, **Sentry**) — enabling real-time error tracking and faster issue resolution.',
        'Maintained clean code structure using the **Repository Pattern**, and contributed to a **multi-tenant SaaS architecture** with data partially **synced** from **external databases**.'
      ]
    },
    {
      title: 'Web Designer',
      bullets: [
        'Designed user interfaces using Adobe XD for a large-scale hotel and property booking website.',
        'Created +80 user interfaces, including +50 unique layouts focused on delivering optimal UI/UX.',
        'Built +150 reusable components — enabling faster turnaround times and ensuring consistent design elements.'
      ]
    }
  ],
  namaa: [
    {
      title: 'Full Stack Developer',
      bullets: [
        '**Upgraded** an **Excel-based library system** to a **full-stack web application** using **Laravel**, **MySQL**, and a responsive admin panel built with **HTML5**, **CSS3**, **SASS**, **Bootstrap**, **JavaScript** and **jQuery** — improving library operations, reducing errors and enhancing accessibility for both staff and users.'
      ]
    }
  ]
};

const companies = [
  {
    name: 'Cheil (Samsung)',
    displayTitle: 'Cheil Middle East & Africa under Samsung Group',
    period: 'Aug 2023 - Feb 2025',
    logo: '/images/cheil-logo.svg',
    description: descriptions.cheil
  },
  {
    name: 'Freelancer',
    displayTitle: 'Freelancer',
    period: 'Jan 2021 - Jul 2023',
    logo: '/images/freelancer.svg',
    description: descriptions.freelancer
  },
  {
    name: 'Namaa',
    displayTitle: 'Namaa Charitable Development Association',
    period: 'Jan 2021 - Apr 2023',
    logo: '/images/namaa-logo.png',
    description: descriptions.namaa
  }
];

// Add custom scrollbar styles
const customScrollbarStyles = `
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
`;

export default function WorkExperience() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work-experience" className="w-full h-screen flex flex-col bg-transparent overflow-hidden">
      <style jsx>{`
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
        ${customScrollbarStyles}
      `}</style>

      {/* Header */}
      <div className="w-full px-8 pt-8 pb-4" style={{ background: 'background-color: rgba(3, 19, 26, 1)' }}>
        <div className="h-1 w-10 bg-white mb-2 rounded" />
        <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">Work Experience</h2>
      </div>
      <div className="w-full border-b border-white/20" />

      {/* Body: Timeline and Details */}
      <div className="flex flex-col md:flex-row w-full flex-1 min-h-0">
        {/* Timeline Column */}
        <div className="w-full md:w-1/3 lg:w-1/4 min-h-[400px] md:min-h-full py-12 px-4 md:px-8 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/50 rounded-r-3xl overflow-hidden" />

          {/* Vertical Timeline Line with Animated Gradient */}
          <div className="absolute left-[68px] top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          </div>

          {companies.map((company, idx) => (
            <div key={company.name} className="relative mb-16 last:mb-0 group">
              {/* Timeline Dot with Animated Glow */}
              <div className={`absolute left-[-5px] top-[-5px] w-4 h-4 rounded-full border-2 transition-all duration-300 ${selected === idx
                  ? 'bg-blue-400 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] scale-110'
                  : 'bg-white/10 border-white/30 group-hover:border-blue-300/50'
                } z-10`} />

              {/* Connecting Line with Gradient */}
              <div className="absolute left-[68px] w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                className={`flex items-center w-full gap-4 px-4 py-4 rounded-xl transition-all duration-300 shadow-md border-2 backdrop-blur-md group-hover:translate-x-1 cursor-pointer ${selected === idx
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
                  <Image src={company.logo} alt={company.name} width={48} height={48} className="object-contain" />
                </span>
                <div className="flex flex-col items-start min-w-0">
                  <span className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${selected === idx ? 'text-blue-200' : 'text-white'
                    } drop-shadow-lg`}>{company.name}</span>
                  <span className="text-xs text-blue-200/80 mt-1">{company.period}</span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Details Panel */}
        <div className="flex-1 min-h-0 flex flex-col bg-transparent">
          <div className="w-full flex-1 min-h-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md shadow-2xl border border-white/20 p-6 md:p-8 transition-all duration-500 flex flex-col relative overflow-y-auto overflow-x-hidden custom-scrollbar box-border">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-400/30 shadow-lg p-2">
                <Image src={companies[selected].logo} alt={companies[selected].name} width={48} height={48} className="object-contain" />
              </span>
              <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{companies[selected].displayTitle}</span>
              <span className="text-sm md:text-base text-blue-200 ml-auto">{companies[selected].period}</span>
            </div>
            <div
              key={selected}
              className="text-sm md:text-base text-white/90 leading-relaxed whitespace-pre-line flex-1 min-h-0 h-0 relative z-10 animate-fadeIn"
            >
              {companies[selected].description.map((section: { title: string, bullets: string[] }, index: number) => {
                return (
                  <div key={index} className="mb-6">
                    <h3 className={'text-lg md:text-xl font-bold text-blue-100 tracking-wide'}>{section.title}</h3>
                    <ul className="mt-2 space-y-2">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="pl-0 list-disc list-inside text-white/90">{formatText(bullet)}</li>
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
