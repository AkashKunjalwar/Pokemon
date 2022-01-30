import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AuthForm.module.css";
import Login from "./AuthForm/Login";
import SignUp from "./AuthForm/SignUp";

const AuthForm = () => {
  const isLogin = useSelector((state) => state.LoginReducer.isLogin);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch({
      type: "LOGIN_STATUS",
      payload: isLogin,
    });
    e.preventDefault();
  };

  return (
    <Fragment>
      {isLogin ? <Login /> : <SignUp />}
      <p className={styles.para} onClick={clickHandler}>
        {isLogin ? "Create a New Account" : "Login With Existing Account"}
      </p>
    </Fragment>
  );
};

export default AuthForm;
