function longWords(arr){
return arr.every((n)=>typeof n === 'string'&&n.length>=5)
}
function oneLongWord(arr){
return arr.some((n)=>typeof n === 'string'&& n.length>=10)


}
function noLongWords(arr){
return !arr.some((n)=>typeof n === 'string'&&n.length>=7)

}