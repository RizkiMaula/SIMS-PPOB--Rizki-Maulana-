import Navbar from '../fragments/navbar';
import LayananSection from './LayananSection';
import ProfileFragment from './ProfileFragment';
import PromoSection from './PromoSection';

const HomeFragment = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[3rem] md:px-[10rem]">
        <ProfileFragment />
        <LayananSection />
        <PromoSection />
      </div>
    </div>
  );
};

export default HomeFragment;
