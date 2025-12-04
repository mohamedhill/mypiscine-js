function matchCron(cron, date) {
  cron = cron.split(" ");

  const [Minute, Hour, daymonth, monthyear, dayweek] = cron;
  const input = [
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay(),
  ];
  const test = [Minute, Hour, daymonth, monthyear, dayweek];
  console.log(input);
  console.log(test);

  for (let i = 0; i < 5; i++) {
    if (cron[i] === "*") continue;
    if (input[i] !== parseInt(test[i])) {
      return false;
    }
  }
  return true;
}
