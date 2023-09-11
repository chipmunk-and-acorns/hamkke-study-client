import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { axiosInstance } from './axios';

/** getAll Articles */
export const getArticles = async () => {
  return await axiosInstance.get(`${VITE_SERVER_URL}/articles`);
};
