import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import AudioImg from "../assets/img/Audio-img.png";

export const Audio = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container ">
        <img src={AudioImg} alt="" className="energy-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Audio;
