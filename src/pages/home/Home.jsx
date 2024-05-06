import React from "react";

import { Hero } from "../../components/hero/Hero";
import { Product } from "../../components/product/Product";
import { Footer } from "../../components/footer/Footer";


//import styles from "./home.module.css";
import "./home.module.css";
//import styles from "./home.module.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Footer />
    </>
  );
};
