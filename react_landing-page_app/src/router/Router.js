import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import {
  ErrorPage,
  HomePage,
  LandingPage,
  ProjectsPage,
  WeatherPage,
} from "../pages";

export const Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      { path: "projects", element: <ProjectsPage /> },
      { path: "weather", element: <WeatherPage /> },
    ],
  },
]);
