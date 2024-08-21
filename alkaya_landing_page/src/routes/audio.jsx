import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import AudioImg from "../assets/img/Audio-img.png";
import categoryBanner from "../assets/img/Unter_Kategorie_3.png";

import "./routes.css";

export const Audio = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="category-banner">
        <img src={categoryBanner} alt="" />
      </div>
      <div className="container ">
        <img src={AudioImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Audio;
