import React from "react";
import "./styles/Testimonials.css";
import t1 from "./assets/durbek.jpg";
import t2 from "./assets/abdul.jpg";
import t3 from "./assets/siroj.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Testimoinal</h1>
      <div className="cart-container">
        <div className="cart">
          <img src={t1} alt="" />
          <p>Durbek</p>
          <h5>
            Hi there I am the owner of this cat. This is the first and the worst
            cat which I have ever had. Mika always wants to play with me even
            when I am coding, reading, playing(video games ) and even when I am
            sleeping, but she is so cute so I love her.
          </h5>
        </div>

        <div className="cart">
          <img src={t2} alt="" />
          <p>Abdul Azim</p>
          <h5>
            Mika have bitten my hand 3 times and my foot 15+ times, that is why
            I do not visit Durbek`s home too much, but anyway a like to play
            with her... Lorem ipsum adipisicing elit. Laudantium excepturi
            fugiat incidunt, exercitationem illo non. Ipsum
          </h5>
        </div>

        <div className="cart">
          <img src={t3} alt="" />
          <p>Sirojiddin </p>
          <h5>
            Same with Abdul Azim... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquid ex ea commodi consequat. Q
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
