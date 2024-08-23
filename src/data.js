import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";

// Header
export const menuData = [
  { id: 1, key: "home", anchor: "#home", title: "HOME" },
  { id: 2, key: "about", anchor: "#about", title: "ABOUT" },
  { id: 3, key: "resume", anchor: "#resume", title: "RESUME" },
  { id: 4, key: "works", anchor: "#works", title: "WORKS" },
  { id: 6, key: "contact", anchor: "#contact", title: "CONTACT" },
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
  { id: 1, title: "about me" },
  { id: 2, title: "my skill" },
  { id: 3, title: "my service" },
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

// works data
export const basicWebData = [
  {
    id: 1,
    title: "Meow Bubbles",
    description: "A funny canvas game",
    img: "../src/assets/myWorksImg/basicWeb/meowBubbles.png",
    url: "https://robert-j-wang.github.io/Meow-Bubble/",
  },
  {
    id: 2,
    title: "Orewa Beach Lodges",
    description: "booking your lodge in Orewa Beach",
    img: "../src/assets/myWorksImg/basicWeb/orewaBeachLodges.png",
    url: "https://robert-j-wang.github.io/Orewa-Beach-Loges/",
  },
  {
    id: 3,
    title: "City Views",
    description: "Glimmering City Lights ",
    img: "../src/assets/myWorksImg/basicWeb/cityViews.png",
    url: "https://robert-j-wang.github.io/js_image_slider/",
  },
  {
    id: 4,
    title: "Christmas Countdown",
    description: "Countdown to the Christmas day! ",
    img: "../src/assets/myWorksImg/basicWeb/countdown.png",
    url: "https://robert-j-wang.github.io/js_christmas_countdown/",
  },
  {
    id: 5,
    title: "Paint",
    description: "Creative wall painting",
    img: "https://tf-react-bieber.vercel.app/images/portfolios/portfolio-image-5.jpg",
    url: "https://robert-j-wang.github.io/Meow-Bubble/",
  },
];

export const reactMiniProjectData = [
  {
    id: 1,
    title: "TodoList",
    description: "Add and delete a todo list easily",
    img: "../src/assets/myWorksImg/reactMini/todoList.png",
    url: "https://robert-j-wang.github.io/react_todo_list/",
  },
  {
    id: 2,
    title: "BookSheet",
    description: "Manage your books",
    img: "../src/assets/myWorksImg/reactMini/bookSheet.png",
    url: "https://robert-j-wang.github.io/react_booksheet/",
  },
  {
    id: 3,
    title: "gitHub Users Search",
    description: "Enter a keyWord to search gitHub users",
    img: "../src/assets/myWorksImg/reactMini/gitUserSearch.png",
    url: "https://robert-j-wang.github.io/react_search_users/",
  },
  {
    id: 4,
    title: "Tshirt Shopping Cart",
    description: "select your size, add to cart",
    img: "../src/assets/myWorksImg/reactMini/tshirtShoppingCart.png",
    url: "https://robert-j-wang.github.io/react_Tshirt/",
  },
];

export const reactFrontEndData = [
  {
    id: 1,
    title: "AgriBazaar NZ Website",
    description: "A website sales and rents agricultural machinery",
    img: "../src/assets/myWorksImg/reactFrontEnd/agriBazaarNZ.png",
    url: "https://robert-j-wang.github.io/react_AgriBazaar_website/",
  },
  {
    id: 2,
    title: "Weather Forecast",
    description: "A Weather Forecast website for Cities",
    img: "../src/assets/myWorksImg/reactFrontEnd/weather.png",
    url: "https://robert-j-wang.github.io/react_weather/",
  },
  {
    id: 3,
    title: "BurgerQueen",
    description: "Order the best burgers on the website",
    img: "../src/assets/myWorksImg/reactFrontEnd/burgerQueen.png",
    url: "https://robert-j-wang.github.io/react_BurgerQueen/",
  },
];

// contact

export const contactData = [
  {
    id: 1,
    title: "Contact on phone",
    description: "+64 2102610798",
    img: "../src/assets/phone.svg",
  },
  {
    id: 2,
    title: "Contact on email",
    description: "robert00nz@gmail.com",
    img: "../src/assets/email.svg",
  },
  {
    id: 3,
    title: "Contact address",
    description: "17 Cleghorn Ave, Mt Roskill, Auckland",
    img: "../src/assets/address.svg",
  },
];
export const contactInputData = [
  { id: 1, title: "Name", placeHolder: "Enter your name..." },
  { id: 2, title: "Email", placeHolder: "Enter your Email..." },
  { id: 3, title: "Subject", placeHolder: "Enter your Subject..." },
];
