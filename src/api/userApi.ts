import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { axiosInstance } from './axios';

import { User } from '../types/user';

// register api
export const postRegister = async (data: User) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/members/register`, data);

  if (res) {
    const { accessToken } = res.data;
    // accessToken 저장
    localStorage.setItem('accessToken', accessToken);
    // 회원가입 시 자동 로그인 처리
  }

  return res.data;
};

// login api
