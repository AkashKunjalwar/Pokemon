import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  const logoutHandler = (e) => {
    dispatch({
      type: "UPDATE_LOGGEDIN",
      payload: false,
    });
    dispatch({
      type: "INPUT_EMAIL",
      payload: "",
    });
    dispatch({
      type: "INPUT_PASSWORD",
      payload: "",
    });
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>
        The <span className={styles.span}>Poke</span>World
      </h1>
      <ul>
        {isLoggedIn && (
          <li>
            <Link className={styles.link} to="/pokelist">
              PokeList
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link onClick={logoutHandler} className={styles.link} to="/">
              Logout
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link className={styles.link} to="/">
              Login/SignUp
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
