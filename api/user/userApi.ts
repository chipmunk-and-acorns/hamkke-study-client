import { IUser } from "@/types/user";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const AUTH_LOGIN = `${SERVER_URL}/auth/login/email`;
const AUTH_REGISTER = `${SERVER_URL}/auth/register/email`;

const headers = {
  "Content-Type": "application/json;charset=utf-8",
};

/**
 * login
 */
const postLogin = async (data: IUser) => {
  const result = await fetch(`${AUTH_LOGIN}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return result;
};

/**
 * register
 */
const postRegister = async (data: IUser) => {
  const result = await fetch(`${AUTH_REGISTER}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return result;
};

/**
 * accessToken
 */

/**
 * refreshToken
 */

export { postLogin, postRegister };
