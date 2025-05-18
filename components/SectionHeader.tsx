import { motion, Variants } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  title?: string;
  bg: string;
  variants?: Variants;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, bg, variants }) => (
  <div className={`${bg} w-full px-8 pt-8 pb-4 !bg-opacity-100`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <div className="h-1 w-10 bg-white mb-2 rounded" />
      {title && (
        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">
          {title}
        </h1>
      )}
    </motion.div>
  </div>
);

export default SectionHeader; 