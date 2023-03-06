import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/Store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App />
    
    </Provider>
  
  </React.StrictMode>
);
