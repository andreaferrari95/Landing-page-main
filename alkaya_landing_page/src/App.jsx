import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <ProductsCategory />
      </div>
    </div>
  );
};

export default App;
