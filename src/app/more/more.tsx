"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
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
  leftVariants, 
  rightVariants 
}: { 
  sq: Sidequest; 
  leftVariants: Variants; 
  rightVariants: Variants; 
}) {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(blockRef, { amount: 0.4 });

  return (
    <div
      ref={blockRef}
      className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center mt-60 mb-60"
    >
      {/* ─── Left Photo Card ─── */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
        variants={leftVariants}
        initial="closed"
        animate={inView ? "open" : "closed"}
      >
        <Image
          src={sq.images[0]}
          alt={`${sq.title} left`}
          width={480}
          height={600}
          className="rounded-3xl shadow-2xl w-[480px] h-[600px] object-cover"
        />
      </motion.div>

      {/* ─── Central Text Block ─── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-200">
          <span>{sq.time}</span>
          <span className="mx-2">▶</span>
          <span>{sq.place}</span>
        </div>

        <h2 className="font-serif text-6xl font-bold mb-6 leading-none">
          {sq.title.split("*").map((w: string, i: number) => (
            <span key={i} className="block">{w}</span>
          ))}
        </h2>

        <Link
          href="/underconstruction"
          className="mt-2 px-6 py-2 border border-gray-300 rounded-full text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition inline-block"
        >
          SEE MORE
        </Link>

        <div className="w-56 h-3 mt-10 rounded-full bg-gradient-to-r from-sky-300 via-gray-200 to-sky-900 opacity-70" />
      </div>

      {/* ─── Right Photo Card ─── */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
        variants={rightVariants}
        initial="closed"
        animate={inView ? "open" : "closed"}
      >
        <Image
          src={sq.images[1]}
          alt={`${sq.title} right`}
          width={480}
          height={600}
          className="rounded-3xl shadow-2xl w-[480px] h-[600px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function More() {
  const SPRING_OUT = { type: "spring", stiffness: 45, damping: 20 };
  const SPRING_IN   = { type: "spring", stiffness: 25, damping: 30 }; 
  const SPREAD = "40%";  

  const leftVariants: Variants = {
    closed: {                     
      x: 0, y: 0, rotate: 0, scale: 1, opacity: 1,
      transition: SPRING_IN,      
    },
    open: {                       
      x: `-${SPREAD}`, y: 0, rotate: -8, scale: 1.1, opacity: 1,
      transition: SPRING_OUT,
    },
  };

  const rightVariants: Variants = {
    closed: {
      x: 0, y: 0, rotate: 0, scale: 1, opacity: 1,
      transition: SPRING_IN,
    },
    open: {
      x: SPREAD, y: 0, rotate: 8, scale: 1.1, opacity: 1,
      transition: SPRING_OUT,
    },
  };

  return (
    <>
      {/* --- Intro Section --- */}
      <section className="min-h-screen flex flex-col items-center justify-center px-10 relative text-white">
        <div className="flex flex-col items-center w-full -translate-y-8">
          <h1 className="text-8xl font-semibold mb-8 text-center">
            <SplitTextAnimated text="more..." />
          </h1>

          <p className="text-xl text-gray-300 leading-7 mb-8 min-h-[7.5rem] text-center">
            <SplitTextAnimated text={intro} />
          </p>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <FiChevronDown size={36} className="text-gray-400" />
          <span className="text-sm text-gray-400 mt-1">Scroll down for more</span>
        </div>
      </section>

      {/* --- Sidequests Section --- */}
      <section className="w-full flex flex-col items-center gap-32">
        {sidequests.map((sq, idx) => {
          return (
            <SidequestBlock
              key={idx}
              sq={sq}
              leftVariants={leftVariants}
              rightVariants={rightVariants}
            />
          );
        })}
      </section>
    </>
  );
}