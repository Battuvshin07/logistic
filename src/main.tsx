import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MainRoutes from "@/routes";
import DefaultConfigProvider from "@/providers/default-config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DefaultConfigProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </DefaultConfigProvider>
  </StrictMode>
);
