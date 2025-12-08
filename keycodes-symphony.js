export function compose() {

    document.addEventListener('keydown', (event) => {
        let arr = 'abcdefghijklmnopqrstuvwxyz'
        
        
        if (event.key === 'Backspace') {
         
            
            
            let last = document.body.lastElementChild
            document.body.removeChild(last)
            return
            
        } else if (event.key === 'Escape') {
            while (document.body.firstChild) {
                document.body.removeChild(document.body.firstChild)
            }
            return
        }
        if (!arr.includes(event.key)) return

        let asciiCode = event.key.charCodeAt(0)
        
        let hexValue = ''
        if (asciiCode > 0 || asciiCode < 255) {
            
            asciiCode = Math.max(0, Math.min(255, asciiCode));
            hexValue = asciiCode.toString(16).padStart(2, '0');
           console.log(`#${hexValue}${hexValue}${hexValue}`);
           
            
        }
        const div = document.createElement('div')
    



        div.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`
        div.className = 'note'
        div.textContent = event.key
        document.body.appendChild(div);

    })
}