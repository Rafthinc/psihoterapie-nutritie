import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx"; // pagina principală (home)
import PsychotherapyPage from "./PsychotherapyPage.jsx";
import NutritionPage from "./NutritionPage.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/psihoterapie" element={<PsychotherapyPage />} />
        <Route path="/nutritie" element={<NutritionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
