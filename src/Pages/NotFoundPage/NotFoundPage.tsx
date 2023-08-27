import { Link, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const pageError: any = useRouteError();

  const errorMessage = pageError ? pageError.statusText || pageError.message : "Unknown Error";
  return (
    <section id="error" className="px-4 min-h-screen flex justify-center items-center flex-col text-center">
      <h1 className="mb-4 text-3xl text-white dark:text-gray-900">Oopppps :(</h1>
      <figure>
        <iframe src="https://giphy.com/embed/mqRZe1ud8U3wJoSE3x" width="500" height="330" className="giphy-embed block max-w-full" allowFullScreen>
          <a href="https://giphy.com/gifs/kpop-k-pop-ive-mqRZe1ud8U3wJoSE3x" className="text-gray-500 dark:text-gray-900">
            via GIPHY
          </a>
        </iframe>
      </figure>
      <div className="error-footer mt-4 text-gray-500 dark:text-gray-900">
        <p className="text-center ">Terjadi kesalahan, karena kamu mengakses halaman yang tidak ditemukan</p>
        <span className="text-xs block mt-1">pesan ERROR: {errorMessage}</span>
        <Link
          to={"/"}
          type="button"
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
