export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="titles underlineText">
        <h1 className="text-4xl dark:text-white">Mari Berkenalan! 👋</h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-[16px] dark:text-secondText leading-6">
          Berawal dari sebuah keresahan, memunculkan ide dan solusi baru untuk mengembangkan sesuatu sesuai kemampuan kami, dan kebetulan kemampuan kami adalah selain berjualan, kami juga membangun platform website untuk sebagai media
          promosi kami, yang bisa diharapkan bisa memikat user/buyer baru untuk membeli produk di toko/usaha kami.
        </p>
        <p className="mt-2 text-slate-600 text-sm sm:text-[16px] dark:text-secondText leading-6">
          Kalian juga bisa menitipkan produk di platform kami, sebagai media untuk promosi juga, jika tertarik kalian bisa menghubungi kami di nomor WA yang sudah kami cantumkan di website ini. kami tunggu kerjasamanya :D
        </p>
      </div>
      <div id="statistics-wrappers" className="mt-10">
        <div className="flex gap-1 items-center">
          <span className="text-xs">🔴</span>
          <p className="text-slate-600 text-sm sm:text-[16px] dark:text-primary">Statistik Website Kami</p>
        </div>
        <div className="statistics-containers mt-4">
          <div className="statisticsc-card dark:bg-[#262626] p-4">
            <h2 className="dark:text-white">Pengunjung</h2>
            <span className="text-slate-600">210K +</span>
          </div>
        </div>
      </div>
    </div>
  );
}
