import "./ProductsCategory.css";
import catEenergy from "../../assets/img/energy.png";
import catProtection from "../../assets/img/protection.png";
import catAudio from "../../assets/img/audio.png";
import catGadgets from "../../assets/img/gadgets.png";
import { Link } from "react-router-dom";

export const ProductsCategory = () => {
  return (
    <div className="product-category" id="products">
      <div className="prod-cat">
        <img src={catEenergy} alt="" />
        <div className="caption">
          <Link to="/energy">
            <button className="btn">Discover Our Products</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catProtection} alt="" />
        <div className="caption">
          <Link to="/protection">
            <button className="btn">Discover Our Products</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catAudio} alt="" />
        <div className="caption">
          <Link to="/audio">
            <button className="btn">Discover Our Products</button>
          </Link>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catGadgets} alt="" />
        <div className="caption">
          <Link to="/gadgets">
            <button className="btn">Discover Our Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
