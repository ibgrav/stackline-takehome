// includes tailwind layers
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./store/create-store";
import { App } from "./components/app/app";
import { ErrorBoundary } from "react-error-boundary";

// defined in /index.html
const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    {/* Need better error handling at a component-level in production */}
    <ErrorBoundary fallback={<div>An error has occured.</div>}>
      {/* If there are additional providers required for the app, creating a complete <Providers /> component is best */}
      <ReduxProvider store={createStore()}>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>
);
