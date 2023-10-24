import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import store from "../app/store.jsx";
import App from "./App.jsx";
import UserContextProvider from "./components/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
      <UserContextProvider>
        <Provider store={store}>
          <BrowserRouter>
            {/* <HashRouter> */}
            <App />
            {/* </HashRouter> */}
          </BrowserRouter>
        </Provider>
      </UserContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
