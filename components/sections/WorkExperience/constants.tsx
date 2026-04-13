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
        'Led the design and development of an influencer analytics and campaign platform, integrating **Instagram and TikTok first-party APIs** to enable **real-time performance tracking and campaign analytics**.',
        'Drove key product and architectural decisions for the platform, defining both **features and system design** based on business requirements.',
        'Architected a **multi-tenant, multi-region** system supporting globally distributed clients, improving **scalability, data isolation, and reliability** across regions.',
        'Built and evolved a platform connecting casting directors, agencies, and talents, supporting casting workflows including **talent discovery, job board publishing,** and **collaboration between agencies and casting directors**.',
        'Designed and implemented **distributed data synchronization** across external systems, ensuring **consistent** and **reliable data** across multiple databases and services.',
        'Designed and maintained **cloud-native infrastructure** on **Google Cloud Platform**, leveraging **Cloud Run**, **VPC networks**, and **load balancers** to deliver **secure**, **scalable**, and **highly reliable services** supporting thousands of users.',
        'Improved system performance through **advanced SQL query tuning**, **optimized indexing**, and **caching strategies**, reducing **API response times** by over **50%** and significantly improving **data-heavy operations**.',
        'Implemented a **custom efficient shuffling algorithm**, improving a **key product API** by **60%**, transforming it from barely usable into a **highly performant** and **reliable endpoint**, and enabling **scalable handling** of large datasets.',
        'Introduced **observability** and **debugging practices** (e.g., **Laravel Telescope**, **Sentry**, **Google Cloud Log Explorer**), enabling **real-time error tracking** and significantly **faster issue resolution**.'
      ]
    }
  ],
  cheil: [
    {
      title: 'Web Developer',
      bullets: [
        'Contributed to the development of a **multi-country retail management platform** for **Samsung retailers**, centralizing **store operations**, **analytics**, and **automated reporting** across regions.',
        'Designed and developed **secure**, **scalable backend APIs** and **responsive user interfaces** using **Laravel**, **React**, and **Next.js**, applying **SOLID principles**, **modular architecture**, and **TDD**, along with **caching strategies** to reduce load times and accelerate feature delivery.',
        'Played a key role in building a **custom survey platform** for **Samsung**, delivering a **feature-rich admin panel** using **React**, **Next.js**, **Redux**, **RTK Query**, and **TypeScript**, improving **data collection efficiency** and **reporting workflows**.',
        'Contributed to the migration of a legacy **Laravel monolith** to a **microservices architecture** using **ASP.NET Core** and **SQL Server**, enabling a more **scalable** and **modular system**.',
        'Optimized **legacy web applications** using modern performance techniques such as **caching**, **bundling**, and **lazy loading**, improving **load speed** and overall performance.',
        'Collaborated within an **Agile environment** using **Jira** and **Scrum practices**, contributing to **efficient delivery cycles** and **cross-team alignment**.'
      ]
    }
  ],
  freelancer: [
    {
      title: 'Front End Developer',
      bullets: [
        'Developed a **responsive real estate platform** and **admin panel**, enabling efficient **property management** and **integrated analytics**, and delivering a **scalable**, **maintainable frontend architecture** using **React** and **Next.js**.'
      ]
    },
    {
      title: 'Web Designer',
      bullets: [
        'Designed a **scalable UI system** for a **hotel and property booking platform**, creating **150+ reusable components** and **consistent design patterns** that improved **development speed** and ensured a **unified user experience**.'
      ]
    }
  ],
  namaa: [
    {
      title: 'Full Stack Developer',
      bullets: [
        'Transformed an **Excel-based library system** into a **full-stack web application**, improving **operational efficiency**, reducing **manual errors**, and streamlining **access** for staff and users.'
      ]
    }
  ]
};

export const companies = [
  {
    name: 'Mediaslide',
    displayTitle: 'Mediaslide',
    period: 'Feb 2025 - Apr 2026',
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
    name: 'Namaa',
    displayTitle: 'Namaa Charitable Development Association',
    period: 'Jan 2021 - Apr 2023',
    logo: '/images/namaa-logo.png',
    description: descriptions.namaa
  },
  {
    name: 'Freelancer',
    displayTitle: 'Freelancer',
    period: 'Jan 2021 - Jul 2023',
    logo: '/images/freelancer.svg',
    description: descriptions.freelancer
  }
]; 