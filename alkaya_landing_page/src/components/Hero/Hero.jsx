import "./Hero.css";
import { Link as LinkRoll } from "react-scroll";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Gadgets on Point</h1>
        <p>{t("heroP")}</p>
        <LinkRoll to="about" smooth={true} offset={-110}>
          <button className="btn">{t("learnMore")}</button>
        </LinkRoll>
      </div>
    </div>
  );
};

export default Hero;
