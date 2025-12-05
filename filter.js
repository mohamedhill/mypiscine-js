function filter(arr,callback){
let res = []
for (let i = 0 ; i< arr.length;i++){
if(callback(arr[i],i,arr)){
    res.push(arr[i])
}
}
return res

}
function reject(arr,callback){
    let res = []
for (let i = 0 ; i< arr.length;i++){
if(!callback(arr[i],i,arr)){
    res.push(arr[i])
}
}

return res
}


function partition(arr , callback){
    let truthy= filter(arr,callback)
    let falsy = reject(arr,callback)

return [truthy,falsy]

}