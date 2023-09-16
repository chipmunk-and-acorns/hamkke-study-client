export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem('accessToken');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const deleteRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};
