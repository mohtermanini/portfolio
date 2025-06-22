import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from './Brief.module.css';
import { NAME, TITLE, SUMMARY, HEADLINE_ACHIEVEMENTS, achievements } from './constants';
import { containerVariants, itemVariants } from './animationVariants';
import SectionHeader from '../../SectionHeader';
import React from "react";

export default function Brief({ showName }: { showName: boolean }) {
  const [titleText, setTitleText] = useState("");
  const [typing, setTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [showShine, setShowShine] = useState(false);
  const titleIndex = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing && titleIndex.current < TITLE.length) {
      if (!hasStartedTyping) setHasStartedTyping(true);
      timeout = setTimeout(() => {
        setTitleText(TITLE.slice(0, titleIndex.current + 1));
        titleIndex.current++;
      }, 24);
    } else if (typing && titleIndex.current === TITLE.length) {
      setShowCursor(true);
      setShowShine(true);
      timeout = setTimeout(() => setTyping(false), 5000);
    } else if (!typing && titleText === TITLE) {
      setShowCursor(true);
      timeout = setTimeout(() => {
        setTitleText("");
        titleIndex.current = 0;
        setHasStartedTyping(false);
        setTyping(true);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [titleText, typing, hasStartedTyping]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let shineTimeout: NodeJS.Timeout | null = null;
    if (showShine) {
      interval = setInterval(() => {
        setShowShine(true);
        shineTimeout = setTimeout(() => setShowShine(false), 1000);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (shineTimeout) clearTimeout(shineTimeout);
    };
  }, [showShine]);

  useEffect(() => {
    if (!hasStartedTyping || titleText === TITLE) {
      const blink = setInterval(() => setShowCursor((v) => !v), 500);
      return () => clearInterval(blink);
    } else {
      setShowCursor(true);
    }
  }, [titleText, hasStartedTyping]);

  return (
    <section id="brief" className="w-full h-full flex flex-col relative z-20">
      <SectionHeader title={showName ? NAME : undefined} bg={styles.section1Header} variants={itemVariants} />
      <div className="w-full border-b border-white/20" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        onAnimationComplete={() => setTyping(true)}
        className={`${styles.section1Body} px-8 pb-8 pt-4 flex-1 flex flex-col`}
      >
        <motion.h2 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-bold text-blue-200 mb-2 sm:mb-6 text-shadow sm:whitespace-nowrap min-h-[4rem] sm:min-h-[2.5rem]">
          {titleText}
          {showCursor && <span className="text-blue-400 animate-pulse">|</span>}
        </motion.h2>

        <motion.p variants={itemVariants} className={styles.summary}>
          {SUMMARY}
        </motion.p>

        <motion.h3 variants={itemVariants} className="text-lg md:text-xl font-bold text-blue-100 mb-4 mt-2 text-shadow">
          {HEADLINE_ACHIEVEMENTS}
        </motion.h3>

        <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-8 lg:gap-6 mb-8 px-2 md:px-4 lg:px-0 [&>*:last-child]:col-span-2 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:md:col-span-1 [&>*:last-child]:max-w-[240px] [&>*:last-child]:md:max-w-[280px]">
          {achievements.map((ach, i) => {
            const CardWrapper = ach.link ? motion.a : motion.div;
            const props = ach.link
              ? {
                  href: ach.link,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }
              : {};

            return (
              <CardWrapper
                key={i}
                {...props}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`${styles.achievementCard} flex-1 min-w-[160px] md:min-w-[200px] md:min-w-[220px] max-w-[180px] md:max-w-xs bg-black/30 border border-white/10 rounded-xl p-4 md:p-6 flex flex-col items-center text-center shadow text-shadow mx-auto relative group hover:border-blue-400 ${showShine ? styles.shine : ''} ${i === achievements.length - 1 ? 'col-span-1 sm:col-span-1 md:col-span-1' : ''}`}
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }} className="mb-1 md:mb-2">
                  {ach.icon}
                </motion.div>
                {ach.link && (
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-blue-300 absolute top-3 right-3 opacity-70 group-hover:opacity-100 group-hover:text-blue-500 transition" />
                )}
                <div className="text-gray-100 text-xs md:text-base font-medium leading-relaxed md:leading-relaxed mt-2">{ach.text}</div>
              </CardWrapper>
            );
          })}
        </motion.div>

        <div className="flex-1" />

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between w-full mt-4 gap-4 px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto">
            <motion.a
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              href="mailto:mohtermanini.job@gmail.com"
              className="flex items-center gap-2 text-gray-100 text-sm md:text-base bg-white/10 md:bg-transparent hover:bg-white/20 px-3 py-2 rounded-lg w-full md:w-auto justify-center md:justify-start border border-white/10 md:border-transparent"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base truncate">mohtermanini.job@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              href="tel:+971545982007"
              className="flex items-center gap-2 text-gray-100 text-sm md:text-base bg-white/10 md:bg-transparent hover:bg-white/20 px-3 py-2 rounded-lg w-full md:w-auto justify-center md:justify-start border border-white/10 md:border-transparent"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">+971 545982007</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-3 md:gap-6 mt-3 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
              href="https://github.com/mohtermanini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white/10 rounded-full p-2 md:p-3 bg-white/10 md:bg-transparent border border-white/10 md:border-transparent"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
              href="https://www.linkedin.com/in/mohamad-termanini-100252247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white/10 rounded-full p-2 md:p-3 bg-white/10 md:bg-transparent border border-white/10 md:border-transparent"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
