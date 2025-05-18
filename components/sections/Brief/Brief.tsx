import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from './Brief.module.css';
import { NAME, TITLE, SUMMARY, HEADLINE_ACHIEVEMENTS, achievements } from './constants';
import { containerVariants, itemVariants } from './animationVariants';
import SectionHeader from '../../SectionHeader';

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
    <section id="brief" className="w-full h-full flex flex-col relative">
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
        <motion.h2 variants={itemVariants} className="text-2xl font-bold text-blue-200 mb-8 min-h-[2.5rem] text-shadow">
          {titleText}
          {showCursor && <span className="text-blue-400 animate-pulse">|</span>}
        </motion.h2>

        <motion.p variants={itemVariants} className={styles.summary}>
          {SUMMARY}
        </motion.p>

        <motion.h3 variants={itemVariants} className="text-xl font-bold text-blue-100 mb-4 mt-2 text-shadow">
          {HEADLINE_ACHIEVEMENTS}
        </motion.h3>

        <motion.div variants={containerVariants} className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-8">
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
                className={`${styles.achievementCard} flex-1 min-w-[220px] max-w-xs bg-black/30 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow text-shadow mx-auto relative group hover:border-blue-400 ${showShine ? styles.shine : ''}`}
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}>
                  {ach.icon}
                </motion.div>
                {ach.link && (
                  <ArrowUpRight className="w-5 h-5 text-blue-300 absolute top-3 right-3 opacity-70 group-hover:opacity-100 group-hover:text-blue-500 transition" />
                )}
                <div className="text-gray-100 text-base font-medium leading-snug mt-2">{ach.text}</div>
              </CardWrapper>
            );
          })}
        </motion.div>

        <div className="flex-1" />

        <motion.div variants={itemVariants} className="flex items-center justify-between w-full mt-4 gap-4">
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              href="mailto:mohtermanini.job@gmail.com"
              className="flex items-center gap-2 text-gray-100 text-lg hover:bg-white/10 px-4 py-2 rounded-lg"
            >
              <Mail className="w-6 h-6" />
              <span>mohtermanini.job@gmail.com</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              href="tel:+971545982007"
              className="flex items-center gap-2 text-gray-100 text-lg hover:bg-white/10 px-4 py-2 rounded-lg"
            >
              <Phone className="w-6 h-6" />
              <span>+971 545982007</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
              href="https://github.com/mohtermanini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white/10 rounded-full p-3"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
              href="https://www.linkedin.com/in/mohamad-termanini-100252247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-white/10 rounded-full p-3"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
