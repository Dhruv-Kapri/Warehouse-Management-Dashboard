import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import store from "../app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider>
          <App />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
