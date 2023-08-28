import axios from 'axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';

export const axiosInstance = axios.create({
  baseURL: VITE_SERVER_URL,
});
