export default (state = false, action) => {
  switch (action.type) {
    case "SET_IN":
      return action.payload;
    default:
      return state;
  }
};
