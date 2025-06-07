"use client"

import React from "react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 w-full z-100 grid grid-cols-[1fr_auto_1fr] items-center bg-transparent pt-2 pb-1 font-serif backdrop-blur transition-colors">
      <div className="flex items-center justify-start gap-2 pl-8">
        <a href="#motion" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">MORE</a>
        <a href="#about" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">ABOUT</a>
      </div>
      <div className="flex justify-center">
        <span className="text-white text-[2rem] font-bold font-[Playfair Display]">AnTran</span>
      </div>
      <div className="flex items-center justify-end gap-2 pr-8">
        <a href="https://github.com/quynhan-tr" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">GITHUB</a>
        <a href="https://www.linkedin.com/in/quynhan05/" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">LINKEDIN</a>
        <a href="mailto:a37tran@uwaterloo.ca" className="text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition hover:bg-white/10 flex items-center gap-1">EMAIL</a>
      </div>
    </nav>
  );
}

