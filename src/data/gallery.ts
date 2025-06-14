export interface GalleryItem {
  slug: string; // e.g. "greenland-dogsled"
  title: string;
  banner: string; // e.g. "/galleryImages/greenland-dogsled/banner.jpg"
  description: string;
  photos: string[]; // e.g. ["/galleryImages/greenland-dogsled/1.jpg", ...]
  date: string;
  location: string;
}

export const galleries: GalleryItem[] = [
  {
    slug: "we-do-wonder",
    title: "We Do Wonder",
    banner: "/galleryImages/wdw/home4(8).jpg",
    description: "In 2021, I co-founded We Do Wonder - a non-profit that began by offering free English classes to children in Vietnam. Since then, we've expanded our efforts to include creating spaces for youth around the world to connect, fundraising for foster homes, and supporting underprivileged communities. What started as a small community project has grown into a platform for creativity, cultural exchange, and meaningful impact.",
    photos: [
      "/galleryImages/wdw/home4(2).jpg",
      "/galleryImages/wdw/home4(3).jpg",
      "/galleryImages/wdw/home4(4).jpg",
      "/galleryImages/wdw/home4(5).jpg",
      "/galleryImages/wdw/home4(6).jpg",
      "/galleryImages/wdw/cards.jpg",
      "/galleryImages/wdw/home4(1).jpg",
      "/galleryImages/wdw/home4(9).jpg",
      "/galleryImages/wdw/home4(10).jpg",
      "/galleryImages/wdw/street1.jpg",
      "/galleryImages/wdw/street2.jpg",
      "/galleryImages/wdw/street3.jpg",
      "/galleryImages/wdw/kid1.jpg",
      "/galleryImages/wdw/gifts.jpg"
    ],
    date: "December 2021",
    location: "Da Nang, Vietnam"
  },
  {
    slug: "mll-leadership-club",
    title: "MLL Leadership Club",
    banner: "/galleryImages/mll/16.jpg",
    description: "At Alexander Mackenzie High School, I led the MLL (Multilingual Language Learners) Leadership Club, where I organized two annual Cultural Fairs to celebrate the diverse backgrounds of our student community through food, performances, and cultural showcases. Hoping to share the impact more widely, I reached out to the school board—and the initiative was approved to grow beyond our school, opening up opportunities for more students across the district to get involved.",
    photos: [
      "/galleryImages/mll/1.JPG",
      "/galleryImages/mll/2.JPG",
      "/galleryImages/mll/4.JPG",
      "/galleryImages/mll/5.JPG",
      "/galleryImages/mll/6.JPG",
      "/galleryImages/mll/7.JPG",
      "/galleryImages/mll/8.JPG",
      "/galleryImages/mll/9.JPG",
      "/galleryImages/mll/10.JPG",
      "/galleryImages/mll/11.JPG",
      "/galleryImages/mll/12.JPG",
      "/galleryImages/mll/15.JPG",
      "/galleryImages/mll/13.JPG",
      "/galleryImages/mll/17.JPG"
    ],
    date: "Sep 2022",
    location: "Richmond Hill, ON"
  },
  {
    slug: "jamhacks",
    title: "JAMHacks",
    banner: "/galleryImages/jamhacks/3.JPG",
    description: "I started my journey with JAMHacks as a participant at JAMHacks 7, and discovered how exciting it could be to build something from scratch. Since then, I’ve had the chance to return as an organizer for Canada’s largest in-person high school hackathon. Being part of the team behind the scenes has been incredibly rewarding—JAMHacks has such a supportive, inspiring community, and I’m grateful to help create that experience for others just starting out like I once did.",
    photos: [
      "/galleryImages/jamhacks/1.JPG",
      "/galleryImages/jamhacks/4.JPG",
      "/galleryImages/jamhacks/5.jpg",
      "/galleryImages/jamhacks/6.JPG",
      "/galleryImages/jamhacks/9.JPG",
      "/galleryImages/jamhacks/10.JPG",
      "/galleryImages/jamhacks/11.JPG",
      "/galleryImages/jamhacks/12.JPG",
      "/galleryImages/jamhacks/14.JPG",
      "/galleryImages/jamhacks/15.jpg",
      "/galleryImages/jamhacks/16.jpg",
      "/galleryImages/jamhacks/2.JPG",
    ],
    date: "Sep 2022",
    location: "Waterloo, ON"
  }
];
