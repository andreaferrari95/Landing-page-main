import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 alkaya-One. All rights reserved.</p>
      <ul>
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
