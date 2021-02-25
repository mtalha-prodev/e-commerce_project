export const reducer = (state, action) => {
  switch (action.type) {
    case "HUMBERGER":
      return {
        ...state,
        menu: true,
      };
    case "HUMBERGER2":
      return {
        ...state,
        menu: false,
      };
    case "CATEGORY":
      return {
        ...state,
        category: false,
      };
    case "CLOSE":
      return {
        state,
      };
    default:
      return state;
  }
};
