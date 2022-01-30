const initialState = {
  isLoggedIn: false,
  isLogin: false,
  isLoading: false,
};

const LoginReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_STATUS") {
    state.isLogin = !action.payload;
    return {
      isLoggedIn: state.isLoggedIn,
      isLogin: state.isLogin,
      isLoading: state.isLoading,
    };
  }

  if (action.type === "UPDATE_LOGGEDIN") {
    state.isLoggedIn = action.payload;
    return {
      isLoggedIn: state.isLoggedIn,
      isLogin: state.isLogin,
      isLoading: state.isLoading,
    };
  }

  if (action.type === "UPDATE_LOADING") {
    state.isLoading = action.payload;
    return {
      isLoggedIn: state.isLoggedIn,
      isLogin: state.isLogin,
      isLoading: state.isLoading,
    };
  }
  return state;
};

export default LoginReducer;
