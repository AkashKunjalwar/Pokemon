const initialState = {
  data: {
    name: "",
    height: "",
    weight: "",
    imageURL: "",
    types: [],
    attacks: [],
  },
};

const PokeDataReducer = (state = initialState, action) => {
  if (action.type === "FETCH_POKEDATA") {
    state.data.name = action.payload.name;
    state.data.height = +action.payload.height / 10;
    state.data.weight = +action.payload.weight / 10;
    state.data.imageURL =
      action.payload.sprites.other["official-artwork"].front_default;

    if (state.data.types.length < 1) {
      state.data.types = [...state.data.types, ...action.payload.types];
    } else {
      state.data.types = action.payload.types;
    }
    if (state.data.types.length < 1) {
      state.data.attacks = [...state.data.attacks, ...action.payload.moves];
    } else {
      state.data.attacks = action.payload.moves;
    }
    return {
      data: {
        name: state.data.name,
        imageURL: state.data.imageURL,
        height: state.data.height,
        weight: state.data.weight,
        types: state.data.types,
        attacks: state.data.attacks,
      },
    };
  }
  return state;
};

export default PokeDataReducer;
