import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MainRoutes from "@/routes";
import LocaleProvider from "@/providers/locale";
import DefaultConfigProvider from "@/providers/default-config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <DefaultConfigProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </DefaultConfigProvider>
    </LocaleProvider>
  </StrictMode>
);
