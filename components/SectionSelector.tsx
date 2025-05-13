import { useState, useRef, useEffect } from "react";
import { User, Briefcase, Folder, Star, Sparkles, Brain } from "lucide-react";

const timelineItems = [
  { id: "work", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Sparkles },
  { id: "skills", label: "Skills", icon: Star },
  { id: "algorithmic", label: "Problem Solving", icon: Brain },
  { id: "brief", label: "Brief", icon: User },
];

export default function SectionSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [angle, setAngle] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const radius = 120;
  const center = 140;
  const speed = 0.003;

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => setAngle(a => a + speed), 16);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - left - center;
    const dy = e.clientY - top - center;
    setPaused(Math.hypot(dx, dy) <= radius + 4 || hovered !== null);
  };

  return (
    <div
      className="relative w-[280px] h-[280px] mx-auto my-8 select-none"
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

          return (
            <div
              key={item.id}
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                position: "absolute",
                zIndex: hovered === i ? 10 : undefined,
              }}
            >
              <button
                onClick={() => onSelect(item.id)}
                onMouseEnter={() => {
                  setHovered(i);
                  setPaused(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setPaused(false);
                }}
                className={`group pointer-events-auto transition-transform ${
                  hovered === i ? "scale-110" : "scale-100"
                }`}
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white border-4 border-white shadow-lg group-hover:scale-110 transition">
                  <Icon size={22} />
                </span>
                <span
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 text-white/80 text-sm font-semibold whitespace-nowrap group-hover:opacity-100 opacity-80 transition"
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
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-700 shadow-2xl animate-pulse" />
      </div>
    </div>
  );
}
