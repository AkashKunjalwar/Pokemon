const initialState = {
  param: null,
};

const PokeParamReducer = (state = initialState, action) => {
  if (action.type === "FETCH_POKEPARAM") {
    state.param = action.payload;
    return {
      param: state.param,
    };
  }
  return state;
};

export default PokeParamReducer;
