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
  Figma,
  GitBranch,
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

export const skills = [
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
  { id: "laravel", label: "Laravel", icon: <Flame />, group: "backend" },
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

export const CARD_LABELS = [
  { label: "Frontend", icon: <FileCode /> },
  { label: "Backend", icon: <Server /> },
  { label: "Design", icon: <Figma /> },
  { label: "Collaboration", icon: <GitBranch /> },
];

export const CARD_POSITIONS = [
  { x: 0, y: 0, align: "top-left" },
  { x: 1, y: 0, align: "top-right" },
  { x: 0, y: 1, align: "bottom-left" },
  { x: 1, y: 1, align: "bottom-right" },
];

export const dotColors = [
  'bg-blue-400', // Frontend
  'bg-red-400', // Backend
  'bg-purple-400', // Design
  'bg-yellow-300', // Collaboration
];

export const plusBorders = [
  'border-r border-b', // Frontend (top-left)
  'border-l border-b', // Backend (top-right)
  'border-r border-t', // Design (bottom-left)
  'border-l border-t', // Collaboration (bottom-right)
]; 