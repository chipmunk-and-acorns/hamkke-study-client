import { axiosInstance } from './axios';
import { VITE_SERVER_URL } from '../utils/importEnvVariable';
import { typeGuard } from '../utils/typeGuard';

interface IPresignedImgUrl {
  key: string;
  presigned: {
    url: string;
    fields: {
      [key: string]: string;
    };
  };
}

// s3에 image 업로드를 할 수 있는 url 정보 요청
export const getPresignedImageUploadUrl = (imageContentType: string): Promise<IPresignedImgUrl> => {
  return axiosInstance(`${VITE_SERVER_URL}/images/presigned?contentType=${imageContentType}`)
    .then((res) => {
      if (typeGuard<{ data: IPresignedImgUrl }>(res, 'data')) {
        return res.data;
      } else {
        throw new Error('Invalid response format');
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// s3에 직접 image 업로드하는 요청
export const postS3ImageUpload = async (url: string, data: FormData) => {
  return await axiosInstance.post(`${url}`, data);
};
