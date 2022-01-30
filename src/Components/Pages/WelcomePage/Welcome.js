import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.background}>
      <h2>Congratulations you are logged in!!</h2>
      <h1>
        Welcome to The <span className={styles.span}>Poke</span>World
      </h1>
    </div>
  );
};

export default Welcome;
