import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface HomeContentDatasProps {
  imgPost: string;
  imgProfile: string;
  author: string;
  date: string;
  link: string;
  id: number;
}
export default function Fashion({ items }: any): JSX.Element {
  return (
    <div id="home" className="min-h-screen ">
      <div className="titles underlineText">
        <h1 className="text-4xl dark:text-white">Hi, Selamat Datang! 🎉</h1>
        <p className="dark:text-secondText mt-2">Memperkenalkan sebuah platform untuk kamu yang mau belanja dengan mudah dengan harga yang murah meriah, selamat berbelanja :D.</p>
      </div>
      <div id="contents" className="mt-10">
        <div className="container flex justify-between items-center">
          <div className="info flex items-center gap-2">
            <Icon icon="cib:instagram" className="icon" />
            <span className="dark:text-secondText">Instagram</span>
          </div>
          <span className="dark:text-secondText">Lihat Selengkapnya</span>
        </div>
        <div className="mt-6 flex gap-10">
          {items.map((item: any) => (
            <Link to={`/pakaian/${item.id}`} key={item.id}>
              <figure className="w-[20rem]">
                <img src={item.imgPost} alt="" />
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
