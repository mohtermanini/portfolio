import { Download } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1gTxXiLMJh-FKnex2cH16WqQeUxV3vpay/view"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-8 group animate-attention-jump"
    >
      <div className="relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-800 to-blue-800 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
        
        {/* Button content */}
        <div className="relative flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white mr-1.5 sm:mr-2" />
          <span className="text-white font-semibold text-xs sm:text-sm md:text-[15px]">Download CV</span>
        </div>
      </div>
    </a>
  );
} 