import { ProLayout } from "@ant-design/pro-components";
import { Outlet } from "react-router";

function App() {
  return (
    <ProLayout title="Logistics" logo={null}>
      <Outlet />
    </ProLayout>
  );
}

export default App;
