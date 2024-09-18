import "./About.css";
import aboutLeft from "../../assets/img/about-left.jpg";
import { useTranslation } from "react-i18next";
{
  /*import playIcon from "../../assets/img/play-icon.png";*/
}
export const About = ({ setPlayState }) => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about-id">
      <div className="about-left">
        <img
          src={aboutLeft}
          alt=""
          className="about-img"
          onClick={() => {
            setPlayState(true);
          }}
        />
        {/*<img src={playIcon} alt="" className="play-icon" />*/}
      </div>

      <div className="about-right">
        <h3>{t("aboutAlkaya")}</h3>
        <h2>{t("h2About")}</h2>
        <p>
          <strong>{t("strong1")}</strong>
          {t("part1")}
          <strong>&quot;Gadgets on point&quot;. </strong>
          {t("part2")}
        </p>
        <p>
          <strong>
            {t("break1")}
            <br />
            {t("strong2")}
          </strong>
          {t("part3")}
        </p>
        <p>
          <strong>
            {t("break2")}
            <br /> {t("strong3")}
          </strong>
          {t("part4")}
        </p>
      </div>
    </div>
  );
};

export default About;
