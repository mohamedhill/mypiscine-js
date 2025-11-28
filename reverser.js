function reverse(arr){
    let res = []

if (typeof arr ==='string'){
for (let i = arr.length-1;i>=0;i--){ 
res+=arr[i]
}
}else{

    for (let i = arr.length-1;i>=0;i--){
    res.push(arr[i])
    }
}
return res
}
