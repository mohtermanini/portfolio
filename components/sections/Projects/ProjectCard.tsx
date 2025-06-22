import React from "react";
import { Project } from "../Projects/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      data-card
      className={`relative group rounded-2xl min-h-[180px] sm:h-[240px] md:h-[280px] p-4 sm:p-5 md:p-6 shadow-xl border border-white/10 bg-black/30 backdrop-blur-xl flex flex-col text-white ${getRingClass(project)}`}
    >
      {/* Title and badge in a row */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-4 md:mb-4 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
            {project.icon}
          </div>
          <h3 className="text-base sm:text-xl font-bold text-white drop-shadow-sm break-words whitespace-normal">
            {project.name}
          </h3>
        </div>
        {project.typeBadge && (
          <span className={`flex items-center gap-1 px-3 sm:px-4 py-1 mt-1 sm:mt-0 rounded-full shadow-lg text-[11px] sm:text-xs font-bold ${project.typeBadge.color} whitespace-nowrap`}>
            <span className="w-4 h-4 flex-shrink-0">{project.typeBadge.icon}</span>
            {project.typeBadge.label}
          </span>
        )}
      </div>
      <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-3 flex-1">
        {project.description}
      </p>
      <div className="mt-auto flex items-end gap-1.5 sm:gap-2">
        <div className="flex flex-grow flex-wrap gap-1 sm:gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/10 text-white/90 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border border-white/20 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        {/* Eye icon button for url */}
        {project.url && (
          <button
            className="p-1 sm:p-1.5 md:p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-300 hover:text-blue-400 shadow-lg transition cursor-pointer"
            onClick={e => { e.stopPropagation(); window.open(project.url, '_blank', 'noopener,noreferrer'); }}
            aria-label="View Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

// Helper function to get ring color by type
function getRingClass(project: Project): string {
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