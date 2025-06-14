"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceCardProps {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
  link: string;
  techStack: string[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const ExperienceCard = ({
  icon,
  bgImage,
  title,
  description,
  link,
  techStack,
  open,
  onOpen,
  onClose
}: ExperienceCardProps) => (
  <a
    href={link}
    className="block group relative"
    tabIndex={0}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
    onFocus={onOpen}
    onBlur={onClose}
  >
    <div className="relative flex flex-col items-start p-4 md:p-6 rounded-2xl bg-[#18191b] hover:bg-transparent transition-all duration-300 overflow-visible min-h-[100px] sm:min-h-[110px] mb-4 md:mb-6 shadow-none hover:shadow-xl">
      {/* Icon & Text Row */}
      <div className="flex items-center w-full">
        {/* Icon */}
        <div className="flex-shrink-0 relative z-50">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={64}
            height={64}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ml-2 md:ml-4 mr-4 md:mr-8 relative z-50 object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="relative z-50 w-full min-w-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight mb-1">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-tight">
            {description}
          </p>
        </div>
      </div>
      {/* Tech Stack Dropdown (pushes content below) */}
      <AnimatePresence>
        {open && techStack && techStack.length > 0 && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full mt-4 relative z-50"
          >
            <div className="bg-[#18191b] border border-white/10 rounded-xl shadow-xl px-4 py-3 flex flex-wrap gap-2 min-w-[180px] max-w-xs">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-xs font-sans font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Image with left-to-right fade */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, #18191b 40%, rgba(24, 25, 27, 0.8) 70%, rgba(0, 0, 0, 0.2)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "local",
          }}
        />
      </div>
    </div>
  </a>
);

export default ExperienceCard;