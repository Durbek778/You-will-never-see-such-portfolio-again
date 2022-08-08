import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import { ArrowBack } from "@material-ui/icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>Mika</h1>
        </div>

        <ul className="ul-items">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Projects</Link>
          </li>
          <li>
            <Link to="/about">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <div className="hamburger-icon">
            <MenuOutlined className="menu" onClick={showMenu} />
          </div>
        </ul>
      </nav>

      <nav className={open ? "slider active" : "slider"}>
        <ul className="slider-ul" onClick={showMenu}>
          {Data.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
          <Link to="/">
            <ArrowBack className="arrow" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
