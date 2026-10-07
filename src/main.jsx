import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";
import { initialiseTheme } from "@/app/theme/theme";
import "./styles/index.css";

initialiseTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
