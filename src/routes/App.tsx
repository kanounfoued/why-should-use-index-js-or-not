import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/about",
      Component: About,
    },
  ]);

  return <RouterProvider router={router} />;
}
