function adder(arr,i=0){
    return arr.reduce((n,n1)=>n+n1,i)



}

function sumOrMul(arr){
return arr.reduce((n,n1)=>n1%2===0?n*n1:n+n1)
}
function funcExec(arr , x=0){
   
        return arr.reduce((acc, fn) => fn(acc), x);
        
    

}
