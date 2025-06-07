"use client";

import React from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, idx) => (
        <span
          key={idx}
          className="inline-block transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:text-yellow-300"
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function About() {
  return (
    <section className="min-h-screen bg-[#121212] text-white px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="w-full max-w-sm">
        <Image
          src="/images/profile.png"
          alt="An Tran"
          width={320}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
          priority
        />
      </div>
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-8">About me</h1>
        <p className="text-lg text-gray-300 leading-7 mb-6">
          <SplitText text={intro} />
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#experience"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition scroll-smooth"
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition scroll-smooth"
          >
            PROJECTS
          </a>
          <a
            href="/An-Tran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            <span>RESUME</span>
            <FiDownload size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}