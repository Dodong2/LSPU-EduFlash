import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Service Pages
import HomePage from "./service-pages/HomePage";
import QRScanner from "./service-pages/Scanner";
import Stream from "./service-pages/Stream";

// Main Pages
import Home from "./pages/home";
import "./assets/css/app.css";
import "./assets/css/color.css"
import "./assets/css/default.css"
import "./assets/css/media.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
