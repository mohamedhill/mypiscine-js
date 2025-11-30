const letterSpaceNumber = (sentence)=>sentence.match(/[a-zA-Z]{1} [0-9](?![a-zA-Z0-9])/g)||[]
