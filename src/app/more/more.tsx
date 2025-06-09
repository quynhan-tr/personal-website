"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import sidequests from "./sidequests";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ...`;

// --- Types ---
type Sidequest = {
  title: string;
  time: string;
  place: string;
  images: string[];
};

// --- Sidequest Block Component ---
function SidequestBlock({ 
  sq, 
  spread 
}: { 
  sq: Sidequest; 
  spread: string;
}) {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to smooth animation values
  const leftX = useTransform(scrollYProgress, [0, 0.4], ["0%", `-${spread}`]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.4], [0, -8]);
  const leftScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

  const rightX = useTransform(scrollYProgress, [0, 0.4], ["0%", spread]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.4], [0, 8]);
  const rightScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

  return (
    <div
      ref={blockRef}
      className="relative w-full max-w-7xl flex flex-col items-center justify-center mt-15 mb-15 md:mt-60 md:mb-60 px-4"
    >
      {/* ─── Left Photo Card ─── */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 hidden md:flex"
        style={{
          x: leftX,
          y: 0,
          rotate: leftRotate,
          scale: leftScale,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 15 }}
      >
        <Image
          src={sq.images[0]}
          alt={`${sq.title} left`}
          width={480}
          height={600}
          className="rounded-3xl shadow-2xl w-[320px] h-[400px] lg:w-[480px] lg:h-[600px] object-cover"
        />
      </motion.div>

      {/* ─── Central Text Block ─── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md md:max-w-none">
        <div className="mb-3 md:mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-200">
          <span>{sq.time}</span>
          <span className="mx-1 md:mx-2">▶</span>
          <span>{sq.place}</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight md:leading-none">
          {sq.title.split("*").map((w: string, i: number) => (
            <span key={i} className="block">{w}</span>
          ))}
        </h2>

        {/* Mobile Images */}
        <div className="md:hidden flex gap-3 mb-6 overflow-x-auto w-full">
          <div className="flex gap-3 min-w-max">
            {sq.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${sq.title} ${idx + 1}`}
                width={200}
                height={250}
                className="rounded-2xl shadow-lg w-[200px] h-[250px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <Link
          href="/underconstruction"
          className="mt-2 px-4 md:px-6 pt-3 md:py-2 border border-gray-300 rounded-full text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition inline-block"
        >
          SEE MORE
        </Link>

        <div className="w-32 md:w-56 h-2 md:h-3 mt-6 md:mt-10 rounded-full bg-gradient-to-r from-sky-300 via-gray-200 to-sky-900 opacity-70" />
      </div>

      {/* ─── Right Photo Card ─── */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 hidden md:flex"
        style={{
          x: rightX,
          y: 0,
          rotate: rightRotate,
          scale: rightScale,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 15 }}
      >
        <Image
          src={sq.images[1]}
          alt={`${sq.title} right`}
          width={480}
          height={600}
          className="rounded-3xl shadow-2xl w-[320px] h-[400px] lg:w-[480px] lg:h-[600px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function More() {
  const SPREAD = "30%";  // Reduced spread for better mobile compatibility

  return (
    <>
      {/* --- Intro Section --- */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 relative text-white">
        <div className="flex flex-col items-center w-full -translate-y-4 md:-translate-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-6 md:mb-8 text-center">
            <SplitTextAnimated text="more..." />
          </h1>

          <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-6 md:leading-7 mb-6 md:mb-8 min-h-[6rem] md:min-h-[7.5rem] text-center">
              <SplitTextAnimated text={intro} />
            </p>
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <FiChevronDown size={28} className="text-gray-400 md:w-9 md:h-9" />
          <span className="text-xs md:text-sm text-gray-400 mt-1">Scroll down for more</span>
        </div>
      </section>

      {/* --- Sidequests Section --- */}
      <section className="w-full flex flex-col items-center gap-16 md:gap-32 overflow-x-hidden pt-5 pb-16 md:pb-32">
        {sidequests.map((sq, idx) => (
          <SidequestBlock
            key={idx}
            sq={sq}
            spread={SPREAD}
          />
        ))}
      </section>
    </>
  );
}