import React from "react";
import { useSelector } from "react-redux";
import styles from "./PokeImage.module.css";

const PokeImage = () => {
  const data = useSelector((state) => state.PokeDataReducer.data);

  return (
    <div className={styles.column}>
      <img src={data.imageURL} alt="pokeImage" />
    </div>
  );
};

export default PokeImage;
