import { Link } from 'react-router';
import Ilustrasi from '../assets/Login.png';
import Logo from '../assets/Logo.png';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ title }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-5 px-[4rem]">
        <span className="flex items-center gap-2">
          <img
            src={Logo}
            alt=""
          />
          <h1 className="font-bold md:text-2xl">SIMS PPOP</h1>
        </span>
        <h1 className="md:text-[43px] font-bold text-center">{title}</h1>
        <form
          action=""
          className="flex flex-col w-full gap-4 "
        >
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="p-2 mt-6 text-white bg-red-500 border-2 rounded-md"
          >
            Masuk
          </button>
        </form>
        <span>
          belum punya akun? registrasi{' '}
          <Link
            to="/register"
            className="font-bold text-red-500"
          >
            di sini
          </Link>
        </span>
      </div>
      <img
        src={Ilustrasi}
        alt="ilustrasi"
        className="hidden object-cover w-full h-screen md:block"
      />
    </div>
  );
};

export default AuthLayout;
