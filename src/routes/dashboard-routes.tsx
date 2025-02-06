import { lazy } from "react";
import { Route } from "react-router";

const DashboardLayout = lazy(() => import("@/layouts/dashboard"));
const AdminPage = lazy(() => import("@/pages/dashboard/admin"));
const SiteRegistrationPage = lazy(
  () => import("@/pages/dashboard/finance/site-registration")
);
// const ContactInfoPage = lazy(() => import("@/pages/dashboard/finance/contact-info"));
// const ReportPage = lazy(() => import("@/pages/dashboard/finance/report"));

export default function createDashboardRoutes() {
  return (
    <Route path="dashboard" element={<DashboardLayout />}>
      <Route path="admin" element={<AdminPage />} />
      <Route path="site-registration" element={<SiteRegistrationPage />} />
    </Route>
  );
}
