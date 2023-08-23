import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root/Root";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Fashion from "./Pages/Fashion/Fashion";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

import igPost1 from "./assets/instagram_post/1.webp";
import igPost2 from "./assets/instagram_post/2.webp";
import userImgProfile from "./assets/profile_users/368172058_200014439727799_4548607432220709411_n.jpg";
import Foods from "./Pages/Foods/Foods";

interface HomeContentDatas {
  imgPost: string;
  imgProfile: string;
  author: string;
  date: string;
  link: string;
  id: number;
}
const homeContentDatas: HomeContentDatas[] = [
  {
    imgPost: igPost1,
    imgProfile: userImgProfile,
    author: "Renz Aura",
    date: "12 Hours Ago",
    link: "https://www.instagram.com/renz_aura/",
    id: 1,
  },
  {
    imgPost: igPost2,
    imgProfile: userImgProfile,
    author: "Renz Aura",
    date: "1 Hours Ago",
    link: "https://www.instagram.com/renz_aura/",
    id: 2,
  },
];

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
        element: <Fashion items={homeContentDatas} />,
      },
      {
        path: "/pakaian/:id",
        element: <ProductDetails product={homeContentDatas} />,
      },
      {
        path: "/makanan",
        element: <Foods />,
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
