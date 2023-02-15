import React from "react";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Marque from "../components/Marque";
import About from "../components/About";
const Home = () => {
  return (
    <div>
      <section>
        <Marque />
        <Slider />
        <Products />
        <About />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
