import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "../app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
