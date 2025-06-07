"use client";

import React from "react";
import ExperienceCard from "./experienceBar";
import { experiences } from "./experience";

export default function ExperiencePage() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 pb-15 pt-40 flex flex-col md:flex-row gap-12 items-start">
      {/* Heading on the left */}
      <div className="md:w-1/3 w-full mb-8 md:mb-0 sticky top-16 z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
          EXPERIENCE
        </h2>
      </div>
      {/* Cards on the right */}
      <div className="flex-1 grid grid-cols-1 w-full">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
}