function findExpression(num){
let qu = [[1,'1']]

while (qu.length>0){

    let [current, seq] = qu.shift();
    if (current + 4=== num ){
    return seq +' '+ '+4'
}else{
     
qu.push([current+4,seq+' '+'+4'])

}
if (current * 2===num){
 
    return seq + ' '+'*2'
}else {

  qu.push([current*2,seq+' '+'*2'])
}

}

return undefined
}

