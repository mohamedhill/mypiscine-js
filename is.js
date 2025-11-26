is.num = (arg) => typeof arg === 'number'
is.str = (arg) => typeof arg === 'string'
is.nan = (arg) => Number.isNaN(arg)
is.bool = (arg) => typeof arg === 'boolean'
is.undef = (arg) => typeof arg === 'undefined'
is.def = (arg) => typeof arg !== 'undefined'
is.fun = (arg) => typeof arg === 'function'
is.obj = (arg) => (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)?true:false;
is.falsy = (arg) => !Boolean(arg) 
is.truthy = (arg) => Boolean(arg)
is.arr = (arg) => Array.isArray(arg);
