import { lazy } from "react";
import { Route } from "react-router";

const AuthLayout = lazy(() => import("@/layouts/auth"));
const LoginPage = lazy(() => import("@/pages/auth/login"));
const SignupPage = lazy(() => import("@/pages/auth/signup"));

export default function createAuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  );
}
