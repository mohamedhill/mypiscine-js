function split(str  ,spliter){
    let res = []
    if (spliter.length>1){

        spliter = spliter.trim()

    }
    let count = 0
for (let i = 0 ; i <str.length;i++){
if (str[i]===spliter){
res.push(str.slice(count,i).trim())
count = i+1
}
}
res.push(str.slice(count).trim())
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

 console.log(split('ggg - ddd - b', ' - '))
