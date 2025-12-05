function fold(arr,callback,acc=0){
    for (let i = 0 ; i <arr.length;i++){
    acc=callback(acc,arr[i])
}
return acc
}

function foldRight(arr,callback,acc=0){
  for (let i = arr.length-1; i >=0;i--){
    acc=callback(acc,arr[i])
}
return acc
}

function reduce(arr,callback,acc=arr[0]){
for (let i = 1 ; i <arr.length;i++){
    acc=callback(acc,arr[i])
}

return acc
}
function reduceRight(arr,callback,acc=arr[arr.length-1]){
  for (let i = arr.length-2; i >=0;i--){
    acc=callback(acc,arr[i])
}
return acc
}