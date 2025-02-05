import { lazy } from "react";
import { Route } from "react-router";

const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const SignupPage = lazy(() => import("../pages/auth/SignupPage"));

export default function createAuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route index path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  );
}
