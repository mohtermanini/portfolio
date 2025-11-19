import React from "react";
// Constants for Brief section
import { Trophy, Terminal, Globe, Database, Rocket } from "lucide-react";
import styles from './Brief.module.css';

export const NAME = "Mohamad Termanini";

export const TITLE = "Senior Software Engineer | Full Stack Developer | ex-Samsung Group";

export const SUMMARY = (
  <>
    <span className={styles.summaryStrong}>Senior Full Stack Developer</span> with <span className={styles.summaryStrong}>+5 years</span> of experience delivering scalable, high-performance applications across enterprise and startup environments.<br />
    Proficient in <span className={styles.summaryStrong}>PHP/Laravel</span>, <span className={styles.summaryStrong}>C#/ASP.NET</span>, and <span className={styles.summaryStrong}>React/Next.js</span>, with experience working on <span className={styles.summaryStrong}>cloud-native systems</span>. Former member of <span className={styles.summaryStrong}>Samsung&apos;s Cheil MEA</span> engineering team, with a proven record of <span className={styles.summaryStrong}>improving systems performance</span>, designing <span className={styles.summaryStrong}>scalable architectures</span>, and building <span className={styles.summaryStrong}>robust, maintainable platforms</span>. Proficient in solving <span className={styles.summaryStrong}>complex technical challenges</span> and maintaining <span className={styles.summaryStrong}>high system reliability</span>.
  </>
);

export const HEADLINE_ACHIEVEMENTS = "Key Achievements";

export const achievements = [
  {
    icon: <Trophy className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />,
    text: "Graduated with 87% GPA – Top Performer in Class",
    link: "https://drive.google.com/file/d/1BZFfJwNvqzjP9Brtaltkexuc5lVQBDa7/view"
  },
  {
    icon: <Terminal className="w-8 h-8 md:w-12 md:h-12 text-green-400" />,
    text: "Solved 1,000+ Algorithm & Data Structure Problems",
    link: "https://www.stopstalk.com/user/profile/Mohamad_Termanini"
  },
  {
    icon: <Globe className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />,
    text: "Worked on Samsung Products Used Across Multiple Countries"
  },
  {
    icon: <Database className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />,
    text: "Developed SaaS Platforms Handling Millions of Database Records"
  },
  {
    icon: <Rocket className="w-8 h-8 md:w-12 md:h-12 text-pink-400" />,
    text: "Boosted Websites Performance by 50% Using Advanced Optimization Techniques"
  },
]; 