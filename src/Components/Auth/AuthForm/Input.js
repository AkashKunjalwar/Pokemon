import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../AuthForm.module.css";

const Input = () => {
  const dispatch = useDispatch();
  const isInvalidEmail = useSelector(
    (state) => state.InputReducer.isInvalidEmail
  );
  const isInvalidPassword = useSelector(
    (state) => state.InputReducer.isInvalidPassword
  );
  const inputEmailHandler = (e) => {
    dispatch({
      type: "INPUT_EMAIL",
      payload: e.target.value,
    });
    dispatch({ type: "VALIDATE_EMAIL" });
  };

  const inputPasswordHandler = (e) => {
    dispatch({
      type: "INPUT_PASSWORD",
      payload: e.target.value,
    });
    dispatch({ type: "VALIDATE_PASSWORD" });
  };

  return (
    <div>
      <label className={styles.label}>
        {isInvalidEmail ? (
          <p className={styles.invalid}>Please Enter Valid Email</p>
        ) : (
          "Email ID"
        )}
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your Email ID"
        onChange={inputEmailHandler}
      />
      <label className={styles.label}>
        {!isInvalidPassword ? (
          "Password"
        ) : (
          <p className={styles.invalid}>
            Password should be atleast 7 characters long
          </p>
        )}
      </label>
      <input
        className={styles.input}
        type="password"
        placeholder="Enter your Password"
        onChange={inputPasswordHandler}
      />
    </div>
  );
};

export default Input;
