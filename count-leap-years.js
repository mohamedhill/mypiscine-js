function countLeapYears(date){
let year = date.getFullYear();
let count = 0;
let i = 1
while (i<year){
    
    if (date = new Date(i, 1, 29), date.getDate() === 29){
        count++;
    } 
  
    i++
    
    
}
return count
}
