// src/pages/NotFound.js
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl mt-4">Página no encontrada</h2>
        <p className="mt-2 text-gray-600">Lo sentimos, la página que buscás no existe.</p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Volver al inicio
        </a>
      </div>
    );
  }
  