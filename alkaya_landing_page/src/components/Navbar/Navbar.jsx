import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
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
