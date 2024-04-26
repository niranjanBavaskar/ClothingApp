import React from "react";
import "./footer.module.css";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footerContainer}>
        <div className={styles.links}>
          <div className={styles.logo}>
            <img
              src="https://www.allstag.com/cdn/shop/files/black-1.png?v=1711779496"
              alt=""
            />
          </div>
          <div className={styles.mainMenu}>
            <h2>Main Menu</h2>
            <div className={styles.list}>
              <a href="#">Home Page</a>
              <a href="#">All Collections</a>
              <a href="#">All products</a>
            </div>
          </div>
          <div className={styles.importantLinks}>
            <h2>Important Links</h2>
            <div className={styles.list}>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Track Your Order</a>
            </div>
          </div>
          <div className={styles.generalPolicies}>
            <h2>General Policies</h2>
            <div className={styles.list}>
              <a href="#">Privacy Policies</a>
              <a href="#">Returns & Shipping Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className={styles.letsBeSocial}>
            <h2>Let's be social</h2>
            <div className={styles.social}>
            <FaInstagram style={{fontSize: "30px"}}/>
            <FaYoutube style={{fontSize: "30px"}}/>
            </div>
          </div>
        </div>
        <div className={styles.loginSection}>
          <p>@2024, ALLStag</p>
          <div className={styles.btn}>
            <input type="text" placeholder="Email" />
            <button>
              <p>Join</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
