function slice(item ,start ,end){
let res =  []
if (end === undefined){
    end = item.length
}
if (start <0){
    
    start += item.length
}
if (end<0){
    end += item.length
}
if (typeof item ==='string'){
    for (let i = start ; i< end;i++){
  
    res += item[i]
}
}else {

    for (let i = start ; i< end;i++){
      
        res.push(item[i])
    }
}
return res

}


