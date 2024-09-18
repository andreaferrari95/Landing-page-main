import "./FindUsInStore.css";
import { useTranslation } from "react-i18next";
import edeka from "../../assets/img/Logo_Edeka.png";
import rewe from "../../assets/img/Rewe_Logo.png";
import teampoint from "../../assets/img/teampoint.svg";
import handysalon from "../../assets/img/Handysalon.webp";

export const FindUsInStore = () => {
  const { t } = useTranslation();

  return (
    <div className="wtb-category" id="wheretobuy">
      <div className="wtb-cat">
        <img src={edeka} alt="" />
        <div className="caption">
          <a href="https://www.edeka.de/marktsuche.jsp" target="_blank">
            <button className="btn">{t("edeka")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={rewe} alt="" />
        <div className="caption">
          <a href="https://www.rewe.de/marktsuche" target="_blank">
            <button className="btn">{t("rewe")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={teampoint} alt="" />
        <div className="caption">
          <a href="https://www.teampoint-koeln.de/" target="_blank">
            <button className="btn">{t("teampoint")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={handysalon} alt="" />
        <div className="caption">
          <a href="https://handysalon.com/" target="_blank">
            <button className="btn">{t("handysalon")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUsInStore;
