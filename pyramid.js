function pyramid(str , num){
let res = ""
let count = 1
for (let i = 1;i<=num;i++){
res += ' '.repeat((num-i)*str.length)+str.repeat(count)+'\n'
count +=2

}
res = res.slice(0,-1)



return res

}

