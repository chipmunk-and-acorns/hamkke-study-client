import { axiosInstance } from './axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { IResponsePosition, IResponseStack } from './../types/article';

/** getAll Articles */
export const getArticles = async () => {
  return await axiosInstance.get(`${VITE_SERVER_URL}/articles`);
};

/**
 * get stacks
 */
export const getStacks = async () => {
  const res = await axiosInstance.get(`${VITE_SERVER_URL}/stacks`);
  const { data } = res;

  const stacks = data.map((stackObj: IResponseStack) => {
    stackObj.value = stackObj.name?.toLowerCase();
    stackObj.label = stackObj.name;
    delete stackObj.name;
    return stackObj;
  });

  return stacks;
};

/**
 * get positions
 */
export const getPositions = async () => {
  const res = await axiosInstance.get(`${VITE_SERVER_URL}/positions`);
  const { data } = res;

  const positions = data.map((positionObj: IResponsePosition) => {
    positionObj.value = positionObj.name?.toLowerCase();
    positionObj.label = positionObj.name;
    delete positionObj.name;
    return positionObj;
  });
  return positions;
};
