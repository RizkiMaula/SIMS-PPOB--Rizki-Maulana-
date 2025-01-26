import Navbar from './Navbar';
import profile from '../../assets/Profile.png';
import InputText from '../elements/InputText';
import { useSearchParams, useNavigate } from 'react-router';
import useGet from '../../hooks/useGet';
import { useEffect, useState } from 'react';
import usePut from '../../hooks/usePut';

const AccountFragment = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });
  const { data, reFetch } = useGet('profile');
  const { update } = usePut('update');
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

  const handleUpdate = async () => {
    try {
      const updatedData = { email: formData.email, first_name: formData.first_name, last_name: formData.last_name };
      const response = await update(updatedData);
      alert('Profile updated successfully');
      reFetch();
      navigate('/akun');
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // API response body
        console.log(error.response.status); // HTTP status code
        console.log(error.response.headers); // Response headers
      } else if (error.request) {
        console.log(error.request); // No response from server
      } else {
        console.log('Error:', error.message); // Other errors
      }
    }
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
          onError={(e) => (e.target.src = profile)}
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
              deactive={!editable}
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Depan</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
              value={formData.first_name}
              event={handleFirst}
              deactive={!editable}
            />
          </span>
          <span className="flex flex-col gap-1">
            <h4>Nama Belakang</h4>
            <InputText
              typeInput={'text'}
              className="w-full"
              value={formData.last_name}
              event={handleLast}
              deactive={!editable}
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
                navigate('/login');
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
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </>
  );
};

export default AccountFragment;
