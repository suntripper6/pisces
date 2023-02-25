import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider } from "./context/AuthenticationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthenticationProvider>
  </React.StrictMode>
);
