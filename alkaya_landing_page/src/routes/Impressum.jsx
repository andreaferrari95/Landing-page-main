import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import "./impressum.css";

export const Impressum = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container impressum">
        <div className="impressum-data">
          <h3>Impressum</h3>

          <h4>alkaya-One </h4>
          <p>
            Saime-Genc-Ring 28 <br />
            53121 Bonn <br />
            Germany
          </p>
          <p>
            Kaufmännische Leitung: Frank Stellbogen <br />
            USt-IdNr.: DE250092661
          </p>
        </div>
        <div className="address-data">
          <h3>Lieferadresse:</h3>

          <h4>alkaya-One</h4>
          <p>
            Saime-Genc-Ring 28 <br />
            53121 Bonn
          </p>
          <p>Telefon: +49 228 50434061</p>

          <p>
            Email: Hello@alkaya-one.com <br />
            Internet: alkaya.shop
          </p>
          <p>Servicezeiten: Montag bis Freitag 09:00 – 18.00 Uhr</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
