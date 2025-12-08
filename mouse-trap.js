export function setBox(){
let div = document.createElement('div')
div.classList.add('box')
document.body.appendChild(div)

}
export function createCircle(){
document.addEventListener('click',(event)=>{
 let oldcircle = document.body.querySelector('.circle')
 if (oldcircle!==null)return
     
    
    let circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.backgroundColor ='white'
    document.body.appendChild(circle)
    
})

}
 export function moveCircle(){
     
        window.addEventListener('mousemove',(event)=>{
         let circle = document.body.querySelector('.circle')
    
            let x = event.clientX
            let y = event.clientY
            circle.style.left = x+'px'
            circle.style.top = y +'px'
        
            
    
        })
    
    
    let box = document.body.querySelector('.box')
    box.addEventListener('mouseover',(event)=>{
         let circle = document.body.querySelector('.circle')
        circle.remove()
        let circle1 = document.createElement('div')
        
        circle1.classList.add('circle')
        circle1.style.backgroundColor = '#bb73e6'
        console.log(circle1);
        circle1.style.position = 'relative'
        box.appendChild(circle1)
        box.style.position = 'absolute'
        
    })
 }
