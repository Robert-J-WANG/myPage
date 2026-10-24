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
import uucarsAdminDashboard from "@/assets/projects/uucars-admin-dashboard.webp";
import uucarsBrowse from "@/assets/projects/uucars-browse.webp";
import uucarsCover from "@/assets/projects/uucars-cover.webp";
import uucarsListing from "@/assets/projects/uucars-listing.webp";
import uucarsUserListings from "@/assets/projects/uucars-user-listings.webp";
import weather from "@/assets/projects/weather.webp";

export type ProjectDetails = {
  overview: string[];
  highlights: {
    title: string;
    description: string;
  }[];
  screenshots: {
    src: string;
    alt: string;
  }[];
};

export type Project = {
  slug: string;
  tags: string[];
  title: string;
  summary: string;
  image: string;
  liveUrl: string;
  repositoryUrl?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "uucars",
    tags: ["All", "React", "TypeScript", "ASP.NET Core", "Azure"],
    title: "UUcars Marketplace",
    summary:
      "A full-stack used-car marketplace with secure authentication, moderated listings, real-time notifications, and Azure deployment.",
    image: uucarsCover,
    liveUrl: "https://black-coast-04ba93800.7.azurestaticapps.net/",
    repositoryUrl: "https://github.com/Robert-J-WANG/UUcars",
    details: {
      overview: [
        "UUcars is a full-stack C2C used-car marketplace built around the complete journey from browsing public listings to managing a vehicle sale.",
        "The application combines secure account flows, moderated vehicle listings, transaction and review features, real-time notifications, and an automated Azure delivery pipeline.",
      ],
      highlights: [
        {
          title: "Secure account flows",
          description:
            "Email and Google sign-in, email verification, password recovery, JWT access tokens, and rotating refresh tokens support the main account journey.",
        },
        {
          title: "Moderated listings",
          description:
            "Sellers can save drafts, upload and order vehicle images, submit listings for review, and publish approved vehicles to the searchable marketplace.",
        },
        {
          title: "Marketplace workflow",
          description:
            "Favourites, orders, completion, reviews, seller ratings, and persistent SignalR notifications connect the buyer and seller experience.",
        },
        {
          title: "Tested cloud delivery",
          description:
            "Backend, frontend, and Playwright tests run through GitHub Actions before deployment to Azure Static Web Apps, Container Apps, and Azure SQL.",
        },
      ],
      screenshots: [
        {
          src: uucarsBrowse,
          alt: "UUcars vehicle browsing page with Toyota filters and listing cards",
        },
        {
          src: uucarsListing,
          alt: "UUcars vehicle detail page with image gallery and listing information",
        },
        {
          src: uucarsUserListings,
          alt: "UUcars seller workspace with published vehicle listings and account navigation",
        },
        {
          src: uucarsAdminDashboard,
          alt: "UUcars administrator dashboard with listing, user, order, and revenue metrics",
        },
      ],
    },
  },
  {
    slug: "meow-bubbles",
    tags: ["All", "JavaScript", "Canvas"],
    title: "Meow Bubbles",
    summary:
      "A small Canvas game built around animated bubble interactions and score tracking.",
    image: meowBubbles,
    liveUrl: "https://robert-j-wang.github.io/Meow-Bubble/",
  },
  {
    slug: "orewa-beach-lodges",
    tags: ["All", "JavaScript"],
    title: "Orewa Beach Lodges",
    summary:
      "A responsive accommodation website for exploring lodge details and booking information.",
    image: orewaBeachLodges,
    liveUrl: "https://robert-j-wang.github.io/Orewa-Beach-Loges/",
  },
  {
    slug: "city-views",
    tags: ["All", "JavaScript"],
    title: "City Views",
    summary:
      "A JavaScript image slider for presenting city photography with simple navigation.",
    image: cityViews,
    liveUrl: "https://robert-j-wang.github.io/js_image_slider/",
  },
  {
    slug: "christmas-countdown",
    tags: ["All", "JavaScript"],
    title: "Christmas Countdown",
    summary:
      "A JavaScript countdown interface that tracks the time remaining until Christmas Day.",
    image: countdown,
    liveUrl: "https://robert-j-wang.github.io/js_christmas_countdown/",
  },
  {
    slug: "todo-list",
    tags: ["All", "React", "react-hooks"],
    title: "To-do List",
    summary:
      "A React to-do list for adding, completing, and removing everyday tasks.",
    image: todoList,
    liveUrl: "https://robert-j-wang.github.io/react_todo_list/",
  },
  {
    slug: "booksheet",
    tags: ["All", "Bootstrap", "React", "react-hooks"],
    title: "BookSheet",
    summary:
      "A React book tracker for organising a personal reading list and book details.",
    image: bookSheet,
    liveUrl: "https://robert-j-wang.github.io/react_booksheet/",
  },
  {
    slug: "github-user-search",
    tags: ["All", "Axios", "React"],
    title: "GitHub User Search",
    summary:
      "A React search interface for finding and displaying GitHub user profiles.",
    image: gitUserSearch,
    liveUrl: "https://robert-j-wang.github.io/react_search_users/",
  },
  {
    slug: "tshirt-shopping-cart",
    tags: [
      "All",
      "react-hooks",
      "React",
      "TypeScript",
      "Zustand",
      "Axios",
      "Bootstrap",
    ],
    title: "T-shirt Shopping Cart",
    summary:
      "A TypeScript shopping cart for selecting product sizes and managing cart state.",
    image: tshirtShoppingCart,
    liveUrl: "https://robert-j-wang.github.io/react_Tshirt/",
  },
  {
    slug: "agri-bazaar-nz",
    tags: ["All", "React", "Tailwind", "react-hooks", "Zustand"],
    title: "AgriBazaar NZ",
    summary:
      "A responsive marketplace interface for browsing agricultural machinery for sale or hire.",
    image: agriBazaarNZ,
    liveUrl: "https://robert-j-wang.github.io/react_AgriBazaar_website/",
  },
  {
    slug: "weather-forecast",
    tags: ["All", "TypeScript", "React", "Bootstrap", "Axios", "react-hooks"],
    title: "Weather Forecast",
    summary:
      "A React weather dashboard for searching cities and displaying forecast data.",
    image: weather,
    liveUrl: "https://robert-j-wang.github.io/react_weather/",
  },
  {
    slug: "burger-queen",
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
    summary:
      "A TypeScript ordering interface with routed pages and Zustand-powered cart state.",
    image: burgerQueen,
    liveUrl: "https://robert-j-wang.github.io/react_BurgerQueen/",
  },
  {
    slug: "shoppia",
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
    summary:
      "A React and TypeScript storefront with product browsing, routing, and client-side state.",
    image: shoppia,
    liveUrl: "https://robert-j-wang.github.io/react_Shoppia/",
  },
  {
    slug: "top-movies",
    tags: ["All", "React", "Axios", "react-hooks"],
    title: "TopMovies",
    summary:
      "A React movie search interface for finding popular titles and browsing results.",
    image: topMovies,
    liveUrl: "https://robert-j-wang.github.io/react-topMovies/",
  },
];

const featuredProjectSlugs = [
  "uucars",
  "agri-bazaar-nz",
  "burger-queen",
  "shoppia",
];

export const featuredProjects = featuredProjectSlugs.map((slug) => {
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    throw new Error("Unknown featured project: " + slug);
  }

  return project;
});

