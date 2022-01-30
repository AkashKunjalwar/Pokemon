const initialState = {
  enteredEmail: "",
  isInvalidEmail: null,
  enteredPassword: "",
  isInvalidPassword: null,
  isInvalidConfirmPassword: null,
};

const InputReducer = (state = initialState, action) => {
  if (action.type === "INPUT_EMAIL") {
    state.enteredEmail = action.payload;

    return {
      enteredEmail: state.enteredEmail,
      isInvalidEmail: state.isInvalidEmail,
      enteredPassword: state.enteredPassword,
      isValidPassword: state.isInvalidPassword,
      isInvalidConfirmPassword: state.isInvalidConfirmPassword,
    };
  }
  if (action.type === "VALIDATE_EMAIL") {
    if (
      !state.enteredEmail.includes("@") ||
      !state.enteredEmail.includes(".com")
    ) {
      state.isInvalidEmail = true;
    } else {
      state.isInvalidEmail = false;
    }
    return {
      enteredEmail: state.enteredEmail,
      isInvalidEmail: state.isInvalidEmail,
      enteredPassword: state.enteredPassword,
      isValidPassword: state.isInvalidPassword,
      isInvalidConfirmPassword: state.isInvalidConfirmPassword,
    };
  }
  if (action.type === "INPUT_PASSWORD") {
    state.enteredPassword = action.payload;
    return {
      enteredEmail: state.enteredEmail,
      isInvalidEmail: state.isInvalidEmail,
      enteredPassword: state.enteredPassword,
      isValidPassword: state.isInvalidPassword,
      isInvalidConfirmPassword: state.isInvalidConfirmPassword,
    };
  }
  if (action.type === "VALIDATE_PASSWORD") {
    if (state.enteredPassword.trim().length > 6) {
      state.isInvalidPassword = false;
    } else {
      state.isInvalidPassword = true;
    }
    return {
      enteredEmail: state.enteredEmail,
      isInvalidEmail: state.isInvalidEmail,
      enteredPassword: state.enteredPassword,
      isInvalidPassword: state.isInvalidPassword,
      isInvalidConfirmPassword: state.isInvalidConfirmPassword,
    };
  }
  if (action.type === "VALIDATE_CONFIRMPASSWORD") {
    if (
      action.payload.trim().length > 6 &&
      state.enteredPassword === action.payload
    ) {
      state.isInvalidConfirmPassword = false;
    } else {
      state.isInvalidConfirmPassword = true;
    }
    return {
      enteredEmail: state.enteredEmail,
      isInvalidEmail: state.isInvalidEmail,
      enteredPassword: state.enteredPassword,
      isInvalidPassword: state.isInvalidPassword,
      isInvalidConfirmPassword: state.isInvalidConfirmPassword,
    };
  }
  return state;
};

export default InputReducer;
