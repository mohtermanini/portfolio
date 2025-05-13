import { Sparkles, Gamepad2, Globe2, Server, BookOpen, Building2, ClipboardList, Home, Book, Utensils, Users, ArrowLeft, ArrowRight, Smartphone, Monitor, Paintbrush, Layers, Terminal, Database, X } from "lucide-react";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const typeBadges = {
  "Frontend": { label: "Frontend", color: "bg-gradient-to-r from-blue-400 to-cyan-400 text-white", icon: <Monitor className="w-4 h-4 mr-1" /> },
  "Backend": { label: "Backend", color: "bg-gradient-to-r from-purple-500 to-blue-700 text-white", icon: <Database className="w-4 h-4 mr-1" /> },
  "Design": { label: "Design", color: "bg-gradient-to-r from-pink-500 to-yellow-300 text-white", icon: <Paintbrush className="w-4 h-4 mr-1" /> },
  "Game": { label: "Game", color: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white", icon: <Gamepad2 className="w-4 h-4 mr-1" /> },
  "Full Stack": { label: "Full Stack", color: "bg-gradient-to-r from-green-400 to-blue-400 text-white", icon: <Layers className="w-4 h-4 mr-1" /> },
};

const projects = [
  {
    name: "Retail On Site",
    description: "Multi-country platform for Samsung retailers to manage store operations, including deployments, sales, and marketing.",
    tags: ["PHP", "Laravel", "SQL Server", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "SASS"],
    icon: <Server className="w-6 h-6 text-blue-400" />,
    fun: false,
    typeBadge: typeBadges["Full Stack"],
  },
  {
    name: "Retail On Site V2",
    description: "Rewritten version of Retail On Site using a microservices architecture to enhance scalability, performance, and maintainability.",
    tags: ["C#", "ASP.NET Core", "SQL Server", "React", "Next.js", "Redux", "Microservices"],
    icon: <Server className="w-6 h-6 text-blue-400" />,
    fun: false,
    typeBadge: typeBadges["Full Stack"],
  },
  {
    name: "Survey Hub",
    description: "Survey platform enabling easy creation and distribution of surveys to employees across Samsung stores, with detailed response tracking and insights.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Redux", "TypeScript"],
    icon: <ClipboardList className="w-6 h-6 text-pink-400" />,
    fun: false,
    typeBadge: typeBadges["Frontend"],
  },
  {
    name: "Model Casting",
    description: "Platform connecting modeling agencies, brands, and casting directors in one place.",
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "React", "Next.js"],
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    fun: false,
    typeBadge: typeBadges["Backend"],
  },
  {
    name: "Namaa",
    description: "A modern library system to manage users, subscriptions, and book lending efficiently.",
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    icon: <Book className="w-6 h-6 text-green-400" />,
    fun: false,
    typeBadge: typeBadges["Full Stack"],
  },
  {
    name: "Real Estate",
    description: "Real estate platform to list, manage, and rent properties through a user-friendly interface.",
    tags: ["React", "Next.js", "Redux"],
    icon: <Home className="w-6 h-6 text-purple-400" />,
    fun: false,
    typeBadge: typeBadges["Frontend"],
  },
  {
    name: "Sihati Blog",
    description: "Medical blog and consultation platform for publishing wellness articles and connecting with users.",
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: <Globe2 className="w-6 h-6 text-cyan-400" />,
    fun: false,
    typeBadge: typeBadges["Full Stack"],
  },
  {
    name: "Easybook",
    description: "Booking platform for large hotels and property rentals, designed for scalability and ease of use.",
    tags: ["Adobe XD", "UI/UX"],
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
    fun: false,
    typeBadge: typeBadges["Design"],
    url: "https://xd.adobe.com/view/ed86e361-e04f-45de-9a67-0d89e483c2a4-b8d5",
  },
  {
    name: "FlyFood",
    description: "Platform for online food ordering and delivery.",
    tags: ["Adobe XD", "UI/UX"],
    icon: <Utensils className="w-6 h-6 text-red-400" />,
    fun: false,
    typeBadge: typeBadges["Design"],
    url: "https://xd.adobe.com/view/5729fd02-839b-4b85-ab46-6b3e6a5b0a53-027a",
  },
  {
    name: "Battleships",
    description: "A multiplayer board game inspired by Battleship, featuring a war-themed interface and classic turn-based gameplay.",
    tags: ["HTML", "CSS", "JavaScript", "SASS", "Bootstrap"],
    icon: <Gamepad2 className="w-6 h-6 text-pink-400" />,
    fun: true,
    typeBadge: typeBadges["Game"],
    url: "https://mohtermanini.github.io/Battleship",
  },
  {
    name: "Memory Cards",
    description: "A fun memory game that challenges focus and recall through card-matching mechanics.",
    tags: ["HTML", "CSS", "JavaScript", "SASS", "Bootstrap"],
    icon: <Gamepad2 className="w-6 h-6 text-yellow-400" />,
    fun: true,
    typeBadge: typeBadges["Game"],
    url: "https://mohtermanini.github.io/Memory-Card",
  },
];

// Custom tag order for filter
const tagOrder = [
  "PHP", "Laravel", "C#", "ASP.NET Core", "SQL Server", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "SASS", "jQuery", "React", "Next.js", "Redux", "TypeScript", "Adobe XD", "Microservices"
];

function getGridConfig() {
  if (typeof window === 'undefined') return { cols: 1, rows: 1 };
  if (window.innerWidth >= 1280) return { cols: 3, rows: 2 }; // 3x2 grid
  if (window.innerWidth >= 768) return { cols: 2, rows: 2 }; // 2x2 grid
  return { cols: 1, rows: 1 };
}

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = React.useRef<any>(null);

  // Extract all unique tags and order them by tagOrder
  const allTags = tagOrder.filter(tag => projects.some(p => p.tags.includes(tag)));

  // Tag filter logic
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)));

  const totalSlides = Math.ceil(filteredProjects.length / 6);

  function toggleTag(tag: string) {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  }

  // Ring color by type
  function getRingClass(project: any) {
    if (project.typeBadge) {
      switch (project.typeBadge.label) {
        case "Frontend":
          return "ring-2 ring-blue-400/40";
        case "Backend":
          return "ring-2 ring-purple-400/40";
        case "Design":
          return "ring-2 ring-pink-400/40";
        case "Full Stack":
          return "ring-2 ring-green-400/40";
        case "Game":
          return "ring-2 ring-yellow-400/40";
        default:
          return "";
      }
    }
    return "";
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      carouselRef.current?.previous();
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      carouselRef.current?.next();
    }
  };

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full px-8 pt-8 pb-4 bg-gradient-to-r from-blue-900/50 to-slate-800/50 border-b border-white/10">
        <div className="h-1 w-10 bg-white mb-2 rounded" />
        <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">Projects</h2>
      </div>
      <div className="w-full border-b border-white/20" />
      <div className="relative bg-gradient-to-br from-blue-900/30 to-slate-800/30 border border-white/10">
        {/* Tag Filter Bar */}
        <div className="w-full px-4 md:px-8 flex flex-wrap gap-2 items-center mt-6 mb-5">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full border text-xs font-medium transition-all duration-200
                ${selectedTags.includes(tag)
                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30 backdrop-blur-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-sm border-white/20'}
              `}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              title="Clear selected tags"
              aria-label="Clear selected tags"
              className="ml-2 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition border border-white/20 backdrop-blur-md shadow-sm flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
        {/* Body */}
        <div className="relative px-4 md:px-8 pt-4 pb-8 overflow-y-hidden">
          <Carousel
            ref={carouselRef}
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1536 },
                items: 1,
                partialVisibilityGutter: 40
              },
              desktop: {
                breakpoint: { max: 1536, min: 1024 },
                items: 1,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: { max: 1024, min: 640 },
                items: 1,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: { max: 640, min: 0 },
                items: 1,
                partialVisibilityGutter: 20
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            beforeChange={(nextSlide) => {
              if (nextSlide < 0 || nextSlide >= totalSlides) {
                return false;
              }
              setCurrentSlide(nextSlide);
              return true;
            }}
          >
            {Array.from({ length: Math.ceil(filteredProjects.length / 6) }).map((_, slideIdx) => (
              <div key={slideIdx} className="w-full overflow-x-visible">
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 max-w-screen-xl w-full p-1">
                  {filteredProjects.slice(slideIdx * 6, slideIdx * 6 + 6).map((project, idx) => (
                    <div
                      key={project.name}
                      data-card
                      className={`relative group rounded-2xl p-6 shadow-xl border border-white/10 bg-black/30 backdrop-blur-xl flex flex-col h-[280px] text-white ${getRingClass(project)}`}
                    >
                      {/* Title and badge in a row */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {project.icon}
                          <h3 className="text-xl font-bold text-white drop-shadow-sm break-words whitespace-normal">
                            {project.name}
                          </h3>
                        </div>
                        {project.typeBadge && (
                          <span className={`px-3 py-1 rounded-full shadow-lg flex items-center text-xs font-bold ${project.typeBadge.color} whitespace-nowrap`}>
                            {project.typeBadge.icon}
                            {project.typeBadge.label}
                          </span>
                        )}
                      </div>
                      <p className="text-white/90 mb-3 flex-1">
                        {project.description}
                      </p>
                      <div className="mt-auto flex items-end gap-2">
                        <div className="flex flex-grow flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-white/90 px-2 py-1 rounded-full text-xs font-medium border border-white/20 backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Eye icon button for url */}
                        {project.url && (
                          <button
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-300 hover:text-blue-400 shadow-lg transition cursor-pointer"
                            onClick={e => { e.stopPropagation(); window.open(project.url, '_blank', 'noopener,noreferrer'); }}
                            aria-label="View Project"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
          <div className="flex justify-end mt-4 gap-2">
            <button
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={handlePrev}
              aria-label="Previous projects"
              disabled={currentSlide <= 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={handleNext}
              aria-label="Next projects"
              disabled={currentSlide >= totalSlides - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 