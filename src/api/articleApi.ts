import { axiosInstance } from './axios';

import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { IRequestArticle, IResponsePosition, IResponseStack } from './../types/article';

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

/** post article */
export const postArticle = async (data: IRequestArticle) => {
  const res = await axiosInstance.post(`${VITE_SERVER_URL}/articles`, data);
  if (res) {
    const { articleId } = res.data;
    return articleId;
  }
};

/** get article */
export const getArticle = async (articleId: string) => {
  const res = await axiosInstance.get(`${VITE_SERVER_URL}/articles/${articleId}`);
  if (res) {
    const { data } = res;
    return data;
  }
};

/** patch recruitment completed */
export const patchRecruitmentCompleted = async (articleId: string) => {
  return await axiosInstance.patch(`${VITE_SERVER_URL}/articles/complete/${articleId}`);
};

/** delete article */
export const deleteArticle = async (articleId: string) => {
  return await axiosInstance.delete(`${VITE_SERVER_URL}/articles/${articleId}`);
};
