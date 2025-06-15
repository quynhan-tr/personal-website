import React, { useState } from "react";
import EducationCard from "./EducationBar";
import { education } from "../data/education";

export default function EducationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 lg:px-8 pb-10 md:pb-15 pt-20 md:pt-40 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* Heading on the left */}
      <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:sticky lg:top-20 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white leading-tight">
          EDUCATION
        </h2>
      </div>
      {/* Cards on the right */}
      <div className="flex-1 grid grid-cols-1 w-full">
        {education.map((edu, idx) => (
          <EducationCard
            key={idx}
            {...edu}
            open={openIndex === idx}
            onOpen={() => setOpenIndex(idx)}
            onClose={() => setOpenIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
