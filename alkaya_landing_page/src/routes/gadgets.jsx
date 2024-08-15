import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import GadgetsImg from "../assets/img/Gadgets-img.png";

export const Gadgets = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container ">
        <img src={GadgetsImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};
export default Gadgets;
