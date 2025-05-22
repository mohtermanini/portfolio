'use client';

import { useState, useEffect, useRef } from "react";
import SkillCard from "./SkillCard";
import { CARD_LABELS, CARD_POSITIONS, dotColors, plusBorders, skills } from "./data";
import { AnimationStep } from "./types";
import SectionHeader from "../../SectionHeader";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
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

export default function Skills() {
  const [animationStep, setAnimationStep] = useState<AnimationStep>('center');
  const [bodySize, setBodySize] = useState({ width: 900, height: 600 });
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer2 = setTimeout(() => setAnimationStep('distributed'), 400);
    return () => {
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    function updateSize() {
      if (bodyRef.current) {
        setBodySize({
          width: bodyRef.current.clientWidth,
          height: bodyRef.current.clientHeight,
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section id="skills" className="w-full min-h-screen flex flex-col">
      <SectionHeader title="Technical Skills" bg="bg-gradient-to-r from-blue-900/80 to-purple-700/60 md:from-blue-900/80 md:to-purple-700/60" variants={itemVariants} />
      <motion.div 
        className="w-full flex flex-col flex-1 border border-white/20 shadow-lg relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Glassy Background Layer */}
        <div className="absolute inset-0 flex z-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-900/90 to-purple-700/90 md:from-blue-900/70 md:to-purple-700/70 border-r border-white/20" />
        </div>
        {/* Content Layer */}
        <div
          ref={bodyRef}
          className="flex-1 w-full relative overflow-x-hidden overflow-y-auto z-10"
        >
          {/* Mobile Stack Layout */}
          <div className="block xl:hidden flex flex-col flex-1 h-full">
            {CARD_LABELS.map((card, i) => (
              <SkillCard
                key={card.label}
                card={card}
                position={CARD_POSITIONS[i]}
                index={i}
                animationStep="distributed"
                bodySize={bodySize}
                dotColor={dotColors[i]}
                borderClass=""
                skills={skills}
                isMobile={true}
              />
            ))}
          </div>
          {/* Desktop Grid Layout */}
          <div className="hidden xl:flex relative w-full h-full min-h-[800px] justify-center items-center">
            {CARD_LABELS.map((card, i) => (
              <SkillCard
                key={card.label}
                card={card}
                position={CARD_POSITIONS[i]}
                index={i}
                animationStep={animationStep}
                bodySize={bodySize}
                dotColor={dotColors[i]}
                borderClass={plusBorders[i]}
                skills={skills}
                isMobile={false}
              />
            ))}
          </div>
          <style jsx>{`
              @keyframes fade-in-orb {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .animate-fade-in-orb {
                animation: fade-in-orb 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
              }
            `}</style>
        </div>
      </motion.div>
    </section>
  );
} 