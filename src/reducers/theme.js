const initialState = { isLight: true };

const theme = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, isLight: !state.isLight };

    default:
      return state;
  }
};

export default theme;
