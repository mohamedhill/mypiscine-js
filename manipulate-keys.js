function filterKeys(obj, callback) {
  let res = {};
  for (let t in obj) {
    if (callback(t)) {
      res[t] = obj[t];
    }
  }
  return res;
}

function mapKeys(obj, callback) {
  let res = {};
  for (let t in obj) {
      res[callback(t)] = obj[t] ;
   
  }
  return res;
}

function reduceKeys(obj, callback, acc='') {

  for (let t in obj) {

    
    acc = callback(acc.slice(1), t);
  }
  return acc;
}
