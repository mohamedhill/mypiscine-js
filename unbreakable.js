function split(str  ,spliter){
let res = []
let count =0 
if (spliter.length===0){
    return [str]
}
for (let i = 0 ; i < str.length;i++){
   if (str.slice(i,i+spliter.length)===spliter){
    res.push(str.slice(count,i))
    count = i +spliter.length
    i += spliter.length-1
   }
}
res.push(str.slice(count))
return res

}

 function join(arr,joines){

let res =""
for (let i = 0 ; i<arr.length;i++){
    res+= arr[i]
    if (i != arr.length-1){
        res+=joines
    }
}

return res
 }

