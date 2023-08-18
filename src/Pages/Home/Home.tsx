import "./home.css";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div id="home">
      <div className="titles relative">
        <h1 className="text-2xl dark:text-white">Hi, Selamat Datang! 🎉</h1>
        <p className="dark:text-[#a3a3a3] mt-2">Memperkenalkan sebuah platform untuk kamu yang mau belanja dengan mudah dengan harga yang murah meriah, selamat berbelanja :D.</p>
      </div>
      <div id="contents" className="mt-10">
        <div className="container flex justify-between items-center">
          <div className="info flex items-center gap-2">
            <Icon icon="cib:instagram" className="icon" />
            <span>Instagram</span>
          </div>
          <span>Lihat Selengkapnya </span>
        </div>
        <div className="container-cards">
          <div className="card">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="title">
              <figure className="profile-car">
                <img src="" alt="" />
              </figure>
              <div className="name-bio">
                <h2>RenzAura</h2>
                <p>12 Hours Ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
