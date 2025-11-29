function findExpression(num) {
   for (let i = 0; i < 100000; i++) {
        let cpy = 1;
        let seq = "1";
        let toggle = true; 
        while (cpy <= num) {
            if (cpy === num) {
                return seq;
            }
            if (toggle) {
                cpy += 4;
                seq += " " + add4;
            } else {
                cpy *= 2;
                seq += " " + mul2;
            }
            toggle = !toggle; 
        }
    }
    return undefined;
}
