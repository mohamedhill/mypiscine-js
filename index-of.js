function indexOf(arr,target,first){
if (first === undefined){
    first = 0
}
console.log(first)
for (let i = first ; i< arr.length;i++){
    if (arr[i] ===target){
        return i
    }
}
return -1
}
function lastIndexOf(arr,target,last){
if (last === undefined){
  last =  arr.length
}
let res = []
for (let i = 0; i<=last ;i++){
    if (arr[i] ===target){
        res.push(i)

    }
}

if (res.length>0){
    return res[res.length-1]
}
return -1

}

const includes = (arr,target)=>indexOf(arr,target)!==-1?true:false

