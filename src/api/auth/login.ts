import * as http from "../http";
import SAMPLE_USERS from "../sample_users";
import { BaseResponse } from "../type";

export type Login = {
  email: string;
  password: string;
};
async function login(value: Login) {
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const sample = SAMPLE_USERS.find((s) => s.email === value.email);
    if (sample) return { ok: true, data: sample.token } as BaseResponse<string>;
    return { ok: false, error: "USER_NOT_FOUND" } as BaseResponse<string>;
  }
  return await http.post<string>("/auth/login", value);
}
export default login;
