// includes tailwind layers
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/components/app";

// defined in /index.html
const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
