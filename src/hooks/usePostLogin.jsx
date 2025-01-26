import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const usePostLogin = (endPoint) => {
  const [token, setToken] = useLocalStorage('authToken', '');

  const login = (item) =>
    axios
      .post(`https://take-home-test-api.nutech-integrasi.com/${endPoint}`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });

  return { login };
};

export default usePostLogin;
