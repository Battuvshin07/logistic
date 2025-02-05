import { ProLayout } from "@ant-design/pro-components";
import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <ProLayout
      style={{ borderRadius: "100px" }}
      fixSiderbar={true}
      siderWidth={300}
      location={{ pathname: location.pathname }}
      token={{
        sider: {
          colorTextMenuTitle: "#fff",
          colorMenuBackground: "#212e42",
          colorBgMenuItemSelected: "#202836",
          colorBgMenuItemHover: "#202836",
          colorTextMenu: "#fff",
          colorTextMenuSelected: "#fff",
          colorTextMenuItemHover: "#fff",
          menuHeight: 55,
        },
      }}
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
