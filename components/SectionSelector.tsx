import { useState, useRef, useEffect } from "react";
import { User, Briefcase, Star, Sparkles, Brain } from "lucide-react";

const timelineItems = [
  { id: "work", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Sparkles },
  { id: "skills", label: "Skills", icon: Star },
  { id: "algorithmic", label: "Problem Solving", icon: Brain },
  { id: "brief", label: "Brief", icon: User },
];

export default function SectionSelector({ onSelect, disableActiveHighlight = false }: { onSelect: (id: string) => void, disableActiveHighlight?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<string>("brief");
  const [paused, setPaused] = useState(false);
  const [angle, setAngle] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialSelectDone = useRef(false);
  const radius = 120;
  const center = 140;
  const speed = 0.003;

  useEffect(() => {
    if (!initialSelectDone.current) {
      onSelect("brief");
      initialSelectDone.current = true;
    }
  }, [onSelect]);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => setAngle(a => a + speed), 16);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Clear selected when highlighting is disabled (mobile section open/close)
  useEffect(() => {
    if (disableActiveHighlight) {
      setSelected("");
    }
  }, [disableActiveHighlight]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - left - center;
    const dy = e.clientY - top - center;
    setPaused(Math.hypot(dx, dy) <= radius + 4 || hovered !== null);
  };

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect(id);
  };

  return (
    <div
      className="relative w-[280px] h-[280px] md:w-[280px] md:h-[280px] mx-auto my-8 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setHovered(null);
        setPaused(false);
      }}
    >
      {/* Orbit Circle */}
      <svg className="absolute inset-0" width={center * 2} height={center * 2}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
      </svg>

      {/* Orbiting Buttons */}
      <div className="absolute inset-0 pointer-events-none">
        {timelineItems.map((item, i) => {
          const Icon = item.icon;
          const a = angle + (2 * Math.PI * i) / timelineItems.length;
          const x = center + radius * Math.cos(a);
          const y = center + radius * Math.sin(a);
          const isSelected = !disableActiveHighlight && selected === item.id;

          return (
            <div
              key={item.id}
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                position: "absolute"
              }}
            >
              <button
                onClick={() => handleSelect(item.id)}
                onMouseEnter={() => {
                  setHovered(i);
                  setPaused(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setPaused(false);
                }}
                className={`group pointer-events-auto transition-all duration-300 ${
                  hovered === i ? "md:scale-110" : isSelected ? "md:scale-105" : "md:scale-100"
                } ${isSelected ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full relative transition-all duration-300
                  ${isSelected
                    ? "xl:bg-white xl:text-blue-600 xl:border-4 xl:border-blue-500 xl:shadow-[0_0_15px_rgba(59,130,246,0.6)] bg-blue-500 text-white border-4 border-white shadow-md group-hover:scale-110 scale-100"
                    : "bg-blue-500 text-white border-4 border-white shadow-md group-hover:scale-110 scale-100"
                  }`}
                >
                  <Icon size={20} className="md:w-[22px] md:h-[22px]" />
                  {isSelected && (
                    <span className="absolute -inset-1 rounded-full border xl:border-blue-300 border-transparent blur-md opacity-70 xl:animate-ping" />
                  )}
                </span>
                <span
                  className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 text-xs md:text-sm whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? "text-white font-bold"
                      : "text-white/80 group-hover:opacity-100 opacity-80"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-700 shadow-2xl animate-pulse" />
      </div>
    </div>
  );
}
