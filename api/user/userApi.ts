import { IUser } from "@/constants/user";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const AUTH_LOGIN = `${SERVER_URL}/auth/login/email`;

/**
 * login
 */
export const postLogin = async (data: IUser) => {
  console.log(data);

  const result = await fetch(`${AUTH_LOGIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());

  return result;
};

/**
 * register
 */
const postRegister = () => {
  return;
};

/**
 * accessToken
 */

/**
 * refreshToken
 */
