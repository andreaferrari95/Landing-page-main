import "./NavbarProducts.css";
import menuIcon from "../../assets/img/menu.svg";
import logoWhite from "../../assets/img/logo-white.png";
import { useTranslation } from "react-i18next";
import germanflg from "../../assets/img/germany.png";
import englishflg from "../../assets/img/united-kingdom.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavbarProducts = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English", img: englishflg },
    { code: "de", name: "Deutch", img: germanflg },
  ];
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="prod-nav container dark-nav">
      <img src={logoWhite} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <Link to="/#products">
          <li>{t("ourProducts")}</li>
        </Link>
        <Link to="/#about-id">
          <li>{t("whoWeAre")}</li>
        </Link>
        <Link to="/#wheretobuy">
          <li>{t("whereToBuy")}</li>
        </Link>
        <li>
          <Link to="/b2b">B2B</Link>
        </li>
        <li>
          <Link to="/#contact-id">
            <button className="btn">{t("contacts")}</button>
          </Link>
        </li>
        <li>
          {" "}
          {languages.map((language) => (
            <button
              className="btn-lang-main"
              onClick={() => i18n.changeLanguage(language.code)}
              key={language.code}
            >
              <img src={language.img} alt="" className="flag" />
            </button>
          ))}
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};
