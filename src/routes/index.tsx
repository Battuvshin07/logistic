import { Navigate, Route, Routes } from "react-router";
import createAuthRoutes from "./AuthRoutes";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/auth/signup" />} />
      {createAuthRoutes()}
    </Routes>
  );
}
