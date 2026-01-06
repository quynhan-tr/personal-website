"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavBar() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (isAboutPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-60 bg-transparent backdrop-blur-sm transition-colors">
        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center py-2 px-4 lg:px-8">
          <div className="flex items-center justify-start gap-4 relative">
            <div className="flex items-center justify-start gap-6">
              <a href="mailto:a37tran@uwaterloo.ca" className="text-white hover:text-gray-300 transition-colors" aria-label="Email">
                <FiMail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/quynhan05/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="https://github.com/quynhan-tr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center relative z-50">
            <Link
              href="/"
              className={`text-white text-[2rem] font-medium hover:opacity-80 transition-opacity relative z-50 ${playfair.className}`}
            >
              An Tran
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=prev'>←</a>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/' target='_blank' rel="noopener noreferrer">
                <Image
                  src='https://cs.uwatering.com/icon.white.svg'
                  alt='CS Webring'
                  width={24}
                  height={24}
                  style={{ width: '24px', height: 'auto', opacity: 0.8 }}
                />
              </a>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=next'>→</a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between px-5 pt-5">
          <Link
            href="/"
            className={`text-white text-xl font-medium leading-none ${playfair.className}`}
          >
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
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMobileMenuOpen
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
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'scale-100 opacity-100'
            : 'scale-95 opacity-0'
            }`}
        >
          {/* Navigation Links */}
          {isAboutPage ? (
            <button
              onClick={() => scrollToSection('about')}
              className="text-white text-2xl font-title hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
            >
              ABOUT
            </button>
          ) : (
            <Link
              href="/"
              className="text-white text-2xl font-title hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          )}

          {/* Divider */}
          <div className="w-24 h-px bg-white/30 my-4"></div>

          {/* Social Links */}
          <div className="flex flex-row items-center gap-6">
            <a
              href="https://github.com/quynhan-tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/quynhan05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:a37tran@uwaterloo.ca"
              className="text-white hover:text-gray-300 transition-colors transform hover:scale-105 duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=prev'>←</a>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/' target='_blank' rel="noopener noreferrer">
                <Image
                  src='https://cs.uwatering.com/icon.white.svg'
                  alt='CS Webring'
                  width={24}
                  height={24}
                  style={{ width: '24px', height: 'auto', opacity: 0.8, margin: '0 auto' }}
                />
              </a>
              <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=next'>→</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}