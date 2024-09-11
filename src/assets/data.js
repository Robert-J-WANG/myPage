import { BASE_PATH } from "@/config";
import catImg from "@/assets/cat.png";
import app100Img from "@/assets/100App.png";

// background data
export const backgroundData = [
  { id: 0, width: 30, height: 30, top: 140, left: 5 },
  { id: 1, width: 80, height: 80, top: 100, left: 20 },
  { id: 2, width: 140, height: 140, top: 130, left: 35 },
  { id: 3, width: 40, height: 40, top: 165, left: 55 },
  { id: 4, width: 110, height: 110, top: 150, left: 75 },
  { id: 5, width: 40, height: 40, top: 120, left: 90 },
];

// Header
export const navLinkData = [
  { id: 1, key: "home", to: `${BASE_PATH}/home`, content: "Home" },
  { id: 2, key: "about", to: `${BASE_PATH}/about`, content: "About" },
  { id: 3, key: "resume", to: `${BASE_PATH}/resume`, content: "Resume" },
  { id: 4, key: "projects", to: `${BASE_PATH}/projects`, content: "Projects" },
  { id: 5, key: "contact", to: `${BASE_PATH}/contact`, content: "Contact" },
];

export const projectsData = [
  {
    id: 1,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 2,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 3,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 4,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 5,
    title: "Catch Bugs Game",
    content: "create game using Canvas Api",
    tags: [
      { id: 1, name: "javaScript" },
      { id: 2, name: "Canvas" },
    ],
    icon: catImg,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
  {
    id: 6,
    title: "101 React Apps",
    content: "Try to finish 100 apps with React",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "scss" },
    ],
    icon: app100Img,
    url: "https://zoe6486.github.io/CatchingBugsGame/",
  },
];

// Home
export const socialLinksData = [
  {
    id: 1,
    title: "facebook",
    anchor: "https://www.facebook.com/robin.wong.904108",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/facebook.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/facebook.png",
  },
  {
    id: 2,
    title: "twitter",
    anchor: "https://twitter.com/Robin666",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/twitter.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/twitter.png",
  },
  {
    id: 3,
    title: "linkedIn",
    anchor: "https://www.linkedin.com/in/zoe6486/",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/linkedin.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/linkedin.png",
  },
  {
    id: 4,
    title: "gitHub",
    anchor: "https://github.com/Zoe6486",
    icon2: "https://img.icons8.com/sf-regular-filled/48/1c1e26/github.png",
    icon1: "https://img.icons8.com/sf-regular-filled/48/fb80c2/github.png",
  },
];

export const aboutData = [
  {
    id: "01",
    title: "Ui/Ux Design",
    content:
      "Design user-friendly interfaces using tools like Figma, Sketch, and Adobe XD.  Focus on making products both functional and visually appealing.",
    link: "/icons/quill-pen-line.svg",
    path: "M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z",
  },
  {
    id: "02",
    title: "Web Development",
    content:
      "Build responsive and dynamic websites using HTML, CSS, JavaScript, and React. Aim to create fast, secure, and user-friendly web applications.",
    link: "/icons/code-s-slash-line.svg",
    path: "M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z",
  },
  {
    id: "03",
    title: "Mobile App Development",
    content:
      "Develop mobile apps using React Native and Flutter. Focus on creating smooth, efficient, and user-friendly applications for both iOS and Android.",
    link: "/icons/smartphone-line.svg",
    path: "M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
];

// About
export const aboutMenuData = [
  { id: 1, title: "About Me" },
  { id: 2, title: "My Skill" },
];

export const infoData = [
  { id: 1, title: "First Name ", value: ": Robert Jiqiang" },
  { id: 2, title: "Last Name ", value: ": WANG" },
  { id: 3, title: "Nationality ", value: ": Chinese" },
  { id: 4, title: "Language ", value: ": English, Chinese" },
  // {
  //   id: 5,
  //   title: "Address ",
  //   value: ": 17 Cleghorn Ave, Mt Roskill, Auckland",
  // },
  { id: 6, title: "College", value: ": Unitec Institute of Technology" },
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

export const serviceData = [
  {
    id: "01",
    title: "Ui/Ux Design",
    content:
      "Design user-friendly interfaces using tools like Figma, Sketch, and Adobe XD.  Focus on making products both functional and visually appealing.",
    link: "/icons/quill-pen-line.svg",
    path: "M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z",
  },
  {
    id: "02",
    title: "Web Development",
    content:
      "Build responsive and dynamic websites using HTML, CSS, JavaScript, and React. Aim to create fast, secure, and user-friendly web applications.",
    link: "/icons/code-s-slash-line.svg",
    path: "M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z",
  },
  {
    id: "03",
    title: "Mobile App Development",
    content:
      "Develop mobile apps using React Native and Flutter. Focus on creating smooth, efficient, and user-friendly applications for both iOS and Android.",
    link: "/icons/smartphone-line.svg",
    path: "M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
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
    name: "Working",
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
          "Designed heavy equipment components for bulk material handling, specializing in bucket wheel reclaimers and combined stacker/reclaimers. Created AutoCAD drawings, 3D models, and managed product data using Siemens PDM system. Assisted in selecting Electrical, Hydraulic, and Lubricating components.",
      },
    ],
  },
];
