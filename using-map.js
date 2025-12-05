
function citiesOnly(arr){
  return  arr.map((x)=>x['city'])


}
function upperCasingStates(arr){
        return arr.map((x)=>x.split(" ").map((x)=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(" "))
}

function fahrenheitToCelsius(arr) {
  return arr.map(x => {
    
    const clean = x.replace(/\s+/g, "");

   
    const f = parseFloat(clean);

   
    const c = Math.floor((f - 32) * 5 / 9);

    return c + '°C'; 
  });
}


function trimTemp(arr) {
  return arr.map(item => ({
    ...item,
    temperature: item.temperature.split(' ').join('')
     
  }));
}

function tempForecasts(arr) {
  return arr.map(item => {
    const cleanTemp = item.temperature.replace(/\s+/g, "");
    const tempF = parseFloat(cleanTemp);
    const tempC = Math.floor((tempF - 32) * 5 / 9);
    return `${tempC}°Celsius in ${item.city}, ${upperCasingStates([item.state])}`;
  });
}


