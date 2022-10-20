import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import ToggleColorMode from "./utils/ToggleColorMode";

import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
  </React.StrictMode>
);
