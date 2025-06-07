export interface Project {
  title: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Jane Street Estimathon Portal",
    techStack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    link: "https://uw-estimathon.vercel.app/",
  },
  {
    title: "UW Love Flow",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "REST APIs"],
    link: "https://uw-love-flow.onrender.com/",
  },
  {
    title: "InSync",
    techStack: ["React", "Python", "Spotify Developer API"],
    link: "https://github.com/RohanKatreddy/UofTHacks12",
  },
  {
    title: "My Portfolio",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    link: "https://atlantic.fo/inflight-magazine",
  },
];