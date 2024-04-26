import React, { useState } from "react";
import styles from "./header.module.css";
import "./header.module.css";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
  const [menu, setMenu]= useState("home");
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p>shopper</p>
      </div>
      <div className={styles.menu}>
        <li onClick={()=>{setMenu("home")}}>HOME {menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shop all")}}>SHOP ALL {menu==="shop all"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("collections")}}>COLLECTIONS {menu==="collections"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact us")}}>CONTACT US {menu==="contact us"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("track your order")}}>TRACK YOUR ORDER {menu==="track your order"?<hr/>:<></>}</li>
      </div>
      <div className={styles.loginCart}>
        <CiSearch />
        <IoCartOutline />
        <div className={styles.counter}>0</div>
      </div>
    </div>
  );
};
