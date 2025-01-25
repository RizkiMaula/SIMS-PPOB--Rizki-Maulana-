import InputText from '../elements/InputText';
import AuthLayout from '../fragments/AuthLayout';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import usePostLogin from '../../hooks/usePostLogin';

const LoginFragment = () => {
  const [token, setToken] = useLocalStorage('authToken', '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = usePostLogin('login');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const loginData = { email, password };
      console.log(loginData);
      const response = await login(loginData);
      console.log(response);

      if (response.status === 0) {
        console.log(response.data.token);
        setToken(response.data.token);
        navigate('/');
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
      // alert(error.message);
    }
  };

  return (
    <AuthLayout
      title="Masuk atau buat akun untuk memulai"
      text="belum punya akun?"
      direct="/register"
      input={
        <>
          <InputText
            typeInput={'email'}
            text={'Masukan email'}
            event={handleEmail}
          />
          <InputText
            typeInput={'password'}
            text={'Password'}
            event={handlePassword}
          />
        </>
      }
      event={handleLogin}
    />
  );
};

export default LoginFragment;
