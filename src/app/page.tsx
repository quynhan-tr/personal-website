"use client"

import React from "react";
import Carousels from "../components/carousels";
import About from "../components/about";
import ExperienceCard from "./experience/experienceBar";
import { experiences } from "./experience/experience";
import { projects } from "./project/projects";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about">
        <About />
        <Carousels />
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 lg:px-8 pb-10 md:pb-15 pt-20 md:pt-40 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Heading on the left */}
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:sticky lg:top-20 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white leading-tight">
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

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 md:pt-20 lg:pt-33 pb-16 md:pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Heading on the left */}
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:sticky lg:top-20 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white leading-tight">
            PROJECTS
          </h2>
        </div>
        {/* Projects on the right */}
        <div className="flex-1 w-full">
          <ul className="space-y-6 md:space-y-8">
            {projects.map((project, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row md:items-center w-full border-b border-white/10 pb-6 gap-4 md:gap-0"
              >
                <span className="text-lg md:text-xl lg:text-2xl font-serif text-white md:w-1/3 md:min-w-[120px] mb-2 md:mb-0">
                  {project.title}
                </span>
                <div className="flex flex-wrap gap-2 md:gap-3 md:min-w-[175px] md:max-w-[350px] md:ml-8 lg:ml-35 mb-3 md:mb-0">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-xs font-sans font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded-full self-end md:ml-auto hover:bg-white hover:text-black transition w-fit"
                  aria-label={`View ${project.title}`}
                >
                  <FiArrowRight size={18} className="md:w-5 md:h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
