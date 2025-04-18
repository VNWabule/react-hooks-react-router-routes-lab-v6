import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {browserRouter} from "./routes";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={browserRouter} />
);
