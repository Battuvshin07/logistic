import { ConfigProvider, ConfigProviderProps, theme } from "antd";
import { PropsWithChildren } from "react";
import { useLocale } from "./LocaleProvider";

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
  const { antdLocale } = useLocale();
  return (
    <ConfigProvider theme={defaultTheme} locale={antdLocale}>
      {children}
    </ConfigProvider>
  );
}
