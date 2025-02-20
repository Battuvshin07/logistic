import * as http from "../http";
import { LoginResponseError } from "../errors";

export type Login = {
  email: string;
  password: string;
};
async function login(value: Login) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_USERS } = await import("../sample_database");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const sample = SAMPLE_USERS.find((s) => s.email === value.email);
    if (sample) {
      if (sample.password !== value.password) {
        throw new Error(LoginResponseError.NotFound);
      }
      return sample.token;
    }
    throw new Error(LoginResponseError.NotFound);
  }
  return await http.post<string>("/auth/login", value);
}
export default login;
