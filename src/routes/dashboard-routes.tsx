import { lazy } from "react";
import { Route } from "react-router";

const DashboardLayout = lazy(() => import("@/layouts/dashboard"));
const AdminPage = lazy(() => import("@/pages/dashboard/admin"));

export default function createDashboardRoutes() {
  return (
    <Route path="dashboard/*" element={<DashboardLayout />}>
      <Route path="admin" element={<AdminPage />} />
    </Route>
  );
}
