import { Icon } from "@iconify/react";
import igPost1 from "../../assets/instagram_post/1.webp";
import igPost2 from "../../assets/instagram_post/2.webp";
import igPost3 from "../../assets/instagram_post/3.webp";
import userImgProfile from "../../assets/profile_users/368172058_200014439727799_4548607432220709411_n.jpg";
import "../../index.css";
import HomeCard from "../../Components/Cards/HomeCard";
import "./home.css";
import Title from "../../Components/Title/Title";

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
      date: "19 August 2023",
      link: "https://www.instagram.com/renz_aura/",
    },
    {
      imgPost: igPost2,
      imgProfile: userImgProfile,
      author: "Renz Aura",
      date: "22 August 2023",
      link: "https://www.instagram.com/renz_aura/",
    },
    {
      imgPost: igPost3,
      imgProfile: userImgProfile,
      author: "Renz Aura",
      date: "26 August 2023",
      link: "https://www.instagram.com/renz_aura/",
    },
  ];

  function convertToTimestamp(dateString: string): number {
    const timestamp = Date.parse(dateString);
    return timestamp;
  }
  function getTimeAgo(timestamp: any) {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);

    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60)); // Menghitung selisih dalam menit

    if (minutesDifference < 60) {
      return `${minutesDifference} Minutes Ago`;
    } else if (minutesDifference < 1440) {
      const hoursDifference = Math.floor(minutesDifference / 60);
      return `${hoursDifference} Hours Ago`;
    } else {
      const daysDifference = Math.floor(minutesDifference / 1440);
      return `${daysDifference} Days Ago`;
    }
  }

  return (
    <div id="home">
      <div className="titles underlineText">
        <Title>Hi, Selamat Datang! 🎉</Title>
        <p className="dark:text-secondText mt-2">Memperkenalkan sebuah platform untuk kamu yang mau belanja dengan mudah dengan harga yang murah meriah, selamat berbelanja :D.</p>
      </div>
      <div id="contents" className="mt-10 overflow-hidden">
        <div className="container flex justify-between items-center">
          <div className="info flex items-center gap-2">
            <Icon icon="cib:instagram" className="icon" />
            <span className="dark:text-secondText">Instagram</span>
          </div>
          {/* <span className="dark:text-secondText">Lihat Selengkapnya</span> */}
        </div>
        <div className="container-cards flex flex-row w-94 mt-6 gap-4 snap-x snap-proximity overflow-x-scroll overflow-y-hidden pb-3 xl:snap-none xl:overflow-hidden">
          {homeContentDatas.map((data, index) => {
            const timestamp = convertToTimestamp(data.date);
            const timeAgo = getTimeAgo(timestamp);
            return <HomeCard key={index} imgProfile={data.imgProfile} imgPost={data.imgPost} author={data.author} date={timeAgo} link={data.link} />;
          })}
        </div>
      </div>
    </div>
  );
}
