function throttle(fn, wait) {
  let allowed = true

  return function (...args) {
    if (!allowed) return

    fn(...args)
    allowed = false

    setTimeout(() => {
      allowed = true
    }, wait)
  }
}


function opThrottle(func, wait =0,options ={trailing:false,leading:false }) {
  let march = false
  return function (...args) {
    if (!march) {
      if(options.leading) {
        func.apply(this,args)
      }
      march =true
      setTimeout(() => {
        if (!options.leading&&options.trailing) {
          func.apply(this,args)
        }
        march = false
      },wait)
    }
  }
}
