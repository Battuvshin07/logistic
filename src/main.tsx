import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MainRoutes from "./routes/index.tsx";
import LocaleProvider from "./providers/LocaleProvider.tsx";
import DefaultConfigProvider from "./providers/DefaultConfigProvider.tsx";

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
