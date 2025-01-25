import useGet from '../../hooks/useGet';

const LayananSection = () => {
  const { data, loading, error } = useGet('services');

  // const getLayanan = async () => {
  //   try {
  //     const response = await axios.get('https://take-home-test-api.nutech-integrasi.com/services', {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Menambahkan token ke header
  //       },
  //     });
  //     setData(response.data); // Simpan data layanan ke state
  //   } catch (err) {
  //     console.error(err);
  //     setError('Gagal memuat data layanan');
  //   } finally {
  //     setLoading(false); // Set loading ke false setelah API selesai
  //   }
  // };

  console.log(data.data);

  return (
    <div className="flex flex-col items-center justify-between max-w-screen-xl gap-2 py-16 mx-auto md:flex-row">
      {data.data &&
        data.data.map((item) => {
          return (
            <div
              key={item.service_code}
              className="flex flex-wrap items-center justify-center w-[5rem] h-[5rem] text-center text-wrap gap-2"
            >
              <img
                src={item.service_icon}
                alt={item.service_name}
                className="w-[4.3rem] h-[4.3rem]"
              />
              <p className="text-[0.7rem]">{item.service_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default LayananSection;
