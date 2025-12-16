let input = process.argv.slice(2)

let splited = input.join(' ').split(' ')

let test = splited.map(word => {
let word1 = word.slice(0,Math.ceil(word.length/2))
let word2 = word.slice(Math.ceil(word.length/2))
console.log(word1,word2);

return word2+word1
    
});


console.log(test.join(' '));
