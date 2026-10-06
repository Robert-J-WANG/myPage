import { createBrowserRouter, Navigate } from "react-router";
import { createElement } from "react";

import RootLayout from "@/app/RootLayout";
import Home from "@/components/pages/Home";
import NotFound from "@/components/pages/NotFound";
import ProjectDetails from "@/components/pages/ProjectDetails";
import Projects from "@/components/pages/Projects";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, element: createElement(Navigate, { replace: true, to: "/home" }) },
        { path: "home", Component: Home },
        {
          path: "about",
          element: createElement(Navigate, {
            replace: true,
            to: "/home#about",
          }),
        },
        { path: "projects", Component: Projects },
        { path: "projects/:projectId", Component: ProjectDetails },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
