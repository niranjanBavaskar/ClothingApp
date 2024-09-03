import React from "react";
import "./shop.module.css";
import styles from "./shop.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Shop = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.shopContainer}>
        <div className={styles.left}>
          <div className={styles.category}>
            <p style={{ fontWeight: "600" }}>CATEGORIS</p>
            <FaAngleDown />
            
          </div>
          <hr />
          

          <div className={styles.availability}>
            <p style={{ fontWeight: "600" }}>AVAILABILITY</p>
            <FaAngleUp />
          </div>
          <hr />
        </div>
        <div className={styles.right}>
          <p style={{ fontSize: "x-large", fontWeight: "700" }}>ALL PRODUCTS</p>
          <hr />
          <div className={styles.Filters}>
            <div className={styles.filter}>
              <p style={{ fontWeight: "600" }}>VIEW AS</p>
            </div>
            <div className={styles.sortBy}>
              <div className={styles.itemsPerPage}>
                <p>ITEMS PER PAGE</p>
                <div className={styles.square}>
                  20
                  <FaAngleDown style={{ fontSize: "13" }} />
                </div>
              </div>
              <div className={styles.sort}>
                <p>SORT BY</p>
                <div className={styles.featured}>
                  Featured
                  <FaAngleDown style={{ fontSize: "13" }} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shopAll}>
            

            <div className={styles.blackTshirt}>
              <img src=".\images\blackMen.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Black T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.beigeTshirt}>
              <img src=".\images\beigeTshirt.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Beige T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.blackFull}>
              <img src=".\images\blackFull.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Black Full T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.blackOversize}>
              <img src=".\images\blackOversize.jpg" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Black Oversize T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.whiteTshirt}>
              <img src=".\images\whiteTshirt.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                White T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.blackPrint}>
              <img src=".\images\blackPrint.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Black Printed T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.whiteMen}>
              <img src=".\images\whiteMen.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                White T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.whitevest}>
              <img src=".\images\whitevest.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                White Vest
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 399.00</p>
            </div>
            <div className={styles.brownOversize}>
              <img src=".\images\brownOversize.jpg" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Brown Oversize T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.backPrint}>
              <img src=".\images\backPrint.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Back Printed T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
            <div className={styles.whitePrint}>
              <img src=".\images\whitePrint.avif" alt="" />
              <a
                href=""
                style={{
                  paddingTop: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                White T-Shirt
              </a>
              <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
