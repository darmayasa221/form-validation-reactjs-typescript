import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegisterContexProvider from "./hooks/register";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/rooters";
import LoginContextProvider from "./hooks/login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RegisterContexProvider>
    <LoginContextProvider>
      <RouterProvider router={routers} />
    </LoginContextProvider>
  </RegisterContexProvider>
);
