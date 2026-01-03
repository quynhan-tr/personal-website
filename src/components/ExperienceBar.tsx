"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { Experience } from "../data/experience";

interface ExperienceCardProps extends Experience {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenBlog?: (blog: NonNullable<Experience['blog']>) => void;
}

const ExperienceCard = ({
  icon,
  bgImage,
  title,
  description,
  link,
  techStack,
  blog,
  open,
  onOpen,
  onClose,
  onOpenBlog
}: ExperienceCardProps) => (
  <div
    className="block group relative"
    tabIndex={0}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <div className="relative flex flex-col items-start p-4 md:p-6 rounded-2xl bg-[#18191b] hover:bg-transparent transition-all duration-300 overflow-visible min-h-[100px] sm:min-h-[110px] mb-4 md:mb-6 shadow-none hover:shadow-xl">
      {/* Icon & Text Row */}
      <div className="flex items-center w-full relative z-40">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={64}
            height={64}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ml-2 md:ml-4 mr-4 md:mr-8 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow min-w-0 mr-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-tight mb-1">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-tight">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 shrink-0">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center gap-2 group/btn"
            title="Visit Company"
          >
            <FaExternalLinkAlt size={14} />
            <span className="hidden md:block text-xs font-sans">Visit</span>
          </a>

          {blog && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (blog.type === 'link' && blog.url) {
                  window.open(blog.url, '_blank');
                } else if (blog.type === 'content' && onOpenBlog) {
                  onOpenBlog(blog);
                }
              }}
              className="p-2 text-gray-400 hover:text-blue-300 transition-colors bg-white/5 hover:bg-blue-500/10 rounded-lg flex items-center justify-center gap-2"
              title={blog.title || "Read Blog"}
            >
              <FaBookOpen size={14} />
              <span className="hidden md:block text-xs font-sans">Blog</span>
            </button>
          )}
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
            className="w-full mt-4 relative z-40 pl-[calc(3rem+1rem)] md:pl-[calc(4rem+2rem)]"
          >
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-black/50 border border-white/10 text-white px-3 py-1 rounded-full text-xs font-sans font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image with left-to-right fade */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #18191b 30%, rgba(24, 25, 27, 0.9) 60%, rgba(24, 25, 27, 0.4) 100%), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  </div>
);

export default ExperienceCard;
