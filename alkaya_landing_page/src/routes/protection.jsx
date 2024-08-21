import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import ProtectionImg from "../assets/img/Protection-img.png";
import categoryBanner from "../assets/img/Unter_Kategorie_1.png";

import "./routes.css";

export const Protection = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="category-banner">
        <img src={categoryBanner} alt="" />
      </div>
      <div className="container ">
        <img src={ProtectionImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Protection;
