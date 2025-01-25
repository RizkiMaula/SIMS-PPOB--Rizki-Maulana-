import useGet from '../../hooks/useGet';

const PromoSection = () => {
  const { data, loading, error, reFetch: getData } = useGet('banner');

  console.log(data.data);

  return (
    <div>
      <h1>Temukan Promo Menarik</h1>
      <div className="flex flex-col items-center max-w-screen-xl gap-3 pt-4 pb-16 mx-auto md:flex-row md:justify-between">
        {data?.data?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={item.banner_image}
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
