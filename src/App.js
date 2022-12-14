import React from "react";
import "./App.css";
import Header from "./components/Header";
import Second from "./components/Second";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Second />
      <Testimonials />
    </div>
  );
}

export default App;
