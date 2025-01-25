import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const usePostLogin = (endPoint) => {
  const [token, setToken] = useLocalStorage('authToken', '');

  const login = (item) =>
    axios
      .post(`https://take-home-test-api.nutech-integrasi.com/${endPoint}`, item, {
        headers: {
          //   apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          //   'Content-Type': 'application/json',
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });

  return { login };
};

export default usePostLogin;
