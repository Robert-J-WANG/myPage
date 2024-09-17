/* eslint-disable no-unused-vars */
import { BASE_PATH } from "@/config";
import meowBubbles from "@/assets/projectsImgs/meowBubbles.png";
import orewaBeachLodges from "@/assets/projectsImgs/orewaBeachLodges.png";
import cityViews from "@/assets/projectsImgs/cityViews.png";
import countdown from "@/assets/projectsImgs/countdown.png";

import todoList from "@/assets/projectsImgs/todoList.png";
import bookSheet from "@/assets/projectsImgs/bookSheet.png";
import gitUserSearch from "@/assets/projectsImgs/gitUserSearch.png";
import tshirtShoppingCart from "@/assets/projectsImgs/tshirtShoppingCart.png";

import agriBazaarNZ from "@/assets/projectsImgs/agriBazaarNZ.png";
import weather from "@/assets/projectsImgs/weather.png";
import burgerQueen from "@/assets/projectsImgs/burgerQueen.png";
import shoppia from "@/assets/projectsImgs/shoppia.png";
import topMovies from "@/assets/projectsImgs/topMovies.png";
import Programming from '../../src copy 2/components/blog/Programming';
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
  { id: 1, title: "Introduction" },
  { id: 2, title: "Skills" },
  { id: 3, title: "Education" },
  { id: 4, title: "Experience" },
];

export const infoData = [
  { id: 1, title: "First Name ", value: ": Jiqiang ( Robert )" },
  { id: 2, title: "Last Name ", value: ": WANG" },
  { id: 3, title: "Nationality ", value: ": Chinese" },
  { id: 4, title: "Language ", value: ": English, Chinese" },
  { id: 5, title: "College", value: ": Unitec" },
  { id: 6, title: "Location", value: ": Auckland" },
];

export const skillData = [
  {
    id: 1,
    title: "Front-end Development",
    stroke: "0.80px 1px",
    percent: "80%",
  },
  {
    id: 2,
    title: "Back-end Development",
    stroke: "0.50px 1px",
    percent: "50%",
  },
  {
    id: 3,
    title: "Mobile App Development",
    stroke: "0.45px 1px",
    percent: "45%",
  },
  { id: 4, title: "UI/UX Design", stroke: "0.30px 1px", percent: "30%" },
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
        content: [
          "Specialized in advanced computing technologies", "Focused on Machine Learning, Big Data & Data Analysis, Cloud Computing and IoT",
          "Proficient in tools like Python, TensorFlow, Hadoop and AWS for developing innovative tech solutions"
        ]

      },
      {
        id: 2,
        year: "2022 - 2023",
        title: "Graduate Diploma in Computing",
        school: "Unitec Institute of Technology",
        content: [
          "Completed a comprehensive program focused on software development",
          "Learned Programming Languages, web technologies and database management",
          "Gained an understanding of Agile methodologies and Testing skills",
        ]

      },
      {
        id: 3,
        year: "2006 - 2010",
        title: "Bachelor of Mechanical Design and Automotive Engineering",
        school: "Shenyang University of Technology",
        content:
          ["Completed a degree in mechanical engineering and automotive design", "Learned a strong foundation in engineering principles and design techniques", "Proficient in skills like autoCAD, UG, Solidworks and project management"]

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
        content: [
          "Currently seeking an internship in web development", "Also interested in software development & big data & data analysis", "Passionate about applying technical skills in real-world projects", "Eager to gain hands-on experience in the tech industry",
        ]
      },
      {
        id: 2,
        year: "2017 - 2019",
        title: "Various roles",
        school: "Living Foods Limited",
        content: [
          "Gained hands-on experience in various roles", "Enhanced my ability to work efficiently in different environments", "Improved my skills in cooperating with team members on diverse tasks"
        ]
      },
      {
        id: 3,
        year: "2010 - 2016",
        title: "Mechanical Engineer and Designer",
        school: "Dalian Huarui Heavy Industry Group",
        content: [
          "Designed components for bulk material handling systems.",
          "Created AutoCAD drawings, 3D models, and managed product data.",
          "Collaborated with experts to design electrical, hydraulic, and lubricating systems."
        ]
      }
    ]
  }


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
      img: meowBubbles,
      url: "https://robert-j-wang.github.io/Meow-Bubble/",
    },
    {
      id: 2,
      tags: ["All", "JavaScript"],
      title: "Orewa Beach Lodges",
      description: "booking your lodge in Orewa Beach",
      img: orewaBeachLodges,
      url: "https://robert-j-wang.github.io/Orewa-Beach-Loges/",
    },
    {
      id: 3,
      tags: ["All", "JavaScript"],
      title: "City Views",
      description: "Glimmering City Lights ",
      img: cityViews,
      url: "https://robert-j-wang.github.io/js_image_slider/",
    },
    {
      id: 4,
      tags: ["All", "JavaScript"],
      title: "Christmas Countdown",
      description: "Countdown to the Christmas day! ",
      img: countdown,
      url: "https://robert-j-wang.github.io/js_christmas_countdown/",
    },
    {
      id: 5,
      tags: ["All", "React", "reactHooks"],
      title: "TodoList",
      description: "Add and delete a todo list easily",
      img: todoList,
      url: "https://robert-j-wang.github.io/react_todo_list/",
    },
    {
      id: 6,
      tags: ["All", "Bootstrap", "React", "reactHooks"],
      title: "BookSheet",
      description: "Manage your books",
      img: bookSheet,
      url: "https://robert-j-wang.github.io/react_booksheet/",
    },
    {
      id: 7,
      tags: ["All", "Axios", "React"],
      title: "gitHub Users Search",
      description: "Enter a keyWord to search gitHub users",
      img: gitUserSearch,
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
      img: tshirtShoppingCart,
      url: "https://robert-j-wang.github.io/react_Tshirt/",
    },
    {
      id: 9,
      tags: ["All", "React", "Tailwind", "react-hooks", "Zustand"],
      title: "AgriBazaar NZ Website",
      description: "sale and rent agricultural machineries",
      img: agriBazaarNZ,
      url: "https://robert-j-wang.github.io/react_AgriBazaar_website/",
    },
    {
      id: 10,
      tags: ["All", "TypeScript", "React", "Bootstrap", "Axios", "react-hooks"],
      title: "Weather Forecast",
      description: "A Weather Forecast website for Cities",
      img: weather,
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
      img: burgerQueen,
      url: "https://robert-j-wang.github.io/react_BurgerQueen/",
    },
    {
      id: 12,
      tags: [
        "All",
        "TypeScript",
        "React",
        "Tailwind",
        "React-router",
        "react-hooks",
        "Zustand",
      ],
      title: "Shoppia",
      description: "Go shopping on Shoppia",
      img: shoppia,
      url: "https://robert-j-wang.github.io/react_Shoppia/",
    },
    {
      id: 13,
      tags: ["All", "React", "Axios", "react-hooks"],
      title: "TopMovies",
      description: "search popular moives on TopMovies",
      img: topMovies,
      url: "https://robert-j-wang.github.io/react-topMovies/",
    },
  ],
};
