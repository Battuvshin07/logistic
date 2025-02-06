import { ProLayout } from "@ant-design/pro-components";
import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
  const location = useLocation();

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
        request: async () => [
          {
            name: "Handle user",
            path: "/handle-user",
          },
        ],
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
