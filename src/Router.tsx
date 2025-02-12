import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Portfolio />,
        path: "/portfolio",
      },
      {
        element: <CV />,
        path: "/cv",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);
