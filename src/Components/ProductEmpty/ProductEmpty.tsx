import emptyAnimate from "../../assets/Icons/animation_llntwwng.mp4";

export default function ProductEmpty() {
  return (
    <section id="product-empty" className="text-center min-h-[90vh] sm:min-h-screen flex justify-center items-center flex-col overflow-hidden px-4">
      <figure className="flex flex-col sm:w-[20rem] mx-auto">
        <video src={emptyAnimate} className="block max-w-full" autoPlay={true} loop={true} height="100%" width="100%" />
        <figcaption className="text-xs sm:text-left text-gray-600">Animation By: Lottiefiles</figcaption>
      </figure>
      <h2 className="dark:text-white mt-6 text-3xl">Upps, Produk Kosong :(</h2>
      <p className="mt-1 text-slate-500 dark:text-slate-400">ProductEmpty</p>
    </section>
  );
}
