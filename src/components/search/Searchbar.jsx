import React from "react";
import "./searchbar.module.css";
import styles from "./searchbar.module.css";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

export const Searchbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.searchContainer}>
        <div className={styles.cancel}>
          <RxCross2 style={{ fontSize: "25px" }} />
        </div>
        <div className={styles.searchBar}>
          <p>Search</p>
          <IoIosSearch style={{ fontSize: "25px" }} />
        </div>
        <hr />
      </div>
      
    </div>
  );
};
