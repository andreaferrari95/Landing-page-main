import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";
import Title from "./components/Title/Title";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our products by category" title="Discover alkaya." />
      </div>
      <ProductsCategory />
    </div>
  );
};

export default App;
