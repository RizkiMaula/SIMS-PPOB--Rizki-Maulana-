import axios from 'axios';
import { useEffect, useState } from 'react';
import InputText from '../elements/InputText';
import AuthLayout from '../fragments/AuthLayout';
import useLocalStorage from '../../hooks/useLocalStorage';
import usePostLogin from '../../hooks/usePostLogin';
import { useNavigate } from 'react-router';

const RegisterFragment = () => {
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const { login } = usePostLogin('registration');

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    console.log(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const registerData = {
        email,
        first_name,
        last_name,
        password,
        confirmPassword,
      };
      console.log(registerData);
      const response = await login(registerData);
      console.log(response);

      if (response.status === 0) {
        console.log(response.status);
        alert(response.message);
        navigate('/login');
      }
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
      // console.log(error);
    }
  };
  return (
    <AuthLayout
      title="Lengkapi data untuk membuat akun"
      text="sudah punya akun? login"
      direct="/login"
      action="Registrasi"
      input={
        <>
          <InputText
            typeInput={'email'}
            text={'masukan email anda'}
            event={handleEmail}
          />
          <InputText
            typeInput={'text'}
            text={'nama depan'}
            event={handleFirstName}
          />
          <InputText
            typeInput={'text'}
            text={'nama belakang'}
            event={handleLastName}
          />
          <InputText
            typeInput={'password'}
            text={'buat password'}
            event={handlePassword}
          />
          <InputText
            typeInput={'password'}
            text={'konfirmasi password'}
            event={handleConfirmPassword}
          />
        </>
      }
      event={handleRegister}
    />
  );
};

export default RegisterFragment;
