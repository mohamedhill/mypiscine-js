function indexOf(arr,target,first){
for (let i = first ; i< arr.length;i++){
    if (arr[i] ===target){
        return i
    }
}
return -1
}
function lastIndexOf(arr,target,first){
let res = []
for (let i = first ; i< arr.length;i++){
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
