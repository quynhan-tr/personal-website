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
    banner: "/galleryImages/wdw/home4(1).jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    photos: [
      "/galleryImages/wdw/home4(2).jpg",
      "/galleryImages/wdw/home4(3).jpg",
      "/galleryImages/wdw/home4(4).jpg",
      "/galleryImages/wdw/home4(5).jpg",
      "/galleryImages/wdw/home4(6).jpg",
      "/galleryImages/wdw/cards.jpg",
      "/galleryImages/wdw/home4(8).jpg",
      "/galleryImages/wdw/home4(9).jpg",
      "/galleryImages/wdw/home4(10).jpg",
      "/galleryImages/wdw/street1.jpg",
      "/galleryImages/wdw/street2.jpg",
      "/galleryImages/wdw/street3.jpg",
      "/galleryImages/wdw/kid1.jpg",
      "/galleryImages/wdw/gifts.jpg"
    ],
    date: "December 2021",
    location: "Da Nang"
  },
  {
    slug: "mll-leadership-club",
    title: "MLL Leadership Club",
    banner: "/galleryImages/mll/13.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      "/galleryImages/mll/16.jpg",
      "/galleryImages/mll/17.JPG"
    ],
    date: "Sep 2022",
    location: "Richmond Hill"
  },
  {
    slug: "jamhacks",
    title: "JAMHacks",
    banner: "/galleryImages/jamhacks/3.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      "/galleryImages/jamhacks/2.jpg",
    ],
    date: "Sep 2022",
    location: "Waterloo"
  }
];
