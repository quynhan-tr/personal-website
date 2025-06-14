"use client";

import React, { useRef, useEffect, useState, use } from "react";
import { galleries } from "@/data/gallery";
import Image from "next/image";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { motion } from "framer-motion";

export default function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const gallery = galleries.find(g => g.slug === slug);

  // --- Agenda/Thumbnail Sidebar Logic ---
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  // --- Mobile Modal State ---
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = imageRefs.current.map(ref => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        return Math.abs(rect.top - window.innerHeight / 2);
      });
      const minOffset = Math.min(...offsets);
      const newActive = offsets.findIndex(offset => offset === minOffset);
      setActiveIndex(newActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for header visibility
  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

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
      <div ref={headerRef} className="relative w-screen h-[55vh] min-h-[350px] max-h-[600px] overflow-hidden">
        <Image
          src={gallery.banner}
          alt={gallery.title}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        {/* Centered Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight drop-shadow-lg">
            {gallery.title}
          </h1>
          <div className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-200 mb-2">
            {date} <span className="mx-2">▶</span> {location} 
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-6">
        <div className="max-w-6xl rounded-xl px-4 pt-20 pb-7 text-center text-md md:text-xl text-gray-200 font-serif mx-auto">
          {gallery.slug === 'we-do-wonder' ? (() => {
            const desc = gallery.description;
            const linkText = "We Do Wonder";
            const linkIndex = desc.indexOf(linkText);
            if (linkIndex === -1) return <SplitTextAnimated text={desc} />;
            return (
              <span className="inline">
                <SplitTextAnimated text={desc.slice(0, linkIndex)} />
                <a
                  href="https://www.facebook.com/wedowonder"
                  className="underline text-sky-300 hover:text-sky-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SplitTextAnimated text={linkText} />
                </a>
                <SplitTextAnimated text={desc.slice(linkIndex + linkText.length)} />
              </span>
            );
          })() : gallery.slug === 'jamhacks' ? (() => {
            const desc = gallery.description;
            const linkText = "JAMHacks";
            const linkIndex = desc.indexOf(linkText);
            if (linkIndex === -1) return <SplitTextAnimated text={desc} />;
            return (
              <span className="inline">
                <SplitTextAnimated text={desc.slice(0, linkIndex)} />
                <a
                  href="https://www.jamhacks.ca/"
                  className="underline text-sky-300 hover:text-sky-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SplitTextAnimated text={linkText} />
                </a>
                <SplitTextAnimated text={desc.slice(linkIndex + linkText.length)} />
              </span>
            );
          })() : (
            <SplitTextAnimated text={gallery.description} />
          )}
        </div>
      </div>

      {/* Mobile Grid Gallery */}
      <div className="block lg:hidden w-full max-w-xl px-2 mt-10">
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
        {/* Modal/Lightbox */}
        {modalImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setModalImg(null)}
          >
            <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
              <Image
                src={modalImg}
                alt="Enlarged gallery photo"
                width={1200}
                height={900}
                className="object-contain w-full h-full rounded-2xl shadow-2xl"
              />
              <button
                className="absolute top-2 right-2 bg-black/70 text-white rounded-full px-3 py-1 text-lg font-bold"
                onClick={e => { e.stopPropagation(); setModalImg(null); }}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Agenda/Thumbnail Sidebar (Desktop Only, Vertically Centered, Fade In) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSidebar ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="hidden lg:flex flex-col fixed right-8 top-1/2 -translate-y-1/2 z-30 gap-3 pointer-events-auto"
      >
        {gallery.photos.map((photo, idx) => {
          const shifts = [
            "-translate-x-2", "translate-x-2", "translate-x-0", "-translate-x-1", "translate-x-1"
          ];
          const shift = shifts[idx % shifts.length];
          const rotate = idx % 3 === 0 ? "-rotate-2" : idx % 3 === 1 ? "rotate-2" : "";
          const overlap = idx === 0 ? "" : "-mt-2";
          return (
            <button
              key={idx}
              onClick={() => imageRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${shift} ${rotate} ${overlap}
                ${activeIndex === idx ? 'border-white brightness-110 shadow-lg' : 'border-transparent brightness-75'}`}
              style={{ width: 60, background: '#181a1b', padding: 0 }}
              aria-label={`Go to image ${idx + 1}`}
            >
              <Image
                src={photo}
                alt={`Thumbnail ${idx + 1}`}
                width={60}
                height={40}
                className="object-contain w-full h-auto"
              />
            </button>
          );
        })}
      </motion.div>

      {/* Scrollable Gallery with Overlap and Animation (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center w-full mt-16">
        {gallery.photos.map((photo, index) => {
          const shifts = [
            "-translate-x-8", "translate-x-8", "translate-x-0", "-translate-x-4", "translate-x-4"
          ];
          const shift = shifts[index % shifts.length];
          const overlap = index === 0 ? "mt-10" : "-mt-13";
          const rotate = index % 3 === 0 ? "-rotate-2" : index % 3 === 1 ? "rotate-2" : "";
          const size = index % 4 === 0 ? "max-w-5xl" : "max-w-3xl";
          return (
            <motion.div
              key={index}
              ref={el => { imageRefs.current[index] = el; }}
              className={`w-[99vw] ${size} rounded-2xl overflow-hidden shadow-xl mb-10 ${shift} ${overlap} ${rotate} relative z-10 group`}
              style={{ background: "#181a1b" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            >
              <Image
                src={photo}
                alt={`${gallery.title} photo ${index + 1}`}
                width={1600}
                height={1000}
                className="object-cover w-full h-auto transition-transform duration-300"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 