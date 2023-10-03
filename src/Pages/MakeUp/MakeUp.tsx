import ProductEmpty from "../../Components/ProductEmpty/ProductEmpty";
import Title from "../../Components/Title/Title";

export default function MakeUp({ items }: any): JSX.Element {
  const handleSendMSG = (title: string, price: number) => {
    window.location.href = `https://api.whatsapp.com/send?phone=6281214553067&text=Hi, saya tertarik dengan penawaran ${title} dengan harga Rp.${price.toLocaleString("id-ID")}, Mohon berikan informasi lebin lanjutnya, Terima kasih!`;
  };

  function MakeUpContents() {
    return (
      <div id="makeup" className="min-h-screen">
        <div className="titles underlineText">
          <Title>Jasa Makeup kami</Title>
          <p className="text-secondText mt-2">Kami juga menyediakan berbagai jasa makeup, mulai dari jasa makeup pengantin, jasa sewa dekorasi, sewa MC dan masih banyak lagi, jadi tunggu apalagi? yuuu sewa jasa makeup kami </p>
        </div>
        <div className="cards grid grid-cols-1 min-[950px]:grid-cols-2 xl:grid-cols-3 min-[2000px]:grid-cols-4 mt-20 mb-10 gap-10">
          {items.map((items: any, index: number) => {
            return (
              <div key={index} className="card flex flex-col gap-4 bg-white p-6  rounded-lg border border-slate-600 dark:border-0">
                <h2 className="text-xl text-slate-800">{items.title}</h2>
                <figure className=" w-full border">
                  <img src={items.bannerIMG} alt="bannerIMG" height="100%" width="100%" />
                </figure>
                <div className={`packet-role flex gap-4 ${items.roles.length > 2 ? "overflow-x-scroll" : ""}`}>
                  {items.roles.map((role: any) => {
                    return (
                      <div key={index} className="flex items-center gap-1 text-secondText bg-slate-700 p-2 rounded-md">
                        <figure className={`w-3 h-3 rounded-full ${role.roleColor} `}></figure>
                        <span className="text-sm whitespace-nowrap ">{role.roleName}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="description mt-auto">
                  {/* <h2 className="text-lg text-slate-700">Deskripsi</h2> */}
                  <p className="text-secondText">{items.desc}</p>
                </div>
                <div className="footer flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Rp.{items.price.toLocaleString("id-ID")}</h2>
                  <button
                    onClick={() => handleSendMSG(items.title, items.price)}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Aku Mau Ini
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <>{items.length < 1 ? <ProductEmpty /> : <MakeUpContents />}</>;
}
