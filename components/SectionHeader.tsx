import { motion, Variants } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  title?: string;
  bg: string;
  variants?: Variants;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, bg, variants }) => (
  <div className={`${bg} w-full px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-3 md:pb-4 !bg-opacity-100`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <div className="h-0.5 sm:h-1 w-6 sm:w-8 md:w-10 bg-white mb-2 rounded" />
      {title && (
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-wide text-shadow transition-all duration-500 opacity-100 translate-y-0">
          {title}
        </h1>
      )}
    </motion.div>
  </div>
);

export default SectionHeader; 