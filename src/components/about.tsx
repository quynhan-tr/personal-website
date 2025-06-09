"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { FiDownload } from "react-icons/fi";

const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x, y });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="about" className="text-white px-4 md:px-8 lg:px-10 py-16 md:py-24 lg:py-30 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
      <div
        className="w-full max-w-xs md:max-w-sm"
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
      >
        <Image
          src="/images/profile.png"
          alt="An Tran"
          width={320}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
          priority
          style={{
            transform: `rotateY(${tilt.x * 15}deg) rotateX(${-tilt.y * 15}deg)`,
            transition:
              tilt.x === 0 && tilt.y === 0
                ? "transform 0.4s cubic-bezier(.4,0,.2,1)"
                : "transform 0.1s",
            willChange: "transform",
          }}
        />
      </div>
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
          <SplitTextAnimated text="hello there!" />
        </h1>
        <p className="text-base md:text-lg text-gray-300 leading-6 md:leading-7 mb-6 md:mb-8 min-h-[6rem] md:min-h-[7.5rem]">
          <SplitTextAnimated text={intro} />
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
          <a
            href="#experience"
            className="border border-white px-3 md:px-4 py-2 rounded hover:bg-white hover:text-black transition scroll-smooth opacity-0 animate-fade-in text-sm md:text-base"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className="border border-white px-3 md:px-4 py-2 rounded hover:bg-white hover:text-black transition scroll-smooth opacity-0 animate-fade-in text-sm md:text-base"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            PROJECTS
          </a>
          <a
            href="/An-Tran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-3 md:px-4 py-2 rounded hover:bg-white hover:text-black transition flex items-center gap-2 opacity-0 animate-fade-in text-sm md:text-base"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <span>RESUME</span>
            <FiDownload size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
