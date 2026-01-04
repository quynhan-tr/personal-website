"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import SplitTextAnimated from "@/components/SplitTextAnimated";
import { GalleryItem } from "@/data/gallery";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    gallery: GalleryItem | undefined;
}

export default function GalleryModal({ isOpen, onClose, gallery }: GalleryModalProps) {
    // --- Agenda/Thumbnail Sidebar Logic ---
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // --- Mobile Modal State ---
    const [modalImg, setModalImg] = useState<string | null>(null);

    // Reset state when gallery changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setActiveIndex(0);
            setShowSidebar(false);
            // Reset scroll position
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = 0;
            }
        }
    }, [isOpen, gallery]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || !isOpen) return;

        const handleScroll = () => {
            // Calculate active index based on scroll position relative to container
            const containerTop = container.getBoundingClientRect().top;
            const containerHeight = container.clientHeight;
            const centerLine = containerTop + containerHeight / 2;

            const offsets = imageRefs.current.map(ref => {
                if (!ref) return Infinity;
                const rect = ref.getBoundingClientRect();
                // Check distance of element center to container center
                const elementCenter = rect.top + rect.height / 2;
                return Math.abs(elementCenter - centerLine);
            });

            const minOffset = Math.min(...offsets);
            const newActive = offsets.findIndex(offset => offset === minOffset);
            if (newActive !== -1) {
                setActiveIndex(newActive);
            }

            // Sidebar visibility logic
            if (headerRef.current) {
                const headerRect = headerRef.current.getBoundingClientRect();
                // If header is scrolled out of view (bottom is above container top or close to it)
                // Adjust threshold as needed
                const isHeaderVisible = headerRect.bottom > containerTop;
                setShowSidebar(!isHeaderVisible);
            }
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();
        return () => container.removeEventListener("scroll", handleScroll);
    }, [isOpen, gallery]);

    if (!isOpen) return null;

    if (!gallery) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div
                                className="bg-[#121416] border border-white/10 rounded-2xl w-full max-w-sm aspect-video flex flex-col items-center justify-center shadow-2xl pointer-events-auto relative"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-colors"
                                    aria-label="Close"
                                >
                                    <IoClose size={24} />
                                </button>
                                <h1 className="text-2xl text-white font-serif tracking-widest">Coming Soon...</h1>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        );
    }

    const date = gallery.date;
    const location = gallery.location;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-40 transition-opacity"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-[#121416] border border-white/10 rounded-2xl w-full max-w-[90vw] h-[80vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-6 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-md"
                                aria-label="Close gallery"
                            >
                                <IoClose size={24} />
                            </button>

                            {/* Split Layout Container */}
                            <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">

                                {/* Left Column: Text Content */}
                                <div className="w-full lg:w-[40%] flex flex-col p-8 lg:p-12 overflow-y-auto custom-scrollbar shrink-0">
                                    <div className="flex flex-col items-start text-left mb-8">
                                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight text-white">
                                            {gallery.title}
                                        </h1>
                                        <div className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-400 mb-6">
                                            {date} <span className="mx-2 text-white/30">|</span> {location}
                                        </div>

                                        <div className="text-base md:text-lg text-gray-300 font-serif leading-relaxed">
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
                                </div>

                                {/* Right Column: Photos */}
                                <div
                                    ref={scrollContainerRef}
                                    className="flex-1 overflow-y-auto custom-scrollbar relative"
                                >
                                    {/* Mobile Grid Gallery */}
                                    <div className="block lg:hidden w-full px-4 mt-8 pb-10">
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
                                        {modalImg && (
                                            <div
                                                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                                                onClick={(e) => { e.stopPropagation(); setModalImg(null); }}
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
                                                        onClick={(e) => { e.stopPropagation(); setModalImg(null); }}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Desktop Scrollable Gallery */}
                                    <div className="hidden lg:flex flex-col items-center w-full py-12 px-6">
                                        {gallery.photos.map((photo, index) => {
                                            const shifts = [
                                                "-translate-x-8", "translate-x-8", "translate-x-0", "-translate-x-4", "translate-x-4"
                                            ];
                                            const shift = shifts[index % shifts.length];
                                            const overlap = index === 0 ? "mt-0" : "-mt-12";
                                            const rotate = index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-1" : "";
                                            // Adjusted sizes for modal width
                                            const size = index % 4 === 0 ? "max-w-[90%]" : "max-w-[75%]";

                                            return (
                                                <motion.div
                                                    key={index}
                                                    ref={el => { imageRefs.current[index] = el; }}
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
                                </div>
                            </div>

                            {/* Agenda/Thumbnail Sidebar (Desktop Only) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: showSidebar ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="hidden lg:flex flex-col absolute right-4 top-1/2 -translate-y-1/2 z-50 gap-2 pointer-events-auto"
                            >
                                {gallery.photos.map((photo, idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                if (imageRefs.current[idx]) {
                                                    imageRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                }
                                            }}
                                            className={`w-12 h-8 rounded overflow-hidden border transition-all duration-200 
                        ${activeIndex === idx ? 'border-white opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-80'}`}
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

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
