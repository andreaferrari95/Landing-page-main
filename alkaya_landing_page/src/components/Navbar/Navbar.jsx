import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo-white.png";
import { useTranslation } from "react-i18next";
import germanflg from "../../assets/img/germany.png";
import englishflg from "../../assets/img/united-kingdom.png";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English", img: englishflg },
    { code: "de", name: "Deutch", img: germanflg },
  ];
  const [sticky, setSticky] = useState(false);
  const [logoDark, setLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setSticky(true);
        setLogo(true); // Show white logo on scroll
      } else {
        setSticky(false);
        setLogo(false); // Show dark logo initially
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logoDark ? logoWhite : logo} alt="Logo" className="logo" />
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
      <div>
        {languages.map((language) => (
          <button
            className="btn-lang"
            onClick={() => i18n.changeLanguage(language.code)}
            key={language.code}
          >
            <img src={language.img} alt="" className="flag" />
          </button>
        ))}
      </div>
    </nav>
  );
};
