function filterShortStateName(arr){
    return  arr.filter(x=>x.length< 7)

}
function filterStartVowel(arr){
return arr.filter((x)=>/^[aeiou]/i.test(x))
}
function filter5Vowels(arr,num=5){
return arr.filter((x)=>x.match(/[aeiou]/g).length>=num)
}
function filter1DistinctVowel(arr){
return arr.filter((x)=>{

    let test = x.toLowerCase().match(/[aeiou]/g)
    return new Set(test).size===1
}
)
}

function multiFilter(arr) {
return arr.filter((n) => {
    let cap = n.capital.length >=8
    let nam = /^[^aeiou]/i.test(n.name)
    let tage = /[aeiou]+/i.test(n.tag)
    return cap && nam && tage && n.region!=="South"
  });
}

