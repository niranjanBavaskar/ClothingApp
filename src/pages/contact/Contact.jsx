import React from "react";
import "./contact.module.css";
import styles from "./contact.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const Contact = () => {
  return (
    <div className={styles.main}>
      <Header/>
    <div className={styles.contact}>
    <div className={styles.contactContainer}>
      <h2 style={{paddingTop: "20px"}}>CONTACT US </h2>
      <h4 style={{paddingTop: "10px"}}>WE LOVE TO HEAR FROM YOU & INTERACT WITH YOU.</h4>
      <p style={{lineHeight: "50px"}}>
        Our dedication to serving you extends beyond the last stitch of fabric
        to ensure every interaction with us is seamless and personalized <br/>
         We're here to listen, assist, and elevate your shopping experience to new
        heights.<br/>
          Need assistance or have any feedback, review, or ideas of
        inspiration to share? We're just a message away.<br/>
          For instant support or to share your valuable suggestions, reach out to us on WhatsApp at +91
        1111111111.If email is more your style, write to us at help.abc.com and
      expect thoughtful response.<br/>
         With Allstag, every touchpoint is an
        opportunity to show our commitment to you. Because for us, it's not just
        about fashion—it's about crafting a dialogue through designs that echo
        your voice and resonate with your personal narrative.<br/>
          Join us on this journey, where your input shapes our innovation, and together, we step
        beyond the conventional to create something extraordinary.
      </p>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
