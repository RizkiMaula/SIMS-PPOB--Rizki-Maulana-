import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-linear-to-br from-red-500 to-pink-500">
      <h1 className="text-5xl font-bold text-center text-white">404: Halaman tidak ditemukan</h1>
      <Link
        to="/"
        className="text-3xl font-bold text-center text-white hover:cursor-pointer hover:text-yellow-500"
      >
        Kembali ke halaman utama
      </Link>
    </div>
  );
};

export default NotFound;
