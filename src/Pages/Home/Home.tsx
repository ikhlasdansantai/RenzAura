import { Icon } from "@iconify/react";
import igPost1 from "../../assets/instagram_post/1.webp";
import igPost2 from "../../assets/instagram_post/2.webp";
import userImgProfile from "../../assets/profile_users/368172058_200014439727799_4548607432220709411_n.jpg";
import "../../index.css";
import HomeCard from "../../Components/Cards/HomeCard";

export default function Home() {
  interface HomeContentDatas {
    imgPost: string;
    imgProfile: string;
    author: string;
    date: string;
    link: string;
  }
  const homeContentDatas: HomeContentDatas[] = [
    {
      imgPost: igPost1,
      imgProfile: userImgProfile,
      author: "Renz Aura",
      date: "12 Hours Ago",
      link: "https://www.instagram.com/renz_aura/",
    },
    {
      imgPost: igPost2,
      imgProfile: userImgProfile,
      author: "Renz Aura",
      date: "12 Hours Ago",
      link: "https://www.instagram.com/renz_aura/",
    },
  ];

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
        <div className="container-cards mt-6 flex gap-10">
          {homeContentDatas.map((data, index) => {
            return <HomeCard key={index} imgProfile={data.imgProfile} imgPost={data.imgPost} author={data.author} date={data.date} link={data.link} />;
          })}
        </div>
      </div>
    </div>
  );
}
