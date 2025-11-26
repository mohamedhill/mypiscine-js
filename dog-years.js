function dogYears(plan, time) {
    const planets = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };
    let def = 31557600
    let earth =  (time / def) * 7;

    return +(+(earth / planets[plan]).toFixed(2));
}

console.log(typeof dogYears('earth',1000000000))
