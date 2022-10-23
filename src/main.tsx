import "./main.less";

import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./containers/home/Home";
import { NotificationProvider } from "./hooks/useNotification/NotificationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <Home />
    </NotificationProvider>
  </React.StrictMode>
);
