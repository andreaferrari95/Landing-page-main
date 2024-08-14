import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import OurProducts from "../routes/OurProducts";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          whoWeAre: "Who we are",
          ourProducts: "Our Products",
        },
      },
      de: {
        translation: {
          whoWeAre: "Über Uns",
          ourProducts: "Unsere Produkte",
        },
      },
    },
  });
