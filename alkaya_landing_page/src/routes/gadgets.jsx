import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import GadgetsImg from "../assets/img/Gadgets-img.png";
import categoryBanner from "../assets/img/Unter_Kategorie_4.png";

import "./routes.css";

export const Gadgets = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="category-banner">
        <img src={categoryBanner} alt="" />
      </div>
      <div className="container ">
        <img src={GadgetsImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Gadgets;
