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
}: SkillCardProps) {
  const zOrder = [13, 10, 12, 11];
  const sectionW = bodySize.width;
  const sectionH = bodySize.height;
  const cardW = sectionW / 2;
  const cardH = sectionH / 2;
  const offsetLeft = (sectionW - cardW) / 2 - 100;
  const offsetTop = (sectionH - cardH) / 2 - 100;
  const centerLeft = (sectionW - cardW) / 2;
  const centerTop = (sectionH - cardH) / 2;
  const distributedLeft = position.x * (sectionW / 2);
  const distributedTop = position.y * (sectionH / 2);

  let left = offsetLeft, top = offsetTop;
  if (animationStep === 'center') {
    left = centerLeft;
    top = centerTop;
  } else if (animationStep === 'distributed') {
    left = distributedLeft;
    top = distributedTop;
  }

  const roundedClass = animationStep === 'distributed' ? '' : 'rounded-xl';
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
      className={`absolute shadow-2xl ${transparentColors[index]} ${roundedClass} ${borderClass} transition-all duration-500 ease-in-out flex flex-col items-start justify-start`}
      style={{
        width: cardW,
        height: cardH,
        left: left,
        top: top,
        zIndex: zOrder[index],
        boxShadow: animationStep === 'distributed' ? "0 8px 32px 0 rgba(0,0,0,0.18)" : "0 4px 16px 0 rgba(0,0,0,0.12)",
        overflow: 'hidden',
        backgroundClip: 'padding-box',
      }}
    >
      <div className="flex items-center gap-2 px-6 pt-6 pb-2">
        <span className={`w-4 h-4 rounded-full ${dotColor} inline-block`} />
        <span className={
          animationStep === 'distributed'
            ? 'text-xl md:text-2xl font-extrabold tracking-wide text-white drop-shadow-lg'
            : 'text-base md:text-lg font-bold tracking-wide text-white drop-shadow-lg'
        } style={{ marginLeft: animationStep !== 'distributed' ? '0.5rem' : 0 }}>
          {card.label}
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center w-full h-full">
        {animationStep === 'distributed' && (
          <div className={(() => {
            if (groupKey === 'collab') return 'w-full h-full grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-6';
            if (groupKey === 'design') return 'w-full h-full grid grid-cols-2 gap-x-4 gap-y-6';
            return 'w-full h-full grid grid-cols-5 gap-x-4 gap-y-6 content-center justify-center items-center';
          })()}>
            {groupSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center"
              >
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md border border-white/30 bg-white/30 text-white text-base md:text-lg mb-1">
                  {skill.icon}
                </span>
                <span className="text-xs md:text-sm text-white/90 font-medium text-center">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 