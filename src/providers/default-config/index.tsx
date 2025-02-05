import { ConfigProvider, ConfigProviderProps, theme } from "antd";
import { PropsWithChildren } from "react";
import mn_MN from "antd/lib/locale/mn_MN";

const defaultTheme: ConfigProviderProps["theme"] = {
  token: {
    borderRadius: 4,
    colorPrimary: "#212e42",
    fontFamily: "Inter, sans-serif",
    colorLink: "#1890ff",
  },
  algorithm: theme.defaultAlgorithm,
};

export default function DefaultConfigProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider theme={defaultTheme} locale={mn_MN}>
      {children}
    </ConfigProvider>
  );
}
