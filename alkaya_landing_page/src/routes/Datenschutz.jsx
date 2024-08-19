import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import "./routes.css";

export const Datenschutz = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container ">
        <h3>Datenschutz</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
