function triangle(str , num){
let res = ""
for (let i = 1 ; i <=num;i++){
if (i!= num){
    res += str.repeat(i)+"\n"
}else{
    res += str.repeat(i)
}
}
return res
}
