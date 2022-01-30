import React from "react";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const { message, isRedButton } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: {
        showModal: false,
        message: "",
        isRedButton: false,
      },
    });
  };
  return (
    <div className={styles.modalBackground}>
      <h1>{message}</h1>
      <button
        onClick={clickHandler}
        className={isRedButton ? styles.redButton : styles.greenButton}
      >
        Ok
      </button>
    </div>
  );
};

export default Modal;
