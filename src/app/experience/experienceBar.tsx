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
    <div className="relative flex items-center p-6 rounded-2xl bg-[#18191b] hover:bg-transparent transition-all duration-300 overflow-hidden min-h-[110px] mb-6 shadow-none hover:shadow-xl">
      {/* Icon */}
      <Image
        src={icon}
        alt={`${title} icon`}
        width={64}
        height={64}
        className="w-16 h-16 ml-4 mr-8 z-10 object-contain"
      />

      {/* Text Content */}
      <div className="z-10">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-gray-400">{description}</p>
      </div>

      {/* Background Image with left-to-right fade */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
             backgroundImage: `linear-gradient(to right, #18191b 30%, rgba(0, 0, 0, 0)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
      </div>
    </div>
  </a>
);

export default ExperienceCard;