import { useRef } from "react";
import "./FindUsInStore.css";
import nextIcon from "../../assets/img/next-icon.png";
import backIcon from "../../assets/img/back-icon.png";
import kaufland from "../../assets/img/Where to Buy/kaufland.png";

export const FindUsInStore = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="find-us-in-store">
      <img src={nextIcon} alt="" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider-find-us">
        <ul ref={slider}>
          <li>
            <div className="slide-find-us">
              <img src={kaufland} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={kaufland} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={kaufland} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={kaufland} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FindUsInStore;
