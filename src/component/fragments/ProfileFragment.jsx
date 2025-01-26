import profile from '../../assets/Profile.png';
import background from '../../assets/Background Saldo.png';
import useGet from '../../hooks/useGet';

// eslint-disable-next-line react/prop-types
const ProfileFragment = ({ right = 'right-[29.6rem]', left = 'left-[45.4rem]', top = 'top-[7.4rem]', amount = 'Rp ••••••', textSize = 'text-2xl' }) => {
  const { data } = useGet('profile');

  console.log(data?.data?.profile_image);

  const profileImage = () => {
    if (data?.data?.profile_image === 'https://minio.nutech-integrasi.com/take-home-test/null') {
      return data?.data?.profile_image;
    }
    return profile;
  };

  const firstName = () => {
    if (data?.data?.first_name) {
      return data?.data?.first_name;
    }
    return 'Pengguna';
  };
  const lastName = () => {
    if (data?.data?.last_name) {
      return data?.data?.last_name;
    }
    return 'Baru';
  };

  return (
    <div className="flex justify-between mt-4 ">
      <div className="flex flex-col items-start justify-center">
        <img
          src={profileImage()}
          alt="profile"
          className="w-[6rem] h-[6rem] rounded-full"
          onError={(e) => (e.target.src = profile)}
        />
        <h1>Selamat Datang, </h1>
        <h1 className="text-3xl font-bold">{`${firstName()} ${lastName()} `}</h1>
      </div>
      <div className="">
        <img
          src={background}
          alt=""
          className="w-[32rem] absolute right-[8.6rem] z-[-1] "
        />
        <div className={`flex flex-col ${right} gap-1 ${left} ${top} absolute z-[-1] text-white`}>
          <h1 className="font-bold ">Saldo Anda</h1>
          <h1 className={`${textSize} font-bold`}>{amount}</h1>
          <p className="text-xs">Lihat Saldo</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileFragment;
