import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Second from "./components/Second";
import ThisPage from "./components/ThisPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Second />} />
      <Route path="/thisPage" element={<ThisPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
