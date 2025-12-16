import { readFile } from 'node:fs/promises';
let file = process.argv[2]
let input = await readFile(file,"utf-8")




let splited = input.split(' ')

let test = splited.map(word => {
let word1 = word.slice(0,Math.floor(word.length/2))
let word2 = word.slice(Math.floor(word.length/2))

return word2+word1
    
});


let res = test.join(' ')
console.log(res);
