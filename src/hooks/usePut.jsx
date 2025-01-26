import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const usePut = (endPoint) => {
  const [token, setToken] = useLocalStorage('authToken', '');

  const update = (item) => {
    axios
      .put(`https://take-home-test-api.nutech-integrasi.com/profile/${endPoint}`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };
  return { update };
};

export default usePut;
