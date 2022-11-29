import jwtDecode from 'jwt-decode';
import { verify, sign } from 'jsonwebtoken';
import axios from './axios';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: any) => {
  let expiredTimer: any;

  window.clearTimeout(expiredTimer);

  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;

  expiredTimer = window.setTimeout(() => {
    console.log('expired');
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    const decode: any = jwtDecode(accessToken);

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('permissions', decode.permissions);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    handleTokenExpired(decode.exp);
  } else {
    localStorage.removeItem('access_token');

    delete axios.defaults.headers.common.Authorization;
  }
};

export { verify, sign, isValidToken, setSession };
