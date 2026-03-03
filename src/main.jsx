import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import { Toaster } from "react-hot-toast";

<Toaster position="top-right" />

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>
);
