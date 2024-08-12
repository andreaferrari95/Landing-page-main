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
        <img src={catProtection} alt="" />
        <img src={catAudio} alt="" />
        <img src={catGadgets} alt="" />
      </div>
    </div>
  );
};

export default ProductsCategory;
