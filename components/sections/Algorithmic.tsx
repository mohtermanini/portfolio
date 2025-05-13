import { Code, Rocket, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function Algorithmic() {


  const cards = [
    {
      title: "Competitive Programming",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      iconBg: "bg-blue-500/20 group-hover:bg-blue-500/30",
      borderHover: "hover:border-blue-400/30",
      textColor: "text-white",
      content: (
        <p className="text-white/90 leading-relaxed">
          Solved 1,000+ coding problems, involving different algorithms and data structures.
        </p>
      )
    },
    {
      title: "Training & Development",
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      iconBg: "bg-purple-500/20 group-hover:bg-purple-500/30",
      borderHover: "hover:border-purple-400/30",
      textColor: "text-white",
      content: (
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Participated in coding camps and training sessions focused on algorithmic thinking and problem-solving under pressure.</li>
          <li>Gained experience in team-based problem solving, time-limited contests and optimizing for memory and time constraints.</li>
        </ul>
      )
    },
    {
      title: "Awards",
      icon: <Trophy className="w-6 h-6 text-green-400" />,
      iconBg: "bg-green-500/20 group-hover:bg-green-500/30",
      borderHover: "hover:border-green-400/30",
      textColor: "text-white",
      content: (
        <p className="text-white/90 leading-relaxed">
          Achieved 3rd place in the Aleppo University Collegiate Programming Contest, competing against +100 participants in algorithms and data structures challenges.
        </p>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="algorithmic" className="w-full min-h-screen flex flex-col">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="w-full px-8 pt-8 pb-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40"
      >
        <div className="h-1 w-10 bg-white mb-2 rounded" />
        <h2 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">Problem Solving</h2>
      </motion.div>
      <div className="w-full border-b border-white/20" />
      <div className="flex-1 flex flex-col w-full h-full p-0">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br flex-1 from-blue-900/40 to-purple-900/20 h-full w-full flex flex-col justify-center border border-white/20 shadow-2xl p-8"
        >
          <div className="w-full h-full flex-1 flex flex-col gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 ${card.borderHover} shadow-md transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className={`w-8 h-8 p-1.5 rounded-lg flex items-center justify-center transition-colors ${card.iconBg}`}
                  >
                    {card.icon}
                  </motion.div>
                  <div>
                    <h4 className={`text-lg font-semibold ${card.textColor} mb-2`}>{card.title}</h4>
                    {card.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 