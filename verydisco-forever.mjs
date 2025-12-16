import { writeFile } from 'node:fs/promises';


let input = process.argv[2]

let splited = input.split(' ')

let test = splited.map(word => {
let word1 = word.slice(0,Math.ceil(word.length/2))
let word2 = word.slice(Math.ceil(word.length/2))

return word2+word1
    
});


let res = test.join(' ')
writeFile('verydisco-forever.txt',res)