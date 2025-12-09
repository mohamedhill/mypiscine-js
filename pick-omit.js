function pick(obj,inc){
let res = []
let keys = Object.keys(obj)
if (typeof inc === 'string'){
    keys.forEach((key)=>{
    if (inc.includes(key)){
        res[key]=obj[key]
    }
    })
}else{
    keys.forEach((key)=>{
    if (inc.some((x)=>x.includes(key))){
        
        res[key]=obj[key]
    }
    })
}
return res
}

