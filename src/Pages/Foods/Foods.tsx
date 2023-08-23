import ProductEmpty from "../../Components/ProductEmpty/ProductEmpty";
import Title from "../../Components/Title/Title";

interface FoodsContetntsProps {
  author: string;
}

export default function Foods() {
  const foodsContents: FoodsContetntsProps[] = [
    // {
    //   author: "renz",
    // },
  ];

  function FoodsContents() {
    return (
      <>
        <Title>Konten sedang dalam pembangunan</Title>
      </>
    );
  }

  return <>{foodsContents.length < 1 ? <ProductEmpty /> : <FoodsContents />}</>;
}
