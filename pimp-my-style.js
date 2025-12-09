/* import { styles } from './pimp-my-style.data.js'

let index = 0
let reverse = false

export function pimp() {

  const btn = document.querySelector('.button')

  if (!reverse) {
    
    btn.classList.add(styles[index])
    index++

    if (index === styles.length) {
    btn.classList.toggle("unpimp");
      reverse = true
    }
  } else {
      
      index--
      btn.classList.remove(styles[index])
      
      if (index === 0) {
        btn.classList.toggle("unpimp");
      reverse = false
    }
  }
}
 */

let test =  {brand: 'ford', motor: 'v8', year: 2000, fast: true, eco: true }
let tl = {}
for (let t in test){
 tl[test[t]]=t
  
}
console.log(tl);
