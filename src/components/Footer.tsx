"use client";

import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const pathname = usePathname();
  const isMorePage = pathname === '/more';

  if (isMorePage) return null;

  return (
    <footer className="w-full mt-24 md:mt-32 lg:mt-40 pb-8 md:pb-10 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto">
        <div className="w-24 h-[1px] bg-white/20"></div>
        <div className="flex flex-row gap-6 md:gap-8 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/quynhan05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://github.com/quynhan-tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="mailto:quynhanit@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
