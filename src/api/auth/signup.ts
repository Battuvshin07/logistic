import * as http from "../http";
import { SignupResponseError } from "../errors";

export type Signup = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
};
async function signup(value: Signup) {
  if (import.meta.env.VITE_NO_BACKEND) {
    const { SAMPLE_USERS } = await import("../sample_database");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (SAMPLE_USERS.find((s) => s.email === value.email)) {
      throw new Error(SignupResponseError.AlreadyExist);
    }
    const token = `generatedToken-${value.email}`;
    SAMPLE_USERS.push({ ...value, role: "finance", token });
    localStorage.setItem("token", token);
    return;
  }
  const token = await http.post<string>("/auth/signup", value);
  localStorage.setItem("token", token);
}
export default signup;
