"use client";

import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import SectionViewer, { SectionKey } from "@/components/SectionViewer";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("brief");
  const [isSectionViewVisible, setIsSectionViewVisible] = useState(false);
  const showNameLeft = selectedSection !== "brief";

  const handleSectionSelect = (id: string) => {
    setSelectedSection(id as SectionKey);
    setIsSectionViewVisible(true);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Panel - Always visible */}
      <aside className={`w-full md:w-1/4 bg-black/30 flex flex-col items-center relative transition-all duration-300 ${
        isSectionViewVisible ? 'md:w-1/4' : 'w-full'
      }`}>
        <header className="w-full flex flex-col items-center pt-10 pb-4 select-none">
          <span className="text-2xl font-bold text-white tracking-wide mb-2">Portfolio of</span>
          <span
            className={`text-xl font-semibold text-blue-200 transition-all duration-500 ${
              showNameLeft
                ? "opacity-100 translate-y-0 delay-200"
                : "opacity-0 -translate-y-4 delay-0 pointer-events-none"
            }`}
            style={{ minHeight: 32 }}
          >
            Mohamad Termanini
          </span>
        </header>
        <div className="flex-1 flex items-center justify-center w-full">
          <SectionSelector onSelect={handleSectionSelect} />
        </div>
      </aside>

      {/* Right Panel - Hidden on mobile unless section is selected */}
      <section className={`flex-1 bg-neutral-900 overflow-y-auto relative transition-all duration-300 ${
        isSectionViewVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}>
        <button
          onClick={() => setIsSectionViewVisible(false)}
          className="md:hidden absolute top-4 right-4 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <SectionViewer selected={selectedSection} />
      </section>
    </main>
  );
}
