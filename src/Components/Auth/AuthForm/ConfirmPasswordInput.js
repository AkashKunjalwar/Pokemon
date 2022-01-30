import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../AuthForm.module.css";

const ConfirmPasswordInput = () => {
  const dispatch = useDispatch();
  const { isInvalidConfirmPassword } = useSelector(
    (state) => state.InputReducer
  );

  const inputConfirmPasswordHandler = (e) => {
    dispatch({
      type: "VALIDATE_CONFIRMPASSWORD",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <label className={styles.label}>
        {!isInvalidConfirmPassword ? (
          "Confirm Password"
        ) : (
          <p className={styles.invalid}>
            Password should be atleast 7 characters long and should match
          </p>
        )}
      </label>{" "}
      <input
        id="confirmPassword"
        className={styles.input}
        type="password"
        placeholder="Confirm your Password"
        onChange={inputConfirmPasswordHandler}
      />
    </div>
  );
};

export default ConfirmPasswordInput;
