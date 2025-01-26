import Navbar from '../fragments/Navbar';
import LayananSection from './LayananSection';
import ProfileFragment from './ProfileFragment';
import PromoSection from './PromoSection';

const HomeFragment = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem] flex flex-col py-2 gap-10">
        <ProfileFragment />
        <LayananSection />
        <PromoSection />
      </div>
    </div>
  );
};

export default HomeFragment;
