function sameAmount(sentence,reg1,reg2){
    let freg=new RegExp(reg1,reg1.flags);let freg2 = new RegExp(reg2,reg2.flags)
    if (!freg2.flags.includes('g')){
        reg2=  new RegExp(freg2,'g')
    }
    if (!freg.flags.includes('g')){
      reg1=  new RegExp(freg,'g')
        
    }
    let match1 =sentence.match(reg1)
    let match2 = sentence.match(reg2)

    if (match1 === null){
        match1 = []
    }
     if (match2 === null){
        match2 = []
    }
if (match1.length=== match2.length){
    return true
}
return false


}
