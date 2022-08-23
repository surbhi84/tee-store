import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./components/CartContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>
);
