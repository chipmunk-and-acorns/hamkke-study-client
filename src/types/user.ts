export interface IUser {
  username: string;
  password: string;
  passwordConfirm?: string;
  nickname?: string;
  profileImage?: string;
}

export interface IUserInfo {
  memberId: string;
  nickname: string;
  memberImage: string | null;
  accessToken: string;
  refreshToken?: string;
}
