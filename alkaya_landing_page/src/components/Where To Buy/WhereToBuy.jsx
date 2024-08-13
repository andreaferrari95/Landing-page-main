import React from "react";
import "./WhereToBuy.css";
import otto from "../../assets/img/Where to Buy/Otto.png";
import ebay from "../../assets/img/Where to Buy/eBay.png.png";
import amazon from "../../assets/img/Where to Buy/amazon.png";
import kaufland from "../../assets/img/Where to Buy/Kaufland.png";
import etzy from "../../assets/img/Where to Buy/etzy.png";

export const WhereToBuy = () => {
  return (
    <div className="wtb-category">
      <div className="wtb-cat">
        <img src={otto} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={ebay} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={amazon} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={kaufland} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={etzy} alt="" />
        <div className="caption">
          <button className="btn">Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
