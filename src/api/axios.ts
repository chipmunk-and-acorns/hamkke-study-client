import axios, { InternalAxiosRequestConfig } from 'axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { getAccessToken, getRefreshToken, setAccessToken } from './auth';
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
    const {
      config,
      response: { data, status },
    } = error;

    if (
      status === 401 &&
      typeGuard<{ name: string; message: string; expiredAt: string }>(data, 'name') &&
      data.name === 'TokenExpiredError'
    ) {
      const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/token`, {
        refreshToken: getRefreshToken(),
      });

      if (typeGuard<{ accessToken: string }>(res.data, 'accessToken')) {
        setAccessToken(res.data.accessToken);
        /** origin request에 새로 발급받은 accessToken 답아 재 요청 */
        config.headers.authorization = `Bearer ${res.data.accessToken}`;
        return axiosInstance(config);
      }
    }
  }
);
