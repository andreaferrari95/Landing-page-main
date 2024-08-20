import "./NavbarProducts.css";

import logoWhite from "../../assets/img/logo-white.png";
import { useTranslation } from "react-i18next";
import germanflg from "../../assets/img/germany.png";
import englishflg from "../../assets/img/united-kingdom.png";
import { Link } from "react-router-dom";

export const NavbarProducts = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English", img: englishflg },
    { code: "de", name: "Deutch", img: germanflg },
  ];

  return (
    <nav className="container dark-nav">
      <img src={logoWhite} alt="Logo" className="logo" />
      <ul>
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
