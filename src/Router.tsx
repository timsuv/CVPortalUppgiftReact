import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";

const base = "/CVPortalUppgiftReact";
export const router = createBrowserRouter([
  {
    path: `${base}/`,
    element: <Layout />,
    children: [
      {
        path: `${base}/`,
        element: <Home />,
      },
      {
        path: `${base}/about`,
        element: <About />,
      },
      {
        element: <Portfolio />,
        path: `${base}/portfolio`,
      },
      {
        path: `${base}/cv`,
        element: <CV />,
      },
      {
        path: `${base}/contact`,
        element: <Contact />,
      },
    ],
  },
]);
