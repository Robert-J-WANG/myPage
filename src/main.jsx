import React from "react";
import ReactDOM from "react-dom/client";

import { initialiseTheme } from "@/app/theme/theme";
import App from "./App.jsx";
import "./styles/index.css";

initialiseTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
