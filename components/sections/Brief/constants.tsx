import React from "react";
// Constants for Brief section
import { Trophy, Terminal, Globe, Database, Rocket } from "lucide-react";
import styles from './Brief.module.css';

export const NAME = "Mohamad Termanini";

export const TITLE = "Senior Software Engineer | Full Stack & Distributed Systems | ex-Samsung Group";

export const SUMMARY = (
  <>
    <span className={styles.summaryStrong}>Senior Software Engineer</span> with <span className={styles.summaryStrong}>5+ years of experience</span> designing and building <span className={styles.summaryStrong}>scalable, high-performance web platforms</span> and <span className={styles.summaryStrong}>distributed systems</span> across <span className={styles.summaryStrong}>enterprise and startup environments</span>.<br /><br />
    Experienced in driving <span className={styles.summaryStrong}>product and architectural decisions</span>, collaborating with <span className={styles.summaryStrong}>multiple teams</span>, and translating business requirements into reliable, <span className={styles.summaryStrong}>cloud-native solutions</span>. Strong focus on solving <span className={styles.summaryStrong}>complex technical challenges</span> and building <span className={styles.summaryStrong}>reliable, production-grade systems</span>. Previously part of <span className={styles.summaryStrong}>Samsung&apos;s Cheil MEA engineering team</span>.
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