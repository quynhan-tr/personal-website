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
      <section id="experience" className="max-w-7xl mx-auto px-4 pb-15 pt-40 flex flex-col md:flex-row gap-12 items-start">
        {/* Heading on the left */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0 sticky top-16 z-10">
          <h2 className="text-5xl md:text-[3.5rem] font-serif text-white leading-tight">
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
      <section id="projects" className="max-w-7xl mx-auto px-4 pt-33 flex flex-col md:flex-row gap-12 items-start">
        {/* Heading on the left */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0 sticky top-16 z-10">
          <h2 className="text-3xl md:text-[3.5rem] font-serif text-white leading-tight">
            PROJECTS
          </h2>
        </div>
        {/* Projects on the right */}
        <div className="flex-1 w-full">
          <ul className="space-y-8">
            {projects.map((project, idx) => (
              <li
                key={idx}
                className="flex items-center w-full border-b border-white/10 pb-6"
              >
                <span className="text-xl md:text-2xl font-serif text-white w-1/3 min-w-[120px]">
                  {project.title}
                </span>
                <div className="flex flex-wrap gap-3 min-w-[175px] max-w-[350px] ml-35">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-4 py-1 rounded-full text-xs font-sans font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-2 rounded-full ml-auto hover:bg-white hover:text-black transition"
                  aria-label={`View ${project.title}`}
                >
                  <FiArrowRight size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
