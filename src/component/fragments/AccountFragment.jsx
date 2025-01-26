import Navbar from './navbar';
import profile from '../../assets/profile.png';
import InputText from '../elements/InputText';
import { useSearchParams, useNavigate } from 'react-router';
import useGet from '../../hooks/useGet';
import { useEffect, useState } from 'react';

const AccountFragment = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });
  const { data } = useGet('profile');
  let [searchParams] = useSearchParams();

  const editable = searchParams.get('edit') === 'true';
  const navigate = useNavigate();

  console.log(data.data);

  useEffect(() => {
    setFormData({
      email: data?.data?.email || '',
      first_name: data?.data?.first_name || '',
      last_name: data?.data?.last_name || '',
    });
  }, [data]);

  const handleEmail = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleFirst = (e) => {
    setFormData((prev) => ({ ...prev, first_name: e.target.value }));
  };
  const handleLast = (e) => {
    setFormData((prev) => ({ ...prev, last_name: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-4">
        <img
          src={data?.data?.profile_image === null ? profile : data?.data?.profile_image}
          alt="Profile Picture"
          className="cursor-pointer w-[6rem] h-[6rem] rounded-full"
          onClick={() => document.getElementById('fileInput').click()}
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          // onChange={handleImageUpload}
        />
        <h1 className="text-2xl font-bold">{`${data?.data?.first_name} ${data?.data?.last_name}`}</h1>
        <form
          action=""
          className="flex flex-col w-[50%] gap-4 "
        >
          <span className="flex flex-col gap-1">
            <h4>Email</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
              value={formData.email}
              event={handleEmail}
              disabled={!editable}
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Depan</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
              value={formData.first_name}
              event={handleEmail}
              disabled={!editable}
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Belakang</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
              value={formData.last_name}
              event={handleEmail}
              disabled={!editable}
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
              className="p-2 mt-6 text-white bg-red-500 border-2 rounded-md hover-cursor-pointer"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
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
