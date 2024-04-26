import React from "react";
import "./summer.module.css";
import styles from "./summer.module.css";

export const Summer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.summerContainer}>
        {/* <div className={styles.summer}> */}
        <p style={{ fontWeight: "600", fontSize: "x-large", color: "black" }}>
          SUMMER COLLECTIONS
        </p>
        <div className={styles.tShirts}>
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
              style={{ paddingTop: "10px", cursor: "pointer", color: "black" }}
            >
              Beige T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.blackFull}>
            <img src=".\images\blackFull.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer", color: "black" }}>
              Black Full T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.blackOversize}>
            <img src=".\images\blackOversize.jpg" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black" }}>
              Black Oversize T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.whiteTshirt}>
            <img src=".\images\whiteTshirt.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black" }}>
              White T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.blackPrint}>
            <img src=".\images\blackPrint.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black" }}>
              Black Printed T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.whiteMen}>
            <img src=".\images\whiteMen.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black"}}>
              White T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.whitevest}>
            <img src=".\images\whitevest.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black"}}>
              White Vest
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 399.00</p>
          </div>
          <div className={styles.brownOversize}>
            <img src=".\images\brownOversize.jpg" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black"}}>
              Brown Oversize T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.backPrint}>
            <img src=".\images\backPrint.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black"}}>
              Back Printed T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
          <div className={styles.whitePrint}>
            <img src=".\images\whitePrint.avif" alt="" />
            <a href="" style={{ paddingTop: "10px", cursor: "pointer" , color: "black"}}>
              White T-Shirt
            </a>
            <p style={{ fontWeight: "700" }}>Rs. 999.00</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
