const is = {}
is.num = (arg) => (typeof arg === 'number')?true:false;
is.str = (arg) => (typeof arg === 'string')?true:false;
is.nan = (arg) => (typeof arg === 'NaN')?true:false;
is.bool = (arg) => (typeof arg === 'boolean')?true:false;
is.undef = (arg) => (typeof arg === 'undefined')?true:false;
is.def = (arg) => (typeof arg !== 'undefined')?true:false;
is.fun = (arg) => (typeof arg === 'function')?true:false;
is.obj = (arg) => (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)?true:false;
is.falsy = (arg) => (Boolean(arg) === false)?true:false;
is.truthy = (arg) => (Boolean(arg) === true)?true:false;
is.arr = (arg) => Array.isArray(value);

let per={
    test : 400
}
console.log(is.obj(per))