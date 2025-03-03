import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import MealsDetailPage from "./page/MealsDetailPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayoutComponent />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/meals" element={<MealsPage />} />
          {/* TODO- Route mit Parameter-Einstellung */}
          <Route path="/meals/:id" element={<MealsDetailPage />} />
          {/* Name nach : frei wählbar*/}
          {/* Wildcard sign (*) */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
