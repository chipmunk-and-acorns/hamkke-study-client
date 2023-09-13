import axios, { InternalAxiosRequestConfig } from 'axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { getAccessToken, getRefreshToken, setAccessToken } from './authApi';
import { typeGuard } from '../utils/typeGuard';

export const axiosInstance = axios.create({
  baseURL: VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * token을 가져와서 header "Authorization"에 추가하는 인터셉터
 * */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * token 만료시 재발급 요청하는 인터셉터
 * */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    console.log(config);
    console.log(response);

    if (response.data.error.message === 'jwt expired') {
      const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/token`, {
        refreshToken: getRefreshToken(),
      });

      if (typeGuard<{ accessToken: string }>(res.data, 'accessToken')) {
        setAccessToken(res.data.accessToken);
        // 바로 직전에 토큰 만료전에 해야 될 api 요청을 다시한 번 해야 됨
      }
    }
  }
);
