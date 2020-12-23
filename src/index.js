import React from "react";
import ReactDOM from "react-dom";
import "./components/index.css";
import App from "./App";
import "./components/index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
