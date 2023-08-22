import { Icon } from "@iconify/react";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="titles underlineText">
        <h1 className="text-4xl dark:text-white">Mari Berkenalan! 👋</h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-[16px] dark:text-secondText leading-6">
          Berawal dari sebuah keresahan, memunculkan ide dan solusi baru untuk mengembangkan sesuatu sesuai kemampuan kami, dan kebetulan kemampuan kami adalah selain berjualan, Di samping menjalankan bisnis, kami juga memiliki keahlian
          dalam membangun platform website yang memikat, untuk sebagai media promosi kami,Kami ingin menghadirkan pengalaman yang menarik bagi calon pelanggan dan membantu meningkatkan daya tarik bisnis Anda.
        </p>
        <p className="mt-2 text-slate-600 text-sm sm:text-[16px] dark:text-secondText leading-6">
          Kami juga memberikan peluang kepada Anda untuk menampilkan produk-produk unggulan di platform kami. Dengan ini, Anda dapat memperluas jangkauan promosi dan menarik minat baru dari pengguna kami. Jika Anda tertarik untuk
          bekerjasama, jangan ragu untuk menghubungi kami melalui nomor WhatsApp yang sudah kami sertakan di halaman website kami. Kami dengan antusias menanti peluang kerjasama yang penuh potensi ini. Terima kasih! 😊
        </p>
      </div>
      <div id="statistics-wrappers" className="mt-10">
        <div className="flex gap-1 items-center ">
          <span className="text-xs">🔴</span>
          <p className="text-slate-600 text-sm sm:text-[16px] dark:text-primary">Statistik Website Kami</p>
        </div>
        <div className="statistics-containers mt-4 grid grid-cols-2  gap-6 lg:grid-cols-3">
          <div className="statistics-card rounded-lg dark:bg-[#262626] p-4 border shadow-md dark:border-primaryBlack">
            <h2 className="dark:text-white">Pengunjung</h2>
            <span className="text-slate-600">210K+</span>
          </div>
          <div className="statistics-card rounded-lg dark:bg-[#262626] p-4 border shadow-md dark:border-primaryBlack">
            <h2 className="dark:text-white">Produk Terjual</h2>
            <span className="text-slate-600">999</span>
          </div>
          <div className="statistics-card col-span-2 lg:col-span-1 rounded-lg dark:bg-[#262626] p-4 border shadow-md lg:max-w-[20rem] dark:border-primaryBlack">
            <h2 className="dark:text-white">Pengunjung Aktif</h2>
            <span className="text-slate-600">989</span>
          </div>
        </div>
        <div id="join-with-us" className="mt-6">
          <div className="statistics-card col-span-2 rounded-lg dark:bg-[#262626] p-4 flex gap-3 border shadow-md dark:border-primaryBlack max-w-[21rem]">
            <Icon icon="mingcute:rocket-line" className="icon text-[30px]" />
            <div className="titles">
              <h2 className="dark:text-white">Ingin Bergabung Bersama Kami?</h2>
              <button
                type="button"
                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#525252] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
