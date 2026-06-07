"use client";

import React, { use, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { FiArrowLeft } from "react-icons/fi";
import { galleries } from "@/data/gallery";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function GalleryPage({ params }: PageProps) {
  const { slug } = use(params);
  const gallery = galleries.find((g) => g.slug === slug);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;
      const centerLine = containerTop + containerHeight / 2;

      const offsets = imageRefs.current.map((ref) => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        return Math.abs(elementCenter - centerLine);
      });

      const minOffset = Math.min(...offsets);
      const newActive = offsets.findIndex((offset) => offset === minOffset);
      if (newActive !== -1) {
        setActiveIndex(newActive);
      }
      setShowSidebar(true);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [gallery]);

  if (!gallery) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#121416] text-white">
        <div className="text-center">
          <h1 className="text-3xl mb-4 font-serif">Not found</h1>
          <Link href="/more" className="text-sky-400 hover:underline">
            Back to Sidequests
          </Link>
        </div>
      </div>
    );
  }

  const renderDescription = (text: string, linkText?: string, linkUrl?: string) => {
    let isLinked = false;
    return text.split("*").map((part, index) => {
      const trimmedPart = part.trim();
      if (!trimmedPart) return null;

      const content = (() => {
        if (!linkText || !linkUrl || isLinked || !trimmedPart.includes(linkText)) return trimmedPart;

        const linkIndex = trimmedPart.indexOf(linkText);
        if (linkIndex === -1) return trimmedPart;

        isLinked = true;

        return (
          <React.Fragment>
            {trimmedPart.slice(0, linkIndex)}
            <a
              href={linkUrl}
              className="underline text-sky-300 hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
            {trimmedPart.slice(linkIndex + linkText.length)}
          </React.Fragment>
        );
      })();

      return (
        <div key={index} className="mb-3.5 last:mb-0 min-h-[1.25em]">
          {content}
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-0 w-full flex flex-col pt-24 pb-4 md:pt-32 md:pb-8 px-4 md:px-12 bg-[#121416] overflow-hidden overscroll-none">
      {/* Split Layout Container */}
      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 overflow-hidden h-full relative">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-[29%] flex flex-col pb-8 md:pb-12 overflow-y-auto no-scrollbar shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            {/* Back Button */}
            <Link
              href="/more"
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors duration-200"
            >
              <FiArrowLeft />
              <span className="font-serif text-sm">Back</span>
            </Link>

            <h1 className={`text-3xl md:text-5xl mb-4 tracking-tight text-white ${playfair.className}`}>
              {gallery.title}
            </h1>
            <div className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-400 mb-4">
              {gallery.date} <span className="mx-2 text-white/30">|</span> {gallery.location}
            </div>

            <div className="text-sm md:text-[15px] text-gray-300 font-serif leading-relaxed whitespace-pre-wrap">
              {(() => {
                if (gallery.slug === "we-do-wonder") {
                  return renderDescription(gallery.description, "We Do Wonder", "https://wedowonder.vercel.app/");
                } else if (gallery.slug === "jamhacks") {
                  return renderDescription(gallery.description, "JAMHacks", "https://www.jamhacks.ca/");
                } else {
                  return renderDescription(gallery.description);
                }
              })()}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Photos */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            {/* Mobile Grid Gallery */}
            <div className="block lg:hidden w-full px-4 pb-10">
              <div className="grid grid-cols-2 gap-2">
                {gallery.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#181a1b]"
                    onClick={() => setModalImg(photo)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image
                      src={photo}
                      alt={`Gallery photo ${idx + 1}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>

              {/* Inner Modal for Mobile Image View */}
              <AnimatePresence>
                {modalImg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImg(null);
                    }}
                  >
                    <div className="relative max-w-[95vw] max-h-[80vh]">
                      <Image
                        src={modalImg}
                        alt="Enlarged gallery photo"
                        width={1200}
                        height={900}
                        className="object-contain w-full h-full rounded-lg"
                      />
                      <button
                        className="absolute -top-10 right-0 text-white p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImg(null);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Scrollable Gallery */}
            <div className="hidden lg:flex flex-col items-center w-full py-12 pl-6 pr-20">
              {gallery.photos.map((photo, index) => {
                const shifts = ["-translate-x-8", "translate-x-8", "translate-x-0", "-translate-x-4", "translate-x-4"];
                const shift = shifts[index % shifts.length];
                const overlap = index === 0 ? "mt-0" : "-mt-12";
                const rotate = index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : "";
                const size = index % 4 === 0 ? "max-w-[90%]" : "max-w-[75%]";

                return (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className={`w-full ${size} rounded-xl overflow-hidden shadow-2xl mb-8 ${shift} ${overlap} ${rotate} relative z-10 group bg-[#181a1b]`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ root: scrollContainerRef, once: true, margin: "-10%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={photo}
                      alt={`${gallery.title} photo ${index + 1}`}
                      width={1200}
                      height={800}
                      className="object-cover w-full h-auto"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Agenda/Thumbnail Sidebar (Desktop Only) */}
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:flex flex-col absolute right-4 top-1/2 -translate-y-1/2 z-50 gap-2 pointer-events-auto"
            >
              {gallery.photos.map((photo, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (imageRefs.current[idx]) {
                        imageRefs.current[idx]?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                    className={`w-12 h-8 rounded overflow-hidden border transition-all duration-200 
                      ${
                        activeIndex === idx
                          ? "border-white opacity-100 scale-110"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    aria-label={`Go to image ${idx + 1}`}
                  >
                    <Image
                      src={photo}
                      alt={`Thumbnail ${idx + 1}`}
                      width={48}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
