const replica = (traget, ...obj) =>{
    for(let i = 0; i < obj.length; i++){
        const ele = obj[i];
        for (let key in ele) {
            const val = ele[key]
            if (isPlainObject(val) && isPlainObject(traget[key])) {
                replica(traget[key],val)
            } else {
                traget[key]=val
            }
        }
    }
    return traget
}

const isPlainObject = (obj) => {
    return (
        obj !== null && typeof obj === "object" && !Array.isArray(obj) &&!(obj instanceof RegExp) &&
    !(obj instanceof Date)
    )
}