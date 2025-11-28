function chunk(arr ,size){
let res = []
let count = 0
for (let i = 0 ; i<arr.length;i+=size){
    if (i!==0){

        res.push(arr.slice(count,i))
    }
count = i
}

res.push(arr.slice(count))
return res


}
