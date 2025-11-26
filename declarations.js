let escapeStr = '`\/"\''

let arr = [4,'2']

let obj ={
    str : "hi",
    num : 10 ,
    bool : true,
    nested : {
        arr : [4,undefined,'2'],
        obj :{
            str : "",
            num : 10,
            bool : true

        }

    }

}
Object.freeze(obj)
Object.freeze(obj.nested)
Object.freeze(obj.nested.obj)
obj.str = "alo"
obj.nested.arr = "alo"
console.log(obj,obj.nested)