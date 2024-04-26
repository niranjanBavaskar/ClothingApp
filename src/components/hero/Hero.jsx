import React from "react";
import "./hero.module.css";
import styles from "./hero.module.css";
import { Header } from "../header/Header";

export const Hero = () => {
  return (
   
    <div className={styles.main}>
      <Header/>
      <div className={styles.posterContainer}>
        <div className={styles.poster}>
          <img src=".\images\clothes.png" alt="" />
        </div>
        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
};
