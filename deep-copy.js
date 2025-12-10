const deepCopy = (obj) => {
    let res;
    if(Array.isArray(obj)){
        res = [];
    } else {
        res = {}
    }
    if (Array.isArray(obj)){
        for(let i = 0 ; i < obj.length; i++){
            if (Array.isArray(obj[i])){
                res.push(deepCopy(obj[i]))
            } else {
                res.push(obj[i])
            }
        }
    } else {
        for (let key of Object.keys(obj)) {
            if(typeof obj[key] === "object" && obj[key] !== null) {
                res[key] = deepCopy(obj[key])
            } else {
                res[key] = obj[key]
            }
        }
    }
    return res;
}
