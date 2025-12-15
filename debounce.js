function debounce (func, wait) {
    let timeid ;
    return (...args)=> {
        clearTimeout(timeid)
        timeid =  setTimeout(()=> {
            func(...args)
        },wait)
    }
}   


function opDebounce(fn, delay, leading = false) {
  let timer = null
  let called = false

  return function (...args) {
    if (leading && !called) {
      fn(...args)
      called = true
    }

    clearTimeout(timer)

    timer = setTimeout(() => {
      called = false
    }, delay)
  }
}
