import React from 'react';

// Function to convert markdown bold to HTML
export const formatText = (text: string) => {
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

export const descriptions = {
  mediaslide: [
    {
      title: 'Full Stack Developer',
      bullets: [
        'Developed a **web platform connecting modeling agencies with brands and casting directors**.',
        'Reduced API response time by over **50%** through **advanced SQL query tuning**, **efficient indexing**, use of **precomputed columns**, and **denormalized intermediate tables** — significantly improving data-heavy page loads.',
        'Implemented a **smart shuffling algorithm** — boosting performance of a **key product API** by **60%** and transforming it from barely usable to highly performant and reliable. Applied caching strategies,',
        'Applied **caching strategies**, **optimized Docker setup**, enabled **GZIP compression**, implemented **code-level caching** and integrated a **search engine** — resulting in a **30%** improvement in system speed.',
        'Utilized **advanced debugging and monitoring tools** (e.g., **Laravel Telescope**, **Sentry** and **Google Cloud Log Explorer**) — enabling real-time error tracking, faster issue resolution, and reduced downtime.',
        'Maintained clean code structure using the **Repository Pattern**, and contributed to a **multi-tenant SaaS architecture** with data partially **synced** from **external databases**.'
      ]
    }
  ],
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
      title: 'Web Designer',
      bullets: [
        'Designed user interfaces using Adobe XD for a large-scale hotel and property booking website.',
        'Created **+80** user interfaces, including **+50** unique layouts focused on delivering optimal UI/UX.',
        'Built **+150** reusable components — enabling faster turnaround times and ensuring consistent design elements.'
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

export const companies = [
  {
    name: 'Mediaslide',
    displayTitle: 'Mediaslide',
    period: 'Feb 2025 - Present',
    logo: '/images/mediaslide-logo.jpeg',
    description: descriptions.mediaslide
  },
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