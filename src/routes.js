import React from "react";
const Projects = React.lazy(() => import("./pages/Projects"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Finance = React.lazy(() => import("./pages/Finance"));
const Support = React.lazy(() => import("./pages/Support"));
const SingleProject = React.lazy(() => import("./pages/SingleProject"));

const routes = [
  {
    enabled: true,
    path: "projects",
    element: <Projects />,
  },
  {
    enabled: true,
    path: "profile",
    element: <Profile />,
  },
  {
    enabled: true,
    path: "finance",
    element: <Finance />,
  },
  {
    enabled: true,
    path: "support",
    element: <Support />,
  },
  {
    enabled: true,
    path: "projects/:id",
    element: <SingleProject />,
  },
];

export default routes.filter((route) => route.enabled);
