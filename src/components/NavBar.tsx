"use client"

import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<"home" | "more" | null>(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const moreRef = useRef<HTMLAnchorElement | null>(null);
  const homeRef = useRef<HTMLAnchorElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (isAboutPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  // Update highlight position/size
  useLayoutEffect(() => {
    let ref = null;
    if ((pathname === "/more" && !hoveredButton) || hoveredButton === "more") {
      ref = moreRef.current;
    } else if ((pathname === "/" && !hoveredButton) || hoveredButton === "home") {
      ref = homeRef.current;
    }
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const parentRect = ref.parentElement!.getBoundingClientRect();
      setHighlightStyle({
        left: rect.left - parentRect.left,
        top: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height,
        opacity: 1,
      });
    } else {
      setHighlightStyle({ opacity: 0 });
    }
  }, [pathname, hoveredButton]);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-transparent backdrop-blur-sm transition-colors">
        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center py-2 px-4 lg:px-8">
          <div className="flex items-center justify-start gap-4 relative">
            {/* Sliding background */}
            <span
              className="absolute rounded-3xl bg-white/20 transition-all duration-300 ease-in-out pointer-events-none z-0"
              style={{
                position: "absolute",
                ...highlightStyle,
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* MORE Button */}
            <Link
              href="/more"
              ref={moreRef}
              className={`relative z-10 text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition flex items-center gap-1 ${pathname === "/more" ? "font-bold" : ""}`}
              onMouseEnter={() => setHoveredButton("more")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              MORE
            </Link>
            {/* HOME Button */}
            {isAboutPage ? (
              <button
                onClick={() => scrollToSection('about')}
                className="relative z-10 text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition flex items-center gap-1"
                onMouseEnter={() => setHoveredButton("home")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                HOME
              </button>
            ) : (
              <Link
                href="/"
                ref={homeRef}
                className={`relative z-10 text-white border border-white rounded-3xl px-4 py-1 text-xs font-sans bg-transparent transition flex items-center gap-1 ${pathname === "/" ? "font-bold" : ""}`}
                onMouseEnter={() => setHoveredButton("home")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                HOME
              </Link>
            )}
          </div>
          
          <div className="flex justify-center relative z-50">
            <Link href="/" className="text-white text-[2rem] font-bold font-serif hover:opacity-80 transition-opacity relative z-50">
              An Tran
            </Link>
          </div>
          
          <div className="flex items-center justify-end gap-2">
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
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between px-5 pt-5">
          <Link href="/" className="text-white text-xl font-bold font-serif leading-none">
            An Tran
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white px-2 pb-2 z-60 relative flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'scale-100 opacity-100' 
              : 'scale-95 opacity-0'
          }`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-8 text-center">
            <Link 
              href="/more" 
              className="text-white text-2xl font-serif hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MORE
            </Link>
            
            {isAboutPage ? (
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white text-2xl font-serif hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              >
                ABOUT
              </button>
            ) : (
              <Link 
                href="/" 
                className="text-white text-2xl font-serif hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            )}
            
            {/* Divider */}
            <div className="w-24 h-px bg-white/30 my-4"></div>
            
            {/* Social Links */}
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://github.com/quynhan-tr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-lg font-sans hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GITHUB
              </a>
              <a 
                href="https://www.linkedin.com/in/quynhan05/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-lg font-sans hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LINKEDIN
              </a>
              <a 
                href="mailto:a37tran@uwaterloo.ca" 
                className="text-white text-lg font-sans hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                EMAIL
              </a>
            </div>
          </div>
          
          {/* Close instruction */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <p className="text-white/60 text-sm font-sans">Tap anywhere to close</p>
          </div>
        </div>
      </div>
    </>
  );
}

