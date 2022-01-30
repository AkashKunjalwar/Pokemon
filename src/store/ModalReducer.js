const initialState = {
  showModal: false,
  message: "",
  isRedButton: false,
};

const ModalReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_MODAL") {
    state.showModal = action.payload.showModal;
    state.message = action.payload.message;
    state.isRedButton = action.payload.isRedButton;
    return {
      showModal: state.showModal,
      message: state.message,
      isRedButton: state.isRedButton,
    };
  }
  return state;
};

export default ModalReducer;
