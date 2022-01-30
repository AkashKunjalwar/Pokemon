const initialState = {
  pokelistData: [],
};

const PokeListReducer = (state = initialState, action) => {
  if (action.type === "FETCH_POKELIST") {
    state.pokelistData = [...state.pokelistData, ...action.payload];
    return {
      pokelistData: state.pokelistData,
    };
  }
  if (action.type === "RESET_POKELIST") {
    state.pokelistData = [];
    return {
      pokelistData: state.pokelistData,
    };
  }
  return state;
};

export default PokeListReducer;
