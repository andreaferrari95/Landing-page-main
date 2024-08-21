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

export const App = () => {
  return (
    <div>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
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
        <Title
          subTitle="Stores selling alkaya products"
          title="Where to find out products"
        />
        <FindUsInStore />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
