import { useUser } from "@/providers/user";
import { PageLoading, ProLayout } from "@ant-design/pro-components";
import { Navigate, Outlet, useLocation } from "react-router";

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
export default function DashboardLayout() {
  const location = useLocation();
  const { user, loading } = useUser();

  if (loading) {
    return <PageLoading />;
  }
  if (!user) {
    return <Navigate to="/auth/signup" />;
  }
  return (
    <ProLayout
      style={{ borderRadius: "100px" }}
      fixSiderbar={true}
      siderMenuType="sub"
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
      layout="top"
      menu={{
        request: async () => {
          switch (user!.role) {
            case "admin":
              return ADMIN_ROUTES;
            case "finance":
              return FINANCE_ROUTES;
            default:
              throw new Error(`Unexpected role ${user!.role}`);
          }
        },
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
