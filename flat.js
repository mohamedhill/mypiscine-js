function flat(arr,count=0){
let res = []
for (let item of arr){
    if (count >0){
    if (Array.isArray(item)){
        res=res.concat(flat(item,count-1))
        count--
    }else if (item !== undefined){
        res.push(item)

    }

}else if (item !== undefined){
     res.push(item)

}
}
return res

}

console.log(flat([1,2,3,4,,[6],[9]],1))