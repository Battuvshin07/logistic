import * as http from "../http";

export type Signup = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
};
function signup(value: Signup) {
  return http.post<string>("/auth/signup", value);
}
export default signup;
