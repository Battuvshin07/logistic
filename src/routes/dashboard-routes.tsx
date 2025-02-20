import { User } from "@/api/user";
import { PageLoading } from "@ant-design/pro-components";
import { lazy } from "react";
import { Navigate, Route } from "react-router";

const DashboardLayout = lazy(() => import("@/layouts/dashboard"));
const AdminPage = lazy(() => import("@/pages/dashboard/admin"));
const SiteRegistrationPage = lazy(
  () => import("@/pages/dashboard/finance/site-registration")
);
const ContactInfoPage = lazy(
  () => import("@/pages/dashboard/finance/contact-info")
);

export default function createDashboardRoutes(
  user: User | null,
  loading: boolean
) {
  if (loading) return <Route path="dashboard" element={<PageLoading />} />;
  let navigation = "/auth/signup";
  switch (user?.role) {
    case "admin":
      navigation = "/dashboard/admin";
      break;
    case "finance":
      navigation = "/dashboard/site-registration";
      break;
  }
  return (
    <Route path="dashboard" element={<DashboardLayout />}>
      <Route index element={<Navigate to={navigation} />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="site-registration" element={<SiteRegistrationPage />} />
      <Route path="contact-info" element={<ContactInfoPage />} />
    </Route>
  );
}
