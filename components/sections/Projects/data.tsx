import React from "react";
import { Gamepad2, Globe2, Server, BookOpen, ClipboardList, Home, Book, Utensils, Users, Monitor, Database, Paintbrush, Layers } from "lucide-react";
import { TypeBadges, Project } from "./types";

export const typeBadges: TypeBadges = {
  "Frontend": { label: "Frontend", color: "bg-gradient-to-r from-blue-400 to-cyan-400 text-white", icon: <Monitor className="w-4 h-4 mr-1" /> },
  "Backend": { label: "Backend", color: "bg-gradient-to-r from-purple-500 to-blue-700 text-white", icon: <Database className="w-4 h-4 mr-1" /> },
  "Design": { label: "Design", color: "bg-gradient-to-r from-pink-500 to-yellow-300 text-white", icon: <Paintbrush className="w-4 h-4 mr-1" /> },
  "Game": { label: "Game", color: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white", icon: <Gamepad2 className="w-4 h-4 mr-1" /> },
  "Full Stack": { label: "Full Stack", color: "bg-gradient-to-r from-green-400 to-blue-400 text-white", icon: <Layers className="w-4 h-4 mr-1" /> },
};

export const projects: Project[] = [
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
export const tagOrder = [
  "PHP", "Laravel", "C#", "ASP.NET Core", "SQL Server", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "SASS", "jQuery", "React", "Next.js", "Redux", "TypeScript", "Adobe XD", "Microservices"
]; 