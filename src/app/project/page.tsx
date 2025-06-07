"use client";

import React from "react";
import { projects } from "./projects";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectPage() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 pt-33 flex flex-col md:flex-row gap-12 items-start">
      {/* Heading on the left */}
      <div className="md:w-1/3 w-full mb-8 md:mb-0 sticky top-16 z-10">
        <h2 className="text-3xl md:text-6xl font-serif text-white leading-tight">
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
  );
}