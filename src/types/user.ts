export interface User {
  username: string;
  password: string;
  passwordConfirm?: string;
  nickname?: string;
  profileImage?: string;
}

export interface UserInfo {
  memberId: string;
  nickname: string;
  memberImage: string | null;
  accessToken: string;
  refreshToken?: string;
}
