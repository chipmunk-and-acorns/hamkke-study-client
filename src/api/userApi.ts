import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { axiosInstance } from './axios';

import { User } from '../types/user';

// register api
export const postRegister = async (data: User) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/register`, data);

  if (res) {
    const { accessToken } = res.data;
    localStorage.setItem('accessToken', accessToken);
  }
  return res.data;
};

// login api
export const postLogin = async (data: User) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/login`, data);

  if (res) {
    const { accessToken } = res.data;
    localStorage.setItem('accessToken', accessToken);
  }
  return res.data;
};

// logout api
export const postLogout = async (accessToken: string) => {
  const res = await axiosInstance.post(
    `${VITE_SERVER_URL}/members/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};
