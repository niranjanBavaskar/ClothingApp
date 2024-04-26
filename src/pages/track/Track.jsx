import React from "react";
import "./track.module.css";
import styles from "./track.module.css";

export const Track = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img
          src="https://www.allstag.com/cdn/shop/files/black-1.png?v=1711779496"
          alt=""
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="https://all-stag.shiprocket.co/post_order/img/track_icon.png"
              alt=""
            />
            <p style={{ fontWeight: "600", color: "grey", fontSize: " large" }}>
              Track / Return your shipment
            </p>
          </div>
          <hr style={{ width: "95%" }} />
          <div className={styles.label}>
            <label style={{ fontWeight: "600", paddingLeft: "30px" }}>
              Search by :
            </label>
            <input type="radio" name="gender" value="orderid" /> Order ID
            <input type="radio" name="gender" value="awb" /> AWB
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="Enter Order ID to search" />
          </div>
          <div className={styles.btn}>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <div className={styles.email}>
            <p>Email us at: help.allstag@gmail.com</p>
          </div>
          |<div className={styles.call}>Call us at: 1111111111</div>|
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <div className={styles.ship}>
          <p>Powered By</p>
          <img
            src="https://all-stag.shiprocket.co/post_order/img/logo-v1-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
