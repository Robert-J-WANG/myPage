import { createBrowserRouter, Navigate } from "react-router";
import { createElement } from "react";

import RootLayout from "@/app/RootLayout";
import About from "@/components/pages/About";
import Home from "@/components/pages/Home";
import Projects from "@/components/pages/Projects";
import NotFound from "@/components/pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, element: createElement(Navigate, { replace: true, to: "/home" }) },
        { path: "home", Component: Home },
        { path: "about", Component: About },
        { path: "projects", Component: Projects },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
