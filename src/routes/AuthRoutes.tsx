import { lazy } from "react";
import { Route } from "react-router";

const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

export default function createAuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route index path="login" element={<LoginPage />} />
    </Route>
  );
}
