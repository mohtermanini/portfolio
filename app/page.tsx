"use client";

import { useState } from "react";
import SectionSelector from "@/components/SectionSelector";
import SectionViewer, { SectionKey } from "@/components/SectionViewer";

export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("brief");
  const showNameLeft = selectedSection !== "brief";

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      {/* Left Panel */}
      <aside className="w-1/3 md:w-1/4 bg-black/30 flex flex-col items-center relative">
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
          <SectionSelector onSelect={(id) => setSelectedSection(id as SectionKey)} />
        </div>
      </aside>

      {/* Right Panel */}
      <section className="flex-1 bg-neutral-900 overflow-y-auto relative">
        <SectionViewer selected={selectedSection} />
      </section>
    </main>
  );
}
