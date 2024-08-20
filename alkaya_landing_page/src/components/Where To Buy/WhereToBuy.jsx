import "./WhereToBuy.css";
import otto from "../../assets/img/Where to Buy/Otto.png";
import ebay from "../../assets/img/Where to Buy/eBay.png";
import amazon from "../../assets/img/Where to Buy/amazon.png";
import kaufland from "../../assets/img/Where to Buy/Kaufland.png";
import etzy from "../../assets/img/Where to Buy/etsy.png";

export const WhereToBuy = () => {
  return (
    <div className="wtb-category" id="wheretobuy">
      <div className="wtb-cat">
        <img src={otto} alt="" />
        <div className="caption">
          <a href="https://www.otto.de/?selektion=(und.(ist.marke.alkaya).(~.(v.1)))">
            <button className="btn">Buy on Otto</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={ebay} alt="" />
        <div className="caption">
          <a href="https://www.ebay.de/str/alkayaone">
            <button className="btn">Discover more</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={amazon} alt="" />
        <div className="caption">
          <a href="https://www.amazon.de/stores/alkaya/page/DC39BCC9-ACA6-4C94-BFA9-AD61BCD0D8E8?ref_=ast_bln">
            <button className="btn">Discover more</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={kaufland} alt="" />
        <div className="caption">
          <a href="https://www.kaufland.de/manufacturer/6929762/">
            <button className="btn">Discover more</button>
          </a>
        </div>
      </div>
      <div className="wtb-cat">
        <img src={etzy} alt="" />
        <div className="caption">
          <a href="https://www.etsy.com/de/shop/AlkayaOne?ref=shop-header-name&listing_id=1737939617&from_page=listing">
            <button className="btn">Discover more</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
