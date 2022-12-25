import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { JournalApp } from "./JournalApp";
import { store } from "./store";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <JournalApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
