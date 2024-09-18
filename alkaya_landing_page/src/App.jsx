import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WhereToBuy from "./components/Where To Buy/WhereToBuy";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import FindUsInStore from "./components/Find Us in Store/FindUsInStore";
import Footer from "./components/Footer/Footer";
import "../src/utils/i18n";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={t("subtitle1")} title={t("title1")} />
      </div>
      <ProductsCategory />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title subTitle={t("subtitle2")} title={t("title2")} />
      </div>
      <WhereToBuy />
      <div className="container">
        <Title subTitle={t("subtitle3")} title={t("title3")} />
        <Testimonials />
        <Title subTitle={t("subtitle4")} title={t("title4")} />
        <FindUsInStore />
        <Title subTitle={t("subtitle5")} title={t("title5")} />
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
