import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import EnergyImg from "../assets/img/Energy-img.png";
import categoryBanner from "../assets/img/Unter_Kategorie_2.png";

import "./routes.css";

export const Energy = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="category-banner">
        <img src={categoryBanner} alt="" />
      </div>
      <div className="container ">
        <img src={EnergyImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Energy;
