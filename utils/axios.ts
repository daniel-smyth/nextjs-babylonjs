import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({ baseURL: URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
