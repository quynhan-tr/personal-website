export interface Sidequest {
  title: string;
  time: string;
  place: string;
  images: string[];
  slug?: string;
}

const sidequests: Sidequest[] = [
  {
    title: "We Do Wonder",
    time: "Dec 2021 - 2024",
    place: "Da Nang, Vietnam",
    images: [
      "/galleryImages/wdw/home4(1).jpg"
    ],
    slug: "we-do-wonder"
  },
  {
    title: "MLL Leadership Club",
    time: "Sep 2022 - 2024",
    place: "Richmond Hill, ON",
    images: [
      "/galleryImages/mll/2.JPG"
    ],
    slug: "mll-leadership-club"
  },
  {
    title: "JAMHacks",
    time: "Sep 2022 - 2023",
    place: "Waterloo, ON",
    images: [
      "/galleryImages/jamhacks/2.JPG"
    ],
    slug: "jamhacks"
  },
  {
    title: "Coming soon",
    time: "Sep 2022",
    place: "Canada",
    images: [
      "/images/2.JPG"
    ]
  }
];

export default sidequests;