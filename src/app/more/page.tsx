"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import sidequests from "../../data/sidequests";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import GalleryModal from "@/components/GalleryModal";
import { galleries } from "@/data/gallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const intro = "a little collection of cool things I've been part of";

interface SidequestCardProps {
  sq: any;
  onOpen: (slug?: string) => void;
}

function SidequestCard({ sq, onOpen }: SidequestCardProps) {
  return (
    <div className="relative group h-[400px] w-[300px] md:h-[500px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={sq.images[0]}
          alt={sq.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gray-300 mb-2">
          <span>{sq.time}</span>
          <span className="text-sky-400">●</span>
          <span>{sq.place}</span>
        </div>

        <h3 className={`${playfair.className} text-2xl md:text-4xl font-normal text-white mb-4 leading-tight`}>
          {sq.title}
        </h3>

        <button
          onClick={() => onOpen(sq.slug || "coming-soon")}
          className="w-max px-5 py-2 border border-white/30 rounded-full text-xs font-semibold tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
}

export default function More() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pageRef = React.useRef<HTMLDivElement>(null);
  const extendedSidequests = [...sidequests, ...sidequests, ...sidequests];

  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize scroll to the middle set
    const initScroll = () => {
      container.scrollLeft = container.scrollWidth / 3;
    };

    // Tiny timeout to ensure layout is ready
    setTimeout(initScroll, 0);

    const handleWheel = (evt: WheelEvent) => {
      // Only capture wheel if modal is NOT open, but we just check if no modal is rendered
      // However, usually we can control this via pointer-events or state
      // Since modal is an overlay, we might want to prevent this scroll logic if modal is open?
      // Actually, if modal is open, this component might still be mounted. 
      // Ideally we check a ref or state, but the useEffect closure might capture stale state 
      // unless we include state in dependency.
      // Easiest is to check if modal is open inside handler but we don't have easy access to updated state in this effect setup 
      // without re-binding. 
      // Let's just rely on the modal backdrop preventing events or `overscroll-none` on body if needed.
      // But typically `evt.preventDefault()` on container might steal scroll from modal if not careful.
      // BUT `handleWheel` is on WINDOW. Be careful.

      // We can check if the target is within the modal.
      const target = evt.target as HTMLElement;
      if (target.closest('.fixed.inset-0.z-50')) {
        // It's inside the modal, let it scroll naturally (don't prevent default)
        return;
      }

      evt.preventDefault();
      container.scrollLeft += evt.deltaY;
    };

    const handleScroll = () => {
      const oneThird = container.scrollWidth / 3;

      // If we scroll past the second set (into third), jump back to first (middle relative)
      if (container.scrollLeft >= oneThird * 2) {
        container.scrollLeft -= oneThird;
      }
      // If we scroll into the first set, jump forward to second
      else if (container.scrollLeft < oneThird) {
        container.scrollLeft += oneThird;
      }
    };

    // Attach wheel listener to WINDOW to capture scrolls everywhere (including over navbar)
    // We must be careful not to block modal scrolling.
    window.addEventListener("wheel", handleWheel, { passive: false });
    // Attach scroll listener to CONTAINER for infinite loop logic
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = (slug?: string) => {
    if (slug) {
      setSelectedSlug(slug);
    }
  };

  const handleClose = () => {
    setSelectedSlug(null);
  };

  const selectedGallery = galleries.find(g => g.slug === selectedSlug);

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-0 w-full flex flex-col pt-24 pb-4 md:pt-32 md:pb-8 px-4 md:px-12 bg-[#121416] overflow-hidden overscroll-none"
    >
      {/* Header Section */}
      <div className="flex-shrink-0 mb-4 md:mb-6">
        <p className="text-xl md:text-2xl text-gray-300 w-full whitespace-nowrap font-serif">
          <SplitTextAnimated text={intro} />
        </p>
      </div>

      {/* Carousel Section */}
      <div
        ref={containerRef}
        className="flex-1 w-full overflow-x-auto flex items-center gap-8 md:gap-12 px-2 no-scrollbar"
      >
        {extendedSidequests.map((sq, idx) => (
          <SidequestCard
            key={`${idx}-${sq.title}`}
            sq={sq}
            onOpen={handleOpen}
          />
        ))}
      </div>

      <GalleryModal
        isOpen={!!selectedSlug}
        onClose={handleClose}
        gallery={selectedGallery}
      />
    </div>
  );
}