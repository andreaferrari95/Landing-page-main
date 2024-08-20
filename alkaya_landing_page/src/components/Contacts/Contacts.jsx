import "./Contacts.css";
import React from "react";
import emailImg from "../../assets/img/email.svg";
import messageImg from "../../assets/img/message.svg";
import phoneImg from "../../assets/img/phone.svg";
import locationImg from "../../assets/img/location.svg";
import clockImg from "../../assets/img/clock.svg";
import whiteArrow from "../../assets/img/arrow-white.svg";

export const Contacts = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact-id">
      <div className="contact-col">
        <h3>
          Contact Us <img src={messageImg} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to all our
          customers.
        </p>
        <ul>
          <li>
            <img src={emailImg} alt="" /> Hello@alkaya-one.com
          </li>
          <li>
            <img src={phoneImg} alt="" /> +49 228 50434061
          </li>
          <li>
            <img src={locationImg} alt="" />
            alkaya-One <br /> Saime-Genc-Ring 28 <br /> 53121 Bonn Germany
          </li>
          <li>
            <img src={clockImg} alt="" />
            Service Hours: Monday to Friday 09:00 – 18.00
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Entre your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Entre your mobile number"
            required
          />
          <label>Write your message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={whiteArrow} alt="" className="white-arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contacts;
