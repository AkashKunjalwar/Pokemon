import React, { Fragment } from "react";
import styles from "../AuthForm.module.css";
import Modal from "../../UI/Modal";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import useFetch from "../../../Hooks/useFetch";
import ConfirmPasswordInput from "./ConfirmPasswordInput";

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    enteredEmail,
    enteredPassword,
    isInvalidEmail,
    isInvalidPassword,
    isInvalidConfirmPassword,
  } = useSelector((state) => state.InputReducer);
  const showModal = useSelector((state) => state.ModalReducer.showModal);
  const { submitForm } = useFetch();

  const formSubmitHandler = (e) => {
    if (!isInvalidEmail && !isInvalidPassword && !isInvalidConfirmPassword) {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]";
      submitForm(
        url,
        { enteredEmail, enteredPassword },
        {
          message:
            "Either the user already exists or the entered details are not valid",
          isRedButton: true,
        }
      );
    } else {
      dispatch({
        type: "TOGGLE_MODAL",
        payload: {
          showModal: true,
          message: "Please provide valid details",
          isRedButton: true,
        },
      });
    }
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2 className={styles.header}>SignUp</h2>
      <form
        onSubmit={formSubmitHandler}
        className={showModal ? styles.modalBody : styles.form}
      >
        <Input />
        <ConfirmPasswordInput />
        <button className={styles.button}>SignUp</button>
      </form>
      {showModal &&
        ReactDOM.createPortal(<Modal />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default SignUp;
