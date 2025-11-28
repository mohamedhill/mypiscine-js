function ceil(n) {
    if (n >= 68719476735) {
        return n
    }
    let i = divInt(n, 1);
    return n > 0 && n - divInt(n, 1) !== 0 ? i + 1 : i;
}

function floor(n) {
    if (n >= 68719476735) {
        return n
    }
    let i = divInt(n, 1);
    return n < 0 && n - divInt(n, 1) !== 0 ? i - 1 : i;
}

function trunc(n) {
 

    let i = divInt(n, 1);
    return i;
}

function round(n) {
    if (n >= 68719476735) {
        return n
    }
    let f = floor(n);
    let c = ceil(n);
    return (n - f < 0.5) ? f : c;
}

function divInt(a, b) {


    let sign = 1;
    if (a < 0) { a = -a; sign = -1; }


    let tempB = b;
    while (tempB <= a) {
        tempB = tempB *10;
    }

    let result = 0;

    while (tempB >= b) {
        let count = 0;
        while (a >= tempB) {
            a = a - tempB;
            count = count + 1;
        }
        result = result * 10 + count;
        tempB = tempB / 10; 
    }

    return result * sign;
}