import React, { ReactNode } from "react";
import { Code, Rocket, Trophy } from "lucide-react";

interface Card {
  title: string;
  icon: ReactNode;
  iconBg: string;
  borderHover: string;
  textColor: string;
  content: ReactNode;
  link?: string;
}

export const cards: Card[] = [
  {
    title: "Competitive Programming",
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
    iconBg: "bg-blue-500/20 group-hover:bg-blue-500/30",
    borderHover: "hover:border-blue-400/30",
    textColor: "text-white",
    link: "https://www.stopstalk.com/user/profile/Mohamad_Termanini",
    content: (
      <p className="text-sm sm:text-base text-white/90 leading-relaxed">
        Solved 1,000+ coding problems, involving different algorithms and data structures.
      </p>
    )
  },
  {
    title: "Training & Development",
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
    iconBg: "bg-purple-500/20 group-hover:bg-purple-500/30",
    borderHover: "hover:border-purple-400/30",
    textColor: "text-white",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
          <span className="text-sm sm:text-base text-white/80">
            Participated in coding camps and training sessions focused on algorithmic thinking and problem-solving under pressure.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
          <span className="text-sm sm:text-base text-white/80">
            Gained experience in team-based problem solving, time-limited contests and optimizing for memory and time constraints.
          </span>
        </li>
      </ul>
    )
  },
  {
    title: "Awards",
    icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
    iconBg: "bg-green-500/20 group-hover:bg-green-500/30",
    borderHover: "hover:border-green-400/30",
    textColor: "text-white",
    link: "https://drive.google.com/file/d/1VJ6zlLq7ZwnR4rp4RKh2JL3FhgnvXq0n/view?usp=sharing",
    content: (
      <p className="text-sm sm:text-base text-white/90 leading-relaxed">
        Achieved 3rd place in the Aleppo University Collegiate Programming Contest, competing against +100 participants in algorithms and data structures challenges.
      </p>
    )
  },
]; 