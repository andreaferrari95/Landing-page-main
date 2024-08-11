import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";

export const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Who we are</li>
        <li>Our Products</li>
        <li>Where to Buy</li>
        <li>B2B</li>
        <li>Follow Us</li>
        <li>
          <button className="btn">Contacts</button>
        </li>
      </ul>
    </nav>
  );
};
