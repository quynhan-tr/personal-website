export interface Experience {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
  link: string;
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    icon: "/logos/carta.svg",
    bgImage: "/banners/carta.jpeg",
    title: "Carta",
    description: "Software Engineer Intern",
    link: "https://carta.com/",
    techStack: ["Python", "Django", "React", "TypeScript", "Docker"],
  },
  {
    icon: "/logos/propel.png",
    bgImage: "/banners/propelholdings.png",
    title: "Propel Holdings",
    description: "Software Engineer Intern",
    link: "https://www.propelholdings.com/",
    techStack: ["Java", "Spring Boot", "Angular", "TypeScript", "SQL", "RESTful API", "Google Web Toolkit", "JPA/Hibernate", "Mockito", "AWS"],
  },
  {
    icon: "/logos/dsc.svg",
    bgImage: "/banners/dsc.png",
    title: "UW Data Science Club",
    description: "Software Developer",
    link: "https://www.uwdatascience.ca/",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Node.js", "MongoDB", "Supabase", "Python", "SQL", "OpenAI API"],
  },
  {
    icon: "/logos/tedx.svg",
    bgImage: "/banners/tedx.png",
    title: "TEDxUW",
    description: "Software Developer",
    link: "https://www.tedxuw.ca/",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "/logos/csc.svg",
    bgImage: "/banners/csc.png",
    title: "UW Computer Science Club",
    description: "Technical Organizer",
    link: "https://csclub.uwaterloo.ca/",
    techStack: ["Data Structures", "Algorithms", "Event Planning", "Leadership"]
  },
  {
    icon: "/logos/alpha.png",
    bgImage: "/banners/alpha.png",
    title: "Alpha Coding",
    description: "Curriculum Developer & Instructor",
    link: "https://www.linkedin.com/company/alphacoding/posts/?feedView=all",
    techStack: ["Python", "Java", "API Integration", "AI Fundamentals", "Curriculum Design"]
  }
];
