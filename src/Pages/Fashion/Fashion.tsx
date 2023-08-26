import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";
// interface HomeContentDatasProps {
//   imgPost: string;
//   imgProfile: string;
//   author: string;
//   date: string;
//   link: string;
//   id: number;
// }
export default function Fashion({ items }: any): JSX.Element {
  return (
    <div id="home" className="min-h-screen">
      <div className="titles underlineText">
        <Title>Koleksi Eksklusif Baju, Spesial Untuk Anda</Title>
        <p className="dark:text-secondText mt-2">
          Kami hadir dengan koleksi baju terbaik untuk Anda. Pilih dari berbagai gaya dan desain sesuai selera Anda, semuanya dengan harga yang menarik. Jadikan berbelanja pengalaman yang menyenangkan bersama kami! 👕👖
        </p>
      </div>
      <div id="contents" className="mt-10">
        <div className="container flex justify-between items-center">
          <div className="info flex items-center gap-2">
            <Icon icon="cib:instagram" className="icon" />
            <span className="dark:text-secondText">Instagram</span>
          </div>
          <span className="dark:text-secondText">Lihat Selengkapnya</span>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 md:flex-row gap-10">
          {items.map((item: any) => (
            <Link to={`/pakaian/${item.id}`} key={item.id}>
              <div className="p-3 rounded-md bg-white border shadow-lg">
                <figure>
                  <img src={item.imgPost} alt="FasionProduct" />
                </figure>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
