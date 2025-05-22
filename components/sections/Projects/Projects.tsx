import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { X } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projects, tagOrder } from "./data";
import SectionHeader from "../../SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

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

const tagVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false);
  const carouselRef = useRef<Carousel | null>(null);

  // Extract all unique tags and order them by tagOrder
  const allTags = tagOrder.filter(tag => projects.some(p => p.tags.includes(tag)));

  // Tag filter logic
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)));

  const totalSlides = Math.ceil(filteredProjects.length / 6);

  function toggleTag(tag: string) {
    setIsFiltering(true);
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    setCurrentSlide(0);
    if (carouselRef.current) {
      carouselRef.current.goToSlide(0);
    }
    setTimeout(() => setIsFiltering(false), 50);
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      carouselRef.current?.previous(1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      carouselRef.current?.next(1);
    }
  };

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col">
      <SectionHeader title="Projects" bg="bg-gradient-to-r from-blue-900/80 to-slate-800/80 md:from-blue-900/50 md:to-slate-800/50" variants={itemVariants} />
      <motion.div 
        className="relative bg-gradient-to-br from-blue-900/80 to-slate-800/80 md:from-blue-900/30 md:to-slate-800/30 border border-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Tag Filter Bar */}
        <motion.div 
          className="w-full px-4 md:px-8 flex flex-wrap gap-2 items-center mt-6 mb-5"
          variants={containerVariants}
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              variants={tagVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-full border text-xs font-medium transition-all duration-200 cursor-pointer
                ${selectedTags.includes(tag)
                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30 backdrop-blur-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-sm border-white/20'}
              `}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </motion.button>
          ))}
          <AnimatePresence>
            {selectedTags.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsFiltering(true);
                  setSelectedTags([]);
                  setCurrentSlide(0);
                  if (carouselRef.current) {
                    carouselRef.current.goToSlide(0);
                  }
                  setTimeout(() => setIsFiltering(false), 50);
                }}
                title="Clear selected tags"
                aria-label="Clear selected tags"
                className="px-3 py-1 rounded-full border text-xs font-medium bg-red-500/20 text-red-200 border-red-400/30 backdrop-blur-md shadow-sm flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3" />
                Clear
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
        {/* Body */}
        <div className="relative px-4 md:px-8 pt-4 pb-8 overflow-y-hidden">
          <Carousel
            ref={carouselRef}
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1536 },
                items: 1,
                partialVisibilityGutter: 40
              },
              desktop: {
                breakpoint: { max: 1536, min: 1024 },
                items: 1,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: { max: 1024, min: 640 },
                items: 1,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: { max: 640, min: 0 },
                items: 1,
                partialVisibilityGutter: 20
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            transitionDuration={isFiltering ? 0 : 300}
            customTransition={isFiltering ? "none" : "transform 300ms ease-in-out"}
            beforeChange={(nextSlide) => {
              if (nextSlide < 0 || nextSlide >= totalSlides) {
                return false;
              }
              setCurrentSlide(nextSlide);
              return true;
            }}
          >
            {Array.from({ length: Math.ceil(filteredProjects.length / 6) }).map((_, slideIdx) => (
              <motion.div 
                key={slideIdx} 
                className="w-full overflow-x-visible"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: slideIdx * 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 max-w-screen-xl w-full p-1">
                  {filteredProjects.slice(slideIdx * 6, slideIdx * 6 + 6).map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={isFiltering ? false : { opacity: 0, y: 20 }}
                      animate={isFiltering ? false : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </Carousel>
          <motion.div 
            className="flex justify-end mt-4 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={handlePrev}
              aria-label="Previous projects"
              disabled={currentSlide <= 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={handleNext}
              aria-label="Next projects"
              disabled={currentSlide >= totalSlides - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 