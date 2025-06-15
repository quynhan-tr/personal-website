import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EducationCardProps {
  school: string;
  year: string;
  techStack: string[];
  logo: string;
  major: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const EducationCard = ({
  school,
  year,
  techStack,
  logo,
  major,
  open,
  onOpen,
  onClose
}: EducationCardProps) => (
  <div
    className="block group relative cursor-pointer"
    tabIndex={0}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
    onFocus={onOpen}
    onBlur={onClose}
  >
    <div className="relative flex flex-col items-start p-4 md:p-6 rounded-2xl bg-[#18191b] transition-all duration-300 overflow-visible min-h-[80px] mb-4 md:mb-6 shadow-none hover:shadow-xl">
      {/* Logo, School & Year Row */}
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 relative z-40">
            <Image
              src={logo}
              alt={`${school} logo`}
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight mb-1">
              {school}
            </h3>
            <div className="text-sm md:text-base text-gray-300 font-normal mb-1">{major}</div>
          </div>
        </div>
        <span className="text-sm md:text-md text-gray-400 ml-4 whitespace-nowrap">{year}</span>
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
            className="w-full mt-4 relative z-40"
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
    </div>
  </div>
);

export default EducationCard; 