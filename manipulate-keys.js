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

function reduceKeys(obj, callback,acc=Object.keys(obj)[0]) {
  let index = 0
  for (let t in obj) {
    if (index===0)continue
    acc = callback(acc, t);
  }
  return acc;
}



