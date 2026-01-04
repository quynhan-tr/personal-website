export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Jane Street Estimathon Portal",
    description: "A comprehensive dashboard for the Jane Street Estimathon, featuring real-time data visualization, leaderboards, and analytics tools for participants.",
    techStack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    link: "https://github.com/quynhan-tr/uw-estimathon",
    github: "https://github.com/quynhan-tr/uw-estimathon",
    image: "/projects/estimathon.png",
  },
  {
    title: "UW Love Flow",
    description: "A whimsical connection platform for university students, helping them find matches, explore campus events, and build meaningful relationships.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "REST APIs"],
    link: "https://github.com/quynhan-tr/uw-love-flow",
    github: "https://github.com/quynhan-tr/uw-love-flow",
    image: "/projects/uw_love_flow.png",
  },
  {
    title: "InSync",
    description: "A collaborative music listening experience powered by Spotify, allowing users to sync playback, share queues, and discover music together in real-time.",
    techStack: ["React", "Python", "Spotify Developer API"],
    link: "https://github.com/RohanKatreddy/UofTHacks12",
    github: "https://github.com/RohanKatreddy/UofTHacks12",
    image: "/projects/insync.png",
  },
  {
    title: "My Portfolio",
    description: "My personal digital garden showcased with a minimalist aesthetic, featuring dynamic animations, smooth transitions, and a responsive design.",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    link: "https://antran.vercel.app/",
    github: "https://github.com/quynhan-tr/personal-website",
    image: "/projects/portfolio.png",
  },
];
