import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n`;
        


    });
 
    head.appendChild(style);
}

export function generateColdShades() {
    const body = document.body
    const cold = ['aqua','blue','turquoise','green','cyan','navy','purple']
    colors.forEach((color) => {
 if (cold.some(c => color.includes(c))) {

     const div = document.createElement("div");
     div.classList.add(color);
     div.innerHTML = color;
     body.appendChild(div);
 }
        
    });
}

export function  choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade;
    });
}


