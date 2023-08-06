import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./Index.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index /> {/* Render the Index component */}
  </React.StrictMode>
);

reportWebVitals();
