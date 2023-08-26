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

import fashion2 from "./assets/instagram_post/2.webp";
import fashion3 from "./assets/Fashion/1.jpeg";
import fashion4 from "./assets/Fashion/2.jpeg";
import fashion5 from "./assets/Fashion/3.jpeg";
import fashion6 from "./assets/Fashion/4.jpeg";
import userImgProfile from "./assets/profile_users/368172058_200014439727799_4548607432220709411_n.jpg";
import Foods from "./Pages/Foods/Foods";
import MakeUp from "./Pages/MakeUp/MakeUp";
import Form from "./Pages/Form/Form";

interface HomeContentDatas {
  imgPost: string;
  imgProfile: string;
  title: string;
  desc: string;
  author: string;
  price: number;
  link: string;
  size: string;
  id: number;
}
const homeContentDatas: HomeContentDatas[] = [
  {
    imgPost: fashion2,
    imgProfile: userImgProfile,
    title: "Pattern Blazer",
    desc: "Miliki Blazer Berkualitas ini dengan Investasi Hanya 50K! Cocok untuk Acara Formal dan Kasual. Jangan Lewatkan Kesempatan Ini, Stok Terbatas. Dapatkan Gaya yang Tampil Beda dengan Blazer dari Koleksi Pakaian Kami",
    author: "Renz Aura",
    price: 50_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 2,
  },
  {
    imgPost: fashion3,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 50_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 3,
  },
  {
    imgPost: fashion4,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 50_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 4,
  },
  {
    imgPost: fashion5,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 65_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 5,
  },
  {
    imgPost: fashion6,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 45_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 6,
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
        element: <MakeUp />,
      },
      {
        path: "/kritikdansaran",
        element: <Form />,
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
