import { useUser } from "@/providers/user";
import { PageLoading, ProLayout } from "@ant-design/pro-components";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";

const ADMIN_ROUTES = [
  {
    name: "Хэрэглэгчийн бүртгэл",
    path: "/dashboard/admin",
  },
];
const FINANCE_ROUTES = [
  {
    name: "Талбайн бүртгэл",
    path: "/dashboard/site-registration",
  },
  {
    name: "Лавлах мэдээлэл",
    path: "/dashboard/contact-info",
  },
  {
    name: "Тайлан",
    path: "/dashboard/report",
  },
];
const ROUTES = {
  admin: ADMIN_ROUTES,
  finance: FINANCE_ROUTES,
};
export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useUser();

  if (loading) {
    return <PageLoading />;
  }
  if (!user) {
    return <Navigate to="/auth/signup" />;
  }
  const route = ROUTES[user.role];
  if (!route) throw new Error(`Route not found for role ${user.role}`);

  return (
    <ProLayout
      style={{ borderRadius: "100px" }}
      fixSiderbar={true}
      siderWidth={300}
      location={{ pathname: location.pathname }}
      token={{
        header: {
          colorBgHeader: "#0077F4",
          colorTextMenu: "#eef",
          colorTextMenuActive: "#fff",
          colorTextMenuSelected: "#fff",
          colorTextMenuSecondary: "#eef",
          colorHeaderTitle: "#eef",
        },
      }}
      fixedHeader
      layout="top"
      menu={{
        type: "sub",
        request: async () => route,
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
