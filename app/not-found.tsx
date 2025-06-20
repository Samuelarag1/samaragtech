import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="mt-4 text-lg">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
