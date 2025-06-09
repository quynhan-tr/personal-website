"use client";
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
  link: string;
}

const ExperienceCard = ({
  icon,
  bgImage,
  title,
  description,
  link
}: ExperienceCardProps) => (
  <a
    href={link}
    className="block group"
    tabIndex={0}
  >
    <div className="relative flex items-center p-4 md:p-6 rounded-2xl bg-[#18191b] hover:bg-transparent transition-all duration-300 overflow-hidden min-h-[100px] sm:min-h-[110px] mb-4 md:mb-6 shadow-none hover:shadow-xl">
      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ml-2 md:ml-4 mr-4 md:mr-8 z-10 object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="z-10 w-full min-w-0">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight mb-1">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-tight">
          {description}
        </p>
      </div>

      {/* Background Image with left-to-right fade */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, #18191b 20%, rgba(24, 25, 27, 0.8) 50%, rgba(0, 0, 0, 0.2)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
      </div>
    </div>
  </a>
);

export default ExperienceCard;