import { layanan } from '../../data/layanan';

const LayananSection = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-xl py-16 mx-auto md:flex-row md:justify-between">
      {layanan.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border-2 border-black "
          >
            <img
              src={item.image}
              alt=""
            />
            <h1 className="text-center">{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default LayananSection;
