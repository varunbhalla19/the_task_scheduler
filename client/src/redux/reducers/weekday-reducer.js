const getDay = new Date().toDateString();

const weekDayReducer = (state = getDay, action) => {
  switch (action.type) {
    case "SET_WDAY":
      return action.payload;
    default:
      return state;
  }
};

export default weekDayReducer;
