import { atom } from 'recoil';

import { UserInfo } from '../types/user';

const userState = atom<UserInfo | null>({
  key: 'userInfo',
  default: null,
});

export { userState };
