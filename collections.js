
const arrToSet = (arr)=>new Set(arr)
const setToArr = (set)=>Array.from(set)
const arrToStr = (arr)=>arr.join("")
const setToStr = (set)=>arrToStr(setToArr(set))
const strToArr = (str)=>str.split("")
const strToSet = (str)=>new Set(str)
const mapToObj = (maps)=>Object.fromEntries(maps)   
const objToArr = (obj)=>Object.values(obj)
const objToMap = (obj)=>new Map(Object.entries(obj))
const arrToObj = (arr)=>Object.assign( {},arr)
const strToObj = (str)=> Object.assign({}, str.split(""));

const superTypeOf = function(item){
    if (item===null){
        return 'null'
    }
if (typeof item ==='object'){
    if (Array.isArray(item)){
        return 'Array'
    }else if (item instanceof Map){
        return 'Map'
    }else if (item instanceof Set){
        return 'Set'
    }else{
        return 'Object'
    }
}else if (typeof item==='string'){
    return 'String'
}else if(typeof item ==='undefined'){
    return 'undefined'
}else if (typeof item==='function'){
    return 'Function'
}else if (typeof item === 'number'){
return 'Number'
}else if (Number.isNaN(item)){
    return 'Number'
}

}
