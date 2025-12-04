function firstDayWeek(weekNumber, yearString) {
  const year = parseInt(yearString);
  const date = new Date(0);
  date.setFullYear(year, 0, 1);
  date.setHours(0, 0, 0, 0);
  const dayOfWeek = date.getDay();
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  date.setDate(date.getDate() - daysToMonday);
  date.setDate(date.getDate() + (weekNumber - 1) * 7);
  const firstJan = new Date(0);
  firstJan.setFullYear(year, 0, 1);
  firstJan.setHours(0, 0, 0, 0);
  if (date.getTime() < firstJan.getTime()) {
    date.setFullYear(year, 0, 1);
  }
  const dd = date.getDate();
  const mm = date.getMonth() + 1;

  
  const yyyy = String(date.getFullYear()).padStart(4, "0");
  return [dd < 10 ? "0" + dd : dd, mm < 10 ? "0" + mm : mm, yyyy].join("-");

}
