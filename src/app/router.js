import { createBrowserRouter, Navigate } from "react-router";
import { createElement } from "react";

import RootLayout from "@/app/RootLayout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
import ProjectsPage from "@/pages/ProjectsPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, element: createElement(Navigate, { replace: true, to: "/home" }) },
        { path: "home", Component: HomePage },
        {
          path: "about",
          element: createElement(Navigate, {
            replace: true,
            to: "/home#about",
          }),
        },
        { path: "projects", Component: ProjectsPage },
        { path: "projects/:projectId", Component: ProjectDetailsPage },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
