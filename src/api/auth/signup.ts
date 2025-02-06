import * as http from "../http";
import SAMPLE_USERS from "../sample_users";

export type Signup = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
};
async function signup(value: Signup) {
  if (import.meta.env.VITE_NO_BACKEND) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (SAMPLE_USERS.find((s) => s.email === value.email)) {
      return { ok: false, error: "USER_ALREADY_EXIST" };
    }
    SAMPLE_USERS.push({
      ...value,
      role: "finance",
      token: `generatedToken-${value.email}`,
    });
  }
  return await http.post<string>("/auth/signup", value);
}
export default signup;
