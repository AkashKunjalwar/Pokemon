import React, { useEffect } from "react";
import PokeDataform from "./PokeData/PokeDataform";
import styles from "./PokeData.module.css";
import PokeImage from "./PokeData/PokeImage";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import Loader from "../../UI/Loader";

const PokeData = () => {
  const { fetchPokeData } = useFetch();
  const isLoading = useSelector((state) => state.LoginReducer.isLoading);

  useEffect(() => {
    fetchPokeData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.background}>
      {!isLoading && (
        <div className={styles.row}>
          <PokeImage />
          <PokeDataform />
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default PokeData;
