import { Icon } from "@iconify/react";
import igPost from "../../assets/instagram_post/368007252_813408113608142_4876851545219697963_n.webp";
import userImgProfile from "../../assets/profile_users/368172058_200014439727799_4548607432220709411_n.jpg";
import "../../index.css";

export default function Home() {
  return (
    <div id="home" className="min-h-screen ">
      <div className="titles underlineText">
        <h1 className="text-2xl dark:text-white">Hi, Selamat Datang! 🎉</h1>
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
        <div className="container-cards mt-6">
          <div className="card">
            <figure className="w-60">
              <img src={igPost} alt="instagramPostPict" height="100%" width="100%" className="block max-w-full" />
            </figure>
            <div className="titles flex items-center gap-2 mt-2">
              <figure className="profile-car w-9 rounded-full overflow-hidden ">
                <img src={userImgProfile} alt="userIMGProfile" height="100%" width="100%" className="block max-w-full" />
              </figure>
              <div className="name-bio">
                <h2 className="text-base dark:text-white">RenzAura</h2>
                <p className="text-slate-900 text-xs dark:text-secondText">12 Hours Ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
