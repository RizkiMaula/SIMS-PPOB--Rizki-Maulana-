import { Link } from 'react-router';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <div className="flex px-[3rem] md:px-[10rem] shadow-2xs ">
      <span className="flex items-center justify-center gap-2 py-4 ">
        <img
          src={Logo}
          alt="logo"
        />
        <h1 className="font-bold">SIMS PPOP</h1>
      </span>
      <div className="flex items-center gap-4 ml-auto">
        <Link
          to={'/topup'}
          className=""
        >
          Top Up
        </Link>
        <Link
          to={'/transaction'}
          className=""
        >
          Transaction
        </Link>
        <Link
          to={'/akun'}
          className=""
        >
          Akun
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
