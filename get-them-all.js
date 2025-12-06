export function getArchitects(){
const archituct = Array.from(document.querySelectorAll("a"))
const nonarchituct = Array.from(document.querySelectorAll(":not(a)"))

return [archituct,nonarchituct]

}
export function getClassical(){

const classical = Array.from(document.getElementsByClassName("classical"))
const notclassical = Array.from(document.querySelectorAll(":not(.classical)"));
return [classical,notclassical]
}

export function getActive(){
const activeclassical = Array.from(document.getElementsByClassName("classical active"))
const nonactiveclassicals = Array.from(document.querySelectorAll(":not(classical active)"))
return [activeclassical,nonactiveclassicals]

}
export function getBonannoPisano(){
    const res = []
        const BonannoPisano = document.getElementById('BonannoPisano');

    const activeclasicarct = getArchitects()[0]
    const clasic = getActive()[0]
    for (let i = 0 ; i<activeclasicarct.length;i++){
        if (clasic.includes(activeclasicarct[i])){
            res.push(activeclasicarct[i])
        }
    }
return [BonannoPisano,res]

}