import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import ReactDOM from "react-dom";
import styles from "../AuthForm.module.css";
import Input from "./Input";
import useFetch from "../../../Hooks/useFetch";

const Login = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ModalReducer.showModal);
  const { enteredEmail, enteredPassword, isInvalidEmail, isInvalidPassword } =
    useSelector((state) => state.InputReducer);
  const { submitForm } = useFetch();

  const formSubmitHandler = (e) => {
    if (!isInvalidEmail && !isInvalidPassword) {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]";
      submitForm(
        url,
        { enteredEmail, enteredPassword },
        {
          message:
            "Either the user do not exist or the entered details are not valid",
          isRedButton: true,
        }
      );
    } else {
      dispatch({
        type: "TOGGLE_MODAL",
        payload: {
          showModal: true,
          message: "Please enter valid details",
          isRedButton: true,
        },
      });
    }
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2 className={styles.header}>LogIn</h2>
      <form
        onSubmit={formSubmitHandler}
        className={showModal ? styles.modalBody : styles.form}
      >
        <Input />
        <button className={styles.button}>Login</button>
      </form>
      {showModal &&
        ReactDOM.createPortal(<Modal />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Login;
