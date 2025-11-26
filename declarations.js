let escapeStr = '`\/"\''

const arr = [4,'2']

let obj ={
    str : "hi",
    num : 10 ,
    bool : true,
    undef : undefined,
    nested : {
        arr : [4,undefined,'2'],
        obj :{
            str : "hi",
            num : 10,
            bool : true

        }

    }

}
Object.freeze(obj)
Object.freeze(obj.nested)
Object.freeze(obj.nested.obj)
