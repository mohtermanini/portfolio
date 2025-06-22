"use client";

import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import SectionViewer, { SectionKey } from "@/components/SectionViewer";
import SectionCloseButton from "@/components/SectionCloseButton";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("brief");
  const [isSectionViewVisible, setIsSectionViewVisible] = useState(true);
  const showNameLeft = selectedSection !== "brief";

  const handleSectionSelect = (id: string) => {
    setSelectedSection(id as SectionKey);
    setIsSectionViewVisible(true);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Panel - Always visible */}
      <aside className={`w-full xl:w-1/4 bg-black/30 flex flex-col items-center relative transition-all duration-300 z-0 ${
        isSectionViewVisible ? 'xl:w-1/4' : 'w-full'
      }`}>
        <header className="w-full flex flex-col items-center pt-10 pb-4 select-none">
          <span className="text-2xl font-bold text-white tracking-wide mb-2">Portfolio of</span>
          <span className={`text-xl font-semibold text-blue-200 xl:transition-all xl:duration-500 ${
            showNameLeft
              ? "xl:opacity-100 xl:translate-y-0 xl:delay-200"
              : "xl:opacity-0 xl:-translate-y-4 xl:delay-0 xl:pointer-events-none"
          }`}>
            Mohamad Termanini
          </span>
        </header>
        <div className="flex-1 flex items-center justify-center w-full">
          <SectionSelector onSelect={handleSectionSelect} />
        </div>
      </aside>

      {/* Close Button */}
      <SectionCloseButton 
        isVisible={isSectionViewVisible} 
        onClick={() => setIsSectionViewVisible(false)} 
      />

      {/* Right Panel - Hidden on mobile unless section is selected */}
      <section className={`fixed xl:relative inset-0 xl:inset-auto flex-1 bg-neutral-900 overflow-y-auto transition-all duration-300 z-10 ${
        isSectionViewVisible ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
      }`}>
        <SectionViewer selected={selectedSection} />
      </section>
    </main>
  );
}
