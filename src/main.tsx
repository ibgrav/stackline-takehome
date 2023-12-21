// includes tailwind layers
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/components/app/app";
import { Providers } from "./components/providers/providers";

// defined in /index.html
const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
