export interface Project {
  title: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Jane Street Estimathon Portal",
    techStack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    link: "https://github.com/quynhan-tr/uw-estimathon",
  },
  {
    title: "UW Love Flow",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "REST APIs"],
    link: "https://github.com/quynhan-tr/uw-love-flow",
  },
  {
    title: "InSync",
    techStack: ["React", "Python", "Spotify Developer API"],
    link: "https://github.com/RohanKatreddy/UofTHacks12",
  },
  {
    title: "My Portfolio",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    link: "https://antran.vercel.app/",
  },
];
