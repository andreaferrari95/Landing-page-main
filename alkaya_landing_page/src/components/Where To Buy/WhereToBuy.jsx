import "./WhereToBuy.css";
import otto from "../../assets/img/Where to Buy/Otto.png";
import ebay from "../../assets/img/Where to Buy/eBay.png";
import amazon from "../../assets/img/Where to Buy/amazon.png";
import kaufland from "../../assets/img/Where to Buy/Kaufland.png";
import etzy from "../../assets/img/Where to Buy/etsy.png";
import { useTranslation } from "react-i18next";

export const WhereToBuy = () => {
  const { t } = useTranslation();
  return (
    <div className="wtb-category" id="wheretobuy">
      <div className="wtb-cat">
        <img src={otto} alt="" />
        <div className="caption">
          <a
            href="https://www.otto.de/?selektion=(und.(ist.marke.alkaya).(~.(v.1)))"
            target="_blank"
          >
            <button className="btn">{t("otto")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={ebay} alt="" />
        <div className="caption">
          <a href="https://www.ebay.de/str/alkayaone" target="_blank">
            <button className="btn">{t("ebay")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={amazon} alt="" />
        <div className="caption">
          <a
            href="https://www.amazon.de/stores/alkaya/page/DC39BCC9-ACA6-4C94-BFA9-AD61BCD0D8E8?ref_=ast_bln"
            target="_blank"
          >
            <button className="btn">{t("amazon")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={kaufland} alt="" />
        <div className="caption">
          <a
            href="https://www.kaufland.de/manufacturer/6929762/"
            target="_blank"
          >
            <button className="btn">{t("kaufland")}</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={etzy} alt="" />
        <div className="caption">
          <a href="https://www.etsy.com/de/shop/AlkayaOne?ref=shop-header-name&listing_id=1737939617&from_page=listing">
            <button className="btn">{t("etsy")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
