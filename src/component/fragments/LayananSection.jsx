import { Link } from 'react-router';
import useGet from '../../hooks/useGet';

const LayananSection = () => {
  const { data, loading, error } = useGet('services');

  return (
    <div className="flex flex-col items-center justify-between max-w-screen-xl gap-2 py-16 mx-auto md:flex-row">
      {loading && <div>Loading...</div>}
      {error && <div>Error: Tidak dapat memuat layanan</div>}
      {data.data &&
        data.data.map((item) => {
          return (
            <Link
              key={item.service_code}
              to={`/bayar`}
            >
              <div
                className="flex flex-wrap items-center justify-center w-[5rem] h-[5rem] text-center text-wrap gap-2 hover:cursor-pointer"
                onClick={() => console.log(data.data)}
              >
                <img
                  src={item.service_icon}
                  alt={item.service_name}
                  className="w-[4.3rem] h-[4.3rem]"
                />
                <p className="text-[0.7rem]">{item.service_name}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default LayananSection;
