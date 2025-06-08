"use client";

import React, { useRef, useEffect, useState } from "react";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import sidequests from "./sidequests";

const intro = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function More() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openStates, setOpenStates] = useState<boolean[]>(sidequests.map(() => false));

  useEffect(() => {
    function onScroll() {
      setOpenStates((prev) =>
        sectionRefs.current.map((ref, idx) => {
          if (!ref) return prev[idx];
          const rect = ref.getBoundingClientRect();
          const visible = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.2;
          return visible;
        })
      );
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Intro Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-white px-10 relative">
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

      {/* Sidequests Section */}
      <section className="flex flex-col gap-32 w-full items-center min-h-screen bg-transparent">
        {sidequests.map((sq, idx) => {
          const isOpen = openStates[idx];
          return (
            <div
              key={idx}
              ref={el => { sectionRefs.current[idx] = el; }}
              className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl min-h-screen transition-all duration-700"
              style={{ minHeight: "100vh" }}
            >
              {/* Left Image */}
              <div
                className={`flex-1 flex justify-center transition-all duration-700`}
                style={
                  isOpen
                    ? {
                        position: "relative",
                        transform: "translateX(-120px) rotate(-8deg) scale(1.15)",
                        opacity: 1,
                        zIndex: 2,
                      }
                    : {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(1)",
                        opacity: 1,
                        zIndex: 2,
                      }
                }
              >
                <Image
                  src={sq.images[0]}
                  alt={sq.title + " left"}
                  width={480}
                  height={600}
                  className="rounded-3xl w-[480px] h-[600px] object-cover shadow-2xl"
                  style={{ objectPosition: "center" }}
                />
              </div>
              {/* Center Content */}
              <div
                className={`flex-1 flex flex-col items-center justify-center text-center transition-all duration-700`}
                style={{
                  transform: isOpen ? "scale(1)" : "scale(0.95)",
                  opacity: isOpen ? 1 : 0.7,
                  zIndex: 3,
                }}
              >
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-200">
                  <span>{sq.time}</span>
                  <span className="mx-2">▶</span>
                  <span>{sq.place}</span>
                </div>
                <h2 className="font-serif text-6xl font-bold mb-6 leading-none">
                  {sq.title.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h2>
                <button className="mt-2 px-6 py-2 border border-gray-300 rounded-full text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition">
                  SEE MORE
                </button>
                <div className="w-56 h-3 mt-10 rounded-full bg-gradient-to-r from-sky-300 via-gray-200 to-sky-900 opacity-70" />
              </div>
              {/* Right Image */}
              <div
                className={`flex-1 flex justify-center transition-all duration-700`}
                style={
                  isOpen
                    ? {
                        position: "relative",
                        transform: "translateX(120px) rotate(8deg) scale(1.15)",
                        opacity: 1,
                        zIndex: 2,
                      }
                    : {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(1)",
                        opacity: 1,
                        zIndex: 2,
                      }
                }
              >
                <Image
                  src={sq.images[1]}
                  alt={sq.title + " right"}
                  width={480}
                  height={600}
                  className="rounded-3xl w-[480px] h-[600px] object-cover shadow-2xl"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}