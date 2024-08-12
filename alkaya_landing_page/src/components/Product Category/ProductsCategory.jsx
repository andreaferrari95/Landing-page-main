import React from "react";
import "./ProductsCategory.css";
import catEenergy from "../../assets/img/energy.png";
import catProtection from "../../assets/img/protection.png";
import catAudio from "../../assets/img/audio.png";
import catGadgets from "../../assets/img/gadgets.png";

export const ProductsCategory = () => {
  return (
    <div className="product-category">
      <div className="prod-cat">
        <img src={catEenergy} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catProtection} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catAudio} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="prod-cat">
        <img src={catGadgets} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
