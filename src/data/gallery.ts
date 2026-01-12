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
    description: `In 2021, I co-founded We Do Wonder - a non-profit that aim to inspire change in Vietnam through Education and Community. * We spent the first 3 months building our branding through social media posts with learning materials, podcasts, and reaching out to other NPO to help with marketing. With a team of 20 members, we were able to reach over 100000 users, with 1000 consistent followers. *  With a better publicity, we announced our first program called “The Wonder”.  We ran 6 English classes with the help of 12 volunteers for 40 students. The classes were a hit. We continue on with our initiatives and programs:
- Fundraiser: through bake sale, and raising money from The Wonder English classes
- Wonderland: a donation trip to Danang Street Children Program Center, and gifts distribution to local workers
- Wonderlink: an online event series with workshops, and networking sessions for youth from all over the world
- We Do Wonder: English communication bootcamp, Leadership and Mental Health training for all our members and volunteers 
* Countless unforgettable memories were made: late night lessons filled with laughter, cruising on my teammate’s motorcycle around the city to deliver bake sale products, playing nostalgic childhood games with children at the Center, and many many more. We Do Wonder means a lot to me. Forever thankful for the amazing people that helped make this possible!`,
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
    banner: "/galleryImages/mll/2.JPG",
    description: "In my 2 years in high school in Canada after transferring from Vietnam, I co-founded the MLL (Multilingual Language Learners) Leadership Club. We organized many fun things including the two main annual Cultural Fairs. * For the first iteration of the Cultural Fair, being fresh back from Covid made hosting a large scale in person event faced many restrictions, and doubts about participation turn out. With 3 months from the first meeting to the event date, we were able to secure school funding, recruit 40+ volunteers, plan and rehearse all displays and performances. * The event turned out amazing. Students, teachers, staffs. Everyone were enjoying themselves, dancing, talking, sharing their display, their culture. * The club is now led by a new team and has now grown to 100+ members, organized 2 more annual Cultural Fairs.",
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
    banner: "/galleryImages/jamhacks/1.JPG",
    description: "I was a hacker at JAMHacks 7, my first ever hackathon. * I like to say that this is where my journey with building begins. I loved it there, the innovative, stressful but somehow chill environment. Wanted to be more involved with this community, I joined the organizing team for the following iteration. * Being part of the team was the highlight of my high school time. After many months of online meetings, and many many Google Sheets, JAMHacks 8 finally came to life in June 2024 at E7 UWaterloo. * Not having to lock in for hacking, organizers were up to many things including organizing :), building a boat for a physics project, leetcoding, sleeping, and cooking 100+ ramen servings with 1 kettle (that was very smart of us). * There are many thanks I want to give to JAMHacks, to hackers, to  organizers, and everyone I met through this hackathon. * All in all, 10/10 experience, would recommend to any student.",
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
  },
  {
    slug: "coming-soon",
    title: "Coming soon",
    banner: "/images/2.JPG",
    description: "More exciting projects and adventures are on the way. Stay tuned!",
    photos: [],
    date: "Sep 2022",
    location: "Canada"
  }
];
