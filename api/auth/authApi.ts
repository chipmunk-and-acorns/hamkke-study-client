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
  const userDataStr = `${data.email}:${data.password}`;
  const base64EncodedStr = Buffer.from(userDataStr).toString("base64");

  try {
    const response = await fetch(`${AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${base64EncodedStr}`,
      },
    });

    // HTTP 상태코드가 200~299 범위에 있지 않은 경우
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    return response.json();
  } catch (err) {
    throw err;
  }
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
