function invert(obj){
let res = {}
for (let t in obj){
res[obj[t]]=t
}

return res

}

