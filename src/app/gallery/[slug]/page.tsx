"use client";

import React from "react";
import { galleries } from "@/data/galllery";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const gallery = galleries.find(g => g.slug === params.slug);

  if (!gallery) {
    return (
      <div className="min-h-screen flex flex-col text-white">
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-center mb-2">Coming Soon...</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 font-sans border border-gray-300 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition"
          >
            <FiArrowLeft />
            Back
          </button>
          <h1 className="text-xl font-medium">{gallery.title}</h1>
          <div className="w-20" /> {/* Spacer for balance */}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        {/* Banner */}
        <div className="relative w-full h-[50vh] min-h-[400px]">
          <Image
            src={gallery.banner}
            alt={gallery.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{gallery.title}</h2>
            <p className="text-gray-300 max-w-2xl">{gallery.description}</p>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.photos.map((photo, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={photo}
                  alt={`${gallery.title} photo ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 