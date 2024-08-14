import React from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/img/next-icon.png";
import backIcon from "../../assets/img/back-icon.png";
import user1 from "../../assets/img/user-1.jpg";
import user2 from "../../assets/img/user-2.jpg";
import user3 from "../../assets/img/user-3.jpg";
import user4 from "../../assets/img/user-4.jpg";

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="next-btn" />
      <img src={backIcon} alt="" className="back-btn" />
      <div className="slider"></div>
    </div>
  );
};

export default Testimonials;
