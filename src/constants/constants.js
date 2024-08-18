import {
  backend,
  web,
  javascript,
  html,
  reactjs,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  inkSync,
  nextjs,
  
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1gsziMJZTRCUK1-rKFkV7LiqyXyIYGGKL/view?usp=sharing", // Your Google Drive link
  },
];


const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
];

const projects = [
  {
    name: "InkSync",
    description:
      "A real-time collaborative whiteboard web application built with NextJs, Express, and Socket.io.",
    features: [
      "Users can create a room and invite others to join the room using a unique room code.",
      "Users can draw on the whiteboard and the changes will be reflected in real-time to all the users in the room.",
    ],
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    source_code_link: "https://github.com/shaurya8688/inksync.git",
    live_link: "https://inksync-one.vercel.app/",
  },
  {
    name: "Weather Detection",
    description:
      "Effortlessly enabled weather detection using a full tech stack that included HTML, CSS, JavaScript, and backend technologies like React.js.",
    features: [
      "Created a game-changing weather sensing software and put it into action; it transformed the way people eat.",
      "a dynamic graphical user interface with real-time weather updates, enabling seamless browsing of diverse culinary offerings leveraged proficiency in front-end and back-end technologies to enhance user experience and drive engagement.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shaurya8688/weather-App.git",
    live_link: "https://shauryaweatherapp8688.netlify.app/",
  },
  {
    name: "Flappy Bird",
    description: "Created a cutting-edge website for a Flappy Bird game using JavaScript, CSS, and HTML, providing an engaging and interactive gaming experience.",
    features: [
      "Utilized Visual Studio's robust features to craft a captivating Flappy Bird game platform, offering users an intuitive and streamlined photo editing and enhancementexperience.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shaurya8688/FlappybirdGame",
    live_link: "https://flappybird14.netlify.app/",
  },
];
export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
