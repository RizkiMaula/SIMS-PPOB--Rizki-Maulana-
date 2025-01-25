import { Outlet } from 'react-router';
import Navbar from '../fragments/navbar';
import ProfileFragment from '../fragments/ProfileFragment';

const Layout1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col">
        <ProfileFragment />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout1;
