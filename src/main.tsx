import "./main.less";

import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./containers/home/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
