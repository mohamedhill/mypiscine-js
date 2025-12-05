function adder(arr,i=0){
    return arr.reduce((n,n1)=>n+n1,i)



}

function sumOrMul(arr,i=0){
return arr.reduce((n,n1)=>n1%2===0?n*n1:n+n1,i)
}
function funcExec(arr , x=0){
   
        return arr.reduce((acc, fn) => fn(acc), x);
        
    

}
console.log(sumOrMul([18, 17, 7, 13, 25], 12));
