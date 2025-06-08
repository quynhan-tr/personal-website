"use client";

import React from "react";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { FiChevronDown } from "react-icons/fi";

const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function More() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-10 relative">
      <div className="relative -translate-y-[40px] flex flex-col items-center w-full">
        <h1 className="text-5xl font-semibold mb-8 text-center">
          <SplitTextAnimated text="more..." />
        </h1>
        <p className="text-lg text-gray-300 leading-7 mb-8 min-h-[7.5rem] max-w-3xl text-center">
          <SplitTextAnimated text={intro} />
        </p>
      </div>
      <div className="absolute bottom-18 flex flex-col items-center animate-bounce">
        <FiChevronDown size={36} className="text-gray-400" />
        <span className="text-sm text-gray-400 mt-1">Scroll down for more</span>
      </div>
    </section>
  );
}