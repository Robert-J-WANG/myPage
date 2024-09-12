/* eslint-disable no-unused-vars */
import { BASE_PATH } from "@/config";
import basicImg_1 from "@/assets/projectsImgs/basicWeb/meowBubbles.png";
import basicImg_2 from "@/assets/projectsImgs/basicWeb/orewaBeachLodges.png";
import basicImg_3 from "@/assets/projectsImgs/basicWeb/cityViews.png";
import basicImg_4 from "@/assets/projectsImgs/basicWeb/countdown.png";

import miniReactImg_1 from "@/assets/projectsImgs/reactMini/todoList.png";
import miniReactImg_2 from "@/assets/projectsImgs/reactMini/bookSheet.png";
import miniReactImg_3 from "@/assets/projectsImgs/reactMini/gitUserSearch.png";
import miniReactImg_4 from "@/assets/projectsImgs/reactMini/tshirtShoppingCart.png";

import frondEndReactImg_1 from "@/assets/projectsImgs/reactFrontEnd/agriBazaarNZ.png";
import frondEndReactImg_2 from "@/assets/projectsImgs/reactFrontEnd/weather.png";
import frondEndReactImg_3 from "@/assets/projectsImgs/reactFrontEnd/burgerQueen.png";

// Header
export const navLinkData = [
  { id: 1, key: "home", to: `${BASE_PATH}/home`, content: "Home" },
  { id: 2, key: "about", to: `${BASE_PATH}/about`, content: "About" },
  { id: 3, key: "projects", to: `${BASE_PATH}/projects`, content: "Projects" },
];

// Home
export const socialLinksData = [
  {
    id: 1,
    title: "facebook",
    anchor: "https://www.facebook.com/robin.wong.904108",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/facebook.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/facebook.png",
  },
  {
    id: 2,
    title: "twitter",
    anchor: "https://twitter.com/Robin666",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/twitter.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/twitter.png",
  },
  {
    id: 3,
    title: "linkedIn",
    anchor: "https://www.linkedin.com/in/robert-j-wang/",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/linkedin.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/linkedin.png",
  },
  {
    id: 4,
    title: "gitHub",
    anchor: "https://github.com/Robert-J-WANG",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/github.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/github.png",
  },
];

// About
export const aboutMenuData = [
  { id: 1, title: "About Me" },
  { id: 2, title: "Skills" },
  { id: 3, title: "Education" },
  { id: 4, title: "Experience" },
];

export const infoData = [
  { id: 1, title: "First Name ", value: ": Robert Jiqiang" },
  { id: 2, title: "Last Name ", value: ": WANG" },
  { id: 3, title: "Nationality ", value: ": Chinese" },
  { id: 4, title: "Language ", value: ": English, Chinese" },
  { id: 5, title: "College", value: ": Unitec Institute of Technology" },
];

export const skillData = [
  { id: 1, title: "UI/UX Design", stroke: "0.50px 1px", percent: "50%" },
  {
    id: 2,
    title: "Front-end Development",
    stroke: "0.80px 1px",
    percent: "80%",
  },
  {
    id: 3,
    title: "Back-end Development",
    stroke: "0.50px 1px",
    percent: "50%",
  },
  {
    id: 4,
    title: "Mobile App Development",
    stroke: "0.45px 1px",
    percent: "45%",
  },
];
export const languageData = [
  { id: 1, title: "Html & Css", value: "90" },
  { id: 2, title: "Javascript", value: "80" },
  { id: 3, title: "React Js", value: "75" },
  { id: 4, title: "Node Js", value: "60" },
  { id: 5, title: "React Native", value: "40" },
  { id: 6, title: "C# & Java", value: "50" },
  { id: 7, title: "Photoshop", value: "45" },
  { id: 8, title: "Figma", value: "40" },
];

// resume data
export const resumeData = [
  {
    name: "Education",
    data: [
      {
        id: 1,
        year: "2024 - 2025",
        title: "Master of Applied Technologies-Computing",
        school: "Unitec Institute of Technology",
        content:
          "Specialized in advanced computing technologies, focusing on machine learning, big data, data analysis, cloud computing, and IoT. Proficient in tools like Python, TensorFlow, Hadoop, and AWS for developing innovative tech solutions.",
      },
      {
        id: 2,
        year: "2022 - 2023",
        title: "Graduate Diploma in Computing",
        school: "Unitec Institute of Technology",
        content:
          "Completed a comprehensive program focused on software development, web technologies, database management, and Agile methodologies, equipping me with the skills to tackle real-world computing challenges.",
      },
      {
        id: 3,
        year: "2006 - 2010",
        title: "Bachelor of Mechanical Design and Automotive Engineering",
        school: "Shenyang University of Technology",
        content:
          "Completed a degree in mechanical engineering, specializing in automotive design. Developed skills in CAD, UG, and project management. The program provided a strong foundation in engineering principles and design techniques.",
      },
    ],
  },
  {
    name: "Experience",
    data: [
      {
        id: 1,
        year: "2020 - Now",
        title: "Internship Objective",
        school: "Unitec Institute of Technology",
        content:
          "Currently seeking an internship in software engineering, web development, big data, or data analysis. Passionate about applying technical skills to real-world projects and eager to gain hands-on experience in the tech industry.",
      },
      {
        id: 2,
        year: "2017 - 2019",
        title: "Part-Time Positions",
        school: "Living Foods",
        content:
          "Gained hands-on experience in various roles, including salad vegetable packer, kitchen factory assistant, orchard picker, and warehouse assistant. These positions enhanced my ability to work efficiently in different environments and manage diverse tasks.",
      },

      {
        id: 3,
        year: "2010 - 2016",
        title: "Mechanical Designer and Engineer",
        school: "Dalian Huarui Heavy Industry Group",
        content:
          "Designed heavy equipment components for bulk material handling, specialized in bucket wheel reclaimers and reclaimers. Created AutoCAD drawings, 3D models, and managed product data using Siemens PDM system. Assisted in selecting Electrical, Hydraulic, and Lubricating components.",
      },
    ],
  },
];

// projects data
export const projectsData = {
  tagsData: [
    "All",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
    "Bootstrap",
    "Axios",
    "React-router",
    "react-hooks",
    "Redux",
    "Zustand",
    "Canvas",
  ],
  cardData: [
    {
      id: 1,
      tags: ["All", "JavaScript", "Canvas"],
      title: "Meow Bubbles",
      description: "A funny canvas game",
      img: basicImg_1,
      url: "https://robert-j-wang.github.io/Meow-Bubble/",
    },
    {
      id: 2,
      tags: ["All", "JavaScript"],
      title: "Orewa Beach Lodges",
      description: "booking your lodge in Orewa Beach",
      img: basicImg_2,
      url: "https://robert-j-wang.github.io/Orewa-Beach-Loges/",
    },
    {
      id: 3,
      tags: ["All", "JavaScript"],
      title: "City Views",
      description: "Glimmering City Lights ",
      img: basicImg_3,
      url: "https://robert-j-wang.github.io/js_image_slider/",
    },
    {
      id: 4,
      tags: ["All", "JavaScript"],
      title: "Christmas Countdown",
      description: "Countdown to the Christmas day! ",
      img: basicImg_4,
      url: "https://robert-j-wang.github.io/js_christmas_countdown/",
    },
    {
      id: 5,
      tags: ["All", "React", "reactHooks"],
      title: "TodoList",
      description: "Add and delete a todo list easily",
      img: miniReactImg_1,
      url: "https://robert-j-wang.github.io/react_todo_list/",
    },
    {
      id: 6,
      tags: ["All", "Bootstrap", "React", "reactHooks"],
      title: "BookSheet",
      description: "Manage your books",
      img: miniReactImg_2,
      url: "https://robert-j-wang.github.io/react_booksheet/",
    },
    {
      id: 7,
      tags: ["All", "Axios", "React"],
      title: "gitHub Users Search",
      description: "Enter a keyWord to search gitHub users",
      img: miniReactImg_3,
      url: "https://robert-j-wang.github.io/react_search_users/",
    },
    {
      id: 8,
      tags: [
        "All",
        "react-hooks",
        "React",
        "TypeScript",
        "Zustand",
        "Axios",
        "Bootstrap",
      ],
      title: "Tshirt Shopping Cart",
      description: "select your size, add to cart",
      img: miniReactImg_4,
      url: "https://robert-j-wang.github.io/react_Tshirt/",
    },
    {
      id: 9,
      tags: ["All", "React", "Tailwind", "react-hooks", "Zustand"],
      title: "AgriBazaar NZ Website",
      description: "A website sales and rents agricultural machinery",
      img: frondEndReactImg_1,
      url: "https://robert-j-wang.github.io/react_AgriBazaar_website/",
    },
    {
      id: 10,
      tags: ["All", "TypeScript", "React", "Bootstrap", "Axios", "react-hooks"],
      title: "Weather Forecast",
      description: "A Weather Forecast website for Cities",
      img: frondEndReactImg_2,
      url: "https://robert-j-wang.github.io/react_weather/",
    },
    {
      id: 11,
      tags: [
        "All",
        "TypeScript",
        "React",
        "Tailwind",
        "React-router",
        "react-hooks",
        "Zustand",
      ],
      title: "BurgerQueen",
      description: "Order the best burgers on the website",
      img: frondEndReactImg_3,
      url: "https://robert-j-wang.github.io/react_BurgerQueen/",
    },
  ],
};
