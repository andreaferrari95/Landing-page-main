import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import { Link as LinkRoll } from "react-scroll";
import ContactsB2B from "../components/ContactsB2B/ContactsB2B";
import B2bAbout from "../components/B2BAbout/B2bAbout";
import { useTranslation } from "react-i18next";

import "./B2B.css";

export const B2b = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavbarProducts />
      <div className="B2B container">
        <div className="b2b-text">
          <h1>Business On Point!</h1>
          <p>{t("b2bSubtitle")}</p>
          <LinkRoll to="B2bAbout-id" smooth={true} offset={-80}>
            <button className="btn">{t("learnMore")}</button>
          </LinkRoll>
        </div>
      </div>
      <B2bAbout />
      <ContactsB2B />
      <Footer />
    </div>
  );
};
export default B2b;
