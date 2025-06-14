"use client"

import React from "react";
import Carousels from '../components/Carousels';
import About from '../components/About';
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about">
        <About />
        <Carousels />
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
