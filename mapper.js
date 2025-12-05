function map(arr,callback){
let res = []
for (let i = 0;i <arr.length;i++){
res.push(callback(arr[i],i,arr))

}
return res

}
function flatMap(arr,callback){
    let res = []
for (let i = 0 ; i <arr.length;i++){
let temp = callback(arr[i],i,arr)
if (Array.isArray(temp)){
    res.push(...temp)
}else{
    res.push((temp))
}

}
return res
}