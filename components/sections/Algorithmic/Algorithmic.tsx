import { motion, useAnimation } from "framer-motion";
import { cards } from "./constants";
import { containerVariants, cardVariants, itemVariants } from "./animationVariants";
import SectionHeader from "../../SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function Algorithmic() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      // Wait for cards to be in place
      await new Promise(resolve => setTimeout(resolve, 50));
      // Trigger the color sweep
      await controls.start("sweep");
    };
    sequence();
  }, [controls]);

  return (
    <section id="algorithmic" className="w-full min-h-screen flex flex-col">
      <SectionHeader title="Problem Solving" bg="bg-gradient-to-br from-blue-900/80 to-purple-900/80 md:from-blue-900/40 md:to-purple-900/40" variants={itemVariants} />
      <div className="w-full border-b border-white/20" />
      <div className="flex-1 flex flex-col w-full h-full p-0">
        <motion.div 
          initial="hidden"
          animate={controls}
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br flex-1 from-blue-900/80 to-purple-900/60 md:from-blue-900/40 md:to-purple-900/20 h-full w-full flex flex-col justify-center border border-white/20 shadow-2xl p-8"
        >
          <div className="w-full h-full flex-1 flex flex-col gap-10">
            {cards.map((card, index) => {
              const CardWrapper = card.link ? motion.a : motion.div;
              const props = card.link
                ? {
                    href: card.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                : {};

              // Get the color class based on the card's borderHover
              const getColorClass = () => {
                if (card.borderHover.includes('blue')) return `hover:shadow-blue-400/20 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 text-blue-400`;
                if (card.borderHover.includes('purple')) return `hover:shadow-purple-400/20 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 text-purple-400`;
                if (card.borderHover.includes('green')) return `hover:shadow-green-400/20 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 text-green-400`;
                return `hover:shadow-green-400/20 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 text-green-400`;
              };

              const colorClass = getColorClass();
              const color = card.borderHover.includes('blue') ? 'blue' : 
                           card.borderHover.includes('purple') ? 'purple' : 'green';

              return (
                <CardWrapper
                  key={index}
                  {...props}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { 
                      duration: 0.01,
                      ease: "easeOut"
                    }
                  }}
                  className={`bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 ${card.borderHover} shadow-md transition-all duration-200 group will-change-transform relative overflow-hidden ${colorClass.split(' ')[0]}`}
                >
                  <motion.div 
                    className={`absolute inset-0 ${colorClass.split(' ').slice(1, 4).join(' ')}`}
                    variants={{
                      hidden: { translateX: "-100%" },
                      visible: { translateX: "-100%" },
                      sweep: { 
                        translateX: "100%",
                        transition: { 
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }
                      }
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-${color}-400/0 via-${color}-400/10 to-${color}-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                  {card.link && (
                    <div className="absolute top-4 right-4">
                      <ArrowUpRight className={`w-5 h-5 ${colorClass.split(' ')[4]}`} />
                    </div>
                  )}
                  <div className="flex items-start gap-4 relative">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.08,
                        rotate: 5,
                        transition: { 
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                      className={`w-8 h-8 p-1.5 rounded-lg flex items-center justify-center transition-colors duration-200 ${card.iconBg} will-change-transform`}
                    >
                      {card.icon}
                    </motion.div>
                    <div>
                      <h4 className={`text-lg font-semibold ${card.textColor} mb-2`}>{card.title}</h4>
                      {card.content}
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 