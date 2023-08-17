import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const pageError: any = useRouteError();

  const errorMessage = pageError ? pageError.statusText || pageError.message : "Unknown Error";
  return (
    <>
      <h1>Oopppps :(</h1>
      <span>Terjadi kesalahan, karena kamu mengakses halaman yang tidak ditemukan</span>
      <span>{errorMessage}</span>
    </>
  );
}
