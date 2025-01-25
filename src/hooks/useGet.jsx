import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import axios from 'axios';

const useGet = (endpoint) => {
  const [token, setToken] = useLocalStorage('authToken', '');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`https://take-home-test-api.nutech-integrasi.com/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Menambahkan token ke header
        },
      });
      setData(response.data); // Simpan data layanan ke state
    } catch (err) {
      console.error(err);
      setError('Gagal memuat data layanan');
    } finally {
      setLoading(false); // Set loading ke false setelah API selesai
    }
  };

  useEffect(() => {
    getData(data);
  }, []);

  return { data, loading, error, reFetch: getData };
};
export default useGet;
