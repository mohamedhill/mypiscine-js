const cutFirst = (str)=>str.slice(2)
const cutLast = (str)=> str.slice(0,-2)
const cutFirstLast = (str)=> str.slice(1,-2)
const keepFirst = (str)=> str.slice(0,2)
const keepLast = (str)=> str.slice(str.length-2)
const keepFirstLast = function(str){
    if (str.length===3){
        return keepFirst(str)+str.slice(2)
    }else if (str.length===2){
        return keepFirst(str)
    }

    return keepFirst(str)+keepLast(str)

}
console.log(cutFirst('abcdef'))