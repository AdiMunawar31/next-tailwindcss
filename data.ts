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
    Icon: "/images/icons/php.svg",
    name: "PHP",
  },
  {
    Icon: "/images/icons/dart.svg",
    name: "Dart",
  },
  {
    Icon: "/images/icons/js.svg",
    name: "Javascript",
  },
  {
    Icon: "/images/icons/ts.svg",
    name: "TypeScript",
  },
  {
    Icon: "/images/icons/vue.png",
    name: "Vue",
  },
  {
    Icon: "/images/icons/react.svg",
    name: "React",
  },
  {
    Icon: "/images/icons/lara.svg",
    name: "Laravel",
  },
  {
    Icon: "/images/icons/ci.svg",
    name: "Codeigniter",
  },
  {
    Icon: "/images/icons/next.svg",
    name: "Next JS",
  },
  {
    Icon: "/images/icons/tail.svg",
    name: "Tailwind",
  },
  {
    Icon: "/images/icons/b5.png",
    name: "Bootstrap",
  },
  {
    Icon: "/images/icons/flutter.svg",
    name: "Flutter",
  },
];

export const tools: Skill[] = [
  {
    Icon: "/images/icons/figma.svg",
    name: "Figma",
  },
  {
    Icon: "/images/icons/xd.svg",
    name: "Adobe XD",
  },
  {
    Icon: "/images/icons/framer-motion.png",
    name: "Framer Motion",
  },
  {
    Icon: "/images/icons/vs.svg",
    name: "VS Code",
  },
  {
    Icon: "/images/icons/dock.svg",
    name: "Docker",
  },
  {
    Icon: "/images/icons/git.svg",
    name: "GIT",
  },
  {
    Icon: "/images/icons/github.svg",
    name: "GitHub",
  },
  {
    Icon: "/images/icons/post.svg",
    name: "Postman",
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
