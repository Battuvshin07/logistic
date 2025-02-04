import { Navigate, Route, Routes } from "react-router";
import createAuthRoutes from "./AuthRoutes";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Navigate to="/auth/login" />} />
      {createAuthRoutes()}
    </Routes>
  );
}
