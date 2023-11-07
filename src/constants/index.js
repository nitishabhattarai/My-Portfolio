import {
  basobaas,
  tulikaa,
  restroB,
  ideaskitab,
  qobrix,
  avartan,
  wallG,
} from "../assets/images";

export const navLinks = [
  {
    id: "works",
    title: "Work",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const portfolio = [
  {
    src: qobrix,
    title: "Qobrix & Qoetix",
    themeColor: "#337EDF",
    link: `https://qobrix.com/`,
    alt: "Qobrix",
    tags: ['Angular', 'Typescript', 'SCSS', 'Tailwind', 'PHP', 'Rxjs'],
    description:
      "All-in-one platform. Built for real estate. Perfect for realtors, property developers, brokers, & asset managers. A leading real estate CRM system, innovative portals, & high-performing websites with MLS/IDX integrations.",
  },
  {
    src: basobaas,
    title: "Basobaas",
    themeColor: `#005AFF`,
    link: `https://basobaas.com/`,
    alt: "Basobaas",
    tags: ['React', 'Typescript', 'SCSS', 'AntD', 'Redux'],
    description:
      "Basobaas is a real estate sales and marketing expert in Nepal based in New Baneshwor, Kathmandu. It's a leading real estate market place of Nepal consisting thousands of users with a wide range of property listing including property rental and sales.",
  },
  {
    src: tulikaa,
    title: "Tulikaa",
    themeColor: "#984B48",
    link: "https://tulikaa.com/",
    tags: ['React', 'Typescript', 'SCSS', 'Socket.io', 'Firebase', 'Redux'],
    alt: "Tulikaa",
    description:
      "One stop place for art lovers, art collectors and artists in Nepal. It's a first digital platform of this kind in Nepal. If you an artist or art lover, you can join us and (browse/sell/buy) the different forms of arts of your choice.",
  },
  {
    src: restroB,
    title: "RestroB",
    themeColor: "#960b03",
    link: "https://restrob.com/",
    alt: "RestroB",
    tags: ['React', 'Typescript', 'SCSS', 'Firebase', 'Redux'],
    description:
      "Restrob is a web application for all restaurant diners who wish to experience the aesthetics and lively vibe of eating out. Users can search for their favourite restaurant, see the menu, book a table for them and enjoy the dine-in experience with their friends, family, colleagues or acquaintances. A smooth process to book, eat and live the moment. I worked on vendor web app and user app of this project.",
  },
  {
    src: ideaskitab,
    title: "IdeasKitab",
    themeColor: "#F8CC4C",
    link: "https://ideaskitab.com/",
    alt: "IdeasKitab",
    tags: ['React', 'Typescript', 'SCSS', 'Firebase', 'Redux'],
    description:
      "IdeasKitab is an e-learning platform where we can find books of different categories, by different authors which comes with an e-commerce feature to buy/sell e-books along with online reading option.",
  },
  {
    src:avartan,
    title: "Avartan Technology's Website",
    themeColor:"",
    alt: "Avartan Technology",
    tags: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
    description: "I developed the official site of Avartan Technology, a RnD company focus on Data Driven Optimization."

  },
  {
    src:wallG,
    title: "Wall-G's Website",
    themeColor:"",
    alt: "Wall-G",
    tags: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
    description: "I worked as a project manager in the respective project. I have also developed the website and currently worked on the firmware and backend of the Wall-G."

  }

];
