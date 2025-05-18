import React from "react";
// Constants for Brief section
import { Trophy, Terminal, Globe, Database, Rocket } from "lucide-react";
import styles from './Brief.module.css';

export const NAME = "Mohamad Termanini";

export const TITLE = "Senior Software Engineer | Full Stack Developer | ex-Samsung Group";

export const SUMMARY = (
  <>
    <span className={styles.summaryStrong}>Senior Full Stack Developer</span> with <span className={styles.summaryStrong}>4+ years</span> of experience building scalable, high-performance web applications across multiple industries. Formerly part of <span className={styles.summaryStrong}>Samsung&apos;s Cheil Middle East & Africa</span> team, I specialize in both frontend and backend development using cutting-edge technologies such as <span className={styles.summaryStrong}>React/Next.js</span>, <span className={styles.summaryStrong}>PHP/Laravel</span>, and <span className={styles.summaryStrong}>C#/ASP.NET Core</span>.<br /><br />
    I have contributed to <span className={styles.summaryStrong}>complex, multi-country projects</span>, transforming business requirements into high-performance, scalable applications. With strong problem-solving skills and a passion for technology, I deliver impactful solutions while ensuring <span className={styles.summaryStrong}>quality, performance, and maintainability</span>.
  </>
);

export const HEADLINE_ACHIEVEMENTS = "Key Achievements";

export const achievements = [
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