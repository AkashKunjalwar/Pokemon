import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../../../Assets/Pokeball.png";
import useFetch from "../../../Hooks/useFetch";
import styles from "./PokeList.module.css";
import Loader from "../../UI/Loader";

const PokeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const pokelistData = useSelector(
    (state) => state.PokeListReducer.pokelistData
  );
  const isLoading = useSelector((state) => state.LoginReducer.isLoading);
  const { fetchPokeList } = useFetch();

  useEffect(() => {
    fetchPokeList();
    //eslint-disable-next-line
  }, []);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setSearchValue("");
    dispatch({
      type: "FETCH_POKEPARAM",
      payload: e.target.id,
    });
    dispatch({
      type: "RESET_POKELIST",
    });
    navigate(`/pokelist/${e.target.id}`);
  };

  return (
    <section className={styles.mainPage}>
      {!isLoading && (
        <div className={styles.sideMenu}>
          <div className={styles.searchBarDiv}>
            <form>
              <input
                className={styles.searchBar}
                type="search"
                placeholder="Search for your Pokemon"
                onChange={onChangeHandler}
                value={searchValue}
              />
            </form>
          </div>
          <div className={styles.collectionItemsList}>
            <ul>
              {pokelistData
                .filter((searchedPoke) => {
                  if (searchValue === "") {
                    return searchedPoke;
                  } else if (
                    searchedPoke.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return searchedPoke;
                  }
                })
                .map((searchedPoke) => (
                  <li
                    onClick={clickHandler}
                    id={searchedPoke.name}
                    key={Math.random()}
                  >
                    <img src={image} alt="" />
                    {searchedPoke.name.toUpperCase()}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default PokeList;
