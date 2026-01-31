import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
