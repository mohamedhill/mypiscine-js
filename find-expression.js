function findExpression(num) {
    const qu = [[1, '1']];

    let i = 0;
    while (qu.length > 0) {
        let [current, seq] = qu.shift();
        if (current + 4 === num) {
            return seq + ' '+add4;
        }
        if (current + 4 < num) {
            qu.push([current + 4, seq + ' '+add4]);
        }
        if (current * 2 === num) {
            return seq + ' '+mul2;
        }
        if (current * 2 < num) {
            qu.push([current * 2, seq +' '+mul2]);
        }

        i++;
    }

    return undefined;
}
