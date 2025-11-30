function sums(n) {
  let result = [];
  let queue = [{ arr: [], sum: 0, last: 1 }];
  
  while (queue.length > 0) {
      let { arr, sum, last } = queue.shift();
      for (let x = last; x <n; x++) {
      let newSum = sum + x;

      if (newSum === n) {
        result.push([...arr, x]);
      } 
      else if (newSum < n) {
        queue.push({
          arr: [...arr, x],
          sum: newSum,
          last: x
        });
      } 
      
    }
  }

  return result;
}


