import React from "react";

import { Hero } from "../../components/hero/Hero";
import { Summer } from "../../components/summer/Summer";
import { Footer } from "../../components/footer/Footer";

//import styles from "./home.module.css";
import "./home.module.css";
//import styles from "./home.module.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <Summer />
      <Footer />
    </>
  );
};
