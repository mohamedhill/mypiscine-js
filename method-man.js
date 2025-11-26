const words = (sentence)=>sentence.split(" ")
const sentence = (arr)=>arr.join(" ")
const  yell = (str)=>str.toUpperCase()
const whisper = (str)=>"*"+str.toLowerCase()+"*"
const capitalize = (str)=>yell(str.charAt(0)) + whisper(str.slice(1));

