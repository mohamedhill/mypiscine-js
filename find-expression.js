function findExpression(num){
let qu = [[1,'1']]

while (qu.length>0){

    let [current, seq] = qu.shift();
    if (current + 4=== num ){
    return seq +' '+ add4
}else{
     
qu.push([current+4,seq+' '+add4])

}
if (current * 2===num){
 
    return seq + ' '+mul2
}else {

  qu.push([current*2,seq+' '+mul2])
}

}

return undefined
}

