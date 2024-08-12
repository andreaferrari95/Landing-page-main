import React from "react";
import "./About.css";
import aboutLeft from "../../assets/img/about-left.jpg";
export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutLeft} alt="" />
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
