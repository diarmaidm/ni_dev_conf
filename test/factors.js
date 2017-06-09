module.exports = factorsOf = (n) => {
    let factors = [];
    let divisor = 2;
    if (n > 1) {
        while (n % 2 === 0) {
            factors.push(2);
            n /= 2;
        }
        while (n % 3 === 0) {
            factors.push(3);
            n /= 3;
        }
        if (n % 5 === 0) {
            factors.push(5);
            n /= 5;
        }
        if (n % 7 === 0) {
            factors.push(7);
            n /= 7;
        }
    }

    if (n > 1) {
        factors.push(n);
    }

    return factors;
};