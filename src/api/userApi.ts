import { axiosInstance } from './axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { IUser } from '../types/user';
import { setAccessToken, setRefreshToken } from './auth';

// register api
export const postRegister = async (data: IUser) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/register`, data);

  if (res) {
    const { accessToken, refreshToken } = res.data;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  }
  return res.data;
};

// login api
export const postLogin = async (data: IUser) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/login`, data);

  if (res) {
    const { accessToken, refreshToken } = res.data;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  }
  return res.data;
};

// logout api
export const postLogout = async () => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/logout`);
  return res;
};

// my info lookup
export const getMyInfoLookup = async () => {
  const res = await axiosInstance.get(`${VITE_SERVER_URL}/members/me`);
  return res.data;
};
