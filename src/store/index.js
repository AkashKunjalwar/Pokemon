import { combineReducers, createStore } from "redux";
import LoginReducer from "./LoginReducers";
import PokeListReducer from "./PokeListReducer";
import PokeParamReducer from "./PokeParamReducer";
import PokeDataReducer from "./PokeDataReducer";
import ModalReducer from "./ModalReducer";
import InputReducer from "./InputReducer";

const Reducer = combineReducers({
  LoginReducer,
  PokeListReducer,
  PokeParamReducer,
  PokeDataReducer,
  ModalReducer,
  InputReducer,
});

const store = createStore(Reducer);

export default store;
