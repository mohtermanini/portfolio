"use client";

import WorkExperience from "@/components/sections/WorkExperience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Algorithmic from "@/components/sections/Algorithmic";
import Brief from "@/components/sections/Brief";
import { JSX } from "react";

export type SectionKey = "work" | "projects" | "skills" | "algorithmic" | "brief";

const sections: Record<SectionKey, JSX.Element> = {
  work: <WorkExperience />,
  projects: <Projects />,
  skills: <Skills />,
  algorithmic: <Algorithmic />,
  brief: <Brief showName={true} />,
};

export default function SectionViewer({ selected }: { selected: SectionKey }) {
  return <div className="w-full h-full">{sections[selected]}</div>;
}
