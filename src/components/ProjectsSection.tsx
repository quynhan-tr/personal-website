import React from "react";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-15 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* Heading */}
      <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:sticky lg:top-20 z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-normal ${playfair.className}`}>
          PROJECTS
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group z-10 hover:z-50">
            {/* Placeholder to reserve space (Invisible but layout-driving) */}
            <div className="invisible pointer-events-none">
              <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative w-full aspect-[16/9]"></div>
                <div className="p-6 md:p-8 flex items-center justify-between h-[4.5rem] md:h-[5.5rem]">
                  <h3 className="text-lg md:text-xl text-white font-serif font-bold line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Actual Card (Absolute) */}
            <div className="absolute inset-0 w-full h-max transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:z-50">
              <div className="flex flex-col bg-[#18191b] group-hover:bg-[#18191b]/95 group-hover:backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg h-full">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay to darken image slightly on hover for text contrast if needed */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-0 flex flex-col">
                  {/* Title & Icons Row */}
                  <div className="p-6 md:p-8 flex items-center justify-between mb-0 h-[4.5rem] md:h-[5.5rem] transition-all duration-300">
                    <h3 className="text-lg md:text-xl text-white font-serif line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Icons (Hidden default, Show on hover) */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        aria-label={`Visit ${project.title}`}
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Expandable Content (Description + Tech Stack) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden px-6 md:px-8 pb-0 group-hover:pb-8 transition-all duration-300">
                      <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-xs font-sans font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 