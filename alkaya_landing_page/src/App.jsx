import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WhereToBuy from "./components/Where To Buy/WhereToBuy";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "../src/utils/i18n";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our products by category" title="Discover alkaya." />
      </div>
      <ProductsCategory />
      <div className="container">
        <About />
        <Title
          subTitle="Buy alkaya products from one of our Partners"
          title="Where to buy"
        />
      </div>
      <WhereToBuy />
      <div className="container">
        <Title subTitle="What customers says" title="Testimonials" />
        <Testimonials />
        <Title subTitle="What customers says" title="Testimonials" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
