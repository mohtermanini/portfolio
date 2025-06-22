import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DownloadCVButton from "@/components/DownloadCVButton";
import { isProd } from "@/lib/env";

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
  const bgPath = isProd ? "/portfolio/background.jpg" : "/background.jpg";

  return (
    <html lang="en">
      <body className={inter.className}
        style={{
          backgroundImage: `url(${bgPath})`,
        }}
      >
        {children}
        <DownloadCVButton />
      </body>
    </html>
  );
}
