function flat(arr,count=1){
let res = []
console.log(count)
for (let item of arr){
    if (count >0){
    if (Array.isArray(item)){
        console.log("item:",item,"res:",res)
        res=res.concat(flat(item,count-1))
        
    }else if (item !== undefined){
        res.push(item)

    }

} else if (item !== undefined){
     res.push(item)

} 
}
return res

}

console.log(flat([1, [2, [3], [4, [5]]]], 2)) 
//[1, 2, 3, 4, [5]]