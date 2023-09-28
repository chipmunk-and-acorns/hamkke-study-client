import { atom } from 'recoil';

import { IUserInfo } from '../types/user';

const userState = atom<IUserInfo | null>({
  key: 'userInfo',
  default: null,
});

export { userState };
