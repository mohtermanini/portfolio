import { CardLabel, CardPosition, Skill } from "./types";

interface SkillCardProps {
  card: CardLabel;
  position: CardPosition;
  index: number;
  animationStep: 'center' | 'distributed';
  bodySize: { width: number; height: number };
  dotColor: string;
  borderClass: string;
  skills: Skill[];
  isMobile?: boolean;
}

export default function SkillCard({
  card,
  position,
  index,
  animationStep,
  bodySize,
  dotColor,
  borderClass,
  skills,
  isMobile = false,
}: SkillCardProps) {
  const zOrder = [13, 10, 12, 11];
  const sectionW = bodySize.width;
  const sectionH = bodySize.height;
  const mobileCardHeight = 260; // px, adjust as needed for your content
  const cardW = isMobile ? sectionW : sectionW / 2;
  const cardH = isMobile ? mobileCardHeight : sectionH / 2;
  const offsetLeft = isMobile ? 0 : (sectionW - (sectionW / 2)) / 2 - 100;
  const offsetTop = isMobile ? 0 : (sectionH - (sectionH / 2)) / 2 - 100;
  const centerLeft = isMobile ? 0 : (sectionW - (sectionW / 2)) / 2;
  const centerTop = isMobile ? 0 : (sectionH - (sectionH / 2)) / 2;
  const distributedLeft = isMobile ? 0 : position.x * (sectionW / 2);
  const distributedTop = isMobile ? 0 : position.y * (sectionH / 2);

  let left = offsetLeft, top = offsetTop;
  if (animationStep === 'center') {
    left = centerLeft;
    top = centerTop;
  } else if (animationStep === 'distributed') {
    left = distributedLeft;
    top = distributedTop;
  }

  const appliedBorderClass = isMobile ? '' : borderClass;
  const transparentColors = [
    "bg-blue-400/40",
    "bg-red-400/40",
    "bg-purple-400/40",
    "bg-yellow-300/40"
  ];

  let groupKey = card.label.toLowerCase();
  if (groupKey === 'collaboration') groupKey = 'collab';
  const groupSkills = skills.filter(s => s.group === groupKey);

  return (
    <div
      className={`${isMobile ? 'relative flex items-center justify-center' : 'absolute flex flex-col items-start justify-start'} shadow-2xl ${transparentColors[index]} ${appliedBorderClass} transition-all duration-500 ease-in-out`}
      style={{
        width: cardW,
        height: cardH,
        ...(isMobile ? { margin: 0 } : {
          left: left,
          top: top,
          zIndex: zOrder[index],
        }),
        boxShadow: animationStep === 'distributed' ? "0 8px 32px 0 rgba(0,0,0,0.18)" : "0 4px 16px 0 rgba(0,0,0,0.12)",
        overflow: 'hidden',
        backgroundClip: 'padding-box',
      }}
    >
      <div className="flex items-center gap-2 px-4 md:px-6 pt-4 md:pt-6 pb-2">
        <span className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${dotColor} inline-block`} />
        <span className={
          animationStep === 'distributed'
            ? 'text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide text-white drop-shadow-lg'
            : 'text-base md:text-lg font-bold tracking-wide text-white drop-shadow-lg'
        } style={{ marginLeft: animationStep !== 'distributed' ? '0.5rem' : 0 }}>
          {card.label}
        </span>
      </div>
      
      {animationStep === 'distributed' && (
        <div className={(() => {
          if (groupKey === 'collab') return 'w-full grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 place-items-center h-full';
          if (groupKey === 'design') return 'w-full grid grid-cols-2 gap-2 md:gap-4 p-2 md:p-4 place-items-center h-full';
          return 'w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4 place-items-center h-full ';
        })()}>
          {groupSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center"
            >
              <span className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-md border border-white/30 bg-white/30 text-white text-sm md:text-base lg:text-lg mb-1">
                {skill.icon}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium text-center">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 