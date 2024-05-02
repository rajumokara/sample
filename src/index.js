import * as React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "./assets/style.css";
import "./assets/common.css";
import Routers from "./Routers";
import Theme from "./utilities/Theme";

// Fonts
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={Theme}>
    <Routers />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
