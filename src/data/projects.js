import agriBazaarNZ from "@/assets/projects/agriBazaarNZ.webp";
import bookSheet from "@/assets/projects/bookSheet.webp";
import burgerQueen from "@/assets/projects/burgerQueen.webp";
import cityViews from "@/assets/projects/cityViews.webp";
import countdown from "@/assets/projects/countdown.webp";
import gitUserSearch from "@/assets/projects/gitUserSearch.webp";
import meowBubbles from "@/assets/projects/meowBubbles.webp";
import orewaBeachLodges from "@/assets/projects/orewaBeachLodges.webp";
import shoppia from "@/assets/projects/shoppia.webp";
import todoList from "@/assets/projects/todoList.webp";
import topMovies from "@/assets/projects/topMovies.webp";
import tshirtShoppingCart from "@/assets/projects/tshirtShoppingCart.webp";
import weather from "@/assets/projects/weather.webp";

export const projects = [
  {
    id: 1,
    tags: ["All", "JavaScript", "Canvas"],
    title: "Meow Bubbles",
    description:
      "A small Canvas game built around animated bubble interactions and score tracking.",
    img: meowBubbles,
    url: "https://robert-j-wang.github.io/Meow-Bubble/",
  },
  {
    id: 2,
    tags: ["All", "JavaScript"],
    title: "Orewa Beach Lodges",
    description:
      "A responsive holiday-lodge booking interface for browsing accommodation details.",
    img: orewaBeachLodges,
    url: "https://robert-j-wang.github.io/Orewa-Beach-Loges/",
  },
  {
    id: 3,
    tags: ["All", "JavaScript"],
    title: "City Views",
    description:
      "A JavaScript image slider for presenting city photography with simple navigation.",
    img: cityViews,
    url: "https://robert-j-wang.github.io/js_image_slider/",
  },
  {
    id: 4,
    tags: ["All", "JavaScript"],
    title: "Christmas Countdown",
    description:
      "A JavaScript countdown interface that tracks the time remaining until Christmas Day.",
    img: countdown,
    url: "https://robert-j-wang.github.io/js_christmas_countdown/",
  },
  {
    id: 5,
    tags: ["All", "React", "react-hooks"],
    title: "TodoList",
    description:
      "A React to-do list for adding, completing, and removing everyday tasks.",
    img: todoList,
    url: "https://robert-j-wang.github.io/react_todo_list/",
  },
  {
    id: 6,
    tags: ["All", "Bootstrap", "React", "react-hooks"],
    title: "BookSheet",
    description:
      "A React book tracker for organising a personal reading list and book details.",
    img: bookSheet,
    url: "https://robert-j-wang.github.io/react_booksheet/",
  },
  {
    id: 7,
    tags: ["All", "Axios", "React"],
    title: "gitHub Users Search",
    description:
      "A React search interface for finding and displaying GitHub user profiles.",
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
    description:
      "A TypeScript shopping cart for selecting product sizes and managing cart state.",
    img: tshirtShoppingCart,
    url: "https://robert-j-wang.github.io/react_Tshirt/",
  },
  {
    id: 9,
    tags: ["All", "React", "Tailwind", "react-hooks", "Zustand"],
    title: "AgriBazaar NZ Website",
    description:
      "A responsive marketplace interface for browsing agricultural machinery for sale or hire.",
    img: agriBazaarNZ,
    url: "https://robert-j-wang.github.io/react_AgriBazaar_website/",
  },
  {
    id: 10,
    tags: ["All", "TypeScript", "React", "Bootstrap", "Axios", "react-hooks"],
    title: "Weather Forecast",
    description:
      "A React weather dashboard for searching cities and displaying forecast data.",
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
    description:
      "A TypeScript ordering interface with routed pages and Zustand-powered cart state.",
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
    description:
      "A React and TypeScript storefront with product browsing, routing, and client-side state.",
    img: shoppia,
    url: "https://robert-j-wang.github.io/react_Shoppia/",
  },
  {
    id: 13,
    tags: ["All", "React", "Axios", "react-hooks"],
    title: "TopMovies",
    description:
      "A React movie search interface for finding popular titles and browsing results.",
    img: topMovies,
    url: "https://robert-j-wang.github.io/react-topMovies/",
  },
];

const featuredProjectIds = [9, 11, 12, 8];

export const featuredProjects = featuredProjectIds.map((id) =>
  projects.find((project) => project.id === id),
);
