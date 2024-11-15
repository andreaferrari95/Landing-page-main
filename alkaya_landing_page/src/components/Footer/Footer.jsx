import "./Footer.css";
import tiktok from "../../assets/img/social/tiktok.svg";
import facebook from "../../assets/img/social/facebook.svg";
import instagram from "../../assets/img/social/instagram.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 alkaya-One. All rights reserved.</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/alkayaone/" target="blank">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/alkayaone" target="blank">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@alkayaone" target="blank">
            <img src={tiktok} alt="" />
          </a>
        </li>
        <li>
          <Link to="/Forgreenworld">Forgreenworld</Link>
        </li>
        <li>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li>
          <Link to="/agb">AGB</Link>
        </li>
        <li>
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
