import React from "react";
import "./WhereToBuy.css";

export const WhereToBuy = () => {
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

export default WhereToBuy;
