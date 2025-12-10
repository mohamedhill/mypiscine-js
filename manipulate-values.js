function filterValues(obj,callback){
    let res = {}
    for (let t in obj){
        if (callback(obj[t])){
            res[t]=obj[t]
        }
    }
return res

}

function mapValues(obj,callback){
let res = {}
for (let t in obj){
    res[t]= callback(obj[t])
}
return res
}

function reduceValues(obj,callback,acc=0){
   
    for (let t in obj){
        acc = callback(acc,obj[t])
    }
return acc
}


