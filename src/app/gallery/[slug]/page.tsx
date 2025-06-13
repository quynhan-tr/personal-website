"use client";

import React from "react";
import { galleries } from "@/data/galllery";
import Image from "next/image";
import SplitTextAnimated from "@/components/SplitTextAnimated";

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const gallery = galleries.find(g => g.slug === params.slug);

  if (!gallery) {
    return (
      <div className="min-h-screen flex flex-col text-white">
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-center mb-2">Coming Soon...</h1>
        </main>
      </div>
    );
  }

  // Use dynamic date and location from gallery data
  const date = gallery.date;
  const location = gallery.location;

  return (
    <div className="min-h-screen bg-[#121416] text-white flex flex-col items-center px-0 pb-16">
      {/* Banner Header */}
      <div className="relative w-screen h-[55vh] min-h-[350px] max-h-[600px] overflow-hidden">
        <Image
          src={gallery.banner}
          alt={gallery.title}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        {/* Centered Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight drop-shadow-lg">
            {gallery.title}
          </h1>
          <div className="uppercase tracking-widest text-sm font-semibold text-gray-200 mb-2">
            {date} <span className="mx-2">▶</span> {location}
          </div>
          <div className="max-w-2xl text-center text-lg md:text-xl text-gray-200 font-serif mb-2">
            <SplitTextAnimated text={gallery.description} />
          </div>
        </div>
      </div>

      {/* Scrollable Gallery with Overlap */}
      <div className="flex flex-col items-center w-full mt-16">
        {gallery.photos.map((photo, index) => {
          // Patterned horizontal shift: left, right, center, randomize a bit
          const shifts = [
            "-translate-x-8", // left
            "translate-x-8",  // right
            "translate-x-0",  // center
            "-translate-x-4", // slightly left
            "translate-x-4",  // slightly right
          ];
          const shift = shifts[index % shifts.length];

          // Overlap with negative margin
          const overlap = index === 0 ? "mt-10" : "-mt-13";

          // Slight rotation
          const rotate =
            index % 3 === 0
              ? "-rotate-2"
              : index % 3 === 1
              ? "rotate-2"
              : "";

          return (
            <div
              key={index}
              className={`w-[99vw] max-w-5xl rounded-2xl overflow-hidden shadow-xl mb-10 ${shift} ${overlap} ${rotate} relative z-10`}
              style={{ background: "#181a1b" }}
            >
              <Image
                src={photo}
                alt={`${gallery.title} photo ${index + 1}`}
                width={1200}
                height={800}
                className="object-cover w-full h-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
} 