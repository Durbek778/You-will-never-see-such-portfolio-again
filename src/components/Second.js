import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import mika3 from "./assets/mika5.jpg";
import "./styles/Second.css";

const Second = () => {
  const { pathname } = useLocation();
  return (
    <section className="section-2">
      <h1 className="about-me">About Me</h1>
      <div className="container-2">
        <div className="image-cont">
          <img src={mika3} alt="" />
        </div>
        {pathname.includes("about") && (
          <Link to="/" className="link">
            <ArrowBack className="arrow" />
          </Link>
        )}
        <div className="text-2">
          <p>I live in Seongnam-si 🇰🇷</p>
          <p>I am 7 month old📆</p>
          <p>I do not know anything about coding🤗</p>
          <p>My owner is university student 🤓</p>
          <p>I like sleeping and distracting my owner😻</p>
          <p>I hate my owner and staying at home alone😾</p>
          <p>I`ve an instagram account with the nick name 'immika4'😼</p>
        </div>
      </div>
    </section>
  );
};

export default Second;
