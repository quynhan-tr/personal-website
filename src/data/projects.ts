export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "MotionWave",
    description: "Control the rhythm with your hands. Powered by a machine learning neural network for real-time harmony generation.",
    techStack: ["Next.js", "React", "TypeScript", "MediaPipe Hands", "Web Workers"],
    link: "https://techto25.vercel.app/",
    github: "https://github.com/quynhan-tr/MotionWave",
    image: "/projects/motionWave.png",
  },
  {
    title: "Notation",
    description: "Turn your handwritten notes into professional LaTeX documents with high-precision AI recognition.",
    techStack: ["Vite", "React", "TypeScript", "Ruby on Rails", "Gemini API"],
    link: "https://github.com/quynhan-tr/notation",
    github: "https://mathtolatex.com/",
    image: "/projects/notation.png",
  },
  {
    title: "DSC Speed [Data]ing",
    description: "An AI-powered cupid for UW Data Science Club’s speed-friending event, using vector embeddings to create meaningful matches in real time.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
    link: "https://dsc-speed-dataing.vercel.app/",
    github: "https://github.com/quynhan-tr/dsc-speed-dataing",
    image: "/projects/speedfriending.png",
  },
  {
    title: "Estimathon Portal",
    description: "A comprehensive dashboard for the Jane Street Estimathon.",
    techStack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    link: "https://uw-estimathon.vercel.app/",
    github: "https://github.com/quynhan-tr/uw-estimathon",
    image: "/projects/estimathon.png",
  },
  {
    title: "UW Love Flow",
    description: "A playful platform that matches people based on MBTI, hobbies, and shared interests.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "REST APIs"],
    github: "https://github.com/quynhan-tr/uw-love-flow",
    image: "/projects/uw_love_flow.png",
  },
  {
    title: "InSync",
    description: "Inspired by chromesthesia, where sound becomes color and motion, InSync reimagines music as something you can see, feel, and share.",
    techStack: ["React", "Python", "Spotify Developer API"],
    github: "https://github.com/RohanKatreddy/UofTHacks12",
    image: "/projects/insync.png",
  },
];
