import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutch" },
  ];
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
        <li>{t("whoWeAre")}</li>
        <li>Our Products</li>
        <li>Where to Buy</li>
        <li>B2B</li>
        <li>Follow Us</li>
        <li>
          <button className="btn">Contacts</button>
        </li>
      </ul>
      {languages.map((language) => (
        <button
          onClick={() => i18n.changeLanguage(language.code)}
          key={language.code}
        >
          {language.name}
        </button>
      ))}
    </nav>
  );
};
