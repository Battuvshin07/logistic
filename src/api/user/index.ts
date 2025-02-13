import { http } from "..";
import { UserResponseError } from "../errors";

export type User = {
  role: "admin" | "finance";
  fullName: string;
  email: string;
  phoneNumber?: string;
  token: string;
};
export async function info(token: string) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_USERS } = await import("../sample_database");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const sample = SAMPLE_USERS.find((s) => s.token === token);
    if (sample) return sample as User;
    throw new Error(UserResponseError.UserNotFound);
  }
  return await http.get<User>("/user/info", token);
}
