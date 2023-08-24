import { Link, useParams } from "react-router-dom";

// interface ProductDetailsProps {
//   imgPost: string;
//   imgProfile: string;
//   author: string;
//   date: string;
//   id: number;
// }

export default function ProductDetails({ product }: any) {
  const { id } = useParams();
  const getProduct = product.find((item: any) => item.id === Number(id));

  return (
    <div>
      <Link to="/pakaian">Kembali ke Daftar Pakian</Link>
      <div className="flex justify-evenly items-center mt-20">
        <figure className="w-[20rem]">
          <img src={getProduct.imgPost} alt="productIMG" height="100%" width="100%" />
        </figure>
        <div className="md:w-1/2">
          <p>{getProduct.title}</p>
          <p>{getProduct.desc}</p>
          <p className="mt-4">
            Subtotal: <span className="font-semibold text-[#EAB308]">Rp.{getProduct.price.toLocaleString("id-ID")}</span>
          </p>
          <h1>{getProduct.author}</h1>
        </div>
      </div>
    </div>
  );
}
