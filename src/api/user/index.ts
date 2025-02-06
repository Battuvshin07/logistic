import { BaseResponse, http } from "..";
import SAMPLE_USERS from "../sample_users";

export type User = {
  role: "admin" | "finance";
  fullName: string;
  email: string;
  phoneNumber?: string;
  token: string;
};
export async function info(token: string) {
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const sample = SAMPLE_USERS.find((s) => s.token === token);
    if (sample) return { ok: true, data: sample } as BaseResponse<User>;
    return { ok: false, error: "USER_NOT_FOUND" } as BaseResponse<User>;
  }
  return await http.get<User>("/user/info", token);
}
