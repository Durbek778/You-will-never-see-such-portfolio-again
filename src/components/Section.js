import React from "react";
import mika from "./assets/mika.jpg";
import "./styles/Section.css";

export const Section = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="texts">
          <h1>Hello My Name is</h1>
          <h1 className="h1-big">Ms. Mika</h1>
          <p>
            I wanted to write here that I am Junior Frontend Developer, but
            actually I am not, so I am a little beautiful cat with annoying
            character😁.
          </p>
        </div>

        <div className="image">
          <img src={mika} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Section;
