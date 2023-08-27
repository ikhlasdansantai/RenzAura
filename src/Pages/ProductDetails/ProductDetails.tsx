import { Link, useParams } from "react-router-dom";
import dana from "../../assets/Icons/DANA.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

// interface ProductDetailsProps {
//   imgPost: string;
//   imgProfile: string;
//   title: string;
//   desc: string;
//   author: string;
//   price: number;
//   link: string;
//   size: string;
//   id: number;
// }

export default function ProductDetails({ product }: any) {
  const { id } = useParams();
  const getProduct = product.find((item: any) => item.id === Number(id));

  const PaymentAvailable = () => {
    return (
      <div className="mt-2">
        <figure className="w-20">
          <img src={dana} alt="PaymentLOGO" height="100%" width="100%" />
        </figure>
      </div>
    );
  };

  return (
    <div className="pb-4 sm:p-0">
      <Link to="/RenzAura/pakaian" className="dark:text-white flex gap-2 items-center">
        <Icon icon="uil:angle-left-b" className="text-xl" />
        <span>Kembali ke Daftar Pakaian</span>
      </Link>
      <div className="flex flex-col mt-10 sm:mt-20 justify-between items-center min-[950px]:flex-row min-[1200px]:justify-evenly min-[1400px]:w-[70rem] min-[1400px]:justify-center min-[1400px]:mx-auto min-[1400px]:gap-20">
        <figure className="min-[950px]:w-[20rem] min-[1120px]:w-[25rem] min-[1400px]:w-[35rem]">
          <img src={getProduct.imgPost} alt="productIMG" height="100%" width="100%" />
        </figure>
        <div className="min-[950px]:w-1/2 mt-8">
          <h2 className="text-3xl dark:text-white">{getProduct.title}</h2>
          <p className="mt-4 text-gray-500">{getProduct.desc}</p>
          <div className="mt-4 flex gap-3 text-gray-500">
            <p>Ukuran:</p>
            <span>{getProduct.size}</span>
          </div>
          <p className="mt-4 text-gray-900 dark:text-gray-500">
            Subtotal: <span className="font-semibold text-[#EAB308]">Rp.{getProduct.price.toLocaleString("id-ID")}</span>
          </p>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 min-[1400px]:w-[20rem]"
          >
            Beli Sekarang
          </button>
          <div className="mt-6 text-gray-500">
            <h2>Pembayaran yang tersedia</h2>
            <PaymentAvailable />
          </div>
        </div>
      </div>
    </div>
  );
}
