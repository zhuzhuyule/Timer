import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { ConfigProvider } from "./hooks/useConfig";

document.addEventListener(
  "mousedown",
  (e: any) => {
    if (
      e.target.hasAttribute("data-tauri-drag-region") &&
      e.buttons === 1 &&
      e.detail === 2
    ) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  true
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
