'use client';

import { useState, useEffect, useRef } from "react";
import {
  FileCode,
  FileText,
  BookOpen,
  Code,
  Rocket,
  GitMerge,
  GitCommit,
  Layout,
  PenTool,
  Zap,
  Server,
  Database,
  Cloud,
  Figma,
  GitBranch,
  ChevronRight,
  Trophy,
  Grid,
  Brain,
  Ship,
  RefreshCw,
  Repeat,
  ClipboardList,
  ListChecks,
  Paintbrush,
  Flame,
  Braces,
  Coffee,
  HardDrive,
  Network
} from "lucide-react";

// Helper function to generate random position within a range
const randomPosition = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Skill data: label, icon, x, y, group
const skills = [
  // Frontend (Top Left)
  { id: "html5", label: "HTML5", icon: <FileCode />, group: "frontend" },
  { id: "css3", label: "CSS3", icon: <FileText />, group: "frontend" },
  { id: "js", label: "JavaScript", icon: <Code />, group: "frontend" },
  { id: "ts", label: "TypeScript", icon: <BookOpen />, group: "frontend" },
  { id: "jquery", label: "jQuery", icon: <Zap />, group: "frontend" },
  { id: "reactjs", label: "React.js", icon: <Zap />, group: "frontend" },
  { id: "nextjs", label: "Next.js", icon: <Rocket />, group: "frontend" },
  { id: "redux", label: "Redux", icon: <GitMerge />, group: "frontend" },
  { id: "rtkquery", label: "RTK Query", icon: <GitCommit />, group: "frontend" },
  { id: "bootstrap", label: "Bootstrap", icon: <Layout />, group: "frontend" },
  { id: "sass", label: "SASS/SCSS", icon: <PenTool />, group: "frontend" },
  { id: "cssinjs", label: "CSS-in-JS", icon: <Paintbrush />, group: "frontend" },

  // Backend (Top Right)
  { id: "php", label: "PHP", icon: <Code />, group: "backend" },
  { id: "laravel", label: "Laravel", icon: <Flame />, group: "backend" },           // Better than FileText
  { id: "csharp", label: "C#", icon: <Braces />, group: "backend" },
  { id: "aspnet", label: "ASP.NET Core", icon: <Server />, group: "backend" },
  { id: "java", label: "Java", icon: <Coffee />, group: "backend" },
  { id: "sql", label: "SQL", icon: <Database />, group: "backend" },
  { id: "mysql", label: "MySQL", icon: <Database />, group: "backend" },
  { id: "sqlserver", label: "SQL Server", icon: <Database />, group: "backend" },
  { id: "redis", label: "Redis", icon: <HardDrive />, group: "backend" },
  { id: "microservices", label: "Microservices", icon: <Network />, group: "backend" },

  // Design (Bottom Left)
  { id: "adobexd", label: "Adobe XD", icon: <PenTool />, group: "design" },
  { id: "figma", label: "Figma", icon: <Figma />, group: "design" },

  // Collaboration (Bottom Right)
  { id: "git", label: "Git", icon: <GitBranch />, group: "collab" },
  { id: "docker", label: "Docker", icon: <Ship />, group: "collab" },
  { id: "agile", label: "Agile", icon: <RefreshCw />, group: "collab" },
  { id: "scrum", label: "Scrum", icon: <Repeat />, group: "collab" },
  { id: "jira", label: "Jira", icon: <ClipboardList />, group: "collab" },
  { id: "asana", label: "Asana", icon: <ListChecks />, group: "collab" },
];


// Helper for circular positions (centered in square card, with angle offset)
const circlePositions = (count: number, cardW: number, cardH: number, pad = 56, angleOffset = 0) => {
  const square = Math.min(cardW, cardH);
  const cx = square / 2;
  const cy = square / 2;
  const r = square / 2 - pad;
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2 + angleOffset;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });
};

const totalW = 1800, totalH = 1000;
const cardW = totalW / 2, cardH = totalH / 2;
const cardShortH = totalH / 4;

const frontendOffset = { x: -70, y: 40 };
const backendOffset = { x: 0, y: -20 };

const CARD_COLORS = [
  "bg-blue-400/90", // Frontend
  "bg-red-400/90", // Backend
  "bg-purple-400/90", // Design
  "bg-yellow-300/90" // Collaboration
];
const CARD_LABELS = [
  { label: "Frontend", icon: <FileCode /> },
  { label: "Backend", icon: <Server /> },
  { label: "Design", icon: <Figma /> },
  { label: "Collaboration", icon: <GitBranch /> },
];

const CARD_POSITIONS = [
  { x: 0, y: 0, align: "top-left" },
  { x: 1, y: 0, align: "top-right" },
  { x: 0, y: 1, align: "bottom-left" },
  { x: 1, y: 1, align: "bottom-right" },
];

// Card dot colors for title
const dotColors = [
  'bg-blue-400', // Frontend
  'bg-red-400', // Backend
  'bg-purple-400', // Design
  'bg-yellow-300', // Collaboration
];

// Only show inside borders for plus sign (thin)
const plusBorders = [
  'border-r border-b', // Frontend (top-left)
  'border-l border-b', // Backend (top-right)
  'border-r border-t', // Design (bottom-left)
  'border-l border-t', // Collaboration (bottom-right)
];

export default function Skills() {
  const [animationStep, setAnimationStep] = useState<'center' | 'distributed'>('center');
  const [bodySize, setBodySize] = useState({ width: 900, height: 600 });
  const [activeTab, setActiveTab] = useState<'skills' | 'algorithmic'>('skills');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer2 = setTimeout(() => setAnimationStep('distributed'), 400);
    return () => {
      clearTimeout(timer2);
    };
  }, []);

  // Responsive: update body size on mount and resize
  useEffect(() => {
    function updateSize() {
      if (bodyRef.current) {
        setBodySize({
          width: bodyRef.current.clientWidth,
          height: bodyRef.current.clientHeight,
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section id="skills" className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full px-8 pt-8 pb-4 bg-gradient-to-r from-blue-900/80 to-purple-700/60">
        <div className="h-1 w-10 bg-white mb-2 rounded" />
        <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">Technical Skills</h2>
      </div>
      <div className="w-full border-b border-white/20" />
      
      {/* Body */}
      <div className="section-4-body w-full flex flex-col flex-1 border border-white/20 shadow-lg">
        {activeTab === 'skills' && (
          <div 
            ref={bodyRef} 
            className="flex-1 w-full relative overflow-x-hidden overflow-y-auto p-4 md:p-0"
          >
            <div className="relative w-full">
              {/* Stacked Cards */}
              {CARD_LABELS.map((card, i) => {
                const zOrder = [13, 10, 12, 11];
                const corner = CARD_POSITIONS[i];
                const sectionW = bodySize.width;
                const sectionH = bodySize.height;
                // Responsive: always fill quarter
                const cardW = sectionW / 2;
                const cardH = sectionH / 2;
                // Offset position (100px up and left from center)
                const offsetLeft = (sectionW - cardW) / 2 - 100;
                const offsetTop = (sectionH - cardH) / 2 - 100;
                // Centered position
                const centerLeft = (sectionW - cardW) / 2;
                const centerTop = (sectionH - cardH) / 2;
                // Distributed position
                const distributedLeft = corner.x * (sectionW / 2);
                const distributedTop = corner.y * (sectionH / 2);
                let left = offsetLeft, top = offsetTop;
                if (animationStep === 'center') {
                  left = centerLeft;
                  top = centerTop;
                } else if (animationStep === 'distributed') {
                  left = distributedLeft;
                  top = distributedTop;
                }
                // Remove rounded corners after distributed
                const roundedClass = animationStep === 'distributed' ? '' : 'rounded-xl';
                const transparentColors = [
                  "bg-blue-400/40",
                  "bg-red-400/40",
                  "bg-purple-400/40",
                  "bg-yellow-300/40"
                ];
                // Only show inside borders for plus sign
                let borderClass = `${dotColors[i]} ${plusBorders[i]}`;
                let groupKey = card.label.toLowerCase();
                if (groupKey === 'collaboration') groupKey = 'collab';
                const groupSkills = skills.filter(s => s.group === groupKey);
                // Collaboration grid: 3 columns, 2 rows, centered; Design grid: 2 columns, centered
                let gridCols = 'grid-cols-5';
                let gridRows = '';
                let gridExtra = 'place-items-center content-center justify-center items-center';
                if (groupKey === 'collab') {
                  gridCols = 'grid-cols-3';
                  gridRows = 'grid-rows-2';
                  gridExtra = 'place-items-center content-center justify-center items-center';
                }
                if (groupKey === 'design') {
                  gridCols = 'grid-cols-2';
                  gridRows = '';
                  gridExtra = 'place-items-center content-center justify-center items-center';
                }
                return (
                  <div
                    key={card.label}
                    className={`absolute shadow-2xl ${transparentColors[i]} ${roundedClass} ${borderClass} transition-all duration-500 ease-in-out flex flex-col items-start justify-start `}
                    style={{
                      width: cardW,
                      height: cardH,
                      left: left,
                      top: top,
                      zIndex: zOrder[i],
                      boxShadow: animationStep === 'distributed' ? "0 8px 32px 0 rgba(0,0,0,0.18)" : "0 4px 16px 0 rgba(0,0,0,0.12)",
                      overflow: 'hidden',
                      backgroundClip: 'padding-box',
                    }}
                  >
                    <div className="flex items-center gap-2 px-6 pt-6 pb-2">
                      <span className={`w-4 h-4 rounded-full ${dotColors[i]} inline-block`} />
                      <span className={
                        animationStep === 'distributed'
                          ? 'text-xl md:text-2xl font-extrabold tracking-wide text-white drop-shadow-lg'
                          : 'text-base md:text-lg font-bold tracking-wide text-white drop-shadow-lg'
                      } style={{ marginLeft: animationStep !== 'distributed' ? '0.5rem' : 0 }}>
                        {card.label}
                      </span>
                    </div>
                    {/* Skills Orbs: only show after distributed */}
                    <div className="flex-1 flex items-center justify-center w-full h-full">
                      {animationStep === 'distributed' && (
                        <div className={(() => {
                          if (groupKey === 'collab') return 'w-full h-full grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-6';
                          if (groupKey === 'design') return 'w-full h-full grid grid-cols-2 gap-x-4 gap-y-6';
                          return 'w-full h-full grid grid-cols-5 gap-x-4 gap-y-6 content-center justify-center items-center';
                        })()}>
                          {groupSkills.map((skill, idx) => (
                            <div
                              key={skill.id}
                              className="flex flex-col items-center justify-center"
                            >
                              <span className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md border border-white/30 bg-white/30 text-white text-base md:text-lg mb-1">
                                {skill.icon}
                              </span>
                              <span className="text-xs md:text-sm text-white/90 font-medium text-center">
                                {skill.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <style jsx>{`
              @keyframes fade-in-orb {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .animate-fade-in-orb {
                animation: fade-in-orb 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}