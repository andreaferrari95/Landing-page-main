import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import "./impressum.css";
import { useTranslation } from "react-i18next";

export const Impressum = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavbarProducts />
      <div className="container impressum">
        <div className="impressum-data">
          <h3>{t("impressum")}</h3>

          <h4>alkaya-One </h4>
          <p>
            Saime-Genc-Ring 28 <br />
            53121 Bonn <br />
            Germany
          </p>
          <p>
            {t("kaufman")}: Frank Stellbogen <br />
            USt-IdNr.: DE250092661
          </p>
        </div>
        <div className="address-data">
          <h3>{t("address")}</h3>

          <h4>alkaya-One</h4>
          <p>
            Saime-Genc-Ring 28 <br />
            53121 Bonn
          </p>
          <p>{t("phone")} +49 228 50434061</p>

          <p>
            Email: Hello@alkaya-one.com <br />
            Internet: alkaya.shop
          </p>
          <p>{t("serviceHours")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
