function round(x) {
    let neg = x < 0
    if (neg) x = -x
    let res = 0
    while (x >= 1) {
        x -= 1;
        res++
    }
    if (x >= 0.5) res++;
    return neg ? -res : res
}





console.log(round(1.5))




function floor(int) {
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter - 1;
    } else {
        return counter;
    }
}

function ceil(int) {
    if (!int) return 0;
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    let counter = 0;
    while (!(intCopy < 1 && intCopy >= 0)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    } else {
        return counter + 1;
    }
}

function trunc(int) {
    let counter = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }
    let intCopy = int;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}