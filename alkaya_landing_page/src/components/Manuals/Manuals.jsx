import "../../components/Manuals/Manuals.css";
import BH30001 from "../../assets/Manuals/BH-30001-2.pdf";
import BH30003 from "../../assets/Manuals/BH-30003.pdf";
import BH30004 from "../../assets/Manuals/BH-30004-5.pdf";
import BH30006 from "../../assets/Manuals/BH-30006-7.pdf";
import CR50009 from "../../assets/Manuals/CR-50009.pdf";
import CR50010 from "../../assets/Manuals/CR-50010.pdf";
import GT80001 from "../../assets/Manuals/GT-80001-2.pdf";
import GT80007 from "../../assets/Manuals/GT-80007-8.pdf";
import GT80009 from "../../assets/Manuals/GT-80009-10.pdf";
import PB40002 from "../../assets/Manuals/PB-40002-3.pdf";
import PB40004 from "../../assets/Manuals/PB-40004-5.pdf";
import BH30001img from "../../assets/img/manual-img/BH-30001-2.jpg";
import BH30003img from "../../assets/img/manual-img/BH-30003.jpg";
import BH30004img from "../../assets/img/manual-img/BH-30004-5.jpg";
import BH30006img from "../../assets/img/manual-img/BH-30006-7.jpg";
import CR50009img from "../../assets/img/manual-img/CR-50009.jpg";
import CR50010img from "../../assets/img/manual-img/CR-50010.jpg";
import GT80001img from "../../assets/img/manual-img/GT-80001-2.jpg";
import GT80007img from "../../assets/img/manual-img/GT-80007-8.jpg";
import GT80009img from "../../assets/img/manual-img/GT-80009-10.jpg";
import PB40002img from "../../assets/img/manual-img/PB-40002-3.jpg";
import PB40004img from "../../assets/img/manual-img/PB-40004-5.jpg";

import { useTranslation } from "react-i18next";
import { NavbarProducts } from "../Navbar-Products/NavbarProducts";
import Footer from "../../components/Footer/Footer";

export const Manuals = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavbarProducts />
      <div>
        <h2 className="title-downloads">Download our Product Manuals</h2>
      </div>
      <div className="manual-category" id="products">
        <div className="manual-cat">
          <img src={BH30001img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={BH30001} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={BH30003img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={BH30003} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={BH30004img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={BH30004} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={BH30006img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={BH30006} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={CR50009img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={CR50009} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={CR50010img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={CR50010} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={GT80001img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={GT80001} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={GT80007img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={GT80007} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={GT80009img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={GT80009} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={PB40002img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={PB40002} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
        <div className="manual-cat">
          <img src={PB40004img} alt="" />
          <div className="caption">
            <button className="btn">
              <a href={PB40004} target="_blank">
                {t("prodButton")}
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manuals;
