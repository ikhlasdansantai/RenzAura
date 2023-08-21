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
      <p>Product Details {id}</p>
      <h1>{getProduct.author}</h1>
      <figure className="w-60">
        <img src={getProduct.imgPost} alt="" />
      </figure>
      <p>{getProduct.date}</p>
      <Link to="/pakaian">Kembali ke Daftar</Link>
    </div>
  );
}
