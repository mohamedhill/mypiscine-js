function ionOut(sentence){
let res = []
 let arr =sentence.match(/(\w*)(?<=T|t)ion/g)
if (arr !==null){
for (let i =0 ; i<arr.length;i++){
res.push(arr[i].slice(0,-3))
}

}
return res
}

