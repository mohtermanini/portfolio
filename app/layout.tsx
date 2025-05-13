import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Download } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamad Termanini Portfolio",
  description: "Senior Software Engineer | Full Stack Developer | ex-Samsung Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Fixed Download CV Button */}
        <a
          href="https://drive.google.com/file/d/1gTxXiLMJh-FKnex2cH16WqQeUxV3vpay/view"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 group animate-attention-jump"
        >
          <div className="relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-cyan-800 to-blue-800 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
            
            {/* Button content */}
            <div className="relative flex items-center px-5 py-2.5 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Download className="w-4.5 h-4.5 text-white mr-2" />
              <span className="text-white font-semibold text-[15px]">Download CV</span>
            </div>
          </div>
        </a>
      </body>
    </html>
  );
}
