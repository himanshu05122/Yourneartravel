import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 🚀 No StrictMode in production
createRoot(document.getElementById("root")).render(<App />);
