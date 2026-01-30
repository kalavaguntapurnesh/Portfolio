import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ui/ErrorFallback";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./contexts/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
