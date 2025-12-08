export function compose(){

    document.addEventListener('keydown',(event)=>{
        if (event.key==='Backspace'){
            console.log('test');
            
            let last = document.body.lastElementChild
            document.body.removeChild(last)
            return

        }else if (event.key === 'Escape'){
            while(document.body.firstChild){
                document.body.removeChild(document.body.firstChild)
            }
            return
        }
        const color = ['red','blue','green','yellow','pink','ivory','violet']
        const div = document.createElement('div')
        let random = Math.random()

        
        
        div.style.backgroundColor = color[Math.floor(random*7)]
        div.className = 'note'
         div.textContent = event.key
        document.body.appendChild(div);
    
    })
}