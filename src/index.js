import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer/>
      </Provider>
    </BrowserRouter>
);
reportWebVitals();
