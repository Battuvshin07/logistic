import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider, theme } from "antd";
import { ConfigProviderProps } from "antd/lib/index";
import { BrowserRouter, Route, Routes } from "react-router";
import { Typography } from "antd";

const { Title } = Typography;

const defaultTheme: ConfigProviderProps["theme"] = {
  token: {
    borderRadius: 4,
  },
  algorithm: theme.darkAlgorithm,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Title>Home</Title>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
