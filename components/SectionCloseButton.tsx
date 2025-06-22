import React from 'react';

interface SectionCloseButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function SectionCloseButton({ isVisible, onClick }: SectionCloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`xl:hidden fixed top-4 right-6 sm:right-8 z-[100] p-1.5 sm:p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors backdrop-blur-sm cursor-pointer ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white sm:w-6 sm:h-6 w-5 h-5"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
} 