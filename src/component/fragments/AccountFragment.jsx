import Navbar from './navbar';
import profile from '../../assets/profile.png';
import InputText from '../elements/InputText';
import { useSearchParams, useNavigate } from 'react-router';

const AccountFragment = () => {
  let [searchParams] = useSearchParams();

  const editable = searchParams.get('edit') === 'true';
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-4">
        <img
          src={profile}
          alt="profile"
        />
        <h1 className="text-2xl font-bold">Kristanto Wibowo</h1>
        <form
          action=""
          className="flex flex-col w-[50%] gap-4 "
        >
          <span className="flex flex-col gap-1">
            <h4>Email</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Depan</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Belakang</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
            />
          </span>
        </form>
        {!editable && (
          <div className="flex flex-col w-[50%] ">
            <button
              type="submit"
              className="p-2 mt-6 text-red-500 bg-white border-2 border-red-300 rounded-md"
              onClick={() => {
                searchParams.set('edit', 'true');
                navigate(`/akun?${searchParams.toString()}`);
              }}
            >
              Edit Profile
            </button>
            <button
              type="submit"
              className="p-2 mt-6 text-white bg-red-500 border-2 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
        {editable && (
          <button
            type="submit"
            className="p-2 mt-6 text-white bg-red-500 border-2 rounded-md w-[50%]"
          >
            Update
          </button>
        )}
      </div>
    </>
  );
};

export default AccountFragment;
