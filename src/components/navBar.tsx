"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  const scrollToSection = (sectionId: string) => {
    if (isAboutPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 w-full z-100 grid grid-cols-[1fr_auto_1fr] items-center bg-transparent pt-2 pb-1 font-serif backdrop-blur transition-colors">
      <div className="flex items-center justify-start gap-2 pl-8">
        <Link href="/more" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">
          MORE
        </Link>
        
        {isAboutPage ? (
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1"
          >
            ABOUT
          </button>
        ) : (
          <Link href="/" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">
            ABOUT
          </Link>
        )}
      </div>
      
      <div className="flex justify-center">
        <Link href="/about" className="text-white text-[2rem] font-bold font-[Playfair Display] hover:opacity-80 transition-opacity">
          An Tran
        </Link>
      </div>
      
      <div className="flex items-center justify-end gap-2 pr-8">
        <a href="https://github.com/quynhan-tr" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/quynhan05/" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">
          LINKEDIN
        </a>
        <a href="mailto:a37tran@uwaterloo.ca" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">
          EMAIL
        </a>
      </div>
    </nav>
  );
}

