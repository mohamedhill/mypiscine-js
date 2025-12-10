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

function reduceKeys(obj, callback) {
let index = 0
  for (let t in obj) {
let acc = undefined
console.log(acc);

    acc = callback(acc, t);


  }
  return acc;
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