import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WhereToBuy from "./components/Where To Buy/WhereToBuy";
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
    </div>
  );
};

export default App;
