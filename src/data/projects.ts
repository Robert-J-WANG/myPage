import burgerQueen from "@/assets/projects/burgerQueen.webp";
import meowBubbles from "@/assets/projects/meowBubbles.webp";
import shoppia from "@/assets/projects/shoppia.webp";
import topMovies from "@/assets/projects/topMovies.webp";
import uucarsAdminDashboard from "@/assets/projects/uucars-admin-dashboard.webp";
import uucarsBrowse from "@/assets/projects/uucars-browse.webp";
import uucarsCover from "@/assets/projects/uucars-cover.webp";
import uucarsListing from "@/assets/projects/uucars-listing.webp";
import uucarsUserListings from "@/assets/projects/uucars-user-listings.webp";

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
  "shoppia",
  "meow-bubbles",
  "top-movies",
];

export const featuredProjects = featuredProjectSlugs.map((slug) => {
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    throw new Error("Unknown featured project: " + slug);
  }

  return project;
});

