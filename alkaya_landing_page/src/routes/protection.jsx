import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import ProtectionImg from "../assets/img/Protection-img.png";

export const Protection = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container ">
        <img src={ProtectionImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Protection;
