import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root/Root";
import AboutUs from "./Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tentangKami",
        element: <AboutUs />,
      },
      {
        path: "/pakaian",
        element: <h2>Hello Pakaian</h2>,
      },
      {
        path: "/makanan",
        element: <h2>Hello Makanan</h2>,
      },
      {
        path: "/jasaMakeup",
        element: <h2>Hello JasaMakeup</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
