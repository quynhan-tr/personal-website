export interface EducationItem {
  school: string;
  year: string;
  techStack: string[];
  logo: string;
  major: string;
}

export const education: EducationItem[] = [
  {
    school: "University of Waterloo",
    year: "2024 - Present",
    major: "Honours Bachelor of Computer Science, Co-op",
    logo: "/logos/uwlogo.png",
    techStack: [
      "C/C++",
      "DrRacket",
      "Object Oriented Programming",
      "Functional Programming"
    ]
  },
  {
    school: "Alexander Mackenzie High School",
    year: "2022 - 2024",
    major: "High School Diploma",
    logo: "/logos/amhs.png",
    techStack: [
      "Python",
      "Java",
      "Object Oriented Programming"
    ]
  }
]; 