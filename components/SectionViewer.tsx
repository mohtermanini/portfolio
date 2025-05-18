"use client";

import WorkExperience from "./sections/WorkExperience/WorkExperience";
import Projects from "./sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Algorithmic from "@/components/sections/Algorithmic/Algorithmic";
import { JSX } from "react";
import Brief from "./sections/Brief/Brief";

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
