import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import EnergyImg from "../assets/img/Energy-img.png";

export const Audio = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container ">
        <img src={EnergyImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Audio;
