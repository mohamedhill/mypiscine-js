function multiply(a,b){
let res = 0
let i  = 0
let neg = false
if (a<0&&b>0||a>0&&b<0){
neg = true
}
a = Math.abs(a)
b = Math.abs(b)
while(i<b){

    res += a
    i++
}
if (neg){
    return -res
}
return res 

}
function divide(a,b){
let neg = false
res = 0
if (b==0){
    return
}
if (a<0&&b>0||a>0&&b<0){
neg = true
}
a = Math.abs(a)
b = Math.abs(b)
while(a>0){
res++
a -= b
}

if (neg){
    return -res
}
return res

}


function modulo(a, b) {
let neg = false
if (a<0){
neg = true
}
a = Math.abs(a)
b = Math.abs(b)
while(a>=b){

a -= b
}

if (neg){
    return -a
}
return a

}

 
