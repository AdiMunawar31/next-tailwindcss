import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { ICertificate, IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "FrontEnd Development",
    about:
      "I can build a beautiful and scalable SPA using <b>Next Js</b>, <b>React.js</b>  and <b>Vue.js</b> ",
  },
  {
    Icon: FaServer,
    title: "BackEnd  Development",
    about:
      "handle database, server, api using <b>Express Js</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Golang API</b>  & <b>NodeJs API</b> ",
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
      "stunning user interface designer using <b>Figma</b>  and  <b>Adobe Xd</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "I am very happy to learn new things every day",
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
    name: "D2YRESTO",
    image_path: "/images/d2yresto.png",
    deployed_url: "https://d2yresto.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2yresto",
    category: ["javascript"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [ "HTML", "CSS", "Javascript"],
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
  {
    name: "D2YBORED",
    image_path: "/images/d2ybored.png",
    deployed_url: "https://d2ybored.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2ybored",
    category: ["react", "blockchain"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React"],
  },
  {
    name: "D2YKRYPT",
    image_path: "/images/d2ykrypt.png",
    deployed_url: "https://d2ykrypt.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2ykrypt",
    category: ["react", "blockchain"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React"],
  },
  {
    name: "D2YSWAP",
    image_path: "/images/d2yswap.png",
    deployed_url: "https://d2yswap.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2yswap",
    category: ["react", "blockchain"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React"],
  },
  {
    name: "CLUB MOTOR CIREBON",
    image_path: "/images/cbc.png",
    deployed_url: "https://club-motor-cirebon.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/club-motor-cirebon",
    category: ["react"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React", "Next JS"],
  },
  {
    name: "DISHOP-AJA",
    image_path: "/images/dishop.png",
    deployed_url: "https://dishop-aja.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/dishop-aja",
    category: ["react"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React", "Next JS"],
  },
  {
    name: "D2YMETAVERSE",
    image_path: "/images/d2ymetaverse.png",
    deployed_url: "https://d2ymetaverse.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2ymetaverse",
    category: ["react", "blockchain"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React", "Next JS"],
  },
  {
    name: "D2YCROWDFUNDING",
    image_path: "/images/d2ycrowdfunding.png",
    deployed_url: "https://d2ycrowdfunding.vercel.app/",
    github_url: "https://github.com/AdiMunawar31/d2ycrowdfunding",
    category: ["react", "blockchain"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React", "Next JS"],
  },
  {
    name: "AMAZON-CLONE",
    image_path: "/images/d2yzon.jpg",
    deployed_url: "#",
    github_url: "https://github.com/AdiMunawar31/RN-AMAZON-CLONE",
    category: ["react-native"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: [ "React Native"],
  },
  {
    name: "D2YPRESENCE",
    image_path: "/images/d2ypresence.jpg",
    deployed_url: "#",
    github_url: "https://github.com/AdiMunawar31/presense-app",
    category: ["flutter"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: [ "Flutter", "Firebase", 'GetX'],
  },
  {
    name: "Ditonton",
    image_path: "/images/ditonton.jpg",
    deployed_url: "#",
    github_url: "https://github.com/AdiMunawar31/ditonton",
    category: ["flutter"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: [ "Flutter", "Bloc"],
  },
  {
    name: "JTI APP",
    image_path: "/images/jti.jpg",
    deployed_url: "#",
    github_url: "https://github.com/proyekcapstone/FRONT-END",
    category: ["flutter"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: [ "Flutter","Firebase", "Provider"],
  },
];

export const certificates: ICertificate[] = [
  {
    name: "SIB Kampus Merdeka",
    image_path: "/certificates/sib.png",
    category: ["random"]
  },
  {
    name: "VSGA Junior Web Developer",
    image_path: "/certificates/jwd.png",
    category: ["random"]
  },
  {
    name: "Problem Solving (Basic)",
    image_path: "/certificates/hackerank.png",
    category: ["random"]
  },
  {
    name: "Memulai Pemrograman Dengan Kotlin",
    image_path: "/certificates/kotlin.png",
    category: ["lang", "android"]
  },
  {
    name: "Memulai Pemrograman Dengan Dart",
    image_path: "/certificates/dart.png",
    category: ["lang", "flutter"]
  },
  {
    name: "Memulai Pemrograman Dengan Java",
    image_path: "/certificates/java.png",
    category: ["lang", "android"]
  },
  {
    name: "Memulai Pemrograman Dengan Python",
    image_path: "/certificates/python.png",
    category: ["lang"]
  },
  {
    name: "Belajar Dasar Pemrograman Javascript",
    image_path: "/certificates/js.png",
    category: ["lang", "frontEnd", "backEnd"]
  },
  {
    name: "Belajar Membuat Aplikasi Android untuk Pemula",
    image_path: "/certificates/android-basic.png",
    category: ["android"]
  },
  {
    name: "Belajar Fundamental Aplikasi Android",
    image_path: "/certificates/android-fundamental.png",
    category: ["android"]
  },
  {
    name: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    image_path: "/certificates/flutter-basic.png",
    category: ["flutter"]
  },
  {
    name: "Belajar Fundamental Aplikasi Flutter",
    image_path: "/certificates/flutter-fundamental.png",
    category: ["flutter"]
  },
  {
    name: "Menjadi Flutter Developer Expert",
    image_path: "/certificates/flutter-expert.png",
    category: ["flutter"]
  },
  {
    name: "Belajar Prinsip Pemrograman SOLID",
    image_path: "/certificates/solid.png",
    category: ["flutter", "android"]
  },
  {
    name: "Belajar Dasar Pemrograman Web",
    image_path: "/certificates/web-basic.png",
    category: ["frontEnd"]
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    image_path: "/certificates/fe-basic.png",
    category: ["frontEnd"]
  },
  {
    name: "Menjadi Front-End Web Developer Expert",
    image_path: "/certificates/fe-expert.png",
    category: ["frontEnd"]
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    image_path: "/certificates/be-basic.png",
    category: ["backEnd"]
  },
  {
    name: "Back-End untuk Pemula Dengan Google Cloud",
    image_path: "/certificates/gcp-basic.png",
    category: ["backEnd", "devOps"]
  },
  {
    name: "Belajar Fundamental Aplikasi Back-End",
    image_path: "/certificates/be-fundamental.png",
    category: ["backEnd"]
  },
  {
    name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    image_path: "/certificates/aws-basic.png",
    category: ["backEnd", "devOps"]
  },
  {
    name: "Architecting on AWS (Arsitektur Cloud di AWS)",
    image_path: "/certificates/aws-arsitektur.png",
    category: ["backEnd", "devOps"]
  },
  {
    name: "Belajar Dasar-Dasar DevOps",
    image_path: "/certificates/devops-basic.png",
    category: ["devOps"]
  },
  {
    name: "Belajar Jaringan Komputer untuk Pemula",
    image_path: "/certificates/jaringan-basic.png",
    category: ["devOps"]
  },
  {
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    image_path: "/certificates/program-basic.png",
    category: ["random"]
  },
  {
    name: "Belajar Dasar Git dengan GitHub",
    image_path: "/certificates/git.png",
    category: ["random"]
  },
  {
    name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    image_path: "/certificates/logic.png",
    category: ["random"]
  },
  {
    name: "Meniti Karier sebagai Software Developer",
    image_path: "/certificates/software.png",
    category: ["random"]
  },
  {
    name: "Belajar Dasar UX Design",
    image_path: "/certificates/ux.png",
    category: ["random"]
  },
  {
    name: "Belajar Dasar Visualisasi Data",
    image_path: "/certificates/visualisasi.png",
    category: ["random"]
  },
]