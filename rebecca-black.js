const isFriday = (date) => (date.getDay() === 5 ? true : false);
const isWeekend = (date) =>
  date.getDay() === 6 || date.getDay() === 0 ? true : false;

function isLeapYear(date) {
  const year = date.getFullYear();
  return new Date(year, 1, 29).getMonth() === 1;
}

function isLastDayOfMonth(date) {
  date = new Date(date);
  let month = date.getMonth();

  date.setDate(date.getDate() + 1);
  date = new Date(date)
  return date.getMonth()!== month ? true :false
}


