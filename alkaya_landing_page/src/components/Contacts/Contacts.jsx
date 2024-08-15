import "./Contacts.css";
import emailImg from "../../assets/img/email.svg";
import messageImg from "../../assets/img/message.svg";
import phoneImg from "../../assets/img/phone.svg";
import locationImg from "../../assets/img/location.svg";
import clockImg from "../../assets/img/clock.svg";

export const Contacts = () => {
  return (
    <div className="contact">
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
        <form>
          <label>Your Name</label>
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
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
