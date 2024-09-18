import "./ContactsB2B.css";
import React from "react";
import emailImg from "../../assets/img/email.svg";
import messageImg from "../../assets/img/message.svg";
import phoneImg from "../../assets/img/phone.svg";
import locationImg from "../../assets/img/location.svg";
import clockImg from "../../assets/img/clock.svg";
import whiteArrow from "../../assets/img/arrow-white.svg";
import { useTranslation } from "react-i18next";

export const ContactsB2B = () => {
  const { t } = useTranslation();
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Senden....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Erfolgreich übermitteltes Formular");
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
          {t("contactTitle")}
          <img src={messageImg} alt="" />
        </h3>
        <p>{t("contactText")}</p>
        <ul>
          <li>
            <img src={emailImg} alt="" /> Hello@alkaya-one.com
          </li>
          <li>
            <img src={phoneImg} alt="" /> +49 228 50434061
          </li>
          <li>
            <img src={locationImg} alt="" />
            alkaya-One <br /> Saime-Genc-Ring 28 <br /> 53121 Bonn{" "}
            {t("contactCountry")}
          </li>
          <li>
            <img src={clockImg} alt="" />
            {t("serviceHours")}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>{t("formCompanyLab")}</label>
          <input
            type="text"
            name="company"
            placeholder={t("formCompanyPh")}
            required
          />
          <label>{t("formNameLab")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("formNamePh")}
            required
          />
          <label>{t("formb2bPhoneLab")}</label>
          <input
            type="text"
            name="phone"
            placeholder={t("formPhonePh")}
            required
          />
          <label>{t("formEmailLab")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("formEmailPh")}
            required=""
          ></input>
          <label>{t("formMessageLab")}</label>
          <textarea
            name="message"
            rows="6"
            placeholder={t("formMessagePh")}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            {t("formSubmit")}
            <img src={whiteArrow} alt="" className="white-arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactsB2B;
