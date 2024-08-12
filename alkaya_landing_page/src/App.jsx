import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductsCategory from "./components/Product Category/ProductsCategory";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsCategory />
    </div>
  );
};

export default App;
