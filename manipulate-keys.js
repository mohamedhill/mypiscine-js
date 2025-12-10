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

function reduceKeys(obj, func, acc) {
    let keys = Object.keys(obj)
    let startIndex = 0
    if (acc === undefined && keys.length > 0) {
        acc = keys[0]
        startIndex = 1
    }
    for (let i = startIndex; i < keys.length; i++) {
        acc = func(acc, keys[i])
    }
    return acc
}



let cart= {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
  }
  
  console.log(reduceKeys(cart, (acc, cr) => acc.concat(", ", cr)));
  
  //'vinegar, sugar, oil, onion, garlic, paprika',