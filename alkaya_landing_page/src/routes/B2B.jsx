import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import { Link as LinkRoll } from "react-scroll";
import ContactsB2B from "../components/ContactsB2B/ContactsB2B";

import "./B2B.css";

export const B2b = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="B2B container">
        <div className="b2b-text">
          <h1>Gadgets on Point</h1>
          <p>
            We take the ordinary and make it extraordinary. Our smartphone
            accessories, perfectly priced, offer exceptional quality and a
            modern, eye-catching design.
          </p>
          <LinkRoll to="about" smooth={true} offset={-110}>
            <button className="btn">Learn more</button>
          </LinkRoll>
        </div>
      </div>
      <ContactsB2B />
      <Footer />
    </div>
  );
};
export default B2b;
