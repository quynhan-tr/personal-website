"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { galleries, GalleryItem } from "@/data/gallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const intro = "a little collection of cool things I've been part of";

interface SidequestCardProps {
  item: GalleryItem;
  index: number;
  isLoaded: boolean;
}

function SidequestCard({ item, index, isLoaded }: SidequestCardProps) {
  return (
    <div
      className={`w-full h-full transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      <Link
        href={`/more/${item.slug}`}
        className="block relative group aspect-[4/3] md:aspect-auto w-full h-full overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={item.banner}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gray-300 mb-2">
            <span>{item.date}</span>
            <span className="text-sky-400">●</span>
            <span>{item.location}</span>
          </div>

          <h3 className={`${playfair.className} text-2xl md:text-4xl font-normal text-white mb-4 leading-tight`}>
            {item.title}
          </h3>

          <div className="w-max px-5 py-2 border border-white/30 rounded-full text-xs font-semibold tracking-widest text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors duration-300">
            EXPLORE
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function More() {
  const pageRef = React.useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-0 w-full flex flex-col pt-24 pb-4 md:pt-32 md:pb-8 px-4 md:px-12 bg-[#121416] overflow-hidden overscroll-none"
    >
      {/* Main Content - Text and Grid Side by Side */}
      <div className="flex-1 flex flex-col md:flex-row gap-8 overflow-hidden">
        {/* Left Side - Intro Text */}
        <div className="flex-shrink-0">
          <p className="text-xl md:text-2xl text-gray-300 whitespace-nowrap font-serif">
            <SplitTextAnimated text={intro} />
          </p>
        </div>

        {/* Right Side - Grid */}
        <div className="flex-1 flex items-center justify-end overflow-hidden h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1250px] md:max-h-[82vh] md:aspect-[4/3] px-2">
            {galleries.map((item, idx) => (
              <SidequestCard
                key={`${idx}-${item.title}`}
                item={item}
                index={idx}
                isLoaded={isLoaded}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
