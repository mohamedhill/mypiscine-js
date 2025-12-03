function isValid(date) {
  if (isNaN(date)  || typeof date === "string")
    return false;
  return true;
}
 function isAfter(date1,date2 ){
return date1>date2


 }

function isBefore(d1, d2) {
  return d1<d2
 
}

function isFuture(date) {
  if (!isValid(date)) {
    return false;
  }
  if (new Date(date).getTime() > Date.now()) {
    return true;
  }
  return false;
}

function isPast(date) {
  if (!isValid(date)) {
    return false;
  }
  if (new Date(date).getTime() < Date.now()) {
    return true;
  }
  return false;
}