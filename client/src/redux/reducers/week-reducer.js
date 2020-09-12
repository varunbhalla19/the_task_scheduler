Date.setDateNum = (date, num) => {
  let d = new Date(date);
  d.setDate(num + date.getDate());
  if (d.toDateString() === new Date().toDateString()) {
    d.isToday = true;
  }
  return d;
};

Date.getFirstWeekSunday = () => {
  let d = new Date();
  let d2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  let day = d2.getDay();
  d2.setDate(d2.getDate() - day);
  return d2;
};

const getInitWeekDays = () => {
  console.log("initWeekDays called");
  let ar = new Array(7).fill(0);
  let fd = Date.getFirstWeekSunday();
  let newAr = ar.map((el, index) => Date.setDateNum(fd, index));
  return newAr;
};

const getNextWeek = (d) => {
  let ar = new Array(7).fill(0);
  return ar.map((el, index) => Date.setDateNum(d, index + 1));
};

const genPrevWeek = (d) => {
  let ar = new Array(7).fill(0);
  return ar.map((el, index) => Date.setDateNum(d, -1 - index)).reverse();
};

const initWeek = getInitWeekDays();

export default (state = initWeek, action) => {
  switch (action.type) {
    case "NEXT_WEEK":
      return getNextWeek(action.payload);
    case "PREV_WEEK":
      return genPrevWeek(action.payload);
    case "INIT_WEEK":
      return getInitWeekDays();
    default:
      return state;
  }
};
