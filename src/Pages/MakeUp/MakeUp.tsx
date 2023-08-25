import ProductEmpty from "../../Components/ProductEmpty/ProductEmpty";

interface MakeupContentsProps {
  author: string;
  title: string;
  profilePict: string;
  postPict: string;
}

export default function MakeUp() {
  const MakeupContentDatas: MakeupContentsProps[] = [
    // {
    //   author: "renz",
    //   title: "Paket Silver 2",
    //   profilePict: "gambar1",
    //   postPict: "gambarPOST",
    // },
  ];

  function MakeUpContents() {
    return (
      <>
        <h2>MakeUp Content hanya ada disini</h2>
      </>
    );
  }

  return <>{MakeupContentDatas.length < 1 ? <ProductEmpty /> : <MakeUpContents />}</>;
}
