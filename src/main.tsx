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

// Handle Fashion
import fashion2 from "./assets/instagram_post/2.webp";
import fashion3 from "./assets/Fashion/1.jpeg";
import fashion4 from "./assets/Fashion/2.jpeg";
import fashion5 from "./assets/Fashion/3.jpeg";
import fashion6 from "./assets/Fashion/4.jpeg";
import fashion7 from "./assets/Fashion/5.jpeg";
import fashion8 from "./assets/Fashion/6.jpeg";
import fashion9 from "./assets/Fashion/7.jpeg";

// Handle Makeup
import bannerIMG from "./assets/banner.jpeg";

// Handle Router
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
  productLink: string;
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
    productLink: "https://shopee.co.id/blazer-i.19670999.21092114059?sp_atk=a3df80a7-c5f0-40d1-95e7-2b091ac92509&xptdk=a3df80a7-c5f0-40d1-95e7-2b091ac92509",
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
    productLink: "empty",
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
    productLink: "https://shopee.co.id/blazer-i.19670999.16998548005?sp_atk=460b0379-06f6-4b98-8449-b209d458ef24&xptdk=460b0379-06f6-4b98-8449-b209d458ef24",
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
    productLink: "https://shopee.co.id/blazer-i.19670999.18583149423?sp_atk=f2c50bc0-a23b-4290-84a0-21dabee8af70&xptdk=f2c50bc0-a23b-4290-84a0-21dabee8af70",
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
    productLink: "https://shopee.co.id/blazer-i.19670999.22477449822?sp_atk=7ea1203e-cdce-4586-a6d9-7d176b653ef1&xptdk=7ea1203e-cdce-4586-a6d9-7d176b653ef1",
  },

  {
    imgPost: fashion7,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 45_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 7,
    productLink: "empty",
  },
  {
    imgPost: fashion8,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 45_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 8,
    productLink: "https://shopee.co.id/blazer-i.19670999.22377271591?sp_atk=3d228217-dd4a-46b8-a21c-77d8ea71582f&xptdk=3d228217-dd4a-46b8-a21c-77d8ea71582f",
  },
  {
    imgPost: fashion9,
    imgProfile: userImgProfile,
    title: "Blazer",
    desc: "Sebuah pakian yang bisa bikin kamu nyaman ketika menggunakannya, mendapatkan sebuah keharmonisan disetiap gesekannya, jadi tunggu apa lagi ayo buruan di borong.",
    author: "Renz Aura",
    price: 25_000,
    link: "https://www.instagram.com/renz_aura/",
    size: "L",
    id: 9,
    productLink: "https://shopee.co.id/pakaian-i.19670999.22177291943?sp_atk=e3396a0d-a2fd-4240-b8ac-1f92fd00470a&xptdk=e3396a0d-a2fd-4240-b8ac-1f92fd00470a",
  },
];

interface MakeupContentDatas {
  bannerIMG: string;
  title: string;
  desc: string;
  roles: any;
  price: number;
}

const makeupContentDatas: MakeupContentDatas[] = [
  {
    bannerIMG: bannerIMG,
    title: "Paket Makeup Only",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [{ roleName: "Makeup", roleColor: "bg-purple-400" }],
    price: 200_000,
  },
  {
    bannerIMG: bannerIMG,
    title: "Paket Bride Only",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [
      { roleName: "MC", roleColor: "bg-red-400" },
      { roleName: "Makeup", roleColor: "bg-purple-400" },
    ],
    price: 4_999_999,
  },
  {
    bannerIMG: bannerIMG,
    title: "Paket Prewedding",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [
      { roleName: "Dokumentasi", roleColor: "bg-green-400" },
      { roleName: "MC", roleColor: "bg-red-400" },
      { roleName: "Makeup", roleColor: "bg-purple-400" },
    ],
    price: 2_999_999,
  },
  {
    bannerIMG: bannerIMG,
    title: "Paket Simple",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [
      { roleName: "Dokumentasi", roleColor: "bg-green-400" },
      { roleName: "MC", roleColor: "bg-red-400" },
      { roleName: "Makeup Ibu 2", roleColor: "bg-purple-400" },
      { roleName: "Makeup Pager Ayu 2", roleColor: "bg-purple-400" },
      { roleName: "Makeup", roleColor: "bg-purple-400" },
    ],
    price: 7_999_999,
  },
  {
    bannerIMG: bannerIMG,
    title: "Paket Bronze",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [
      { roleName: "Dekorasi Modern", roleColor: "bg-orange-400" },
      { roleName: "Stand & Parasmanan", roleColor: "bg-yellow-500" },
      { roleName: "Dokumentasi", roleColor: "bg-green-400" },
      { roleName: "Makeup Pager Ayu 4", roleColor: "bg-purple-600" },
      { roleName: "Makeup Ibu 2", roleColor: "bg-purple-400" },
      { roleName: "MC", roleColor: "bg-red-400" },
      { roleName: "Makeup", roleColor: "bg-purple-400" },
    ],
    price: 19_999_999,
  },
  {
    bannerIMG: bannerIMG,
    title: "Paket Silver",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque exercitationem eius ducimus, officia incidunt neque sit. Qui, illo odio?",
    roles: [
      { roleName: "Entertainment", roleColor: "bg-blue-500" },
      { roleName: "Stand & Parasmanan", roleColor: "bg-yellow-500" },
      { roleName: "Dekorasi Modern", roleColor: "bg-orange-400" },
      { roleName: "Dokumentasi", roleColor: "bg-green-400" },
      { roleName: "Makeup Pager Ayu 4", roleColor: "bg-purple-600" },
      { roleName: "Makeup Ibu 2", roleColor: "bg-purple-400" },
      { roleName: "MC", roleColor: "bg-red-400" },
      { roleName: "Makeup", roleColor: "bg-purple-400" },
    ],
    price: 25_999_999,
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
        path: "tentangKami",
        element: <AboutUs />,
      },
      {
        path: "pakaian",
        element: <Fashion items={homeContentDatas} />,
      },
      {
        path: "pakaian/:id",
        element: <ProductDetails product={homeContentDatas} />,
      },
      {
        path: "makanan",
        element: <Foods />,
      },
      {
        path: "jasaMakeup",
        element: <MakeUp items={makeupContentDatas} />,
      },
      {
        path: "kritikdansaran",
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
