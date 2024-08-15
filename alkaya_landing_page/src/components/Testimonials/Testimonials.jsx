import React, { useRef } from "react";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";
import nextIcon from "../../assets/img/next-icon.png";
import backIcon from "../../assets/img/back-icon.png";
import user1 from "../../assets/img/user-1.png";
import user2 from "../../assets/img/user-2.png";
import user3 from "../../assets/img/user-3.png";
import user4 from "../../assets/img/user-4.png";

export const Testimonials = () => {
  const { t } = useTranslation();
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
    <div className="testimonials">
      <img src={nextIcon} alt="" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user1} alt="" />
                </div>
                <div>
                  <h3>Andrea</h3>
                  <span>{t("span1")}</span>
                </div>
              </div>
              <p>{t("testimonial1")}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user2} alt="" />
                </div>
                <div>
                  <h3>Maria</h3>
                  <span>{t("span3")}</span>
                </div>
              </div>
              <p>{t("testimonial3")}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user3} alt="" />
                </div>
                <div>
                  <h3>Walid</h3>
                  <span>{t("span2")}</span>
                </div>
              </div>
              <p>{t("testimonial2")}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user4} alt="" />
                </div>
                <div>
                  <h3>Frank</h3>
                  <span>{t("span4")}</span>
                </div>
              </div>
              <p>{t("testimonial4")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
