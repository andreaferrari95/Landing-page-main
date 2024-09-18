import { useRef } from "react";
import "./FindUsInStore.css";
import nextIcon from "../../assets/img/next-icon.png";
import backIcon from "../../assets/img/back-icon.png";
import edeka from "../../assets/img/Where to Buy/Logo_Edeka.png";
import rewe from "../../assets/img/Where to Buy/Rewe_Logo.png";
import teampoint from "../../assets/img/Where to Buy/teampoint.svg";
import handysalon from "../../assets/img/Where to Buy/Handysalon.webp";

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
              <img src={edeka} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={rewe} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={teampoint} alt="" />
            </div>
          </li>
          <li>
            <div className="slide-find-us">
              <img src={handysalon} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FindUsInStore;
