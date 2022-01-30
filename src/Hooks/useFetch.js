import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useFetch = () => {
  const dispatch = useDispatch();
  const param = useSelector((state) => state.PokeParamReducer.param);
  const navigate = useNavigate();

  const submitForm = (url, data, status) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: data.enteredEmail,
        password: data.enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: "UPDATE_LOGGEDIN",
            payload: true,
          });
          return response.json();
        } else {
          dispatch({
            type: "TOGGLE_MODAL",
            payload: {
              showModal: true,
              message: status.message,
              isRedButton: status.isRedButton,
            },
          });
        }
      })
      .then((data) => {
        navigate("/welcome");
      });
  };

  const fetchPokeList = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1118"
    );
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    const data = await response.json();
    dispatch({
      type: "FETCH_POKELIST",
      payload: data.results,
    });
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const fetchPokeData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param}`;
    const response = await fetch(url);
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    const data = await response.json();
    dispatch({
      type: "FETCH_POKEDATA",
      payload: data,
    });
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  return {
    submitForm,
    fetchPokeList,
    fetchPokeData,
  };
};

export default useFetch;
