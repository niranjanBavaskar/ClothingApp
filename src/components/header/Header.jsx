import React, { useState } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import "./header.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <p style={{ fontWeight: "700", fontSize: "large" }}>ALLSTAG</p>
      </div>
      <div className={styles.menu}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <NavLink style={{ textDecoration: "none", color: " black" }} to="/">
            HOME
          </NavLink>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopAll");
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: " black" }}
            to="/shopAll"
          >
            SHOP ALL
          </NavLink>
          {menu === "shopAll" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("collections");
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: " black" }}
            to="/collections"
          >
            COLLECTIONS
          </NavLink>
          {menu === "collections" ? <hr /> : <></>}
          <div className={styles.subMenu}>
            <li style={{ textDecoration: "none" }}>Oversize T-shirt</li>
            <hr style={{ backgroundColor: "black" }} />
            <li style={{ textDecoration: "none" }}>T-shirts</li>
            <hr style={{ backgroundColor: "black" }} />
            <li style={{ textDecoration: "none" }}>Shorts</li>
            <hr style={{ backgroundColor: "black" }} />
            <li style={{ textDecoration: "none" }}>Tanks</li>
          </div>
        </li>

        <li
          onClick={() => {
            setMenu("contactUs");
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: " black" }}
            to="/contactUs"
          >
            CONTACT US
          </NavLink>
          {menu === "contactUs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("trackYourOrder");
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: " black" }}
            to="/trackYourOrder"
          >
            TRACK YOUR ORDER
          </NavLink>
          {menu === "trackYourOrder" ? <hr /> : <></>}
        </li>
      </div>
      <div className={styles.loginCart}>
        <NavLink
          style={{ textDecoration: "none", color: " black" }}
          to="/search"
        >
          <IoIosSearch />
        </NavLink>

        <NavLink style={{ textDecoration: "none", color: " black" }} to="/cart">
          <IoCartOutline />
        </NavLink>
        <div className={styles.counter}>0</div>
      </div>
    </div>
  );
};
