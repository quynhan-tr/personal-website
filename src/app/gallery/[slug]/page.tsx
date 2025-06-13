"use client";

import React from "react";
import { galleries } from "@/data/galllery";
import Image from "next/image";

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
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-2 pb-16">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mt-12 mb-8 tracking-tight">
        {gallery.title}
      </h1>

      {/* Banner */}
      <div className="w-full max-w-4xl aspect-[3/1.5] rounded-3xl overflow-hidden mb-8 shadow-xl">
        <Image
          src={gallery.banner}
          alt={gallery.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Date and Location */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="uppercase tracking-widest text-sm font-semibold text-gray-200 mb-2">
          {date} <span className="mx-2">▶</span> {location}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center text-lg md:text-xl text-gray-200 font-serif mb-12">
        {gallery.description}
      </div>

      {/* Scrollable Gallery */}
      <div className="flex flex-col items-center w-full gap-12">
        {gallery.photos.map((photo, index) => (
          <div key={index} className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={photo}
              alt={`${gallery.title} photo ${index + 1}`}
              width={1200}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 