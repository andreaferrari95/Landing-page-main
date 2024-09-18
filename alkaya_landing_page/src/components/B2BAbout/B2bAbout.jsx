import "./B2bAbout.css";
import aboutLeft from "../../assets/img/about-left.jpg";
import { useTranslation } from "react-i18next";
{
  /*import playIcon from "../../assets/img/play-icon.png";*/
}
export const B2bAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="B2bAbout" id="B2bAbout-id">
      <div className="B2bAbout-left">
        <img src={aboutLeft} alt="" className="B2bAbout-img" />
      </div>

      <div className="B2bAbout-right">
        <h2>{t("h2B2bAbout")}</h2>

        <ul>
          <li>
            <p>
              <strong>{t("b2bStrong1")}</strong>
              {t("b2bPart1")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong2")}</strong>
              {t("b2bPart2")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong3")}</strong>
              {t("b2bPart3")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong4")}</strong>
              {t("b2bPart4")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong5")}</strong>
              {t("b2bPart5")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong6")}</strong>
              {t("b2bPart6")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong7")}</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong8")}</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>{t("b2bStrong9")}</strong>
              {t("b2bPart9")}
            </p>
          </li>
        </ul>
        <h2>{t("b2bRegister")}</h2>
      </div>
    </div>
  );
};

export default B2bAbout;
