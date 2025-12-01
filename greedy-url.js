function getURL(dataSet){

    let reg =/https?:\/\/\S+/g
    return dataSet.match(reg)


}


function greedyQuery(dataSet) {
    let valid = getURL(dataSet); 
    let result = [];

    for (let url of valid) {
  
        let queryPart = url.split('?')[1];
        
        if (!queryPart) continue; 

        let params = queryPart.split('&'); 
        
        if (params.length >= 3) {
            result.push(url);
        }
    }

    return result;
}

 function notSoGreedy(dataSet){
    let valid = getURL(dataSet)
    let result = []

    for (let url of valid) {
  
        let queryPart = url.split('?')[1];
        
        if (queryPart===undefined) continue; 

        let params = queryPart.split('&'); 
        
        if (params.length >= 2 && params.length<=3) {
            result.push(url);
        }
    }


return result

 }