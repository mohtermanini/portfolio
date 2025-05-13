import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Phone, Mail, Trophy, Terminal, Globe, Database, Rocket, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const TITLE = "Senior Software Engineer | Full Stack Developer | ex-Samsung Group";

const achievements = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-400 mb-2" />,
    text: "Graduated with 87% GPA – Top Performer in Class",
    link: "https://drive.google.com/file/d/1BZFfJwNvqzjP9Brtaltkexuc5lVQBDa7/view"
  },
  {
    icon: <Terminal className="w-12 h-12 text-green-400 mb-2" />,
    text: "Solved 1,000+ Algorithm & Data Structure Problems",
    link: "https://www.stopstalk.com/user/profile/Mohamad_Termanini"
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400 mb-2" />,
    text: "Worked on Samsung Products Used Across Multiple Countries"
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400 mb-2" />,
    text: "Developed SaaS Platforms Handling Millions of Database Records"
  },
  {
    icon: <Rocket className="w-12 h-12 text-pink-400 mb-2" />,
    text: "Boosted Websites Performance by 50% Using Advanced Optimization Techniques"
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

export default function Brief({ showName }: { showName: boolean }) {
  // Typing animation for title (repeatable, bug-free, cursor stays at end)
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
      timeout = setTimeout(() => {
        setTyping(false);
      }, 5000); // Wait 5s before restarting
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

  // Cursor blinking effect
  useEffect(() => {
    // Blink if not started typing yet, or if finished typing
    if (!hasStartedTyping || titleText === TITLE) {
      const blink = setInterval(() => setShowCursor((v) => !v), 500);
      return () => clearInterval(blink);
    } else {
      setShowCursor(true);
    }
  }, [titleText, hasStartedTyping]);

  return (
    <section id="brief" className="w-full h-full flex flex-col relative">
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="section-1-header w-full px-8 pt-8 pb-4"
      >
        <div className="h-1 w-10 bg-white mb-2 rounded" />
        {showName && (
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">Mohamad Termanini</h1>
        )}
      </motion.div>
      <div className="w-full border-b border-white/20" />
      {/* Body */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        onAnimationComplete={() => { setTyping(true); setShowShine(true); }}
        className="section-1-body w-full px-8 pb-8 pt-4 flex-1 flex flex-col"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold text-blue-200 mb-8 min-h-[2.5rem] text-shadow"
        >
          {titleText}
          {showCursor && <span className="text-blue-400 animate-pulse">|</span>}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-100 mb-6 leading-relaxed text-shadow"
        >
          <span className="font-semibold text-blue-200">Senior Full Stack Developer</span> with <span className="font-semibold text-blue-300">4+ years</span> of experience building scalable, high-performance web applications across multiple industries. Formerly part of <span className="font-semibold text-blue-300">Samsung's Cheil Middle East & Africa</span> team, I specialize in both frontend and backend development using cutting-edge technologies such as <span className="font-semibold text-blue-300">React/Next.js</span>, <span className="font-semibold text-blue-300">PHP/Laravel</span>, and <span className="font-semibold text-blue-300">C#/ASP.NET Core</span>.<br /><br />
          I have contributed to <span className="font-semibold text-blue-200">complex, multi-country projects</span>, transforming business requirements into high-performance, scalable applications. With strong problem-solving skills and a passion for technology, I deliver impactful solutions while ensuring <span className="font-semibold text-blue-200">quality, performance, and maintainability</span>.
        </motion.p>
        {/* Key Achievements */}
        <motion.h3 
          variants={itemVariants}
          className="text-xl font-bold text-blue-100 mb-4 mt-2 text-shadow"
        >
          Key Achievements
        </motion.h3>
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-8"
        >
          {achievements.map((ach, i) => ach.link ? (
            <motion.a
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`achievement-card flex-1 min-w-[220px] max-w-xs bg-black/30 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow text-shadow mx-auto relative group transition-transform hover:scale-105 hover:border-blue-400${showShine ? ' shine' : ''}`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {ach.icon}
              </motion.div>
              <ArrowUpRight className="w-5 h-5 text-blue-300 absolute top-3 right-3 opacity-70 group-hover:opacity-100 group-hover:text-blue-500 transition" />
              <div className="text-gray-100 text-base font-medium leading-snug mt-2">{ach.text}</div>
            </motion.a>
          ) : (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`achievement-card flex-1 min-w-[220px] max-w-xs bg-black/30 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow text-shadow mx-auto transition-transform hover:scale-105${showShine ? ' shine' : ''}`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {ach.icon}
              </motion.div>
              <div className="text-gray-100 text-base font-medium leading-snug mt-2">{ach.text}</div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex-1" />
        {/* Bottom bar: email/phone left, socials right */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-between w-full mt-4 gap-4"
        >
          <div className="flex gap-6">
            <motion.a
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              href="mailto:mohtermanini.job@gmail.com"
              className="flex items-center gap-2 text-gray-100 text-lg transition hover:scale-105 hover:bg-white/10 px-4 py-2 rounded-lg"
            >
              <Mail className="w-6 h-6" />
              <span>mohtermanini.job@gmail.com</span>
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              href="tel:+971545982007"
              className="flex items-center gap-2 text-gray-100 text-lg transition hover:scale-105 hover:bg-white/10 px-4 py-2 rounded-lg"
            >
              <Phone className="w-6 h-6" />
              <span>+971 545982007</span>
            </motion.a>
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              href="https://github.com/mohtermanini"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:bg-white/10 rounded-full p-3"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              href="https://www.linkedin.com/in/mohamad-termanini-100252247"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:bg-white/10 rounded-full p-3"
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