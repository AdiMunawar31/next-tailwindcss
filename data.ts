import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>React.js</b>  and <b>Vue.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>laravel-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>, <b>Leet Code</b>  and <b>CodeWars</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: "https://www.php.net/images/logos/new-php-logo.svg",
    name: "PHP",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/py.cb17f7a4.svg",
    name: "Python",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/js.fabe1e9b.svg",
    name: "JavaScript",
  },
  {
    Icon: "https://iconape.com/wp-content/png_logo_vector/typescript.png",
    name: "TypeScript",
  },
  {
    Icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    name: "Vue",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/react.e68b35f4.svg",
    name: "React",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/lara.50c10050.svg",
    name: "Laravel",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/tail.50fbcf51.svg",
    name: "Tailwind",
  },
  {
    Icon: "https://avatars.githubusercontent.com/u/2918581?s=280&v=4",
    name: "Bootstrap",
  },
];

export const tools: Skill[] = [
  {
    Icon: "https://adi-munawar.netlify.app/static/media/figma.753c0742.svg",
    name: "Figma",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/git.9e5efe4a.svg",
    name: "GIT",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/xd.fc74e80f.svg",
    name: "Adobe XD",
  },
  {
    Icon: "https://octocourses.com/static/7bcadc9ec2ba0513c32383ea8ff863c7/630fb/framer-motion.png",
    name: "Framer",
  },
  {
    Icon: "https://adi-munawar.netlify.app/static/media/dock.f13de5f9.svg",
    name: "Docker",
  },
];

export const projects: IProject[] = [
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/vuecvd.jpg",
    deployed_url: "https://vue-cvd19.vercel.app/ ",
    github_url: "https://github.com/AdiMunawar31/cvd19",
    category: ["vue"],
    key_techs: ["Vue", "Chart.js", "Tailwind CSS"],
  },
  {
    name: "Company Profile",
    image_path: "/images/company.jpg",
    deployed_url: "https://adimunawar31.github.io/",
    github_url: "https://github.com/AdiMunawar31/adimunawar31.github.io",
    category: ["css"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["JQuery", "Materialize CSS"],
  },

  {
    name: "D2YTODO",
    image_path: "/images/todo.jpg",
    deployed_url: "https://adimunawar31.github.io/",
    github_url: "https://github.com/AdiMunawar31/vue-composition-api",
    category: ["vue"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: ["Vue", "Bootstrap 5"],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/dichat.jpg",
    deployed_url: "https://dichat.netlify.app/",
    github_url: "#",
    category: ["react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React","Socket"],
  },

  {
    name: "Grid Profile",
    image_path: "/images/d2y-ch.jpg",
    deployed_url: "https://adimunawar31.github.io/d2y_channel",
    github_url: "https://github.com/AdiMunawar31/d2y_channel",
    category: ["css"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["CSS GRID"],
  },
  {
    name: "D2YNEWS",
    image_path: "/images/d2ynews.jpg",
    deployed_url: "https://d2ynews.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2ynews",
    category: ["react"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React"],
  },
  {
    name: "React Portfolio",
    image_path: "/images/re.jpg",
    deployed_url: "https://adi-munawar.netlify.app/",
    github_url: "#",
    category: ["react"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React"],
  },
  {
    name: "Ulin Admin",
    image_path: "/images/ulin-admin.jpg",
    deployed_url: "https://ulin-admin.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/ulin-admin",
    category: ["vue"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [ "Vue", "Tailwind CSS"],
  },
  {
    name: "D2YPOST",
    image_path: "/images/d2ypost.jpg",
    deployed_url: "https://d2ypost.netlify.app/",
    github_url: "https://github.com/AdiMunawar31/vue-advance",
    category: ["vue"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: [ "Vue", "Tailwind CSS"],
  },
];

// export const projects: IProject[] = [
//   { 
//     name: "COVID Tracker",
//     description:
//       "This app shows a statistical view about corona virus over the world",
//     image_path: "/images/covid.jpg",
//     deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
//     github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
//     category: ["react"],
//     key_techs: ["React", "Chart.js", "Material UI"],
//   },
//   {
//     name: "Algorithm Visualizer",
//     image_path: "/images/algoVisual.png",
//     deployed_url: "https://visual-algorithm.web.app/",
//     github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
//     category: ["react"],
//     description:
//       "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
//     key_techs: ["React", "firebase", "Framer Motion"],
//   },

//   {
//     name: "Dev Talks",
//     image_path: "/images/dev.jpg",
//     deployed_url: "https://dev-talks.herokuapp.com/",
//     github_url: "https://github.com/Dey-Sumit/Dev-talks",
//     category: ["node", "mongo", "react"],
//     description:
//       "Social Media app for developers who can share project,create posts,etc...",
//     key_techs: [
//       "React",
//       "Redux",
//       "Node",
//       "Express",
//       "Mongo",
//       "REST API",
//       "Bootstrap",
//     ],
//   },

//   {
//     name: "Realtime Chat App",
//     image_path: "/images/chatapp.jpg",
//     deployed_url: "https://sumit-chat.netlify.app/",
//     github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
//     category: ["node", "react"],
//     description:
//       "Basic Realtime Chat App where one can create a room can talk to each other",
//     key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
//   },

//   {
//     name: "Tweeter Clone",
//     image_path: "/images/tweetme.jpg",
//     deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
//     github_url: "https://github.com/Dey-Sumit/tweetme",
//     category: ["django", "react"],
//     description:
//       "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
//     key_techs: ["React", "Django", "Django REST API"],
//   },

//   {
//     name: "Color Classification using tf.js",
//     image_path: "/images/color.jpg",
//     deployed_url: "!#",
//     github_url: "https://github.com/Dey-Sumit/color-classification",
//     category: ["express"],
//     description:
//       "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
//     key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
//   },
//   {
//     name: "YouTube using YouTube ",
//     image_path: "/images/youtubeClone.png",
//     deployed_url: "https://not-utube.web.app/",
//     github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
//     category: ["express"],
//     description:
//       'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
//     key_techs: [
//       "React",
//       "Redux",
//       "Firebase Auth",
//       "YouTube API",
//       "Sass",
//       "Bootstrap",
//     ],
//   },
//   {
//     name: "Football App",
//     image_path: "/images/football.png",
//     deployed_url: "https://o-my-goal.web.app/",
//     github_url: "https://github.com/Dey-Sumit/football-app",
//     category: ["react"],
//     description:
//       "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
//     key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
//   },
// ];