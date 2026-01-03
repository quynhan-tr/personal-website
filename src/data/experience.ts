export interface Experience {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
  link: string;
  techStack: string[];
  blog?: {
    type: 'link' | 'content';
    url?: string;
    content?: string;
    title?: string;
  };
}

export const experiences: Experience[] = [
  {
    icon: "/logos/propel.png",
    bgImage: "/banners/propelholdings.png",
    title: "Propel Holdings Inc",
    description: "Software Developer",
    link: "https://www.propelholdings.com/",
    techStack: ["Java", "Spring Boot", "Angular", "TypeScript", "SQL", "RESTful API", "Google Web Toolkit", "JPA/Hibernate", "Mockito", "AWS"],
    blog: {
      type: 'content',
      title: "My Journey at Propel Holdings",
      content: `
        <p>During my time at Propel Holdings, I had the opportunity to work on...</p>
        <p>I utilized Java and Spring Boot to build robust backend services...</p>
        <p>One of the key challenges I faced was optimization of SQL queries which led to a 30% improvement in response times.</p>
      `
    }
  },
  {
    icon: "/logos/dsc.svg",
    bgImage: "/banners/dsc.png",
    title: "UW Data Science Club",
    description: "Software Developer",
    link: "https://www.uwdatascience.ca/",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Node.js", "MongoDB", "Supabase", "Python", "SQL", "OpenAI API"],
    blog: {
      type: 'content',
      title: "My Journey at Propel Holdings",
      content: `
        <p>During my time at Propel Holdings, I had the opportunity to work on...</p>
        <p>I utilized Java and Spring Boot to build robust backend services...</p>
        <p>One of the key challenges I faced was optimization of SQL queries which led to a 30% improvement in response times.</p>
      `
    }
  },
  {
    icon: "/logos/tedx.svg",
    bgImage: "/banners/tedx.png",
    title: "TEDxUW",
    description: "Software Developer",
    link: "https://www.linkedin.com/company/tedxuw",
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