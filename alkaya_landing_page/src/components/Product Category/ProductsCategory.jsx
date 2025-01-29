import "./ProductsCategory.css";
import catEenergy from "../../assets/img/energy.png";
import catProtection from "../../assets/img/protection.png";
import catAudio from "../../assets/img/audio.png";
import catGadgets from "../../assets/img/gadgets.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ProductsCategory = () => {
  const { t } = useTranslation();
  return (
    <div className="product-category" id="products">
      <div className="prod-cat">
        <img src={catEenergy} alt="" />
        <div className="caption">
          <Link to="/energy">
            <button className="btn">{t("prodButton")}</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catProtection} alt="" />
        <div className="caption">
          <Link to="/">
            <button className="btn">{t("prodButton")}</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catAudio} alt="" />
        <div className="caption">
          <Link to="/audio">
            <button className="btn">{t("prodButton")}</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catGadgets} alt="" />
        <div className="caption">
          <Link to="/gadgets">
            <button className="btn">{t("prodButton")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
