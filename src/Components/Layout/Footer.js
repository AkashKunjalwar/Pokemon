import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <ul>
        <p>Copyright The Poke World @ {year} |</p>
        <li>
          <i className="fab fa-instagram fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-facebook-square fa-2x"></i>
        </li>
        <li>
          <i className="fab fa-linkedin-in fa-2x"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
