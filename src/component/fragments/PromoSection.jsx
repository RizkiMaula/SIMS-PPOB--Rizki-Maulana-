import { banner } from '../../data/layanan';

const PromoSection = () => {
  return (
    <div>
      <h1>Temukan Promo Menarik</h1>
      <div className="flex flex-col items-center max-w-screen-xl gap-3 pt-4 pb-16 mx-auto md:flex-row md:justify-between">
        {banner.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center border-2 border-black "
            >
              <img
                src={item.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromoSection;
