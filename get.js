function get(src, path){
path = path.split('.')
current = src
for(let i = 0 ; i < path.length;i++){
    if (current[path[i]]===undefined){
        return undefined 
    }else{
        current = current[path[i]]
    }
}
return current
}
