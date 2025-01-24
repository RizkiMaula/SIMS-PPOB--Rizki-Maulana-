import profile from '../../assets/profile.png';
import background from '../../assets/Background Saldo.png';

const ProfileFragment = () => {
  return (
    <div className="flex justify-between mt-4 ">
      {/* profile nanti pake api */}
      <div className="flex flex-col items-start justify-center">
        <img
          src={profile}
          alt="profile"
        />
        <h1>Selamat Datang, </h1>
        <h1 className="text-3xl font-bold">Kristanto Wibowo</h1>
      </div>
      {/* saldo nanti pake api */}
      <div className="flex flex-col items-center justify-center gap-4 rounded">
        <img
          src={background}
          alt=""
          className="w-[32rem] h-full"
        />
      </div>
    </div>
  );
};

export default ProfileFragment;
