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
  // {
  //   id: 1,
  //   title: "facebook",
  //   anchor: "https://www.facebook.com/robin.wong.904108",
  //   icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/facebook.png",
  //   icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/facebook.png",
  // },
  
  {
    id: 2,
    title: "linkedIn",
    anchor: "https://www.linkedin.com/in/robert-j-wang/",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/linkedin.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/linkedin.png",
  },
  {
    id: 3,
    title: "gitHub",
    anchor: "https://github.com/Robert-J-WANG",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/github.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/github.png",
  },

  {
    id: 4,
    title: "emial",
    anchor: "mailto:robertwang6486@gmail.com?subject=反馈&body=请描述您的反馈",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/email.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/9feaad/email.png",
  },
];



// About
export const aboutMenuData = [
  { id: 1, title: "Introduction" },
  { id: 2, title: "Skills" },
  { id: 3, title: "Education" },
  // { id: 4, title: "Experience" },
];

export const infoData = [
  { id: 1, title: "First Name ", value: ": Robert ( Jiqiang )" },
  { id: 2, title: "Last Name ", value: ": WANG" },
  // { id: 3, title: "Nationality ", value: ": Chinese" },
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
    stroke: "0.70px 1px",
    percent: "70%",
  },
  {
    id: 3,
    title: "Manchine Learning & AI ",
    stroke: "0.50px 1px",
    percent: "50%",
  },
  { id: 4, title: "Data Engineering & Analytics", stroke: "0.60px 1px", percent: "60%" },
];
export const languageData = [
  { id: 1, title: "Html & Css", value: "90" },
  { id: 2, title: "Javascript", value: "80" },
  { id: 3, title: "ReactJs", value: "80" },
  { id: 4, title: "NodeJs", value: "70" },
  { id: 5, title: "Typecript", value: "60" },
  { id: 6, title: "C# & Python", value: "60" },
  { id: 7, title: "PostgreSQL", value: "60" },
  { id: 8, title: "Azure", value: "50" },
];

// resume data
export const resumeData = [
  {
    name: "Education",
    data: [
      {
        id: 1,
        year: "2024 - 2025",
        title: "Master of Applied Technologies in Computing",
        school: "Unitec Institute of Technology",
        content: [
          "Specialized in advanced computing technologies,", 
          "Focused on Machine Learning, Data Analysis, Cloud Computing and IoT,",
          "Proficient in tools like Python, TensorFlow, Hadoop and Azure"
        ]

      },
      {
        id: 2,
        year: "2022 - 2023",
        title: "Graduate Diploma in Software Development",
        school: "Unitec Institute of Technology",
        content: [
          "Completed a comprehensive program focused on software development,",
          "Learned Programming Languages, web technologies and database management,",
          "Gained an understanding of Agile methodologies and Testing skills",
        ]

      },
      {
        id: 3,
        year: "2006 - 2010",
        title: "Bachelor of engineering in Mechanical Design, Manufacturing and Automation",
        school: "Shenyang University of Technology",
        content:
          ["Learned a strong foundation in engineering and design principles,", "skilled in using autoCAD, UG, Solidworks and project management"]

      },
    ],
  },
  {
    name: "Experience",
    data: [
      {
        id: 1,
        year: "2024 - Now",
        title: "Internship Objective",
        school: "Unitec Institute of Technology",
        content: [
          "Currently seeking an internship/ graduate roles in web development", "Also interested in software development & big data & data analysis", "Passionate about applying technical skills in real-world projects", "Eager to gain hands-on experience in the tech industry",
        ]
      },
      {
        id: 2,
        year: "2022 - 2023",
        title: "Software Developer Intern",
        school: "Living Foods Limited",
        content: [
          "Collaborated with the product manager to upgrade the company website to a responsive SPA using React.js, significantly improving UI/UX and performance","Assisted senior engineers in developing an inventory management system by creating REST APIs with ASP.NET to manage vehicle data.", 
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
