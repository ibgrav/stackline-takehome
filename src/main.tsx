// includes tailwind layers
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./store/create-store";
import { App } from "./components/app/app";

// defined in /index.html
const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <ReduxProvider store={createStore()}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
