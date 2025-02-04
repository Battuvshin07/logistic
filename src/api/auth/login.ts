import * as http from "../http";

export type Login = {
  email: string;
  password: string;
};
export default function login(value: Login) {
  return http.post<string>("/auth/login", value);
}
