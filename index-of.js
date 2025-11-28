function indexOf(arr,target){
for (let i = 0 ; i< arr.length;i++){
    if (arr[i] ===target){
        return i
    }
}
return -1
}
function lastIndexOf(arr,target){
let res = []
for (let i = 0 ; i< arr.length;i++){
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
