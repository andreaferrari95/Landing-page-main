import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/img/next-icon.png";
import backIcon from "../../assets/img/back-icon.png";
import user1 from "../../assets/img/user-1.png";
import user2 from "../../assets/img/user-2.png";
import user3 from "../../assets/img/user-3.png";
import user4 from "../../assets/img/user-4.png";

export const Testimonials = () => {
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
                  <h3>Andrea Ferrari</h3>
                  <span>Bonn, Germany</span>
                </div>
              </div>
              <p>
                I have many other powerbanks, but the alkaya. one went over my
                expectations. It's just so good not having to worry about
                carrying a cable for every device I want to charge and for
                charging the powerbank too. This powerbank has a USB C,
                lightning, a USB A cable and a wireless charging area all
                integrated. You can charge multiple devices at once without
                carrying cables with you. It also has extra ports if needed. The
                build quality is top notch and the price is well under other
                brands that offer the same quality. Really happy with my
                purchase!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user2} alt="" />
                </div>
                <div>
                  <h3>Andrea Ferrari</h3>
                  <span>Bonn, Germany</span>
                </div>
              </div>
              <p>
                I have many other powerbanks, but the alkaya. one went over my
                expectations. It's just so good not having to worry about
                carrying a cable for every device I want to charge and for
                charging the powerbank too. This powerbank has a USB C,
                lightning, a USB A cable and a wireless charging area all
                integrated. You can charge multiple devices at once without
                carrying cables with you. It also has extra ports if needed. The
                build quality is top notch and the price is well under other
                brands that offer the same quality. Really happy with my
                purchase!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user3} alt="" />
                </div>
                <div>
                  <h3>Andrea Ferrari</h3>
                  <span>Bonn, Germany</span>
                </div>
              </div>
              <p>
                I have many other powerbanks, but the alkaya. one went over my
                expectations. It's just so good not having to worry about
                carrying a cable for every device I want to charge and for
                charging the powerbank too. This powerbank has a USB C,
                lightning, a USB A cable and a wireless charging area all
                integrated. You can charge multiple devices at once without
                carrying cables with you. It also has extra ports if needed. The
                build quality is top notch and the price is well under other
                brands that offer the same quality. Really happy with my
                purchase!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-cont">
                  <img src={user4} alt="" />
                </div>
                <div>
                  <h3>Andrea Ferrari</h3>
                  <span>Bonn, Germany</span>
                </div>
              </div>
              <p>
                I have many other powerbanks, but the alkaya. one went over my
                expectations. It's just so good not having to worry about
                carrying a cable for every device I want to charge and for
                charging the powerbank too. This powerbank has a USB C,
                lightning, a USB A cable and a wireless charging area all
                integrated. You can charge multiple devices at once without
                carrying cables with you. It also has extra ports if needed. The
                build quality is top notch and the price is well under other
                brands that offer the same quality. Really happy with my
                purchase!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
